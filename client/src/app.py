from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from chat import get_response

app = Flask(__name__, template_folder='public')
CORS(app)

@app.route("/", methods=["GET"])
def index_get():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    text = request.get_json(force=True).get("message")
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True)
