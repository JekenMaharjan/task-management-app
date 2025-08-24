# Task Management App

A modern, responsive task management application built with **React**, **Vite**, and **Firebase**, designed to help you organize your tasks intuitively and efficiently.

##  Live Demo
Access the live version here: [task-management-app-jekode.vercel.app](https://task-management-app-jekode.vercel.app)

##  Key Features
- Create, edit, and delete tasks in real time  
- Responsive design suitable for both desktop and mobile  
- Data persistence and synchronization via Firebase  
- Clean, fast development setup with React + Vite and ESLint

##  Technologies Used
- **Frontend:** React, Vite, JavaScript (ES6+), CSS  
- **Linting & Tooling:** ESLint  
- **Backend / Database:** Firebase (Firestore, Authentication, etc.)  
- **Deployment:** Vercel

##  Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/JekenMaharjan/task-management-app.git
   cd task-management-app

2. Install dependencies:
   ```bash
   npm install

3. Configure environment variables:
   - Copy .env.example (if available) or create your own .env in the root.
   - Add your Firebase project credentials and settings:
     ```bash
     FIREBASE_API_KEY=your_api_key_here
     FIREBASE_AUTH_DOMAIN=your_auth_domain_here
     FIREBASE_PROJECT_ID=your_project_id_here
     FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
     FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
     FIREBASE_APP_ID=your_app_id_here
     FIREBASE_MEASUREMENT_ID=your_measurement_id_here

4. Start the development server:
   ```bash
   npm run dev

5. Build for production:
   ```bash
   npm run build

## Project Structure

```bash
task-management-app/
├─ public/               # Static files
├─ src/
│  ├─ components/        # Reusable React components
│  ├─ pages/             # Page components or views
│  ├─ firebase/          # Firebase config and utilities
│  ├─ App.jsx            # Root component
│  └─ main.jsx           # App entry point
├─ .gitignore
├─ package.json
├─ vite.config.js
└─ README.md

## Contributing

Your contributions are always welcome—even the smallest bug fix or feature idea! Please open an issue or create a pull request, and I’ll be delighted to review and merge.
