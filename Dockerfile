# Build frontend
FROM node:18 AS builder
WORKDIR /app
COPY frontend /app
RUN npm install && npm run build

# Serve with FastAPI
FROM python:3.11-slim
WORKDIR /app
COPY backend /app
COPY --from=builder /app/dist /app/frontend
RUN pip install fastapi uvicorn
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
