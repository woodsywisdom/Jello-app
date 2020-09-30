from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Board

with app.app_context():
  db.drop_all()
  db.create_all()

  demo = User(username = 'DemoUser', email = 'demo@aa.io', password ='password')
  ian = User(username = 'Ian', email = 'ian@aa.io', password='password')
  javier = User(username = 'Javier', email = 'javier@aa.io', password='password')
  dean = User(username = 'Dean', email = 'dean@aa.io', password='password')
  angela = User(username = 'Angela', email = 'angela@aa.io', password='password')
  soonmi = User(username = 'Soon-Mi', email = 'soonmi@aa.io', password='password')
  alissa = User(username = 'Alissa', email = 'alissa@aa.io', password='password')
  pornography = Board(title = 'Porno', description = 'Keeping tabs on Mia Khalifa', user_id = 2)
  bronography = Board(title = 'Brono', description = 'Keeping tabs on Angela White', user_id = 3)
  graphy = Board(title = 'Graph', description = 'Keeping tabs on myself', user_id = 2)
  brophy = Board(title = 'Broseph', description = 'Keeping tabs on the sun', user_id = 3)

  db.session.add(demo)
  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)
  db.session.add(pornography)
  db.session.add(bronography)
  db.session.add(graphy)
  db.session.add(brophy)

  db.session.commit()
