from fastapi import APIRouter

from entities import Task as TaskEntity
from db import Session, Task
from sqlalchemy import select

router = APIRouter()

with Session() as session:

    @router.get("/task", tags=['Task'])
    async def get_tasks():
        tasks = []
        query = select(Task)
        tasks_obj = session.scalars(query)
        for task in tasks_obj:
            tasks.append(task.as_dict())
        return {"tasks": tasks}

    @router.post("/task", tags=['Task'])
    async def create_task(new_task: TaskEntity):
        task = Task(subject=new_task.subject, board_id=new_task.board_id)
        session.add(task)
        session.commit()
        return {"task": task.as_dict()}

    @router.get("/task/{id}", tags=['Task'])
    async def get_task(id: int):
        try:
            query = select(Task).where(Task.id == id)
            task_obj = session.scalars(query).one()
            return {"task": task_obj.as_dict()}
        except Exception:
            return {"msg": f"no task with id: {id} was found"}

    @router.put("/task/{id}", tags=['Task'])
    async def update_task(id: int, updated_task: TaskEntity):
        try:
            session.query(Task).filter(Task.id == id).update({
                "subject":
                updated_task.subject,
                "board_id":
                updated_task.board_id
            })
            session.commit()
            task = session.scalars(select(Task).where(Task.id == id)).one()
            session.commit()
            return {"task": task.as_dict()}
        except Exception:
            return {"msg": f"no task with id: {id} was found"}

    @router.delete("/task/{id}", tags=['Task'])
    async def delete_task(id: int):
        try:
            query = select(Task).where(Task.id == id)
            task_obj = session.scalars(query).one()
            session.delete(task_obj)
            session.commit()
            return {"msg": f"task with id:{id} deleted"}
        except Exception:
            return {"msg": f"no task with id: {id} was found"}
