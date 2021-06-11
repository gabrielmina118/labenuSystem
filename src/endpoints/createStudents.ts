import { Request, Response } from "express";
import { connection } from "../connection";


export default async function createStudants (
    req:Request,
    res:Response
    ){
    try {
        
        const{nome, email, data_nasc} = req.body;

        const turmaId = Number(req.body.turma_id)

        if(
            !req.body.nome ||
            !req.body.email ||
            !req.body.data_nasc ||
            !turmaId 
            ){

            res
            .status(400)
            .send({
                message: '"Preencha" os campos "nome", "email", "data_nasc" e "turma_id"'
            })

            return
        }

        await connection.insert({
            nome,
            email,
            data_nasc,
            turma_id: turmaId
        }).into('estudante')
    
        res
        .status(200)
        .send({
            message: "Estudante cadastrado com sucesso!"
        })

    } catch (error) {
     res
     .status(400)
     .send({
         message:error.message
        })   
    }
}