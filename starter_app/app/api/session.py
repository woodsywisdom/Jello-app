from flask_login import LoginManager, current_user, login_user, logout_user
from flask import (Blueprint, jsonify, url_for, request, redirect, render_template)
from app.models import User, db
from app.forms import LoginForm, SignUpForm


session = Blueprint('session', __name__)

@session.route("/", methods=["PUT"])
def login():
   data = request.json
   user = User.query.filter(User.username == data['username']).first()
   if user and user.check_password(data['password']):
       format_user = user.to_dict()
       login_user(user)
       return {"user" : format_user}


@session.route('/logout', methods=["POST"])
def logout():
    logout_user()
    return redirect(url_for('.login'))


@session.route('/', methods=["POST"])
def signup():
    data = request.json
    new_user = User(
        username=data['username'],
        email=data['email'],
        password=data['password']
    )
    db.session.add(new_user)
    db.session.commit()
    format_user = new_user.to_dict()
    return {"user": format_user}