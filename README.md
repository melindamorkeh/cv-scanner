# Scanly

A CV/resume scanning application.

## Prerequisites

- [Node.js](https://nodejs.org/) (v22.19.0 recommended)
- [Pnpm](https://classic.yarnpkg.com/en/docs/install) (v10.15.0 recommended)
- [Python](https://www.python.org/downloads/) (v3.13+ recommended)
- [uv](https://github.com/astral-sh/uv) (v0.8.14+ recommended)

## Local Development Setup

### Backend Setup (Django)

```bash
cd backend

# Create virtual environment (only once)
uv venv
source .venv/bin/activate         # Windows: .venv\Scripts\activate

# Install dependencies
uv pip install -r requirements.txt

# Set environment variables
cp .env.example .env              # Then add your SECRET_KEY inside .env

# Run initial migrations
python manage.py migrate

# Start dev server
python manage.py runserver

# Backend will be live at
http://127.0.0.1:8000/
```

## Frontend Setup (React)

```bash
cd frontend

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Frontend will be live at
http://localhost:5173/
```
