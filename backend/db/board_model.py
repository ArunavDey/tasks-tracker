from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column
from .base_model import Base


class Board(Base):
    """
    Table "Board"
    id: int primary key
    name: varchar(30) not null
    """
    __tablename__ = "boards"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(30), nullable=False)

    def __repr__(self):
        return f"{self.id}, {self.name}"

    def as_dict(self) -> dict:
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}
