from flask import Flask

app = Flask("__name__")


# Hello world
@app.route("/hello")
def helloWorld():
    return "Hello World"

if __name__ == "__main__":
    app.run(debug=True) 