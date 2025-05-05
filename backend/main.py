from fastapi import FastAPI, Query
from pydantic import BaseModel
import json, os

app = FastAPI()
DB_FILE = "data.json"

class Item(BaseModel):
    item: str
    location: str

@app.post("/add")
def add_entry(entry: Item):
    data = {}
    if os.path.exists(DB_FILE):
        with open(DB_FILE, "r") as f:
            data = json.load(f)
    data[entry.item.lower()] = entry.location
    with open(DB_FILE, "w") as f:
        json.dump(data, f)
    return {"status": "saved"}

@app.get("/search")
def search(item: str = Query(...)):
    if os.path.exists(DB_FILE):
        with open(DB_FILE, "r") as f:
            data = json.load(f)
            return {"location": data.get(item.lower(), "Not found")}
    return {"location": "Not found"}
