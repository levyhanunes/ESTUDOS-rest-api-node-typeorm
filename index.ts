import express, { Request, Response} from "express";

const server = express();
const PORT = 5000

server.listen(PORT, () => {
    console.log(`servidor rodando na porta: ${PORT}`)
})

server.get('/v1/api/', (request: Request, response: Response) => {
    return response.json(
        {
            mensagem: "Hello World!"
        }
    )
})