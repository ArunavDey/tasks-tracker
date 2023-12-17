from typing import List, Optional
from pydantic import BaseModel

from entities.task_entity import Task


class Board(BaseModel):
    name: str
