from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

#configure database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


#--------------------------------------- models --------------------------------------- 
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
     
    def __repr__(self):
        return f'<User {self.username}>'

class PomodoroSession(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('user.id'), nullable=False )
    duration = db.Column(db.Integer, nullable = False) #seconds
    timestamp = db.Column(db.DateTime, nullable = False)



#------------------------------------------------------------------------------------------ 

#create database
with app.app_context():
    db.create_all()


#register endpoint
@app.route('/register', methods=['Post'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    #check if user exists
    if User.query.filter_by(username=username).first():
        return jsonify({"error": "Username already taken"}), 400
    if User.query.filter_by(email=email).first():
        return jsonify({"error": "Email already registered"}), 400


#hash password
    password_hash =generate_password_hash(password)


#create new user 
    new_user =User(username=username, email=email, password_hash=password_hash)

#add to database
    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User registered successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400

#login

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data.get('username')
    password = data.get('password')

    #find user
    user = User.query.filter_by(username=username).first()

    #check if user exist and pass is correctr
    if user and check_password_hash(user.password_hash,password):
        return jsonify({"message":"Login success"}), 200
    else:
        return jsonify({"error": "Invalid username or password"}), 401


#log session
@app.route('/log_session', methods=['POST'])
def log_session():
    data = request.get_json()
    
    user_id = data.get('user_id')
    duration = data.get('duration')

    if not user_id or not duration:
        return jsonify({'message': 'userid or duration not found'}),400
    

    #create new session log
    from datetime import datetime
    new_session=PomodoroSession(user_id= user_id, duration= duration, timestamp = datetime.now())
    return jsonify({'message': 'Pomodoro session logged successfully'})

#timer history
@app.route('/timer_history/<int:user_id>', methods=['GET'])
def get_timer_history(user_id):
    user = User.query.get(user_id)

    if not user:
         return jsonify({'message': 'User not found'}),400
    
    history = PomodoroSession.query.filter_by(user_id=user_id).all()
    session_list = [
        {
            'Duration' : session.duration,
            'timestamp': session.timestamp.strftime('%Y-%m-%d %H:%M:%S')

        }
        for session in history
    ]

    return jsonify(session_list)
    
if __name__ =='__main__':
    app.run(debug=True)

