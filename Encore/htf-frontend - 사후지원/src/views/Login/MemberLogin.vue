<template>
    <div>
        <input type="text" placeholder="member id" v-model='id' class="login-input-wrap input-id">
        <input type="password" placeholder="pw" v-model='pw' class="login-input-wrap input-id"><br><br>
        <button @click="memberLogin">login</button> 
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
        memberLogin() {
            //backend server로 로그인 요청
            axios.post(`${this.$store.state.BACK_SERVER}/loginUser`, {"userId":this.id,"userPw":this.pw})
            .then(res => {
                console.log(res);
                //반환 데이터가 없을 경우 로그인 실패
                if (res.data == '') {
                    alert("login failed")
                    throw new Error("login failed")
                } else {
                    //로그인 정보 및 machineList 데이터 쿠키에 저장
                    this.$cookies.set("memId", this.id);
                    this.$cookies.set("login", "login");
                    //사이드바 및 로그아웃 버튼 활성화
                    EventBus.$emit('login', true);
                    EventBus.$emit('member', this.id);
                    this.$router.push('member/'+this.id);
                }
            })
        },
    }
}
</script>
