<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章标题">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="文章简介">
            <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="关键字">
            <el-input v-model="form.keyword" placeholder="用逗号分隔 ,"></el-input>
        </el-form-item>
        <!-- <el-form-item label="文章标题">
            <el-input v-model="form.title"></el-input>
        </el-form-item> -->
        <el-form-item >
        <!-- <quill-editor :content="content"
            :options="editorOption"
            @change="onEditorChange($event)">
        </quill-editor> -->
        <mavon-editor :ishljs="true" @change="getHtmlContent" />
        </el-form-item>

        <el-form-item >
            <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
        
    </el-form>
</template>
<script>

export default {
    name: '',
    components:{

    },
    data () {
        return {
            content: '<h2>正文从这里开始</h2>',
            editorOption: {
            // some quill 
                theme: 'snow'
            },
            form: {
                title: "",
                description: "",
                keywords: ""
            }
        }
    },
    methods: {
        async addArticle(params) {
            let res = await this.$service.addArticle(params);
            if(res){
                this.$message.success("添加成功")
            }
            
        },
        onEditorChange({ quill, html, text }) {
            // console.log('editor change!', html)
            // this.content = html
        },
        getHtmlContent(html,rend){
            // console.log('html',html,rend)
            this.content = rend;

        },
        submitForm(){
            // console.log('submit',this.content)
            let params = {
                ...this.form,
                content: this.content
            }
            this.addArticle(params)
        }
    }
}
</script>
<style scoped lang='less'>

</style>