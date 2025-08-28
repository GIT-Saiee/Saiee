import sqlite3
import random
from flask import Flask, session, redirect, g, request, render_template


app = Flask(__name__)
app.secret_key = "Shiv0ham1$"

@app.route('/', methods=['GET','POST'])
def index():
    session["all_fruits"], session["fruits_items"] = get_db()
    return render_template('index.html', all_fruits=session["all_fruits"], fruits_items=session["fruits_items"])

@app.route('/remove_fruits', methods=['POST'])
def remove_fruits():
   checked_boxes = request.form.getlist('rm_fruits')
   for item in checked_boxes:
       if item in session["fruits_items"]:
          idx = session["fruits_items"].index(item)
          session["fruits_items"].pop(idx)
          session.modified = True
   return render_template('index.html', all_fruits=session["all_fruits"], fruits_items=session["fruits_items"])

@app.route('/add_fruits', methods=['POST'])
def add_fruits():
    if request.form['select_fruits'] not in session["fruits_items"]:
        session["fruits_items"].append(request.form['select_fruits'])
        session.modified = True
    return render_template('index.html', all_fruits=session["all_fruits"], fruits_items=session["fruits_items"])






def get_db():
    db = getattr(g, '_database', None)
    
    if db is None:
        db = g._database = sqlite3.connect("fruits.db")
        cursor =db.cursor()
        cursor.execute("select Name from fruits")
        fruits = cursor.fetchall()
        fruits = [str(fruit[0]) for fruit in fruits]

        fruit_list = fruits.copy()
        random.shuffle(fruit_list)
        fruit_list = fruit_list[:4]
    return fruits, fruit_list

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()  
if __name__ == '__main__':
    app.run()
    