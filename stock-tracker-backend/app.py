from flask import Flask, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows your React app to make requests to the Flask backend it

API_KEY = "87REC5WFTGT3WHIV"

@app.route("/stock/<symbol>")   
def get_stock_data(symbol):
    url = f"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbol}&apikey={API_KEY}"
    response = requests.get(url)
    data = response.json()

    # Log the data to check the response
    print(f"API Response for {symbol}: {data}")

    # Handle invalid or error responses
    if 'Error Message' in data:
        return jsonify({"error": "Invalid stock symbol or API limit exceeded"}), 400

    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
