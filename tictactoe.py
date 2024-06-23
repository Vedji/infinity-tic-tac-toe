import eventlet
eventlet.monkey_patch()


from flask import Flask, render_template, request
from flask_socketio import SocketIO, send, emit, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)


class Lobby:
    ROOM_ID = 0

    def __init__(self, room_name):
        self.room_id = Lobby.ROOM_ID
        Lobby.ROOM_ID += 1
        self.room_name = room_name
        self.field = '_________'
        print(f"Lobby: {self.room_id}, room name: {self.room_name} Created.")


lobbies = {}


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/create_lobby', methods=['POST'])
def create_lobby():
    lobby_name = request.json["lobby_name"]
    username = request.json["username"]
    if not lobby_name:
        return {'status': 'Lobby name invalid'}, 400
    if not all(map(lambda x: x.room_name != lobby_name, lobbies.values())):
        return {'status': 'Lobby already exists'}, 400
    room_id = Lobby.ROOM_ID
    lobbies[room_id] = Lobby(lobby_name)
    return {
        'status': 'Lobby created successfully',
        "data": {
            "room_id": room_id
        }
    }, 201


if __name__ == '__main__':
    socketio.run(app, debug=True, allow_unsafe_werkzeug=True)