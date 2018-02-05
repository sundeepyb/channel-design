import { Request, Response, Router } from "express";
import * as fs from "fs";
const channelRouter: Router = Router();

channelRouter.get("/", (request: Request, response: Response) => {
    var filepath = __dirname + '/channels.json';
    response.json(readJsonFileSync(filepath, 'utf8'));
});

function readJsonFileSync(filepath, encoding) {
    if (typeof (encoding) == 'undefined') {
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file.toString());
}

export { channelRouter };
