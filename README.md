# Admin template based on Angular 4+, Bootstrap 4 and <a href="https://github.com/akveo/nebular">Nebular</a>

Fork of [ngx-admin](https://github.com/akveo/ngx-admin/tree/starter-kit)

### What's included:

This is slightly modified version of [ngx-admin](https://github.com/akveo/ngx-admin/tree/starter-kit) by [Akveo team](http://akveo.com/) (starter-kit branch).
@nebular/auth was removed and replaced with my own very simple authorization module. A new **Dark** theme based on **Cosmic** was added. 

By default, DemoAuthService is being used so if you want to check it out in action, at login page simple enter any credentials, you will be logged as demo user.

### Toaster

[Toaster](https://github.com/Stabzs/Angular2-Toaster) is added to application at global scope and available from any part of app. It uses global config which can be configured in file [toaster.config.ts](src/app/toaster.config.ts). To use it, simply inject `ToasterService` and call either `pop` or `popAsync` e.g

```
class SomeComponent {
    constructor(private _toasterService: ToasterService){
        this._toasterService.popAsync("error", "Some error title", "Useful error message");
    }
}
```

### Request Handler

RequestHandler service (see: [request.handler.ts](src/app/data/request.handler.ts) ) is a preferred way to send http requests. It uses "apiRootUrl" injectable to set api root url for all requests. This constant is set in [app.module.ts](src/app/app.module.ts). For example

In **app.module.ts** (Rest is omitted for space saving purposes)
```
...
providers: [
    { provide: "apiRootUrl", useValue: "/api/"}
    ...
]
```

Will produce any request sent through RequestHandler to take /api/ route as starting point

```
class SomeService {
    constructor(private _request: RequestHandler){
        this._request.get("users").subscribe() //will send request to /api/users
    }
}
```

### From Akveo
Made with :heart: by [Akveo team](http://akveo.com/). Follow us on [Twitter](https://twitter.com/akveo_inc) to get the latest news first!
We're always happy to receive your feedback!
