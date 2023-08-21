import mysql.connector

class Conexao:    
    def add_query (self, query):
        try:
            conect = mysql.connector.connect(user="root", password="", host="127.0.0.1", database='appsaude')
            cursor = conect.cursor()
            inserir = query
            cursor.execute(inserir)
            conect.commit()
            cursor.close()
            conect.close()
            return True
        except mysql.connector.Error as erro:
            print(erro)
            return False