from flask import request, jsonify, Blueprint
from google.genai import Client
import os
import classes

homeBP = Blueprint("home",__name__)
client = Client(api_key=os.getenv("GEMINI_API_KEY"))

@homeBP.route("/home", methods=["POST"])
def homePage():
    name = request.json.get("name")
    message = request.json.get("message")
    response = client.models.generate_content(
        model = "gemini-2.5-flash",
        contents = message
    )
    return jsonify({
        "Character Name": name,
        "Classes": {
            "Ranger": classes.rangerClass(),
            "Thief": classes.theifClass(),
            "Warrior": classes.warriorClass(),
            "Tank": classes.tankClass()
        },
        "Chat Bot": response.text
    })