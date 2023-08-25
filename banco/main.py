from User import *
from Table import *
from Tarefa import *

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

data = 0
conjunto = False
secID = 0

@app.route('/', methods=['GET'])
def listar_dados():
    return jsonify({'message': f'{data}'})

#desconect------
@app.route('/sair', methods=['GET'])
def sair():
    global secID
    secID = 0
    print(secID)
    return jsonify({'message': f'{secID}'})

#encontra id----------------
@app.route('/home', methods=['GET'])
def home():
    return jsonify({'message': secID})

#listar tarefas----------------
@app.route('/percorrer', methods=['GET'])
def per():
    conexao = Conect()
    lis = conexao.percorrer_query(secID)
    return jsonify({'message': lis})

#login------------------------------
@app.route('/log', methods=['POST'])
def log():
    global secID

    email = request.json.get('email')
    password = request.json.get('password')
    user = User(email, password)
    ret = user.checar()
    secID = ret

    response = jsonify({'message': f'{ret}'})
    return response
#registro----------
@app.route('/api', methods=['POST'])
@cross_origin()
def insert_data():
    global conjunto
    global data
    global secID
    data = request.json.get('nome')
    email = request.json.get('email')
    password = request.json.get('password')

    user = User(email, password, data)
    teste = user.add_user()

    secID = user.checar()
    table = Table(secID)
    table.criarTabelaUser()

    if teste:
        conjunto = True

    response = jsonify({'message': f'{teste}'})
    return response
# anotar no banco ---------------------------------
@app.route('/tarefa', methods=['POST'])
@cross_origin()
def edit_banco():
    nome = request.json.get('title')
    inicio = request.json.get('startTime')
    fim = request.json.get('endTime')
    descript = request.json.get('description')

    tarefa = Tarefa(secID, nome, inicio, fim, descript)
    teste = tarefa.addTarefa()

    response = jsonify({'message': f'{teste}'})
    return response

# excluir do banco ---------------------------------
@app.route('/excluir', methods=['POST'])
@cross_origin()
def excluir_banco():
    nome = request.json.get('title')
    inicio = request.json.get('startTime')
    fim = request.json.get('endTime')
    descript = request.json.get('description')

    tarefa = Tarefa(secID, nome, inicio, fim, descript)
    teste = tarefa.excluirTarefa()

    response = jsonify({'message': f'{teste}'})
    return response

# editar do banco ---------------------------------
@app.route('/editar', methods=['POST'])
@cross_origin()
def editar_banco():
    nome = request.json.get('title')
    inicio = request.json.get('startTime')
    fim = request.json.get('endTime')
    descript = request.json.get('description')
    ed = request.json.get('ed')

    tarefa = Tarefa(secID, nome, inicio, fim, descript)
    teste = tarefa.editarTarefa(ed)

    response = jsonify({'message': f'{teste}'})
    return response

if __name__ == '__main__':
    app.run()