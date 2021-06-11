import app from "./app";
import createClass from "./endpoints/createClass";
import createDocente from "./endpoints/createDocente";
import createStudants from "./endpoints/createStudents";
import studantsId from "./endpoints/studantsId";


app.get('/estudante/:id', studantsId)
app.put("/estudante", createStudants)
app.post("/estudante", createStudants)

app.put("/turma", createClass)

app.put('/docente', createDocente)

