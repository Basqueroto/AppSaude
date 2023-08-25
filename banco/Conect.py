import json

import mysql.connector

class Conect:
    def add_query(self, query):
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

    def mostrar_query(self, query):
        try:
            conect = mysql.connector.connect(user="root", password="", host="127.0.0.1", database='appsaude')
            cursor = conect.cursor()
            inserir = query
            cursor.execute(inserir)
            if cursor:
                exist = True
                for i in cursor:
                    di = i
            else:
                exist = False
            cursor.close()
            conect.close()
            if exist:
                return di
            else:
                return False
        except mysql.connector.Error as erro:
            print(erro)
            return False

    def percorrer_query(self, idd):
        try:
            lis = []
            conect = mysql.connector.connect(user="root", password="", host="127.0.0.1", database='appsaude')
            cursor = conect.cursor()
            inserir = f"SELECT nome, inicio, fim, descricao FROM `{idd}`"
            cursor.execute(inserir)
            if cursor:
                exist = True
                for nome, inicio, fim, descript in cursor:
                    dic = {'title': nome, 'startTime': inicio, 'endTime': fim, 'description':descript}
                    dic = str(dic)
                    dic = dic.replace("'", '')
                    print(dic)
                    lis.append(dic)
            else:
                exist = False
            cursor.close()
            conect.close()
            if exist:
                return lis
            else:
                return False
        except mysql.connector.Error as erro:
            print(erro)
            return False
