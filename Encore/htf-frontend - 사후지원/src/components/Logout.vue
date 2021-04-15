<template>
    <div>
        <button @click="logout">logout</button>
    </div>
</template>

<script>
import Eventbus from '../store/Eventbus'
export default {
    methods:{
        logout:function() {
            //모든 쿠키를 지움
            this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie))
            //쿠키를 지웠다는 신호를 eventbus에 담아 날림
            //이를 통해 burger, logout 버튼을 App.vue에서 가릴 수 있음
            Eventbus.$emit('login', false);
            Eventbus.$emit('member', false);
            Eventbus.$emit('admin', false);
            Eventbus.$emit('vendor', false);
            this.$router.push('/');
        }
    }
}
</script>
