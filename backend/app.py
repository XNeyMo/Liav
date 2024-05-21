from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from microservices.user import router as user_router
from microservices.customer import router as customer_router
from microservices.provider import router as provider_router
from microservices.product import router as product_router

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://liav.netlify.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router, prefix='/user')
app.include_router(customer_router, prefix='/customer')
app.include_router(provider_router, prefix='/provider')
app.include_router(product_router, prefix='/product')
