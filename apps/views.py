#-*- coding: utf-8 -*-
from flask import render_template, Flask
from apps import app #deploy할때 주석해 

#app = Flask(__name__) #deploy할때 주석 
@app.route('/')
@app.route('/blog')
def blog():
    return render_template("blog.html")


#if __name__ == "__main__": #deploy할때 주석
	app.run()