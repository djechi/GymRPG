from flask import Flask
from google.genai import Client
import os

app = Flask("__name__")
client = Client(api_key=os.getenv("GEMINI_API_KEY"))

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Explain how AI works in a few words",
)

# Hello world test
@app.route("/hello")
def helloWorld():
    return "Hello World"

@app.route("/test")
def apiTest():
    return response.text

if __name__ == "__main__":
    app.run(debug=True) 