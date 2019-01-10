export const kjList = [
  {
    componentName: 'TextField',
    props:
    {
      placeholder: "请输入",
      label: "单行输入框",
      required: false,
      defaultValue: "",
      print: false		// 是否参与打印
    }
  },
  {
    componentName: 'TextareaField',
    props:
    {
      placeholder: "请输入",
      label: "多行输入框",
      required: false,
      defaultValue: "",
      print: false		// 是否参与打印
    }
  },
  {
    componentName: 'NumericField', // 数字输入框(内部输入内容会被识别为Long类型)
    props:
    {
      placeholder: "请输入",
      label: "数字输入框",
      required: false,
      defaultValue: "",
      unit: "",
      print: false		// 是否参与打印
    }
  },
  {
    componentName: 'RadioField', // 单选框(内部输入内容会被识别为字符串)
    props:
    {
      placeholder: "请选择",
      label: "单选框",
      required: false,
      defaultValue: "",    // 单选按钮必须有默认值
      options: ["选项1", "选项2"], 	// 单选按扭必须有1个选项
      print: false		// 是否参与打印
    }
  },
  {
    componentName: 'CheckboxField', // 多选框(内部输入内容会被识别为字符串)  
    props:
    {
        placeholder: "请选择",
        label: "多选框",
        required: false,
        checkList: [],
        defaultValue: "",
        options: ["选项一", "选项二"],					// 多选按扭必须有1个选项
        print: false						// 是否参与打印
    }
  },
  {
    componentName: 'SelectField', // 单选框(内部输入内容会被识别为字符串)
    props:
    {
      placeholder: "请选择",
      label: "下拉框",
      required: false,
      defaultValue: "",    // 单选按钮必须有默认值
      options: ["选项1", "选项2"], 	// 单选按扭必须有1个选项
      print: false		// 是否参与打印
    }
  },
  {
    componentName: 'CalenderField', // 日期 (内部输入内容会被识别为字符串)
    props:
    {
      placeholder: "请选择",
      label: "日期",
      required: false,
      useCalender: true ,						// 是否使用日历
      format: "yyyy/MM/dd",
      print: false							// 是否参与打印
    }
  },
  {
    componentName: 'CalenderRangeField', // 日期区间 (内部输入内容会被识别为字符串)
    props:
    {
      label: '日期区间',
      startTimeLabel: '开始时间',
      endTimeLabel: '结束时间',
      durationLabel : '时长',   // 其中时长会被记录为Double类型
      startTime: '',
      endTime: '',
      required: false,						// 仅仅针对开始时间和结束时间和时长3个字段
      useCalender: true,						// 是否使用日历
      format: "yyyy/MM/dd",
      autoCalcInterval: true,					// 当为true是 才能设置label中第3个元素并且页面上显示
      readonly: false	,					// 仅仅是针对时长
      unit: '天',					// 时长的单位
      print: false							// 是否参与打印
    }
  },
  {
    componentName: 'DescriptionField', // 说明文字   该组件不是流程用户填写的
    props:
    {
      label: '说明文字',
      content: "说明文字",					// 字数(< 500) 暂定
      auditVisible: true,    		// 是否在审批页显示  默认为true
      print: false				// 是否参与打印
    }
  },
  {
    componentName: 'MoneyField', // 金额 (内部输入内容会被识别为Double或者字符串) 默认保留2位
    props:
    {
        label: "金额",
        placeholder: "请输入",
        required: false,		
        showUpperCase: false,	// 是否显示大写
        print: false				// 是否参与打印
    }
  },
  {
    componentName: 'ContactsField', 	// 联系人 其选项会在流程页面点击时加载(省流量) 先从缓存中获取,如果没有再发请求
    props:
    {
      placeholder: "请选择",
      label: "联系人",
      checked: '',
      defaultValue: '',
      multiple: true,       // 类型(只能选择一人/可同时选择多人) 
      required: false,
      print: false				// 是否参与打印
    }
  },
  {
    componentName: 'DepartmentField', 	// 部门 其选项会在流程页面点击时加载(省流量) 先从缓存中获取,如果没有再发请求
    props:
    {
      placeholder: "请选择",
      label: "部门",
      checked: '',
      multiple: true,      // 类型(只能选择一个部门/可同时选择多个部门) 
      required: false,
      print: false				// 是否参与打印
    }
  },
  {
    componentName: 'DetailField',     // 对应钉钉的明细组件 (内部处理详情组件 都可以放)
    props:
    {
      label: "明细", 
      addLabel: '增加明细',
      required: false,
      print: false,
      index: 1
    },
    children: [

    ]
  }
  
]
