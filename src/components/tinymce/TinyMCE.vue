<template>
	<editor :init="init" v-model="data"></editor>
</template>
<script>
	import tinymce from "tinymce/tinymce";
	import "tinymce/themes/silver/theme.min.js";
	import "tinymce/skins/ui/oxide/skin.min.css";
	import Editor from "@tinymce/tinymce-vue";
	import "tinymce/plugins/image";
	import "tinymce/plugins/imagetools";
	import "tinymce/plugins/media";
	import "tinymce/plugins/table";
	import "tinymce/plugins/lists";
	import "tinymce/plugins/contextmenu";
	import "tinymce/plugins/wordcount";
	import "tinymce/plugins/textcolor";
	import "tinymce/plugins/paste";
	import "tinymce/plugins/codesample";
	import "tinymce/plugins/advlist";
	import "tinymce/plugins/fullscreen";
	import "tinymce/plugins/link";
	import "tinymce/plugins/hr";
	import "tinymce/plugins/preview";
	import "tinymce/plugins/importcss";

	export default {
		data() {
			return {
				data: "",
				init: {
					language_url: "/static/tinymce/langs/zh_CN.js",
					language: "zh_CN",
                    skin_url: "/static/tinymce/skins/lightgray",
					// height: ,
                    plugins: "lists image media table wordcount importcss advlist fullscreen link hr codesample",
                    image_advtab: true,
                    image_uploadtab: false,
					toolbar:
                        "fontselect | formatselect | fontsizeselect | forecolor backcolor | bold italic underline strikethrough | insertfile link image | table | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist | preview removeformat  hr | undo redo | fullscreen ",//需要的工具栏

                    // FontSelect
                    font_formats: `
                        微软雅黑=微软雅黑;
                        宋体=宋体;
                        黑体=黑体;
                        仿宋=仿宋;
                        楷体=楷体;
                        隶书=隶书;
                        幼圆=幼圆;
                        Andale Mono=andale mono,times;
                        Arial=arial, helvetica,
                        sans-serif;
                        Arial Black=arial black, avant garde;
                        Book Antiqua=book antiqua,palatino;
                        Comic Sans MS=comic sans ms,sans-serif;
                        Courier New=courier new,courier;
                        Georgia=georgia,palatino;
                        Helvetica=helvetica;
                        Impact=impact,chicago;
                        Symbol=symbol;
                        Tahoma=tahoma,arial,helvetica,sans-serif;
                        Terminal=terminal,monaco;
                        Times New Roman=times new roman,times;
                        Trebuchet MS=trebuchet ms,geneva;
                        Verdana=verdana,geneva;
                        Webdings=webdings;
                        Wingdings=wingdings,zapf dingbats`,
                    },
			};
		},
		components: {
			Editor
		}
	};
</script>