<template>
  <div>
    <el-card class="el-card-container">
      <el-row type="flex" align="middle">
        <el-col :span="10">添加事记</el-col>
        <el-col :span="10" :offset="4" align="right">
          <el-button icon="el-icon-refresh" @click="clean">重置</el-button>
          <el-button
            type="primary"
            icon="el-icon-s-promotion"
            @click="submitForm('form')"
            :loading="loading"
          >提交</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20">
          <el-form ref="form" :rules="rules" :model="form" label-width="150px">
            <el-form-item label="事记标题：" prop="title">
              <el-input v-model="form.title" placeholder="请输入事记标题..."></el-input>
            </el-form-item>
            <el-form-item label="作者：" prop="author">
              <el-input v-model="form.author" placeholder="请输入作者名字..."></el-input>
            </el-form-item>
            <el-form-item label="首页轮播：">
              <el-select v-model="form.carousel" placeholder="请选择">
                <el-option
                  v-for="item in isCarousel"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="链接：">
              <el-input
                v-model="form.carouselImgLink"
                placeholder="请输入轮播图片的外链..."
                :disabled="isDisabled"
              ></el-input>
            </el-form-item>
            <el-form-item label="Deadline：" :disabled="isDisabled">
              <el-col>
                <el-date-picker
                  type="datetime"
                  placeholder="选择首页轮播截至日期"
                  v-model="form.carouselEndDate"
                  :disabled="isDisabled"
                ></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="摘要：">
              <el-col>
                <el-input
                  type="textarea"
                  placeholder="请简要概括文章内容..."
                  :rows="5"
                  maxlength="100"
                  show-word-limit
                  v-model="form.brief"
                ></el-input>
              </el-col>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>

    <!-- <el-card class="el-card-container"> -->
    <CKEditor v-model="form.content"></CKEditor>
    <!-- </el-card> -->
  </div>
</template>


<script>
import CKEditor from "@/components/ckeditor/CKEditor";
import { addEvent } from "@/api/event";
import { Message, MessageBox } from "element-ui";

export default {
  data() {
    return {
      form: {
        title: "",
        author: "",
        carousel: 0,
        carouselImgLink: "",
        carouselEndDate: "",
        content: "",
        brief: ""
      },
      isCarousel: [
        {
          label: "否",
          value: 0
        },
        {
          label: "是",
          value: 1
        }
      ],
      rules: {
        title: [
          { required: true, message: "请输入事记标题！", trigger: "change" }
        ],
        author: [
          { required: true, message: "请输入作者名字！", trigger: "change" }
        ]
      },
      loading: false
    };
  },
  computed: {
    // 首页是否轮播，决定是否开启轮播图链接和截止日期
    isDisabled() {
      var isDisabled = this.form.carousel == 0;
      if (isDisabled) {
        this.form.carouselImgLink = "";
        this.form.carouselEndDate = "";
      }
      return isDisabled;
    }
  },

  methods: {
    clean() {
      this.form.title = "";
      this.form.carousel = 0;
      this.form.carouselImgLink = "";
      this.form.carouselEndDate = "";
    },
    submitForm(formname) {
      this.$refs[formname].validate(valid => {
        if (valid) {
          this.loading = true;
          this.saveEvent();
        } else {
          return false;
        }
      });
    },
    saveEvent() {
      addEvent(this.form).then(response => {
        this.loading = false;
        console.log(response)
        if (response.code == 10000) {
          Message({
            message: response.msg,
            type: "success",
            duration: 3 * 1000
          });
        }
      });
    }
  },
  components: {
    CKEditor
  }
};
</script>

<style>
.el-card-container {
  margin-top: 20px;
}
</style>
