import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

@Controller('api')
export class MainController{


    @Get('test')
    private testApi(req :Request, res : Response){

        Logger.Info('Service is Up!');

        res.json({msg : 'Hello!'})
    }
    @Get(':urlToken')
    private redirectToUrl(req: Request,res : Response){
        Logger.Info(`url token recieved : ${req.params.urlToken}`);

    }


    @Post('urlToHash')
    private createUrl(req : Request, res:Response){

    }




}