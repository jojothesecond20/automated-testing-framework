from flask import Flask, jsonify, request
from flask_cors import CORS  # ✅ import this

app = Flask(__name__)
CORS(app)  # ✅ enable CORS for all routes

@app.route('/api/add', methods=['GET'])
def add():
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    return jsonify({'result': a + b})

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    app.run(debug=True)
