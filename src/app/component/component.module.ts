import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ComponentRoutes} from "./component-routing";
import { ComponentComponent } from './component.component';
import {ButtonComponent} from "./button/button.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { RequestApiService } from '../globalService/request-api.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule, /** 导入 ng-zorro-antd 模块 **/
  ],
  declarations: [ComponentComponent,ButtonComponent, TableComponent],
  providers: [RequestApiService]
})
export class ComponentModule { }
