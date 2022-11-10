import { Request, Response } from "express";
import path from "path";

class ImagesController {

    constructor() {
    }
    
    public getImageById = (req: Request, res: Response) => {
        return res.sendFile(path.join(__dirname,`../../public/images/${req.params.id}.jpg`));
    }

}

export default ImagesController;