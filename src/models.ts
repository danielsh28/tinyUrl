import {Document, Model, Schema} from "mongoose";
import * as mongoose from "mongoose";
import * as Url from "url";


interface  IUrlSchema extends Document{
    hashId : string,
    url : string,
    creationDate : Date
    expDate? :Date
}
interface ICounterSchema extends Document{
    counter:number
}

const counterSchema : Schema = new Schema({
    counter :Number
});
const UrlSchema : Schema = new Schema({
    hashId : {type:String,unique : true},
    url : String,
    creationDate : {type :Date,default : Date.now(),required : true},
    expDate :{type:Date,required: false}
});

export const CounterModel  = mongoose.model<ICounterSchema>('Counter', counterSchema,'counters');
export const UrlModel  = mongoose.model<IUrlSchema>('Url', UrlSchema,'urls');
