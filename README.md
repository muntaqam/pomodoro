# Pomodoro App

The **Pomodoro App** is a time management tool based on the Pomodoro Technique, designed to help users improve focus and productivity by breaking work into intervals, typically 25 minutes in length, separated by short breaks. This app provides an intuitive user experience, allowing you to track tasks, manage work sessions, and monitor productivity.

## Features

- **Timer Functionality**: A customizable Pomodoro timer to manage work and break intervals.
- **Task Management**: Users can add, edit, and delete tasks to keep track of their workload.
- **User Authentication**: Register and log in to keep track of tasks and productivity.
- **Backend Integration**: The app uses a backend to store user data, tasks, and session logs.

## Technologies Used

- **Frontend**: React Native
  - React components for a clean, modular interface.
  - CSS for styling and a responsive look.
- **Backend**: Flask (Python)
  - Provides RESTful APIs for handling user data and tasks.
- **Database**: SQLite
  - Stores user data, including tasks and session details.

## Installation

To get the app up and running locally, follow these steps:

### Prerequisites

- **Node.js** (for React Native)
- **Python 3** (for Flask backend)
- **Expo CLI** (to run the app)

### Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Tamjeed-Lasker/Pomodoro.git
   cd Pomodoro
   ```

2. **Install dependencies**:

   - Navigate to the frontend folder (`pomodoro-app`) and install the dependencies:

     ```bash
     cd pomodoro-app
     npm install
     ```

   - Navigate to the backend folder (`pomodoro-backend`) and install the dependencies using Python's package manager:

     ```bash
     cd ../pomodoro-backend
     pip install -r requirements.txt
     ```

3. **Run the Backend**:

   Start the Flask server to provide backend functionality:

   ```bash
   python app.py
   ```

4. **Run the Frontend**:

   Start the React Native app:

   ```bash
   cd ../pomodoro-app
   npm start
   ```

   Use Expo to run the app on your mobile device or emulator.

## Usage

1. **Register/Login**: Users must register or log in to start managing tasks and tracking productivity.
2. **Add Tasks**: Add tasks to the task manager to organize your work.
3. **Start Timer**: Start a Pomodoro timer for a task. The app will automatically prompt for a short or long break after each session.
4. **Track Progress**: Use the task manager and timer history to track progress and productivity.

## Screenshots

*Include relevant screenshots to showcase the app's user interface.*

## Future Enhancements

- **Statistics Page**: Display productivity statistics over time.
- **Notification System**: Add notifications to alert users when a session or break ends.
- **Dark Mode**: Support for dark/light themes.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Tamjeed Lasker** - [Email](mailto:iamtamjeedlasker@gmail.com)

Feel free to reach out with questions or suggestions!

