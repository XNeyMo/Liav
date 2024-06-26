from pydantic import BaseModel

class Address(BaseModel):
    street: str
    city: str
    state: str
    zip: str
    country: str
