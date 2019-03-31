import { Injectable } from '@angular/core';
import {TransferHttpService} from '@gorniv/ngx-transfer-http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private port="3001";
  private rootPath='http://localhost:' +this.port;
  private getDataPath = this.rootPath+'/test/getData'
  private getUserDataDetailPath = this.rootPath+'/user/getDetail'
  private updateNotePath = this.rootPath
  +'/user/updateNoteName';
  parameter:any={
    params:{},
    responseType :"json"
  }
  constructor(
    private http:TransferHttpService,
  ) { }
  updateNoteName(body){
    return this.http.post(this.updateNotePath,body);
  }
  getData(param){
    this.parameter.params=param;
    return this.http.get(this.getDataPath,this.parameter);
  }
  getUserDetail(param){
    this.parameter.params=param;
    return this.http.get(this.getUserDataDetailPath,this.parameter);
  }
}
