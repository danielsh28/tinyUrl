import * as crypto from 'crypto';
import {CounterModel, UrlModel} from "../models";
import {Logger} from "@overnightjs/logger";


export async function createUrlService(url: string, custom?: string,): Promise<number | string> {
    let hashedURL;
    let hashId;
    try {
        const doc = await CounterModel.findOne();
        hashedURL = crypto.createHash('sha256').update(`${url}${doc ? doc.counter : ''}`).digest('hex');
        await UrlModel.create({hashId :hashedURL, url});
        await CounterModel.updateOne({}, {$inc: {counter: 1}}).catch(err => Logger.Err(`error update the counter : ${err}`));
    } catch (err) {
        Logger.Err(`error creating url : ${err}`);
        return -1;
    }
    ;
    return hashedURL;

}

export async function getUrlService(hashedUrl: string) {
    let url = null;
    try {
        const doc = await UrlModel.findOne({hashId: hashedUrl});
        if (doc) {
            url = doc.url;
        }
    } catch (err) {
        Logger.Err(`Error retrieving url : ${err}`)
        return -1
    }

    return url

}

