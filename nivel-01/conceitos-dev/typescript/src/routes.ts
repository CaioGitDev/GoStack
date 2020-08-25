import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "caio",
    email: "caio@geral",
    password: "12345656",
    techs: ["node.js", "reactjs", { title: "react native", experience: 100 }],
  });
  return response.json({ message: "hello world" });
}
