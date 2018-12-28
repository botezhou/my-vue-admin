export const options = {
    name: "vue-html5-editor",
    showModuleName: false,
    icons: {
      text: "fa fa-pencil",
      color: "fa fa-paint-brush",
      font: "fa fa-font",
      align: "fa fa-align-justify",
      list: "fa fa-list",
      link: "fa fa-chain",
      unlink: "fa fa-chain-broken",
      tabulation: "fa fa-table",
      image: "fa fa-file-image-o",
      hr: "fa fa-minus",
      eraser: "fa fa-eraser",
      undo: "fa-undo fa",
      "full-screen": "fa fa-arrows-alt",
      info: "fa fa-info",
    },
    //图片上传处理，接口上传，默认是base64图片
    // image: {
    //   // 单位是 byte
    //   sizeLimit: 10 * 512 * 1024,
    //   upload: {
    //     url: editorUploadURL,
    //     headers: {},
    //     params: {},
    //     fieldName: "image"
    //   },
    //   compress: {
    //       width: 400,
    //       quality: 80
    //   },
    //   uploadHandler (responseText) {
    //       var json = JSON.parse(responseText)
    //       if (!json.ok) {
    //         alert(json.msg)
    //       } else {
    //         return httpImgURL+json.data
    //       }
    //   }
    // },
    language: "zh-cn",
    i18n: {
      "zh-cn": {
        "align": "对齐方式",
        "image": "图片",
        "list": "列表",
        "link": "链接",
        "unlink": "去除链接",
        "table": "表格",
        "font": "文字",
        "full screen": "全屏",
        "text": "排版",
        "eraser": "格式清除",
        "info": "关于",
        "color": "颜色",
        "please enter a url": "请输入地址",
        "create link": "创建链接",
        "bold": "加粗",
        "italic": "倾斜",
        "underline": "下划线",
        "strike through": "删除线",
        "subscript": "上标",
        "superscript": "下标",
        "heading": "标题",
        "font name": "字体",
        "font size": "文字大小",
        "left justify": "左对齐",
        "center justify": "居中",
        "right justify": "右对齐",
        "ordered list": "有序列表",
        "unordered list": "无序列表",
        "fore color": "前景色",
        "background color": "背景色",
        "row count": "行数",
        "column count": "列数",
        "save": "确定",
        "upload": "上传",
        "progress": "进度",
        "unknown": "未知",
        "please wait": "请稍等",
        "error": "错误",
        "abort": "中断",
        "reset": "重置"
      }
    },
    hiddenModules: [],
    visibleModules: [
      "text",
      "color",
      "font",
      "align",
      "list",
      "link",
      "unlink",
      "tabulation",
      "image",
      "hr",
      "eraser",
      "undo",
      "full-screen",
      "info",
    ]
  }