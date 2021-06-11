import { Request, Response } from "express";
import { connection } from "../connection";
import dayjs from 'dayjs'





export default async function studantsId (
    req:Request,
    res:Response
    ){
        try {
            
            const estudanteId = Number(req.params.id)
            console.log(estudanteId)
            
            const result = await connection('estudante')
            .select('*')
            .where({ id: estudanteId })
            const date1 = dayjs(result[0].data_nasc)
            const date2 = dayjs(Date.now())
            const idade = date1.diff(date2)
            
            console.log()

        if(!estudanteId){
            res
            .status(404)
            .send({
                message: "Estudante não encontrado!"
            })

            return
    }
   
        res
        .status(200)
        .send(result[0])

    } catch (error) {
     res
     .status(400)
     .send({
         message:error.message
        })   
    }
}