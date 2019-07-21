<template>
	<div id="app">
		<!-- 工具栏容器 -->
		<div id="toolbar"></div>
		<!-- 编辑器容器 -->
		<div id="editor"></div>
	</div>
</template>

<script>
	import "@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn";
  import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

	export default {
		name: "app",
		data() {
			return {
				editor: DecoupledEditor //编辑器实例
			};
		},
		mounted() {
			this.initCKEditor();
		},
		methods: {
			initCKEditor() {
        DecoupledEditor.builtinPlugins.map(plugin => plugin.pluginName);
				DecoupledEditor.create(document.querySelector("#editor"), {
          height: 400,
					toolbar: [
            "heading",
            "|",
            "fontSize",
            "fontFamily",
            "|",
            "bold",
            "italic",
            "strikethrough",
            "underline",
            "|",
            "blockQuote",
            "alignment:left",
            "alignment:right",
            "alignment:center",
            "alignment:justify",
            "|",
            "link",
            "imageUpload",
            "imageTextAlternative",
            "imageStyle:full",
            "imageStyle:alignLeft",
            "imageStyle:alignRight",
            "mediaEmbed",
            "|",
            "numberedList",
            "bulletedList",
            "|",
            "insertTable",
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "highlight",
            "|",
            "undo",
            "redo",
            // "ckfinder"
					],
					language: "zh-cn",
					fontSize: {
						options: [8, 10, "default", 14, 16, 18, 20, 22, 24, 26, 28, 32, 48]
					},
					fontFamily: {
						options: [
							"宋体",
							"仿宋",
							"微软雅黑",
							"黑体",
							"仿宋_GB2312",
							"楷体",
							"隶书",
							"幼圆"
						]
					}
				})
					.then(editor => {
						console.log("Editor was initialized", editor);
						document
							.querySelector("#toolbar")
							.appendChild(editor.ui.view.toolbar.element);
					})
					.catch(err => {
						console.error(err.stack);
					});
			}
		}
	};
</script>

<style scoped>
#editor{
  min-height: 500px;
  margin-bottom: 30px;
  border: 1px solid #b3b3b3;
}
</style>