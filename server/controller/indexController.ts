import { Router, Request, Response, NextFunction } from 'express';

export class IndexController {

    public get(req: Request, res: Response, next: NextFunction) {
       res.json({
        message: `You are at the root level of Application!
        you are seeing this means App is not working but Api is working !
        movies API URL http://localhost:3000/api/v1/movies`
      });
    }
    public redirectToIndex(req: Request, res: Response, next: NextFunction) {
       res.redirect('/');
    }
}


export default new IndexController();
