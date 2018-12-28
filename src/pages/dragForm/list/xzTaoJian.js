export const xzList = [
  {
    componentName: 'OfficeSuppliesSuite',
    props: {
      suite: 'suite',
      label: '办公用品套件',
      print: false // 管理children的print
    },
    children: [
      {
        componentName: 'SelectField',
        props:
        {
            id: 'supplyId',
            placeholder: "请选择(必填)",
            related: "OfficeSuppliesSuite",
            label: "物品名称",
            required: true,
            defaultValue: "",
            options: []
        }
      },
      {
        componentName: 'SelectField',
        props:
        {
          id: 'action',
          placeholder: "请选择(必填)",
          label: "操作类型",
          required: true,
          defaultValue: "",
          options: ["采购入库", "领用", "借用", "归还", "维护", "报废"]
        }
      },
      {
        componentName: 'CalenderField',
        props:
        {
          id: 'optionTime',
          placeholder: "请选择(必填)",
          label: "操作日期",
          required: true,
          useCalender: true,
          format: "yyyy/MM/dd"
        }
      },
      {
        componentName: 'NumericField',
        props:
        {
            id: 'amount',
            placeholder: "请输入(必填)",
            label: "操作数量",
            required: true,
            defaultValue: "",
            unit: "个"
        }
      },
      {
        componentName: 'TextareaField',
        props:
        {
            id: 'remark',
            placeholder: "请输入",
            label: "备注",
            required: false,
            defaultValue: "",
        }
      }
    ]
  },
  {
    componentName: 'MeetRoomSuite',
    props: {
      suite: 'suite',
      label: '会议套件',
      print: false // 管理children的print
    },
    children: [
      {
        componentName: 'SelectField',
        props:
        {
          id: 'roomId',
          placeholder: "请选择(必填)",
          related: "MeetRoomSuite",
          label: "会议室",
          required: true,
          defaultValue: "",
          options: []
        }
      },
      {
        componentName: 'CalenderRangeField',
        props:
        {
          id: ['startTime', 'endTime', 'duration'],
          label: '日期区间',
          startTimeLabel: '开始时间',
          endTimeLabel: '结束时间',
          durationLabel: '时长',
          required: true,
          useCalender: true,
          format: "yyyy/MM/dd",
          autoCalcInterval: true,
          readonly: true,
          unit: '天'
          }
      },
      {
        componentName: 'TextareaField',
        props:
        {
            placeholder: "请输入",
            label: "事由",
            required: false,
            defaultValue: ""
        }
      },
    ]
  },
  {
    componentName: 'CarSuite',
    props: {
      suite: 'suite',
      label: '车辆套件',
      print: false // 管理children的print
    },
    children: [
      {
        componentName: 'SelectField',
        props:
        {
            id: 'carId',
            placeholder: "请选择(必填)",
            related: "CarSuite",
            label: "车牌号",
            required: true,
            defaultValue: "",
            options: []
        }
      },
      {
        componentName: 'ContactsField', // 点击该组件触发获取人员的事件
        props:
        {
            placeholder: "请选择",
            label: "随行人员",
            multiple: true,
            required: false,
            
        }
      }, {
        componentName: 'CalenderRangeField',
        props:
        {
          id: ['startTime', 'endTime', 'duration'],
          label: '日期区间',
          startTimeLabel: '开始时间',
          endTimeLabel: '结束时间',
          durationLabel: '时长',
          required: false,
          useCalender: true,
          format: "yyyy/MM/dd",
          autoCalcInterval: false,
          readonly: false,
          unit: '天'
        }
      }, {
          componentName: 'NumericField',
          props:
          { 
              id: 'applyMileage',
              placeholder: "请输入",
              label: "里程",
              required: false,
              defaultValue: "",
              unit: "公里"
          }
      }, {
        componentName: 'DetailField',
        props: {
          label: "行程明细", 
          addLabel: '增加明细'
        },
        children: [
          {
            componentName: 'CalenderRangeField',
            props:
            {
              label: '日期区间',
              startTimeLabel: '开始时间',
              endTimeLabel: '结束时间',
              durationLabel: '时长',
              required: false,
              useCalender: true,
              format: "yyyy/MM/dd",
              autoCalcInterval: false,
              readonly: false,
              unit: '天'
            }
          }, {
              componentName: 'TextField',  
              props:
              {
                placeholder: "请输入"	,	// 如果为空就不传
                label: "启始地",
                required: false,
                defaultValue: ""	// 默认值 如果是空就不传
              }
          }, {
              componentName: 'TextField',  
              props:
              {
                  placeholder: "请输入",		// 如果为空就不传
                  label: "目的地",
                  required: false,
                  defaultValue: ""	// 默认值 如果是空就不传
              }
          }
        ]
      }, {
        componentName: 'TextareaField',
        props:
        {
          id: 'cause',
          placeholder: "请输入",
          label: "事由",
          required: false,
          defaultValue: ""
        }
      }
    ]
  },
  {
    componentName: 'CostSuite',
    props: {
      suite: 'suite',
      label: '费用套件',
      allowProxy: 'true',
      options: ["支付宝", "现金", "银行"],
      print: false // 管理children的print
    },
    children: [
      {
        componentName: 'TextField',  
        props:
        {
          placeholder: "请输入(必填)",
          label: "用款部门",
          required: true,
          defaultValue: ""
        }
      }, { //allowProxy： 为true 是显示
          componentName: 'ContactsField',    // 联系人 
          props:
          {
            id: "applyUserId",
            placeholder: "请选择(必填)",
            label: "申请人",
            multiple: false ,      // 类型(只能选择一人/可同时选择多人) 
            required: true
          }
      }, {
          componentName: 'TextareaField',
          props:
          {
            placeholder: "请输入",
            label: "费用事由",
            required: false,
            defaultValue: ""
          }
      }, {
        componentName: 'DetailField',
        props: {
          label: "费用明细", 
          addLabel: '增加明细'
        },
        children: [
          {
            componentName: 'TextField', 
            props:
            {
                placeholder: "请输入",    // 如果为空就不传
                label: "费用项目",
                required: false,
                defaultValue: "",  // 默认值 如果是空就不传
            }
          }, {
              componentName: 'MoneyField', // 金额 (内部输入内容会被识别为Double或者字符串) 默认保留2位
              props:
              {
                  label: "金额",
                  placeholder: "请输入",
                  required: false ,        
                  showUpperCase: false        // 是否显示大写
              }
          }, {
              componentName: 'NumericField',
              props:
              {
                placeholder: "请输入",
                label: "票据张数",
                required: false,
                defaultValue: "",
                unit: ""
              }
          }, {
              componentName: 'TextareaField',
              props:
              {
                  placeholder: "请输入",
                  label: "备注",
                  required: false,
                  defaultValue: ""
              }
          }
        ]
      }, {
          componentName: 'MoneyField', // 金额 (内部输入内容会被识别为Double或者字符串) 默认保留2位
          props:
          {
            label: "费用总额",
            placeholder: "请输入(必填)",
            required: true,       
            showUpperCase: true        // 是否显示大写
          }
      }, {
          componentName: 'SelectField',
          props:
          {
            placeholder: "请选择(必填)",
            label: "支付方式",
            required: true,
            defaultValue: "",
            options: ["支付宝", "现金", "银行"]
          }
      }, {
            componentName: 'TextField',
            props:
            {
                placeholder: "请输入",     // 如果为空就不传
                label: "开户行",
                required: false,
                defaultValue: ""    // 默认值 如果是空就不传
            }
      }, {
        componentName: 'TextField',  
        props:
        {
            placeholder: "请输入",     // 如果为空就不传
            label: "账户",
            required: false,
            defaultValue: ""    // 默认值 如果是空就不传
        }
      }
    ]
  },
  {
    componentName: 'PaymentSuite',
    props: {
      suite: 'suite',
      label: '出款套件',
      allowProxy: false,
      options: ["支付宝", "现金", "银行"],
      print: false // 管理children的print
    },
    children: [
      {
        componentName: 'TextField',  
        props:
        {
          placeholder: "请输入(必填)",
          label: "用款部门",
          required: true,
          defaultValue: ""
        }
      }, { //allowProxy 为true 是显示
        componentName: 'ContactsField',    // 联系人 
        props:
        {
          id: "applyUserId",
          placeholder: "请选择(必填)",
          label: "申请人",
          multiple: false,      // 类型(只能选择一人/可同时选择多人) 
          required: false
        }
      }, {
        componentName: 'TextareaField',
        props:
        {
          placeholder: "请输入",
          label: "付款事由",
          required: false,
          defaultValue: ""
        }
      }, {
        componentName: 'MoneyField', // 金额 (内部输入内容会被识别为Double或者字符串) 默认保留2位
        props:
        {
          placeholder: "请输入(必填)",
          label: "付款总额",
          placeholder: "",
          required: true,       
          showUpperCase: true        // 是否显示大写
        }
      }, {
        componentName: 'TextField',  
        props:
        {
          placeholder: "请输入(必填)",
          label: "收款单位",
          required: true,
          defaultValue: ""    // 默认值 如果是空就不传
        }
      }, {
        componentName: 'TextField', 
        props:
        {
          placeholder: "请输入",     // 如果为空就不传
          label: "开户行",
          required: false,
          defaultValue: ""    // 默认值 如果是空就不传
        }
      }, {
        componentName: 'TextField',  
        props:
        {
          placeholder: "请输入",     // 如果为空就不传
          label: "账户",
          required: false,
          defaultValue: ""    // 默认值 如果是空就不传
        }
      }, {
        componentName: 'SelectField',
        props:
        {
          placeholder: "请选择(必填)",
          label: "付款方式",
          required: true,
          defaultValue: "",
          options: ["支付宝", "现金", "银行"]
        }
      },  {
        componentName: 'TextField',  
        props:
        {
          placeholder: "请输入",    // 如果为空就不传
          label: "出款单位",
          required: true,
          defaultValue: ""  // 默认值 如果是空就不传
        }
      }, {
        componentName: 'TextField',  
        props:
        {
          placeholder: "请输入",    // 如果为空就不传
          label: "开户行",
          required: false,
          defaultValue: ""    // 默认值 如果是空就不传
        }
      }, {
        componentName: 'TextField',  
        props:
        {
          placeholder: "请输入" ,    // 如果为空就不传
          label: "账户",
          required: false,
          defaultValue: ""    // 默认值 如果是空就不传
        }
      }
    ]
  },
  {
    componentName: 'SealUseSuite',
    props: {
      suite: 'suite',
      label: '用章套件',
      options: ["公章"],
      print: false // 管理children的print
    },
    children: [
      {
        componentName: 'SelectField',
        props:
        {
          placeholder: "请选择(必填)",
          label: "用章类型",
          required: true,
          defaultValue: "",
          options: ["公章"]
        }
      }, {
        componentName: 'TextField',
        props:
        {
          placeholder: "请输入(必填)",     // 如果为空就不传
          label: "用章公司名称",
          required: true,
          defaultValue: ""    // 默认值 如果是空就不传
        }
      }, {
        componentName: 'TextField',  
        props:
        {
          placeholder: "请输入(必填)",     // 如果为空就不传
          label: "用章文件名称",
          required: true,
          defaultValue: ""    // 默认值 如果是空就不传
        }
      }, {
        componentName: 'TextareaField',
        props:
        {
          placeholder: "请输入",
          label: "申请原因",
          required: false,
          defaultValue: ""
        }
      }, {
        componentName: 'RadioField',
        props:
        {
          placeholder: "请选择(必填)",
          label: "是否外带",
          required: true,
          defaultValue: "",
          options: ["是", "否"]
        }
      }, 
      { //如果 是否外带 选择 是 则 显示
        componentName: 'CalenderRangeField',
        props:
        {
          label: '日期区间',
          startTimeLabel: '借用时间',
          endTimeLabel: '归还时间',
          durationLabel: '时长',
          required: true,
          useCalender: true,
          format: "yyyy/MM/dd",
          autoCalcInterval: false,
          readonly: false,
          unit: '天'
        }
      },
      { //如果 是否外带 选择 否 则 显示
        componentName: 'CalenderField',
        props:
        {
          placeholder: "请选择(必填)",
          label: "使用时间",
          required: true,
          useCalender: true,                     // 是否使用日历
          format: "yyyy/MM/dd" 
        }
      }
    ]
  },
  {
    componentName: 'AptitudeSuite',
    props: {
      suite: 'suite',
      label: '资质套件',
      options: ["营业执照正本", "营业执照副本", "开户许可证", "机构代码证", "公司章程", "法人身份证", "其他"],
      print: false // 管理children的print
    },
    children: [
      {
        componentName: 'SelectField',
        props:
        {
          placeholder: "请选择(必填)",
          label: "资质种类",
          required: true,
          defaultValue: "",
          options: ["营业执照正本", "营业执照副本", "开户许可证", "机构代码证", "公司章程", "法人身份证", "其他"], 
        }
      },
      {
        componentName: 'TextField',
        props:
        {
          placeholder: "请输入",     // 如果为空就不传
          label: "资质公司名称",
          required: true,
          defaultValue: ""    // 默认值 如果是空就不传
        }
      },
      {
        componentName: 'TextareaField',
        props:
        {
            placeholder: "请输入",
            label: "申请原因",
            required: false,
            defaultValue: ""
        }
      },
      {   
        componentName: 'SelectField',
        props:
        {
          placeholder: "请选择(必填)",
          label: "是否外带",
          required: true,
          defaultValue: "",
          options: ["是", "否"]
        }
      }, 
      { 
        componentName: 'CalenderRangeField',
        props:
        {
          label: '日期区间',
          startTimeLabel: '借用时间',
          endTimeLabel: '归还时间',
          durationLabel: '时长',
          required: false,
          useCalender: true,
          format: "yyyy/MM/dd",
          autoCalcInterval: false,
          readonly: false,
          unit: '天'
        }
      },
      { 
        componentName: 'CalenderField',
        props:
        {
            placeholder: "请选择",
            label: "使用时间",
            required: false,
            useCalender: true,                       // 是否使用日历
            format: "yyyy/MM/dd" 
        }
      }
    ]
  },
  {
    componentName: 'ContractSuite',
    props: {
      suite: 'suite',
      label: '合同套件',
      print: false // 管理children的print
    },
    children: [
      {
        componentName: 'DetailField',
        props: {
          label: "合同明细", 
          addLabel: '增加明细',
          required: true
        },
        children: [
          {
            componentName: 'TextField',
            props:
            {
              placeholder: "请输入(必填)",     // 如果为空就不传
              label: "合同编号",
              required: true,
              defaultValue: ""    // 默认值 如果是空就不传
            }
          }, {
              componentName: 'CalenderField',
              props:
              {
                placeholder: "请选择(必填)",    
                label: "签约日期",
                required: true,
                useCalender: true,                       // 是否使用日历
                format: "yyyy/MM/dd" 
              }
          }, {
              componentName: 'TextField',
              props:
              {
                placeholder: "请输入(必填)",     // 如果为空就不传
                label: "我方单位名称",
                required: true,
                defaultValue: ""    // 默认值 如果是空就不传
              }
          }, {
              componentName: 'TextField',
              props:
              {
                placeholder: "请输入(选填)",     // 如果为空就不传
                label: "我方负责人",
                required: false,
                defaultValue: ""    // 默认值 如果是空就不传
              }
          }, {
              componentName: 'TextField',
              props:
              {
                placeholder: "请输入(必填)",     // 如果为空就不传
                label: "对方单位名称",
                required: true,
                defaultValue: ""    // 默认值 如果是空就不传
              }
          }, {
              componentName: 'TextField',
              props:
              {
                placeholder: "请输入(选填)",     // 如果为空就不传
                label: "对方负责人",
                required: false,
                defaultValue: ""    // 默认值 如果是空就不传
              }
          }, {
            componentName: 'TextareaField',
            props:
            {
              placeholder: "请输入",
              label: "内容",
              required: false,
              defaultValue: ""
            }
          }
        ]
      }
    ]
  }
]