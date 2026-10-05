from fastapi import FastAPI
app = FastAPI()

@app.get("/getstudents")
def get_students():
    return "get students method called"

@app.post("/addstudent")
def add_student():
    return "add student method called"

@app.put("/updatestudent")
def update_student():
    return "update student method called"

@app.delete("/deletestudent")
def delete_student():
    return "delete student method called"
