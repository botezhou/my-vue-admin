export const rsList = [
  {
    componentName: 'RecruitmentDemandSuite',
    props: {
      suite: 'suite',
      label: '招聘套件',
      print: false // 管理children的print
    },
    children: [
      {
          componentName: 'DepartmentField',   // 部门 其选项会在流程页面点击时加载(省流量) 先从缓存中获取,如果没有再发请求
          props: {
            id: 'applyUserDeptId',
            placeholder: "请选择(必填)",
            label: "申请部门",
            checked: '',
            multiple: false,      // 类型(只能选择一个部门/可同时选择多个部门) 
            required: true
          }
      }, {
          componentName: 'TextField',
          props:
          {
            id: 'jobPost',
            placeholder: "请输入(必填)",
            label: "岗位",
            required: true,
            defaultValue: ""
          }
      }, {
          componentName: 'CalenderField',
          props:
          {
            id: 'time',
            placeholder: "请选择(必填)",
            label: "用工日期",
            required: true,
            useCalender: true,                     // 是否使用日历
            format: "yyyy/MM/dd" 
          }
      }, {
          componentName: 'NumericField',
          props:
          {
            id: 'number',
            placeholder: "请输入(必填)",
            label: "需求人数",
            required: true,
            defaultValue: "0",
            unit: "人"
          }
      }, {
          componentName: 'TextareaField',
          props:
          {
            id: 'claim',
            placeholder: "请输入",
            label: "岗位要求",
            required: false,
            defaultValue: ""
          }
      }, {
          componentName: 'TextareaField',
          props:
          {
            id: 'remark',
            placeholder: "请输入",
            label: "需求备注",
            required: false,
            defaultValue: ""
          }
      }
    ]
  },
  {
    componentName: 'RecruitmentPlanSuite',
    props: {
      suite: 'suite',
      label: '招聘计划',
      options: ["网络", "招聘会", "人才猎头", '其它'],
      print: false // 管理children的print
    },
    children: [
      {
        componentName: 'TextField',
        props:
        {
            id: 'name',
            placeholder: "请输入(必填)",
            label: "招聘计划名称",
            required: true,
            defaultValue: ""
        }
      }, {
          componentName: 'SelectField',
          props:
          {
            id: 'channel',
            placeholder: "请选择(必填)",
            label: "招聘渠道",
            required: true,
            defaultValue: "",
            options: ["网络", "招聘会", "人才猎头", '其它']
          }
      }, {
          componentName: 'MoneyField',
          props:
          {
            id: 'budget',
            label: "预计费用",
            placeholder: "请输入(必填)",
            required: true,   
            showUpperCase: true        // 是否显示大写
          }
      }, {
          componentName: 'CalenderRangeField',
          props: {
            id: ['startTime', 'endTime', 'duration'],
            label: '日期区间',
            startTimeLabel: '开始时间',
            endTimeLabel: '结束时间',
            durationLabel: '时长',
            required: true,
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
              id: 'quantity',
              placeholder: "请输入(必填)",
              label: "招聘人数",
              required: true,
              defaultValue: "0",
              unit: "人"
          }
      }, {
          componentName: 'TextareaField',
          props:
          {
              id: 'explainContent',
              placeholder: "请输入",
              label: "招聘说明",
              required: false,
              defaultValue: ""
          }
      } 
    ]
  },
  {
    componentName: 'TrainPlanSuite',
    props: {
      suite: 'suite',
      label: '培训计划套件',
      options: ["内部培训","渠道培训","其他"],
      print: false // 管理children的print
    },
    children: [
      {
        componentName: 'TextField',
        props:
        {
          id: 'applyDept',
          placeholder: "请输入(必填)",
          label: "申请部门",
          required: true,
          defaultValue: ""
        }
      }, {
        componentName: 'TextField',
        props:
        {
          id: 'name',
          placeholder: "请输入(必填)",
          label: "计划名称",
          required: true,
          defaultValue: ""
        }
      }, {
        componentName: 'TextField',
        props:
        {
          id: 'personsResponsible',
          placeholder: "请输入(必填)",
          label: "负责人",
          required: true,
          defaultValue: ""
        }
      }, {
        componentName: 'SelectField',
        props:
        {
          id: 'channel',
          placeholder: "请选择(必填)",
          label: "培训渠道",
          required: true,
          defaultValue: "",
          options: ["内部培训","渠道培训","其他"]
        }
      }, {
        componentName: 'SelectField',
        props:
        {
          id: 'type',
          placeholder: "请选择(必填)",
          label: "培训形式",
          required: true,
          defaultValue: "",
          options: ["面授","函授","其他"]
        }
      }, {
        componentName: 'TextField',
        props:
        {
          id: 'address',
          placeholder: "请输入(必填)",
          label: "培训地点",
          required: true,
          defaultValue: ""
        }
      }, {
          componentName: 'TextField',
          props:
          {
            id: 'institutionName',
            placeholder: "请输入",
            label: "培训机构名称",
            required: false,
            defaultValue: ""
          }
      }, {
          componentName: 'TextField',
          props:
          {
            id: 'institutionContact',
            placeholder: "请输入",
            label: "培训机构联系人",
            required: false,
            defaultValue: ""
          }
      }, {
          componentName: 'TextField',
          props:
          {
            id: 'course',
            placeholder: "请输入(必填)",
            label: "培训课程",
            required: true,
            defaultValue: ""
          }
      }, {
          componentName: 'CalenderRangeField',
          props: {
            id: ['startTime', 'endTime', 'duration'],
            label: '日期区间',
            startTimeLabel: '开课时间',
            endTimeLabel: '结课时间',
            durationLabel: '时长',
            required: true,
            useCalender: true,
            format: "yyyy/MM/dd",
            autoCalcInterval: false,
            readonly: false,
            unit: '天'
          }
      }, {
          componentName: 'MoneyField',
          props:
          {
            id: 'budget',
            label: "预算",
            placeholder: "请输入(必填)",
            required: true,         
            showUpperCase: true        // 是否显示大写
          }
      }, {
          componentName: 'ContactsField',
          props:
          {
            id: 'participate',
            placeholder: "请选择",
            label: "参与培训人员",
            defaultValue: '',
            checked: '',
            multiple: true,
            required: false,
          }
      }, {
          componentName: 'DepartmentField', // DepartmentField
          props:
          {
            id: 'participationDept',
            placeholder: "请选择",
            label: "参与培训部门",
            checked: '',
            multiple: true,
            required: false,
          }
      }, {
          componentName: 'NumericField',
          props:
          {
            id: 'quantity',
            placeholder: "请输入(必填)",
            label: "人数",
            required: true,
            defaultValue: "0",
            unit: "人"
          }
      }, {
          componentName: 'TextareaField',
          props:
          {
            id: 'claim',
            placeholder: "请输入",
            label: "培训要求",
            required: false,
            defaultValue: ""
          }
      }, {
          componentName: 'TextareaField',
          props:
          {
            id: 'explanation',
            placeholder: "请输入",
            label: "培训说明",
            required: false,
            defaultValue: ""
          }
      }, {
          componentName: 'TextareaField',
          props:
          {
            id: 'content',
            placeholder: "请输入",
            label: "培训内容",
            required: false,
            defaultValue: ""
          }
      }, {
          componentName: 'TextareaField',
          props:
          {
            id: 'remark',
            placeholder: "请输入",
            label: "备注",
            required: false,
            defaultValue: ""
          }
      }
    ]
  },
  {
    componentName: 'BecomeAFullMemberSuite',
    props: {
      suite: 'suite',
      label: '转正套件',
      print: false // 管理children的print
    },
    children: [
        {
          componentName: 'TextField',
          props:
          {
            placeholder: "请选择(必填)",
            label: "入职时间",
            required: true,
            defaultValue: ""
          }
        }, {
            componentName: 'TextField',
            props:
            {
              placeholder: "请输入(必填)",
              label: "试用期",
              required: true,
              defaultValue: ""
            }
        }, {
            componentName: 'CalenderField',
            props:
            { 
              placeholder: "请选择(必填)",
              label: "转正日期",
              required: true,
              useCalender: true,                       // 是否使用日历
              format: "yyyy/MM/dd" 
            }
        }, {
            componentName: 'TextField',
            props:
            {
              placeholder: "请输入",
              label: "职位",
              required: false,
              defaultValue: ""
            }
        }, {
            componentName: 'TextField',
            props:
            {
              placeholder: "请输入",
              label: "职务",
              required: false,
              defaultValue: ""
            }
        }
    ]
  },
  {
    componentName: 'DepartureSuite',
    props: {
      suite: 'suite',
      label: '离职套件',
      print: false // 管理children的print
    },
    children: [
      {
          componentName: 'CalenderField',
          props:
          { 
            id: 'time',
            placeholder: "请选择(必填)",
            label: "离职时间",
            required: true,
            useCalender: true,                       // 是否使用日历
            format: "yyyy/MM/dd" 
          }
      }, {
          componentName: 'TextareaField',
          props:
          {
            id: 'reason',
            placeholder: "请输入",
            label: "离职原因",
            required: false,
            defaultValue: ""
          }
      }, {
          componentName: 'TextareaField',
          props:
          {
            id: 'remark',
            placeholder: "请输入",
            label: "备注",
            required: false,
            defaultValue: ""
          }
      }
    ]
  },
  {
    componentName: 'OnboardingSuite',
    props: {
      suite: 'suite',
      label: '入职套件',
      print: false // 管理children的print
    },
    children: [
      {
        componentName: 'TextField',
        props:
        {
          placeholder: "请输入(必填)",
          label: "入职人员姓名",
          required: true,
          defaultValue: ""
        }
      }, {
        componentName: 'DepartmentField',
        props:
        {
          placeholder: "请选择(必填)",
          label: "用人部门",
          checked: '',
          multiple: false,       // 类型(只能选择一个/可同时选择多个) 
          required: true
        }
      }, {
        componentName: 'TextField',
        props:
        {
          placeholder: "请输入",
          label: "职位",
          required: true,
          defaultValue: ""
        }
      }, {
        componentName: 'TextField',
        props:
        {
          placeholder: "请输入(必填)",
          label: "手机号",
          required: true,
          defaultValue: ""
        }
      }, {
        componentName: 'SelectField',
        props:
        {
          placeholder: "请选择",
          label: "员工类型",
          required: false,
          defaultValue: "",
          options: ["合同工","正式员工","临时工"]
        }
      }, {
        componentName: 'CalenderField',
        props:
        {
          placeholder: "请选择",
          label: "入职时间",
          required: false,
          useCalender: true,                       // 是否使用日历
          format: "yyyy/MM/dd", 
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
  }
]
