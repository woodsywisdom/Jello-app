
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
    boards = db.session.query(Board) \
                        .join(List) \
                        .filter(Board.user_id == user_id) \
                        .options(db.joinedload(Board.lists) \
                        .options(db.subqueryload(List.cards))) \
                        .all()
    format_boards = {"boards":{},"lists":{},"cards":{}}
    for board in boards:
        format_boards["boards"][board.id] = board.to_dict()
        for ls in board.lists:
                format_boards["lists"][ls.id] = ls.to_dict()
                for card in ls.cards:
                    format_boards["cards"][card.id] = card.to_dict()
    db.session.add(card)
    db.session.commit()
    return format_boards
    

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