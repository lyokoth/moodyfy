from flask import Flask, jsonify, request


app = Flask(__name__)


@app.route('/api/user-info', methods=['GET'])
def get_user_info():
    user_info = {
        'userId': "21avdtxygavnpmwvjdymer53a",
        'name': "Kenyamegami",

    }
    return jsonify(user_info)
  


if __name__ == '__main__':
    app.run(debug=True, port='5000')