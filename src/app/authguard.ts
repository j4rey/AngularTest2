import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";

export class AuthGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        let options  = new RequestOptions();
        
        var header :Headers = new Headers([{'Content-Type':'application/json'},{'Authorization':'Basic'}]);
        options.headers = header;
console.log(options.headers)

        options.headers.append('accept-type','application/json');
        console.log(state);
        console.log(state.url   );
        return true;
    }
}