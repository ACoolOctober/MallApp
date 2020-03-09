<template>
  <div class="cart-bottom-bar">
    <div class="total-check">
<!--      <img src="~assets/img/cart/tick.svg" alt="">-->
      <check-buttom :is-check="isSelectAll" @click.native="selectAllClick"></check-buttom>
      <span>全选</span>
    </div>
    <div class="total-price">
      <span>合计：￥{{totalPrice}}</span>
    </div>
    <div class="calc" @click="account">
      去结算({{calcCount}})
    </div>
  </div>
</template>

<script>
  import CheckButtom from 'components/content/checkButtom/CheckButtom'

  export default {
    name: "CartBottomBar",
    components: {
      CheckButtom
    },
    computed: {
      totalPrice() {
        //汇总 先过滤
        return this.$store.state.carList.filter(item =>{
          return item.checked === true
        }).reduce((preValue,item) =>{
          return preValue + item.price * item.count
        },0).toFixed(2)
      },
      calcCount() {
         return this.$store.state.carList.filter(item => {
          return item.checked === true
        }).length
      },
      isSelectAll() {
        if(this.$store.state.carList.length === 0) {
          return false;
        }
        return !(this.$store.state.carList.filter(item => !item.checked).length)
      }
    },
    methods: {
      selectAllClick() {
        if(this.isSelectAll) {
          this.$store.state.carList.forEach(item => item.checked = false)
        }else {
          this.$store.state.carList.forEach(item => item.checked = true)
        }
      },
      account(){
        if(this.calcCount === 0){
          return this.$toast.show('您还没选择商品哦',2000)
        }else{
          return this.$toast.show('模块未开发，敬请期待',2000)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom-bar {
    width: 100%;
    height: 40px;
    position: fixed;
    bottom: 49px;
    background: #eeeeee;
    display: flex;
    line-height: 40px;
    text-align: center;
  }
  .total-check {
    width: 25%;
    display: flex;
    justify-content: center;
  }
  .total-price {
    width: 50%;
  }
  .calc {
    width: 25%;
    background-color: #ff5028;
    color:#fff;
  }
</style>