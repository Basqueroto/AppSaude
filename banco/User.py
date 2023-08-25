from Conect import *


class User:
    def __init__(self, email, senha, nome=''):
        self.nome = nome
        self.email = email
        self.senha = senha

    def add_user(self):
        query = f"INSERT INTO user (nome, email, senha) VALUES ('{self.nome}', '{self.email}', '{self.senha}')"
        conexao = Conect()
        teste = conexao.add_query(query)
        if teste:
            return True
        else:
            return False

    def checar(self):
        query = f'SELECT id FROM `user` WHERE email = "{self.email}" && senha = "{self.senha}";'
        conexao = Conect()
        exis = conexao.mostrar_query(query)
        print(exis[0])
        return exis[0]
