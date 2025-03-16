from fastapi import FastAPI, HTTPException
from models import Member
from db import (
    get_all_members,
    add_member,
    create_schema,
    populate_database,
    kick_random_member as kick_random_member_db,
)

app = FastAPI()

create_schema()
populate_database()


@app.get(
    "/members",
    response_model=list[Member],
    summary="Get all members",
    description="Returns a list of all members in the database",
    response_description="List of members with their first name, second name and department",
)
async def list_members():
    return get_all_members()


@app.post(
    "/members/kick-random",
    response_model=Member,
    summary="Kick a random member",
    description="Removes a random member from the database and returns their information",
    response_description="The member that was kicked",
    responses={
        404: {
            "description": "No members left in the database to kick",
            "content": {
                "application/json": {"example": {"detail": "No members to kick"}}
            },
        }
    },
)
async def kick_random_member():
    member = kick_random_member_db()
    if not member:
        raise HTTPException(status_code=404, detail="No members to kick")
    return member
