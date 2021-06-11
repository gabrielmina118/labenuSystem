import { Request, Response } from "express";
import { connection } from '../connection'

export default async function getTurma(
    req:Request,
    res:Response
    ):Promise<any> {
    try {
        const{nome,data_inicio,data_final} = req.body;

        if(!(nome && data_inicio && data_final)){
            throw new Error("Algum campo está vazio ou faltando !")
        }

        const novaTurma ={
            nome,
            data_inicio,
            data_final
        }

        await connection.insert(novaTurma).into("turma")
        res.status(200).send("Turma criada com sucesso")
    } catch (error) {
        
    }
}