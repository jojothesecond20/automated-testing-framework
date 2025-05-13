from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/add')
def add():
    a = int(request.args.get('a', 0))
    b = int(request.args.get('b', 0))
    return jsonify({'result': a + b})

if __name__ == "__main__":
    print("🚀 Flask server starting...")
    app.run(debug=True, host="0.0.0.0", port=5000)

