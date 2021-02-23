import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import {createUrlService, getUrlService} from "../services/encodeUrl.service";
import * as Url from "url";

@Controller('api')
export class MainController{

    @Get(':id')
    private redirectToUrl(req: Request,res : Response){
        getUrlService(req.params.id).then((data) =>{
            if(data ===-1){
                res.sendStatus(500);
            }
            else {
                res.redirect(data!);
            }
        });
        Logger.Info(`url token recieved : ${req.params.urlToken}`);

    }


    @Post('create')
    private createUrl(req : Request, res:Response){
        createUrlService(req.query.url as string).then((hashId) => {
            res.json({hashId});
            }
        )

    }




}