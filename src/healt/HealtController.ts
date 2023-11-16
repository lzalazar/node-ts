import { NextFunction, Request, Response } from "express";

export class HealtController {
    constructor() {

    }

    async status(req: Request, response: Response, next: NextFunction) {
        //@ts-ignore
        response.json({ result: "OK", message: "Server OK" });
    }
}