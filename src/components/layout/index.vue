<template>
    <el-container>
        <el-aside width="200px" class="con_aside">
            <h1 class="logo">toptopti</h1>
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :router=true
            >
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>文章管理</span>
                </template>
                <!-- <el-menu-item-group> -->
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="ARTICLELIST" route="/article/list">文章列表</el-menu-item>
                <el-menu-item index="ADDARTICLE" route="/article/add">添加文章</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>

export default {
    name: '',
    components:{

    },
    data () {
        return {
            title: '',
        }
    },
    methods: {

    }
}
</script>
<style scoped lang='less'>
.con_aside{
    background:#fff;
    margin-right:10px;
}
.logo{
    font-size:28px;
    font-weight: bold;
    color:#999;
    background:#fff;
}
.el-menu{
    border-right:none;
}
.el-main{
    background:#fff;
}
.el-container{
    height:100%;
}
</style>