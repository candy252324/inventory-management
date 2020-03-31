<template>
  <div id="app">
    <list></list>
  </div>
</template>

<script>
import List from './components/List'
// import {example} from './api/login'
export default {
  name: "App",
  components: {List},
  mounted(){
    // example().then(res=>{
    //   console.log(res)
    // })
    
  },
};
</script>

<style>

</style>
