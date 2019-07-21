<template>
  <div>
    <el-card class="el-card-container">
      <el-row type="flex" align="middle">
        <el-col :span="10">搜索事记</el-col>
        <el-col :span="10" :offset="4" align="right">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form ref="form" :model="form" label-width="100px" :inline="true">
            <el-form-item label="事记标题：">
              <el-input v-model="form.name" placeholder="事记标题关键字"></el-input>
            </el-form-item>
            <el-form-item label="作者：">
              <el-input v-model="form.name" placeholder="请输入作者名字"></el-input>
            </el-form-item>
            <el-form-item label="发布日期：">
              <el-col>
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="el-card-container">
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%"
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column property="title" label="标题" width="150"></el-table-column>
        <el-table-column property="author" label="作者" width="80" align="center"></el-table-column>
        <el-table-column property="brief" label="摘要" min-width="200"></el-table-column>
        <el-table-column property="publishDate" label="发布日期" width="100" align="center"></el-table-column>
        <el-table-column property="carousel" label="首页轮播" width="50"></el-table-column>
        <el-table-column property="carouselImgLink" label="轮播图片" width="200" align="center">
          <template slot-scope="scope">
            <el-image style="max-width: 90%;" :src="scope.row.carouselImgLink">
              <div slot="error" class="error-solt">没有图片</div>
            </el-image>
          </template>
        </el-table-column>
        <el-table-column property="carouselEndDate" label="轮播日期" width="100" align="center"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <p>
              <el-button
                size="mini"
                @click="handleShowProduct(scope.$index, scope.row)"
                class="el-icon-s-promotion"
              >查看</el-button>
              <el-button
                size="mini"
                @click="handleUpdateProduct(scope.$index, scope.row)"
                class="el-icon-edit-outline"
              >编辑</el-button>
            </p>
            <p>
              <el-button
                size="mini"
                @click="handleShowLog(scope.$index, scope.row)"
                class="el-icon-discount"
              >审核</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                class="el-icon-delete-solid"
              >删除</el-button>
            </p>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      tableData: [
        {
          title: "2019中国工程机器人大赛暨国际公开赛",
          author: "xizi",
          brief:
            "我们团队在2019中国工程机器人大赛暨国际公开赛中取得优异成绩我们团队在2019中国工程机器人大赛暨国际公开赛中取得优异成绩" +
            "我们团队在2019中国工程机器人大赛暨国际公开赛中取得优异成绩",
          publishDate: "2019-01-03",
          carousel: "是",
          carouselImgLink: "http://img.cnbaka.com/images/2019/07/08/4.jpg",
          carouselEndDate: "2019-03-03"
        },
        {
          title: "2019中国工程机器人大赛暨国际公开赛",
          author: "xizi",
          brief: "我们团队在2019中国工程机器人大赛暨国际公开赛中取得优异成绩",
          publishDate: "2019-01-03",
          carousel: "是",
          carouselImgLink: "http://img.cnbaka.com/images/2019/07/08/10.jpg",
          carouselEndDate: "2019-10-02"
        },
        {
          title: "2019中国工程机器人大赛暨国际公开赛",
          author: "xizi",
          brief: "我们团队在2019中国工程机器人大赛暨国际公开赛中取得优异成绩",
          publishDate: "2019-01-03",
          carousel: "否",
          carouselImgLink: "无数据",
          carouselEndDate: "无数据"
        },
        {
          title: "2019中国工程机器人大赛暨国际公开赛",
          author: "xizi",
          brief: "我们团队在2019中国工程机器人大赛暨国际公开赛中取得优异成绩",
          publishDate: "2019-01-03",
          carousel: "否",
          carouselImgLink: "无数据",
          carouselEndDate: "无数据"
        },
        {
          title: "2019中国工程机器人大赛暨国际公开赛",
          author: "xizi",
          brief: "我们团队在2019中国工程机器人大赛暨国际公开赛中取得优异成绩",
          publishDate: "2019-01-03",
          carousel: "否",
          carouselImgLink: "无数据",
          carouselEndDate: "无数据"
        },
        {
          title: "2019中国工程机器人大赛暨国际公开赛",
          author: "xizi",
          brief: "我们团队在2019中国工程机器人大赛暨国际公开赛中取得优异成绩",
          publishDate: "2019-01-03",
          carousel: "否",
          carouselImgLink: "无数据",
          carouselEndDate: "无数据"
        }
      ]
    };
  },
  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
};
</script>

<style>
.el-card-container {
  margin-top: 20px;
}
</style>
