# React Chatbot

A minimal full-stack chatbot demo with a Python FastAPI backend and React frontend, containerized with Docker.

## Stack

- **Backend**: Python 3.11, FastAPI
- **Frontend**: React 19, Vite 8
- **Containerization**: Docker & Docker Compose

## Project Structure

```
.
├── backend/
│   ├── Dockerfile
│   ├── main.py
│   ├── requirements.txt
│   └── ...
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles.css
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── docker-compose.yml
└── README.md
```

## Quick Start with Docker

Ensure Docker Desktop is installed and running.

1. Clone or navigate to the project directory.
2. Run the application:

   ```bash
   docker-compose up
   ```

3. Access the chatbot:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000

## Manual Setup (Alternative)

### Backend

1. Navigate to backend directory:

   ```bash
   cd backend
   ```

2. Create and activate virtual environment:

   ```bash
   python -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Run the server:

   ```bash
   uvicorn main:app --reload
   ```

   Backend will be available at http://localhost:8000

### Frontend

1. Open a new terminal and navigate to frontend:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Frontend will be available at http://localhost:5173

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/chat?message={message}` - Get chatbot response

## Development

- Backend uses FastAPI with automatic reload.
- Frontend uses Vite for fast development with HMR.
- Proxy configured in `vite.config.js` to forward API calls to backend.

## Building for Production

The Docker setup automatically builds production images. For manual production build:

```bash
cd frontend
npm run build
```

Serve the `dist` folder with any static server.
