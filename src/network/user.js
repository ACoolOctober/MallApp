import {request} from './request'

//用户登录信息
export class userClass{
  userLogin(newIsLogin,name,phone){
    // 是否登录
    isLogin:newIsLogin;
    userNamme:name;
    userPhone:phone;
  }
}