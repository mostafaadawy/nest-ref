import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login(){
        return {msg: "I signin"}
    }
    signUp(){
        return {msg: "I signUp"}
    }
}
