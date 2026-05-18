from groq import Groq
from services.rag_service import create_vectorstore
import os
from dotenv import load_dotenv

load_dotenv()

vectorstore = create_vectorstore()

class GroqService:
    def __init__(self):
        self.client = Groq(
            api_key=os.getenv("GROQ_API_KEY")
        )

    def generate_response(self, message):

        docs = vectorstore.similarity_search(message, k=3)

        context = "\n\n".join([doc.page_content for doc in docs])

        prompt = f"""
You are NexusAI.

Answer ONLY using the provided context.

Context:
{context}

Question:
{message}
"""

        response = self.client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ],
            temperature=0.7,
            max_tokens=500
        )

        answer = response.choices[0].message.content

        suggestions = [
            "Tell me about courses",
            "Do you provide internships?",
            "What technologies are taught?",
            "Where is Ainwik located?"
        ]

        return {
            "response": answer,
            "suggestions": suggestions
        }
    