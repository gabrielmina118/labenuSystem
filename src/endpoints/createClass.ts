import { Request, Response } from "express";
import { connection } from "../connection";


export default async function createClass (
    req:Request,
    res:Response
    ){

    try {

        const{nome,data_inicio,data_final} = req.body;

        await connection.insert({
            nome,
            data_inicio,
            data_final
        }).into('turma')
    

        res
        .status(200)
        .send({
            message: "concluido"
        })

    } catch (error) {
     res
     .status(400)
     .send({
         message:error.message
        })   
    }
}