import {json, urlencoded} from 'body-parser'
import * as controllers from './controllers'
import {Server} from '@overnightjs/core'
import {Logger} from '@overnightjs/logger'
import mongoose from 'mongoose';
import config from '../config';

const { connection } = mongoose;

export class TinyURLServer extends Server{
    private readonly SERVER_START_MSG = 'server strart at port '
    constructor() {
        super(true);
        this.app.use(json());
        this.app.use(urlencoded({extended : true}));
        super.addControllers(new controllers.MainController());
        this.initDB();


    }

    private initDB(){
        const dbURL = config.DB_URL;
        mongoose.connect(dbURL);
        connection.on('Error', () => console.log('Error connect to database'));
        connection.once('open', () => {
            console.log(`Connection established successfully to ${dbURL}`);

    });
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_START_MSG + port);
        });
    }
}