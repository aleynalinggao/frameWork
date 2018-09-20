import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class RequestApiService {
  header:HttpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  private urls: 'http://localhost:3000/'

  constructor(private http: HttpClient) { }
  getApi(url: string){
    const me  = this;
    const header  = new HttpHeaders().set('Content-Type','application/json; charset=UTF-8');
    header.set('Access-Control-Allow-Origin', '*');
    return me.http.get('http://192.168.1.85:3000/' + url , {
      headers: header
    })
  }
  postApi(url: string,body: any){
    const me  = this;
    const header  = new HttpHeaders().set('Content-Type','application/json; charset=UTF-8');
    header.set('Access-Control-Allow-Origin', '*');
    return me.http.post('http://192.168.1.85:3000/' + url , body ,{
      headers: header
    })
  }
}
