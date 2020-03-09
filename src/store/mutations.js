import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  //商品累加
  [ADD_COUNTER](state,payload){
    payload.checked = true
    payload.count++
  },
  //购物车商品新添加
  [ADD_TO_CART](state,payload){
    payload.checked = true //属性 商品是否选中
    state.carList.push(payload)
  }
}