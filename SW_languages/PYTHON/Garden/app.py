import sqlite3
from flask import Flask, session, redirect, g, request, render_template
import os
import sys
import Fruits as fruitlib

# app = Flask(__name__)
app = Flask(__name__, template_folder='templates')
app.secret_key = "Shiv0ham1$"

@app.route('/', methods=['GET','POST'])
def index():
    session["all_fruits"], session["fruits_items"] = get_all_fruits_from_db()
    # return render_template('index.html', all_fruits=session["all_fruits"], fruits_items=session["fruits_items"])
    return render_template('index.html', all_fruits=session["all_fruits"])

@app.route('/add_fruits', methods=['POST'])
def add_fruits():
   
    checked_boxes = request.form.getlist('select_fruits')
    print(f'checked_boxes: {checked_boxes}')
    for item in checked_boxes:
        if item not in session["fruits_items"]:
            session["fruits_items"].append(item)
            session.modified = True
    db = g._database = sqlite3.connect("fruits.db")
    cursor =db.cursor()
    all_select_fruits_data = []
    for item in session["fruits_items"]:
        fruit_data = cursor.execute("select * from fruits where Name = ?", (item,))
        # fruit_data=([data for data in fruit_data])
        column_names = [description[0] for description in cursor.description]   
        all_data = [dict(zip(column_names, data)) for data in fruit_data]
        print(f"srnl: {all_data[0]}, {type(all_data)}")
        url_list={}
        i=0
        for url in fruitlib.get_urls((all_data[0])['Name']):
            i=i+1
            all_data[0]['image'+str(i)]=url[1]
        all_select_fruits_data.append(all_data)
        
        print(f"srnl: {all_select_fruits_data}")
    session["fruit_data"]= all_select_fruits_data
    return render_template('select_fruits.html', fruit_data=all_select_fruits_data)



def get_all_fruits_from_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect("fruits.db")
        cursor =db.cursor()
        cursor.execute("select Name from fruits")
        fruits = cursor.fetchall()
        fruits = [str(fruit[0]) for fruit in fruits]

    return fruits,[]

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
          
    if db is not None:
        db.close()  
if __name__ == '__main__':
    app.run()
    