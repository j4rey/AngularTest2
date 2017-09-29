import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MenuComponent } from './menu/menu.component';
import { UseraddeditComponent } from './useraddedit/useraddedit.component';
import { RolelistComponent } from './rolelist/rolelist.component';
import { RoleaddeditComponent } from './roleaddedit/roleaddedit.component';
import { UserroleComponent } from './userrole/userrole.component';
import { PermissionlistComponent } from './permissionlist/permissionlist.component';
import { PermissioneditComponent } from './permissionedit/permissionedit.component';
import { RolepermissionComponent } from './rolepermission/rolepermission.component';
import { AuthGuard } from './authguard';
import { SessionService } from './services/session.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

const appRoutes:Routes =[
  {path:'',component:HomeComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserlistComponent},
  {path:'user/add',component:UseraddeditComponent,canActivate:[AuthGuard]},
  {path:'user/edit',component:UseraddeditComponent,canActivate:[AuthGuard]},
  {path:'user/assignrole',component:UserroleComponent},
  {path:'role',component:RolelistComponent},
  {path:'role/add',component:RoleaddeditComponent},
  {path:'role/edit',component:RoleaddeditComponent},
  {path:'role/assignpermission',component:RolepermissionComponent},
  {path:'permission',component:PermissionlistComponent},
  {path:'permission/add',component:PermissioneditComponent},
  {path:'permission/edit',component:PermissioneditComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserlistComponent,
    MenuComponent,
    UseraddeditComponent,
    RolelistComponent,
    RoleaddeditComponent,
    UserroleComponent,
    PermissionlistComponent,
    PermissioneditComponent,
    RolepermissionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard, AuthService,SessionService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
