<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const form = reactive({
    name: '',
    password: ''
})
const onSubmit = () => {
    console.log(form)
    router.push('/')
}
</script>
<template>
    <div class="container">
        <div class="login-form">
            <h4>商城后台管理系统</h4>
            <el-form :model="form" label-width="100px">
                <el-form-item label="用户名:">
                    <el-input v-model="form.name" />
                </el-form-item>

                <el-form-item label="密码:">
                    <el-input v-model="form.password" />
                </el-form-item>
                <el-form-item>
                    <el-button class="login-btn" type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* 确保高度填充整个视口 */
    background-image: url('../../assets/bg.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    .login-form {

        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 10px;
    }

    .el-form{
        margin-right: 50px;

        margin-top: 40px;
    }
    h4 {
        color: rgb(216, 230, 222);
    }

}

.login-btn {
    width: 45%;
    margin:10px calc(50% - 60px);
}</style>