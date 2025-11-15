from flask import Flask, request, jsonify
from google.genai import Client
import os

app = Flask("__name__")
client = Client(api_key=os.getenv("GEMINI_API_KEY"))

# Hello world test
@app.route("/hello")
def helloWorld():
    return "Hello World"

# Tested in Postman and with 200 response
@app.route("/test", methods=["POST"])
def chatBot():
    message = request.json.get("message")
    response = client.models.generate_content(
        model = "gemini-2.5-flash",
        contents = message
    )
    return jsonify({"Response": response.text})

if __name__ == "__main__":
    app.run(debug=True) 