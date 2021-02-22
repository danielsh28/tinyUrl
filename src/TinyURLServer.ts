import {json, urlencoded} from 'body-parser'
import * as controllers from './controllers'
import {Server} from '@overnightjs/core'
import {Logger} from '@overnightjs/logger'

export class TinyURLServer extends Server{
    private readonly SERVER_START_MSG = 'server strart at port '
    constructor() {
        super(true);
        this.app.use(json());
        this.app.use(urlencoded({extended : true}));
        super.addControllers(new controllers.MainController())

    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_START_MSG + port);
        });
    }
}