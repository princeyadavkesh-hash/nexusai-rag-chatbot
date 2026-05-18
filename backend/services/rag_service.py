from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings


embedding_model = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2"
)


def create_vectorstore():

    with open("data/website_content.txt", "r", encoding="utf-8") as file:
        text = file.read()

    print(f"\nTotal text length: {len(text)}")

    if not text.strip():
        print("website_content.txt is empty")
        return None

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50
    )

    chunks = splitter.split_text(text)

    print(f"Created {len(chunks)} chunks")

    vectorstore = Chroma.from_texts(
        texts=chunks,
        embedding=embedding_model,
        persist_directory="./vectorstore"
    )

    print(f"Stored {len(chunks)} chunks successfully.")

    return vectorstore