<template>
  <div>
    <el-card class="el-card-container">
      <el-row type="flex" align="middle">
        <el-col :span="10">搜索事记</el-col>
        <el-col :span="10" :offset="4" align="right">
          <el-button icon="el-icon-refresh" @click="reset">重置</el-button>
          <el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form ref="form" :model="form" label-width="100px" :inline="true">
            <el-form-item label="事记标题：">
              <el-input v-model="form.title" placeholder="事记标题关键字"></el-input>
            </el-form-item>
            <el-form-item label="作者：">
              <el-input v-model="form.author" placeholder="请输入作者名字"></el-input>
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
        v-loading="loading"
        max-height="700"
        border
      >
        <el-table-column property="eventId" width="70" label="事记ID"></el-table-column>
        <el-table-column property="title" label="事记标题" width="150"></el-table-column>
        <el-table-column property="author" label="事记作者" width="80" align="center"></el-table-column>
        <el-table-column property="brief" label="事记摘要" min-width="200"></el-table-column>
        <el-table-column
          property="publishDate"
          :formatter="dateFormat"
          label="发布日期"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column property="carousel" label="首页轮播" width="50" align="center"></el-table-column>
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
                @click="handleUpdate(scope.row.eventId)"
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
                @click="handleDelete(scope.row.eventId)"
                class="el-icon-delete-solid"
              >删除</el-button>
            </p>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="page-container"
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="changePage"
        :page-size="currentPageRow"
      ></el-pagination>
    </el-card>
  </div>
</template>

<script>
import { listEvent, eventSearch, deleteEvent } from "@/api/event";
import moment from "moment";

export default {
  data() {
    return {
      form: {
        title: null,
        author: null,
        page: null
      },
      loading: false,
      tableData: [],
      currentPageRow: 30,
      total: 0
    };
  },

  methods: {
    // 日期格式化，解决timestamp前台显示long
    dateFormat(row, column) {
      var date = row[column.property];
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },

    // 请求服务器，加载数据
    loadData() {
      this.loading = true;
      listEvent(this.form).then(response => {
        this.loading = false;
        this.tableData = response.data;
        this.total = this.tableData.length;
      });
    },

    // 点击搜索，当前页默认为1
    search() {
      this.form.page = 1;
      this.loadData();
    },

    //  当前页发生改变
    changePage(page) {
      this.form.page = page;
      loadData();
    },

    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    // 删除操作
    handleDelete(eventId) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "确认删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteEvent(eventId).then(response => {
            if (response.code == 10000) {
              var index = -1;
              for (var i = 0; i < this.tableData.length; i++) {
                if (this.tableData[i].eventId == eventId) {
                  index = i;
                  break;
                }
              }
              if (index != -1) {
                this.$message({
                  type: "success",
                  message: response.msg
                });
                this.tableData.splice(index, 1);
              }
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "删除操作已被取消"
          });
        });
    },
    // 跳转编辑页面
    handleUpdate(eventId){
      this.$router.push({
        path: '/event/update',
        query:{
          eventId: eventId,
        }
      })
    },
    // 清空界面
    reset() {
      this.form.title = null;
      this.form.author = null;
      this.tableData = null;
    }
  },
  // 初始化表格
  created() {
    this.form.page = 1;
    this.loadData(this.form);
  },
};
</script>

<style>
.el-card-container {
  margin-top: 20px;
}
.page-container {
  text-align: center;
  margin-top: 20px;
  padding: 5px;
}
</style>
