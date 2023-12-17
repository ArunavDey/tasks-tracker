from pydantic import BaseModel
from typing import List


class Task(BaseModel):
    subject: str
    board_id: int
