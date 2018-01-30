import { Injectable } from "@angular/core";
import { RequestHandler } from "./request.handler";
import { Observable } from "rxjs/Observable";


@Injectable()
export class UsersProvider {

    private _apiEndpoint = "users/";

    constructor(private _request: RequestHandler) {}

    public logIn(username: string, password: string): Promise<any> {
        return this._request.post(this._apiEndpoint + "login", { username: username, password: password }).toPromise();
    }

    public register(username: string, email: string, password: string): Observable<any> {
        return this._request.post(this._apiEndpoint + "register", {username: username, email: email, password: password});
    }
}