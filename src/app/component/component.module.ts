import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ComponentRoutes} from "./component-routing";
import { ComponentComponent } from './component.component';
import {ButtonComponent} from "./button/button.component";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentRoutes),
    NgZorroAntdModule, /** 导入 ng-zorro-antd 模块 **/
  ],
  declarations: [ComponentComponent,ButtonComponent]
})
export class ComponentModule { }
