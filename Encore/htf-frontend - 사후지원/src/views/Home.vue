<template>
    <div id="standard">
        <div class="login-form-container shadow">
            <div class="login-form-right-side">
                <h1>What's the difference from the Legacy IoT Projects?</h1>
                <p>We are trying to deliver integrated managing system, which can make users helpful for each other by sharing their emergency informations. Fire Downstairs also means the users upstairs are in danger. Warning by Air pollution status can also help their safety.</p>
            </div>
            <div class="login-form-left-side">
                <div class="login-input-container">
                    <select class="form-select" id="specificSizeSelect" v-model="mode">
                        <option value="admin" selected>admin</option>
                        <option value="member">member</option>
                        <option value="vendor">Vendor</option>
                    </select>
                <AdminLogin v-if="mode=='admin'"/>
                <MemberLogin v-if="mode=='member'"/>
                <VendorLogin v-if="mode=='vendor'"/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import AdminLogin from './Login/AdminLogin'
import MemberLogin from './Login/MemberLogin'
import VendorLogin from './Login/VendorLogin'
export default {
    data(){
        return {mode:"admin"}
    },
    components:{
        AdminLogin, MemberLogin, VendorLogin
    }
}
</script>

<style>
 @import '../assets/css/style.css';
 @import '../assets/css/login.css';
</style>
