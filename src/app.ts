import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
const port = 3000

app.get('/', (req: Request, res: Response) => {
  const a = 33
  res.send(a)
})

// parser
app.use(express.json())
app.use(cors())

export default app

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log(process.cwd())
