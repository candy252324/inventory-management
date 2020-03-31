<template>
  <div>
    <div v-for="(item,index) in list" :key="item.id">
      <div v-if="item.isOnEdit">
        <input type="text" v-model="item.name" placeholder="名称">
        <input type="text" v-model="item.price" placeholder="价格">
        <button @click="cancel(index)">取消</button>
        <button @click="save(item,index)">保存</button>
      </div>
      <div v-else>
        {{item.name}}:{{item.price}}
        <button @click="edit(index)">编辑</button>
        <button @click="del(item)">删除</button>
      </div>
    </div>
    <input type="text" v-model="newItem.name" placeholder="名称">
    <input type="text" v-model="newItem.price" placeholder="价格">
    <button @click="add">新增</button>
  </div>
</template>

<script>
import {getGoodsList,addGoods,delGoods,updateGoods} from '@/api/goods'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      newItem:{
        name:'',
        price:''
      },
      list:[]
    }
  },
  created(){
     this.getList(true)
  },
  methods:{
    getList(isFirst){
      getGoodsList().then(res=>{
        let list=res.data.data||[]
        this.list=list.map(item=>{
          if(isFirst){
            item.isOnEdit=false
          }
          return item
        })
        
      })
    },
    add(){
      const {name,price}=this.newItem
      if(!this.validVal(name,price)) return
      addGoods({name,price}).then(res=>{
        if(!res.data.code){
          this.getList()
        }
      })
    },
    edit(idx){
      this.list[idx].isOnEdit=true
    },
    cancel(idx){
      this.list[idx].isOnEdit=false
    },
    save(item,index){
      const {id,name, price}=item 
      if(!this.validVal(name,price)) return
      updateGoods({id,name, price}).then(res=>{
        if(!res.data.code){
          this.list[index].isOnEdit=false
        }
      })
    },
    del(item){
       delGoods({id:item.id}).then(res=>{
          if(!res.data.code){
            this.getList()
          }
      })
    },
    validVal(name,price){
      if(!name) {alert("请输入商品名称");return false}
      if(!price) {alert("请输入商品价格");return false}
      if(!typeof(+price)=='number' || isNaN(+price)) {alert('价格必须是数字');return false}
      return true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
