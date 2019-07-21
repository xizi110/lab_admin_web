<template>
	<div>
		<el-card class="el-card-container">
			<el-row type="flex" align="middle">
				<el-col :span="10">添加事记</el-col>
				<el-col :span="10" :offset="4" align="right">
					<el-button icon="el-icon-refresh">重置</el-button>
					<el-button type="primary" icon="el-icon-s-promotion" @click="submitForm('form')">提交</el-button>
				</el-col>
			</el-row>
			<el-row>
				<el-col>
					<el-form ref="form" :rules="rules" :model="form" label-width="100px" :inline="true">
						<el-form-item label="事记标题：" prop="title">
							<el-input v-model="form.title" placeholder="请输入事记标题..."></el-input>
						</el-form-item>
						<el-form-item label="首页轮播：">
							<el-select v-model="form.isCarousel" placeholder="请选择">
								<el-option
									v-for="item in carousel"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="链接：">
							<el-input v-model="form.carouselImgLink" placeholder="请输入轮播图片的外链..." :disabled="isDisabled"></el-input>
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
					</el-form>
				</el-col>
			</el-row>
		</el-card>

    <!-- <el-card class="el-card-container"> -->
      <CKEditor></CKEditor>
    <!-- </el-card> -->
	</div>
</template>


<script>

import CKEditor from "@/components/ckeditor/CKEditor"

	export default {
		data() {
			return {
				form: {
					title: "",
					isCarousel: 0,
					carouselImgLink: "",
					carouselEndDate: ""
				},
				carousel: [
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
				},
			};
		},
		computed: {
			// 首页是否轮播，决定是否开启轮播图链接和截止日期
			isDisabled() {
				var isDisabled = this.form.isCarousel == 0;
				if (isDisabled) {
					this.form.carouselImgLink = "";
					this.form.carouselEndDate = "";
				} 
				return isDisabled;
			}
		},

		methods: {
			submitForm(formname) {
				this.$refs[formname].validate(valid => {
					if (valid) {
						this.loading = true;
						console.log("succeed submit!");
					} else {
						console.log("error submit!!");
						return false;
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
