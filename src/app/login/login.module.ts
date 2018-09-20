import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginComponent} from "./login.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {RequestApiService} from "../globalService/request-api.service";
import {RouterModule} from "@angular/router";
import {LogindRoutes} from "./login-routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(LogindRoutes),
    NgZorroAntdModule, /** 导入 ng-zorro-antd 模块 **/
  ],
  declarations: [LoginComponent],
  providers: [RequestApiService]
})
export class LoginModule { }
