<template>
  <div id="app">
    <!-- 工具栏容器 -->
    <div id="toolbar" @click="change"></div>
    <!-- 编辑器容器 -->
    <div id="editor" ref="child" :value="value" @keyup="change" ></div>
  </div>
</template>

<script>
import "@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh-cn";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import MyUploadAdapter from "./FileUpload"
var i = 0;
export default {
  name: "CKEditor",
  model: {
    prop: "value",
    event: 'change'
  },
  props: {
    value: String,
  },
  data() {
    return {
      editor: "" //编辑器实例
    };
  },
 
  mounted() {
    this.initCKEditor();
  },
  
  methods: {
    // 设置编辑框内容
    setData(data) {
        this.editor.setData(data)
    },
    // 内容变化时返回父组件
    change() {
      this.$emit('change', this.editor.getData())
    },
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
          "redo"
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
        },
        cloudServices: {
            // tokenUrl: 'https://example.com/cs-token-endpoint',
            uploadUrl: 'http://127.0.0.1/upload'
        }
      })
        .then(editor => {
          this.editor = editor;
          console.log("Editor was initialized", editor);
          document
            .querySelector("#toolbar")
            .appendChild(editor.ui.view.toolbar.element);
            editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
                return new MyUploadAdapter( loader );
            };
        })
        .catch(err => {
          console.error(err.stack);
        });
    }
  },

};
</script>

<style>
#editor {
  height: 650px;
  margin-bottom: 100px;
  border: 1px solid #b3b3b3;
  overflow-x: hidden;
}
#toolbar .ck.ck-reset_all, .ck.ck-reset_all *{
  white-space: pre-wrap;
}
</style>