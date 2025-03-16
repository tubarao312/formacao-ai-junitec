from pydantic import BaseModel


class Member(BaseModel):
    first_name: str
    second_name: str
    department: str

    class Config:
        from_attributes = True
