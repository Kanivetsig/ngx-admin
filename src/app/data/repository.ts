import { Injectable } from "@angular/core";
import { UsersProvider } from "./users.provider";


@Injectable()
export class Repository {
    constructor(public usersProvider: UsersProvider) {}
}