import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'


export default {
  addCart(context,payload){
    return new Promise((resolve,reject) =>{
      //判断新添加的商品是否存在
      let oldProduct = context.state.carList.find(item => item.iid === payload.iid)
      //2.判断oldProduct是否有值
      if(oldProduct){
        context.commit(ADD_COUNTER,oldProduct)
        resolve('当前商品数量+1')
      }
      else{
        payload.count = 1;
        context.commit(ADD_TO_CART,payload)
        resolve('加入购物车成功')
      }
    })
  }
}