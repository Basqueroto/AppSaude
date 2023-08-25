from Conect import *

class Tarefa:
    def __init__(self, idd, nome, inicio, fim, descript):
        self.idd = idd
        self.nome = nome
        self.inicio = inicio
        self.fim = fim
        self.descript = descript

    def addTarefa(self):
        query = f"INSERT INTO `{self.idd}` (`id`, `nome`, `inicio`, `fim`, `descricao`) VALUES (NULL, '{self.nome}', '{self.inicio}', '{self.fim}', '{self.descript}')"
        contexao = Conect()
        teste = contexao.add_query(query)
        return teste

    def excluirTarefa(self):
        query = f"DELETE FROM `{self.idd}` WHERE nome = '{self.nome}';"
        conexao = Conect()
        teste = conexao.add_query(query)
        return teste

    def editarTarefa(self, ed):
        query = f"UPDATE `{self.idd}` SET `nome` = '{self.nome}', `inicio` = '{self.inicio}', `fim` = '{self.fim}', `descricao` = '{self.descript}' WHERE `id` = {ed}"
        conexao = Conect()
        teste = conexao.add_query(query)
        return teste
