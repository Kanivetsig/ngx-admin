import { Injectable, Inject } from "@angular/core";
import { RequestMethod, Request, Response } from "@angular/http";
import { HttpClient, HttpRequest } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";


@Injectable()
export class RequestHandler {

    private _baseUrl: string;
    private _http: HttpClient;

    constructor(http: HttpClient, @Inject("apiRootUrl")apiRootUrl: string) {
        this._http = http;
        this._baseUrl = apiRootUrl;
    }

    public get(url: string) {
        return this._http.get(this._baseUrl + url);
    }

    public post(url: string, data: any) {
        return this._http.post(this._baseUrl + url, data);
    }
}