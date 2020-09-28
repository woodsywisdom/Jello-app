from flask_login import LoginManager, current_user, login_user, logout_user
from flask import (Blueprint, jsonify, url_for, redirect, render_template)
from app.models import User
from app.forms import LoginForm


session = Blueprint('session', __name__)

@session.route("/", methods=["GET","POST"])
def login():
    if current_user.is_authenticated:
        return render_template("home.html")
    form = LoginForm()
    if form.validate_on_submit():
        username = form.username.data
        user = User.query.filter(User.username == username).first()
        if not user or not user.check_password(form.password.data):
            return redirect(url_for(".login"))
        login_user(user)
        return render_template("home.html")
    return render_template("login.html", form=form)


@session.route('/logout', methods=["POST"])
def logout():
    logout_user()
    return redirect(url_for('.login'))