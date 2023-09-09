<template>
  <div id="app">
    <Header/>
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"
export default {
  name : "App",
  components:{
    Header,NavBar,Footer
  }
}
</script>
<style>

</style>
