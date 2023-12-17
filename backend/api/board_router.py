from fastapi import APIRouter

from entities import Board as BoardDTO
from db import Session, Board
from sqlalchemy import select

router = APIRouter()

with Session() as session:

    @router.get("/board", tags=["Board"])
    async def get_boards():
        boards = []
        query = select(Board)
        boards_obj = session.scalars(query)
        for board in boards_obj:
            boards.append(board.as_dict())
        return {"board": boards}

    @router.post("/board", tags=["Board"])
    async def create_board(new_board: BoardDTO):
        board = Board(name=new_board.name)
        session.add(board)
        session.commit()
        return {"board": board.as_dict()}

    @router.get("/board/{id}", tags=["Board"])
    async def get_board(id: int):
        try:
            query = select(Board).where(Board.id == id)
            board = session.scalars(query).one()
            return {"board": board.as_dict()}
        except Exception:
            return {"msg": f"no board with id: {id} was found"}

    @router.put("/board/{id}", tags=['Board'])
    async def update_board(id: int, updated_board: BoardDTO):
        try:
            session.query(Board).filter(Board.id == id).update(
                {"name": updated_board.name})
            session.commit()
            board = session.scalars(select(Board).where(Board.id == id)).one()
            return {"board": board.as_dict()}
        except Exception:
            return {"msg": f"no board with id: {id} was found"}

    @router.delete("/board/{id}", tags=["Board"])
    async def delete_board(id: int):
        try:
            query = select(Board).where(Board.id == id)
            board_obj = session.scalars(query).one()
            session.delete(board_obj)
            session.commit()
            return {"msg": f"board with id: {id} deleted"}
        except Exception:
            return {"msg": f"no board with id: {id} was found"}
