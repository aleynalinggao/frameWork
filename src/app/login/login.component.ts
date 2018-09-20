import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {Router} from "@angular/router";
import {RequestApiService} from "../globalService/request-api.service";
import {AuthGuardService} from "../globalService/auth-guard.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  username: string = '';
  password: string = '';
  result:any = {};
  loading: boolean = false;
  constructor(private fb: FormBuilder, private router: Router,private https: RequestApiService, private auth: AuthGuardService) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    const thiz = this;
    // enter触发 login事件 bug: 二次触发
    document.onkeydown = function (event) {
      const e = event || window.event;
      if (e && e['keyCode'] === 13 && location.href.indexOf('login') !== -1) {
        thiz.submitForm();
      }
    }
  }
  // 登录按钮事件
  submitForm(){
    const thiz = this;
    thiz.loading = true;
    thiz.username = thiz.validateForm.controls['userName'].value;
    thiz.password = thiz.validateForm.controls['password'].value;
    for(const i in thiz.validateForm.controls ){
      thiz.validateForm.controls[i].markAsDirty();
      thiz.validateForm.controls[i].updateValueAndValidity();
    }
    if(thiz.validateForm.status == 'VALID'){
      this.https.postApi('login',{
        username: thiz.username,
        password: thiz.password
      }).subscribe((res) =>{
        thiz.result = res;
         if(thiz.result.status == 100){
           thiz.loading = false;
           thiz.auth.isLogin = true;
           sessionStorage.setItem('isLogin',  'true' );
           const url = sessionStorage.getItem('url');
           if(url){
             this.router.navigateByUrl(url);
           }else{
             this.router.navigateByUrl('/dashboard');
           }
         }else{
           thiz.loading = false;
           alert(thiz.result.msg)
         }
      },(err) =>{
         console.log(err);
      });
    }
  }

}
