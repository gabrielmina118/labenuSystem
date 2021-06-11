import { Request, Response } from 'express'
import {connection} from '../connection';


export default async function createDocente (

    req: Request,
    res: Response
){
    try {
        
        const { nome, email, data_nasc } = req.body

        if(
            !req.body.nome ||
            !req.body.email ||
            !req.body.data_nasc
            ){

            res
            .status(400)
            .send({
                message: '"Preencha" os campos "nome", "email", "data_nasc" e "turma_id"'
            })

            return
        }

        await connection.raw(`
        insert into docente(nome, email, data_nasc)
        values
        ("${nome}", "${email}", "${data_nasc}");
        `)

        res
        .status(200)
        .send ({
            message: 'Concluído'
        })

    } catch (error) {
        res
        .status(200)
        .send({
            message: error.message
        })
    }
}