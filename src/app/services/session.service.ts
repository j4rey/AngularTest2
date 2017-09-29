export class SessionService {
    constructor(){}

    // Set(key,value:{name:string,email:string,password:string,isLoggedIn:boolean}){
        
    // }

    Set(key,value,days=1){
        var d = new Date();
        //var days : number = 1;
        d.setTime(d.getTime() + (days * 24* 60 *60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = key + "="+value + ";"+expires+";path=/";
    }

    Get(key){
        var name = key + "=";
        var ca = document.cookie.split(";");
        for(var i = 0;i < ca.length;i++){
            var c = ca[i];
            while(c.charAt(0)==' '){
                c = c.substring(1);
            }
            if(c.indexOf(name)==0){
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }

    Delete(key){
        this.Set(key,'',0);
    }

    IsLoggedIn():boolean{
        return true;
    }

    GetBTOA():string{
        if(this.IsLoggedIn())
        {
        return "";
        }
        return "";
    }


}