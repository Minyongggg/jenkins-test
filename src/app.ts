import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";

const app: Application = express();

// MiddleWares
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// API Routing
app.get("/", (req: Request, res: Response) =>
  res
    .status(200)
    .send(`HELLO Jenkins auto deploy 와 나 자동배포 성공했어 이게 Jenkins~`)
);

app.listen(8008, () => console.log(`listening on localhost: ${8008}`));
