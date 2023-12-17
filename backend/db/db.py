import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .base_model import Base
from .board_model import Board
from .task_model import Task

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL, echo=True)
Session = sessionmaker(engine)

Base.metadata.create_all(engine)
