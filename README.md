````markdown
# 🚀 NexusAI — Intelligent AI RAG Chatbot

NexusAI is a full-stack AI-powered chatbot built using **FastAPI, React, Groq API, LangChain, and ChromaDB**.

It uses **Retrieval-Augmented Generation (RAG)** to answer questions from a custom knowledge base instead of generating only generic AI responses.

This project demonstrates modern AI engineering concepts including:
- LLM integration
- Semantic search
- Vector databases
- Embedding models
- Full-stack deployment
- Production-ready API integration

---

# 🌐 Live Demo

### Frontend
https://eloquent-pie-48ad64.netlify.app

### Backend API
https://nexusai-rag-chatbot.onrender.com

---

# ✨ Features

- 🤖 AI-powered chatbot
- 🧠 Retrieval-Augmented Generation (RAG)
- 🔎 Semantic similarity search
- ⚡ Groq LLM integration
- 📚 Custom knowledge base support
- 🗂️ ChromaDB vector database
- 🧬 Sentence Transformer embeddings
- 🌙 Modern dark UI
- 💬 Real-time conversational responses
- 🌐 Fully deployed frontend + backend
- 📱 Responsive UI design
- ⚙️ FastAPI REST API backend
- 🎯 Beginner-friendly architecture

---

# 🛠️ Tech Stack

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
- Uvicorn

## AI / RAG
- Sentence Transformers
- all-MiniLM-L6-v2 embeddings
- Semantic similarity search
- Vector retrieval pipeline
- Context-aware AI generation

## Deployment
- Netlify (Frontend)
- Render (Backend)

---

# 📂 Project Structure

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
├── screenshots/
├── README.md
├── .gitignore
└── render.yaml
````

---

# 🧠 How RAG Works

## 1. Custom Data Source

Website/company/course content is stored inside:

```bash
backend/data/website_content.txt
```

---

## 2. Text Chunking

LangChain splits the content into smaller chunks for efficient retrieval.

---

## 3. Embedding Generation

Sentence Transformers convert text into high-dimensional vector embeddings.

---

## 4. Vector Storage

Embeddings are stored inside ChromaDB vector database.

---

## 5. AI Retrieval Flow

When a user asks a question:

* semantic similarity search retrieves relevant chunks
* retrieved context is sent to the LLM
* Groq generates contextual AI responses

---

# ⚙️ Installation Guide

# Backend Setup

## 1. Move to backend

```bash
cd backend
```

## 2. Create virtual environment

```bash
python -m venv venv
```

## 3. Activate environment

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

---

## 4. Install dependencies

```bash
pip install -r requirements.txt
```

---

## 5. Create `.env`

```env
GROQ_API_KEY=your_api_key_here
```

---

## 6. Start backend server

```bash
uvicorn main:app --reload --port 8000
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

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Start frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 💬 Demo Questions

Try these inside the chatbot:

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
Explain machine learning simply
```

```text
Create a roadmap for Gen AI
```

---

# 📸 Screenshots

Add screenshots inside:

```bash
screenshots/
```

Suggested screenshots:

* chatbot homepage
* AI responses
* RAG semantic answers
* backend logs
* deployed application
* mobile responsive UI

---

# 🚀 Future Improvements

* PDF upload support
* Multi-document RAG
* Chat history memory
* Streaming responses
* Authentication system
* Markdown rendering
* Source citations
* Voice assistant support
* Admin dashboard
* AI agents integration
* Docker deployment
* Multi-model support

---

# 📚 Learning Outcomes

This project helped practice:

* Full-stack AI application development
* FastAPI backend engineering
* React frontend integration
* Retrieval-Augmented Generation (RAG)
* Vector databases
* Embedding models
* Semantic search systems
* API integration
* AI deployment workflow
* Production debugging
* Cloud deployment

---

# 👨‍💻 Author

## Prince Yadav

AI Engineering & Machine Learning Enthusiast

* Passionate about Generative AI
* Building AI-powered applications
* Exploring RAG systems, LLMs, and AI agents

---

# 📄 License

This project is for educational, learning, and portfolio purposes.

---

# ⭐ Support

If you liked this project:

* Star the repository
* Fork the project
* Share feedback
* Connect for collaboration

---

```
```
