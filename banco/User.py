from Conexao import *

class User:
    def __init__(self, email, senha, nome = ''):
        self.nome = nome
        self.email = email
        self.senha = senha
        
    def add_user (self):
        query =  f"INSERT INTO user (nome, email, senha) VALUES ('{self.nome}', '{self.email}', '{self.senha}')"
        conexao = Conexao()
        print(conexao.add_query(query))
