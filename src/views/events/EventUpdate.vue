<template>
  <div class="container">
    <el-card class="el-card-container" :loading="loading">
      <el-row type="flex" align="middle">
        <el-page-header @back="goBack" content="更新事记">
        </el-page-header>
        <el-col :span="5" :offset="15" align="right">
          <el-button
            type="primary"
            icon="el-icon-s-promotion"
            @click="submitForm('form')"
            :loading="loading"
          >保存</el-button>
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

    <el-card class="el-card-container">
    <CKEditor ref="child" v-model="form.content" ></CKEditor>
    </el-card>
  </div>
</template>


<script>
import CKEditor from "@/components/ckeditor/CKEditor";
import { updateEvent, getEvent } from "@/api/event";
import { Message, MessageBox } from "element-ui";
// import store from '@/store/index'

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
        brief: "",
        eventId: ""
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
    goBack(){
      this.$router.push("/event/list")
    },
    submitForm(formname) {
      // console.log(this.form);
      // return;
      this.$refs[formname].validate(valid => {
        if (valid) {
          this.loading = true;
          this.eventUpdate();
        } else {
          return false;
        }
      });
    },
    eventUpdate() {
      updateEvent(this.form).then(response => {
        this.loading = false;
        if (response && response.code == 10000) {
          Message({
            message: response.msg,
            type: "success",
            duration: 3 * 1000
          });
        }
      });
    }
  },
  created() {
    this.eventId = this.$route.query.eventId;
    var id = this.eventId;
    if(id){
      getEvent(this.eventId).then(response => {
        this.form = response.data;
        // 向编辑器设置内容
        this.$refs.child.setData(this.form.content);
      })
    }
  },
  components: {
    CKEditor
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
