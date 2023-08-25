from Conect import *

class Table:
    def __init__(self, idt):
        self.idt = idt

    def criarTabelaUser(self):
        query = f'CREATE TABLE `appsaude`.`{self.idt}` (`id` INT NOT NULL AUTO_INCREMENT , `nome` VARCHAR(100) NOT NULL , `inicio` DATE NOT NULL , `fim` DATE NOT NULL , `descricao` VARCHAR(500) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;'
        conexao = Conect()
        conexao.add_query(query)

