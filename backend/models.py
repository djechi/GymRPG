# tables/schemas

from typing import Annotated

from fastapi import Depends, FastAPI, HTTPException, Query
from sqlmodel import Field, Session, SQLModel, create_engine, select, Column, Relationship
from sqlalchemy import ARRAY, String

# model
class User(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    username: str = Field(unique=True, index=True)
    email: str = Field(unique=True, index=True)
    password_hash: str
    profile_name: str | None = Field(default = None)
    exp: int = Field(default = 0)
    level: int = Field(default = 0)
    workouts_completed: int = Field(default = 0)

    routines: list["Routine"] = Relationship(back_populates="user")

class Routine(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    days_of_week: list[str] = Field(default=[], sa_column=Column(ARRAY(String))) 
    name: str 
    user_id: int = Field(foreign_key="user.id")

    routine_exercises: list["RoutineExercise"] = Relationship(back_populates="routine")
    user: User = Relationship(back_populates="routines")

class Exercise(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str 


class RoutineExercise(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    routine_id: int = Field(foreign_key="routine.id")
    exercise_id: int = Field(foreign_key="exercise.id")
    sets: int = Field(default=0)
    reps: int = Field(default=0)

    routine: Routine = Relationship(back_populates="routine_exercises")
    exercise: Exercise = Relationship()