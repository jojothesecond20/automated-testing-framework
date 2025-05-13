from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/sum', methods=['POST'])
def calculate_sum():
    data = request.get_json()
    a = data.get('a', 0)
    b = data.get('b', 0)
    return jsonify({'result': a + b}), 200
