import { Document } from './../service/fire-service.service';
export interface User extends Document{
    
    username?:string,
    password?:string,
    name?:string,
    email?:string,
    roles?:string[],
    department?:string[]

}
