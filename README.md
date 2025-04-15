## Prerequisites

- [Node.js](https://nodejs.org/) (v22+ recommended)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (v1.22+ recommended)
- [Python](https://www.python.org/downloads/) (v3.13+ recommended)
- [uv](https://github.com/astral-sh/uv)

## Running the Backend (Django)

```bash
cd backend

# Create virtual environment (only once)
uv venv
source .venv/bin/activate         # Windows: .venv\Scripts\activate

# Install dependencies
uv pip install -r requirements.lock

# Set environment variables
cp .env.example .env              # Then add your SECRET_KEY inside .env

# Run initial migrations
python manage.py migrate

# Start dev server
python manage.py runserver

# Backend will be live at
http://127.0.0.1:8000/
```

## Running the Frontend (React)

```bash
cd frontend

# Install packages (only once)
yarn install

# Start React dev server
yarn start

# Frontend will be live at
http://localhost:3000/
```