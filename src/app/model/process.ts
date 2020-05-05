import { Document } from './../service/fire-service.service';
export interface Process extends Document{
    name?:string
    code?:string
}
