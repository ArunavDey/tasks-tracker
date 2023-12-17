from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column
from .base_model import Base


class Task(Base):
    """
    Table "Task"
    id: int primary key
    subject: varchar(50)
    board_id: int foreign key (boards.id)
    """
    __tablename__ = "tasks"
    id: Mapped[int] = mapped_column(primary_key=True)
    subject: Mapped[str] = mapped_column(String(50))
    board_id: Mapped[int] = mapped_column(ForeignKey("boards.id"))

    def __repr__(self) -> str:
        return f"Task(id={self.id!r}, subject={self.subject!r})"

    def as_dict(self) -> dict:
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
