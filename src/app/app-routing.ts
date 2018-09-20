import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin/admin.component";
import {DashboardComponent} from "./frame/dashboard/dashboard.component";
import {AuthGuardService} from "./globalService/auth-guard.service";
import {ComponentComponent} from "./component/component.component";

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo :'login',
    pathMatch: 'full'
  }, // 默认路径
  {
    path: 'login',
    loadChildren:'./login/login.module#LoginModule'
  }, // 路由定义
  {
    path:'',
    component: AdminComponent,
    children : [{
      path: 'dashboard',
      loadChildren:'./frame/dashboard/dashboard.module#DashboardModule',
      canActivate: [AuthGuardService]
    },{
      path: 'component',
      loadChildren:'./component/component.module#ComponentModule',
      canActivate: [AuthGuardService]
    }
    ]}
]
