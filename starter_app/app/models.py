from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash


db = SQLAlchemy()

class Board(db.Model):
  __tablename__ = 'boards'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(40), nullable = False)
  description = db.Column(db.String(2000))
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

  user = db.relationship("User", back_populates="boards")
  lists = db.relationship("List", back_populates="board")

  def to_dict(self):
    dblists = [list.to_dict() for list in self.lists]
    lists_object = {}
    for list in dblists:
      lists_object[list['id']] = list
    return {
      "id": self.id,
      "title": self.title,
      "description": self.description,
      "user_id": self.user_id,
      "user": self.user.id,
      "lists": lists_object
    }


class List(db.Model):
  __tablename__ = 'lists'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(40), nullable = False)
  description = db.Column(db.String(2000))
  board_id = db.Column(db.Integer, db.ForeignKey("boards.id"))

  board = db.relationship("Board", back_populates="lists")
  cards = db.relationship("Card", back_populates="list")

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "description": self.description,
      "board_id": self.board_id,
      "board": self.board_id,
      "cards": [card.to_dict() for card in self.cards]
    }


class Card(db.Model):
  __tablename__ = 'cards'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(40), nullable = False)
  description = db.Column(db.String(2000))
  list_id = db.Column(db.Integer, db.ForeignKey("lists.id"))

  list = db.relationship("List", back_populates="cards")

  def to_dict(self):
    return {
      "id": self.id,
      "title": self.title,
      "description": self.description,
      "list_id": self.list_id,
      "list": self.list.id,
    }


class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password= db.Column(db.String(100), nullable = False)
  profile_picture_path = db.Column(db.String(100), nullable=True)

  boards = db.relationship("Board", back_populates="user")


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)
