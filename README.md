# 🚀 React Sample Projects - Learn React by Example

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](https://www.docker.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> A curated collection of production-ready React sample projects demonstrating modern web development patterns, state management, full-stack architecture, and containerization. Perfect for beginners and intermediate developers looking to master React through hands-on examples.

---

## 📋 Table of Contents

- [Features](#-features)
- [Projects Overview](#-projects-overview)
- [Quick Start](#-quick-start)
- [Technologies Covered](#-technologies--concepts-covered)
- [Prerequisites](#-prerequisites)
- [Learning Path](#-learning-path)
- [Contributing](#-contributing)
- [License](#-license)
- [Resources](#-learning-resources)

---

## ✨ Features

- **3 Complete Projects** - From React basics to full-stack applications
- **Modern Stack** - React 18, Vite, Docker, Recoil state management
- **Production-Ready Code** - Clean architecture, best practices, and modern patterns
- **Self-Contained** - Each project runs independently with its own dependencies
- **Beginner to Advanced** - Progressive learning path for developers at all levels
- **Full-Stack Example** - React frontend + Python backend with Docker orchestration

---

## 📁 Projects Overview

### 1. 🎯 first-app - React Basics Starter

A foundational React application built with Create React App. Perfect for beginners learning core React concepts including components, props, state, hooks, and styling.

**What You'll Learn:**
- React component architecture and JSX
- State management with `useState` and `useEffect`
- Event handling and conditional rendering
- CSS styling in React applications
- Project structure and best practices

**Stack:**
- React (Create React App)
- CSS3

**Getting Started:**
```bash
cd first-app
npm install
npm start
```

The app will open at `http://localhost:3000`

---

### 2. 🤖 react-chatbot - Full-Stack AI Chat Application

A production-grade full-stack chatbot application featuring a React + Vite frontend, Python backend API, and Docker containerization. Demonstrates real-world full-stack development patterns.

**What You'll Learn:**
- Full-stack React application architecture
- RESTful API integration with Python backends
- Docker containerization and orchestration
- Vite build tool and development server
- Cross-service communication patterns
- Environment configuration and deployment

**Architecture:**
- **Frontend:** React 18 + Vite + CSS
- **Backend:** Python (Flask/FastAPI)
- **DevOps:** Docker, Docker Compose, Nginx

**Getting Started:**

Using Docker Compose (Recommended):
```bash
cd react-chatbot
docker-compose up
```

Manual Setup:
```bash
# Backend
cd backend
pip install -r requirements.txt
python main.py

# Frontend (in another terminal)
cd frontend
npm install
npm run dev
```

**Project Structure:**
- `backend/` - Python REST API service
- `frontend/` - React + Vite chat interface
- `docker-compose.yml` - Multi-container orchestration

---

### 3. 📝 recoil-example - Advanced State Management with Recoil

A feature-rich Todo application showcasing Recoil state management library. Learn atomic state management patterns used in production React applications.

**What You'll Learn:**
- Recoil atoms and selectors
- Global state management patterns
- Derived state and computed values
- Component re-rendering optimization
- Advanced React state architecture

**Features:**
- Dynamic todo list creation and management
- Real-time state synchronization with Recoil atoms
- Component-based architecture with clean separation
- Optimistic UI updates

**Stack:**
- React (Create React App)
- Recoil (state management)
- CSS3

**Getting Started:**
```bash
cd recoil-example
npm install
npm start
```

The app will open at `http://localhost:3000`

**Project Structure:**
- `src/component/` - React components (TodoMain, TodoItem, TodoItemCreator)
- `src/recoil/react/` - Recoil atom and selector definitions

---

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-sample-projects.git
   cd react-sample-projects
   ```

2. **Navigate to your desired project**
   ```bash
   cd [project-name]
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   # For Create React App projects
   npm start

   # For Vite projects
   npm run dev

   # For Docker projects
   docker-compose up
   ```

---

## 📚 Technologies & Concepts Covered

| Project | Technologies | Key Concepts | Difficulty |
|---------|-------------|--------------|------------|
| **first-app** | React, CRA, CSS | Components, JSX, State, Hooks, Styling | Beginner |
| **react-chatbot** | React, Vite, Python, Docker, Nginx | Full-stack, API Integration, Containerization, DevOps | Intermediate |
| **recoil-example** | React, Recoil, CSS | Atomic State Management, Selectors, Global State | Intermediate |

---

## 📦 Prerequisites

Before running these projects, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org)
- **npm** (v7 or higher) or **yarn**
- **Python 3.7+** (for react-chatbot backend)
- **Docker & Docker Compose** (for containerized deployment)
- **Git** - [Download](https://git-scm.com)

---

## 🎓 Learning Path

We recommend working through these projects in order:

1. **Start with `first-app`** - Master React fundamentals
2. **Move to `recoil-example`** - Learn advanced state management
3. **Tackle `react-chatbot`** - Build full-stack applications with Docker

Each project builds upon concepts from the previous ones, creating a comprehensive learning journey.

---

## 🤝 Contributing

Contributions are welcome! This repository is designed to help developers learn React. Feel free to:

- 🐛 Report bugs or suggest improvements
- 💡 Add new sample projects
- 📝 Improve documentation
- 🔧 Fix issues and submit PRs

### How to Contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📖 Learning Resources

- [React Official Documentation](https://react.dev)
- [Recoil State Management](https://recoiljs.org)
- [Vite Build Tool](https://vitejs.dev)
- [Docker Documentation](https://docs.docker.com)
- [Python Flask/FastAPI](https://flask.palletsprojects.com)

---

## 🏷️ Topics

`react` `reactjs` `javascript` `frontend` `web-development` `state-management` `recoil` `docker` `vite` `python` `fullstack` `chatbot` `todo-app` `react-hooks` `learning-by-example` `sample-projects` `react-tutorial` `beginner-friendly`

---

**⭐ If you found this helpful, please star the repository!**

**Happy coding!** 🎉
