# NexusAI — Intelligent RAG Chatbot

NexusAI is an AI-powered chatbot built using FastAPI, React, Groq API, LangChain, and ChromaDB.  
It uses Retrieval-Augmented Generation (RAG) to answer questions from a custom knowledge base instead of only giving generic AI responses.

---

# Features

- AI-powered chatbot interface
- Retrieval-Augmented Generation (RAG)
- Custom website knowledge base
- Semantic search using embeddings
- FastAPI backend
- React + Vite frontend
- Groq LLM integration
- ChromaDB vector database
- Sentence Transformer embeddings
- Modern dark UI
- Internship/course Q&A support
- Beginner-friendly architecture

---

# Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

## Backend
- FastAPI
- Python
- LangChain
- ChromaDB
- Groq API
- Sentence Transformers

## AI / RAG
- all-MiniLM-L6-v2 embeddings
- Semantic similarity search
- Vector database retrieval
- Context-aware AI responses

---

# Project Structure

```bash
ai-chatbot/
│
├── backend/
│   ├── config/
│   ├── data/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── vectorstore/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── screenshots/
```

---

# How RAG Works

1. Website content is stored inside:

```bash
backend/data/website_content.txt
```

2. Text is split into chunks using LangChain.

3. Sentence Transformers convert text into embeddings.

4. Embeddings are stored inside ChromaDB vector database.

5. When the user asks a question:
   - similarity search retrieves relevant chunks
   - retrieved context is sent to Groq LLM
   - AI generates contextual answers

---

# Installation

# Backend Setup

## 1. Move to backend

```bash
cd backend
```

## 2. Create virtual environment

```bash
python -m venv venv
```

## 3. Activate virtual environment

### Windows

```bash
venv\Scripts\activate
```

## 4. Install dependencies

```bash
pip install -r requirements.txt
```

## 5. Add Groq API key

Create `.env`

```env
GROQ_API_KEY=your_api_key_here
```

## 6. Start backend server

```bash
python -m uvicorn main:app --reload --port 8000
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# Frontend Setup

## 1. Move to frontend

```bash
cd frontend
```

## 2. Install dependencies

```bash
npm install
```

## 3. Start frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Demo Questions

Try these questions inside the chatbot:

```text
What courses does Ainwik offer?
```

```text
Does Ainwik provide internships?
```

```text
Where is Ainwik located?
```

```text
Tell me about AI and machine learning training
```

```text
What technologies are taught?
```

---

# Example Capabilities

- Course recommendation Q&A
- Internship information retrieval
- AI training explanations
- Semantic search-based answers
- Context-aware chatbot conversations

---

# Screenshots

Add project screenshots inside:

```bash
screenshots/
```

Examples:
- chatbot UI
- backend running
- semantic search answers
- RAG responses

---

# Future Improvements

- PDF upload support
- Multi-document RAG
- Chat memory
- Streaming responses
- Authentication system
- Deployment on Vercel/Render
- Admin dashboard
- Source citations
- Voice assistant support

---

# Learning Outcomes

This project helped practice:

- Full-stack AI application development
- FastAPI backend development
- React frontend integration
- RAG architecture
- Vector databases
- Embedding models
- API integration
- Semantic search systems
- AI engineering workflow

---

# Author

Built by Prince   
AI Engineering / Machine Learning Enthusiast

---

# License

This project is for educational and portfolio purposes.