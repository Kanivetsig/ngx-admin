import { UserAuth } from "../models/user-auth.model";
import { Observable } from "rxjs/Observable";

export class AbstractAuthService{
    user: UserAuth | null;
    logIn: (username: string, password: string) => Promise<any>;
    logOut: () => void;
    isLoggedIn: () => boolean;
}