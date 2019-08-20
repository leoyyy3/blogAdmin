<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="createTime" label="创建时间" width="180"></el-table-column>
    <el-table-column prop="title" label="文章标题" width="180"></el-table-column>
    <el-table-column prop="url" label="文章地址"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      title: "",
      list: []
    };
  },
  mounted() {
    this.getList({});
  },
  methods: {
    async getList(params) {
      // console.log('---',this.$service)
      let res = await this.$service.articleList(params);
      this.list = res;
    },
    async deleteAritcle(params){
        let res = await this.$service.deleteArticle(params);
        console.log('delete',res)
        // if(res){
            this.$message.success("删除成功")
            this.getList({})
        // }
    },
    handleDelete(row){
        console.log('row',row)
        this.deleteAritcle({id:row._id})
    }
  }
};
</script>
<style scoped lang='less'>
</style>