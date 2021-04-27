<template>
  <div id="app">
    <nav class="main-nav" v-show="login">
      <Burger/><logout/>
    </nav>
    <div class="body"><router-view></router-view></div>
    <Sidebar>
      <ul class="sidebar-panel-nav" v-if="!memId">
        <li style="color:white;">
          업체 리스트
        </li>
      </ul>
      <ul class="sidebar-panel-nav">
        <li style="color:white;">
          설비 리스트
        </li>
      </ul>
      <ul class="sidebar-panel-nav">
        <li style="color:white;">
          생산 현황
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import Burger from "./components/Menu/Burger.vue";
import Sidebar from "./components/Menu/Sidebar.vue";
import Logout from './components/Logout.vue';
import EventBus from './store/Eventbus';

export default {
  name: "app",
  components: {
    Burger,
    Sidebar,
    Logout,
  },
  data(){
    return {
      login:this.$cookies.get("login"),
      memId:this.$cookies.get("memId"),
      adminId:this.$cookies.get("adminId"),
      vendorId:this.$cookies.get("vendorId"),
    }
  },
  created:function(){
    EventBus.$on('login', this.updateLogin);
    EventBus.$on('vendor', this.updateVendorId);
    EventBus.$on('member', this.updateMemId);
    EventBus.$on('admin', this.updateAdminId);
  },
  methods:{
    updateLogin:function(s){
      this.login = s;
    },
    updateMemId:function(){
      this.memId = this.$cookies.get("memId");
    },
    updateAdminId:function(){
      this.adminId = this.$cookies.get("adminId");
    },
    updateVendorId:function(){
      this.vendorId = this.$cookies.get("vendorId");
    },
  }
};
</script>
<style>
 @import './assets/css/style.css';
</style>
