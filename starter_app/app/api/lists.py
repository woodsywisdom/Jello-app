
from flask_login import LoginManager, current_user, login_user, logout_user, login_required
from flask import (Blueprint, jsonify, url_for, request, redirect, render_template)
from app.models import User, db, List, Card, Board
from app.forms import LoginForm, SignUpForm

lists = Blueprint('lists', __name__)

@lists.route("/move-card",methods=["PATCH"])
def move_card():
    user_id = current_user.id
    data = request.json
    card = Card.query.get(data["card-id"])
    card.list_id = data["add-to"]
    db.session.add(card)
    db.session.commit()
    board = Board.query.get(data["board"])
    format_board = {"board":board.to_dict()}
    return format_board
    

@lists.route("/create",methods=["POST"])
def create_list():
    data = request.json
    new_list = List(
        title=data['title'],
        description=data['description'],
        board_id=data['boardId']
    )
    db.session.add(new_list)
    db.session.commit()
    format_list = new_list.to_dict()
    return format_list