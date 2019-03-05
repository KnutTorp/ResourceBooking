import { Injectable } from '@angular/core';

import { IUser } from 'src/app/domain/user';
import { MessageService } from 'src/app/messages/message.service';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser: IUser;
    redirectUrl: string;

    constructor(private messageService: MessageService) { }

    isLoggedIn(): boolean {
        // !! casts to a boolean
        return !!this.currentUser;
        // if (!!this.currentUser) {
        //   return true;
        // } else {
        //     return false;
        // }
    }

    login(name: string, password: string): void {
        if (!name || !password) {
            this.messageService.addMessage('Please enter your userName and password');
            return;
        }
        if (name === 'admin') {
            this.currentUser = {
                id: 1,
                name,
                isAdmin: true,
                password: 'admin'
            };
            this.messageService.addMessage('Admin login');
            return;
        }
        this.currentUser = {
            id: 2,
            name,
            isAdmin: false,
            password: 'notadmin'
        };
        this.messageService.addMessage(`User: ${this.currentUser.name} logged in`);
    }

    logout(): void {
        this.currentUser = null;
    }
}
