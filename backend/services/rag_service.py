from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import FakeEmbeddings
import os

embedding_model = FakeEmbeddings(size=384)


def create_vectorstore():
    if not os.path.exists("website_content.txt"):
        return None

    with open("website_content.txt", "r", encoding="utf-8") as file:
        text = file.read()

    if not text.strip():
        return None

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50
    )

    chunks = splitter.split_text(text)

    if not chunks:
        return None

    vectorstore = Chroma.from_texts(
        texts=chunks,
        embedding=embedding_model,
        persist_directory="vectorstore"
    )

    return vectorstore
