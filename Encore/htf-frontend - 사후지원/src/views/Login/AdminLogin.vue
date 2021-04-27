<template>
    <div>
        <input type="text" placeholder="admin id" v-model='id' class="login-input-wrap input-id">
        <input type="password" placeholder="pw" v-model='pw' class="login-input-wrap input-id"><br><br>
        <button @click="adminLogin">login</button><br><br><br>
    </div>
</template>

<script>
import axios from 'axios';
import EventBus from '../../store/Eventbus';
export default {
    data () {
        return {
            id: '',
            pw: '',
        }
    },
    methods:{
        adminLogin() {
            //backend server로 로그인 요청
            axios.post(`${this.$store.state.BACK_SERVER}/loginUser`, {"userId": this.id, "userPw":this.pw})
            .then(res => {
                //반환 데이터가 없을 경우 로그인 실패
                if (res.data == '') {
                    alert("login failed")
                    throw new Error("login failed")
                } else {
                    //로그인 정보 및 memberList 데이터 쿠키에 저장
                    this.$cookies.set("adminId", this.id);
                    this.$cookies.set("login", "login");
                    //사이드바 및 로그아웃 버튼 활성화
                    EventBus.$emit('login', true);
                    EventBus.$emit('admin', true);
                    //admin페이지로 이동
                    this.$router.push('admin/'+this.id);
                }
            })
        }
    }
}
</script>
