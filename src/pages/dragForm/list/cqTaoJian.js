export const cqList = [
  {
    componentName: 'GoOutSuite',
    props: {
      suite: 'suite',
      label: '外出套件',
      print: false, // 管理children的print
    },
    children: [{
      componentName: 'CalenderRangeField',
      props:
      {
        id: ['startTime', 'endTime', 'days'],
        label: '日期区间',
        startTimeLabel: '开始时间',
        endTimeLabel: '结束时间',
        durationLabel: '时长',
        required: true,
        useCalender: true,
        format: "yyyy/MM/dd HH:mm",
        autoCalcInterval: true,
        readonly: false,
        unit: '',
        defaultValue: ''
      }
    }, {
        componentName: 'TextField',  
        props:
        {
          placeholder: "请输入(必填)",		// 如果为空就不传
          label: "外出地点",
          required: true,
          defaultValue: "",	// 默认值 如果是空就不传
        }
    }, {
        componentName: 'TextareaField',
        props:
        {
          placeholder: "请输入",
          label: "外出事由",
          required: false,
          defaultValue: ""
        }
    }]
  }, {
    componentName: 'OvertimeSuite',
    props: {
      suite: 'suite',
      label: '加班套件',
      options: ['方式1', '方式2'],
      print: false // 管理children的print
    },
    children: [
      {
        componentName: 'CalenderRangeField',
        props: {
          id: ['startTime', 'endTime', 'days'],
          label: '日期区间',
          startTimeLabel: '开始时间',
          endTimeLabel: '结束时间',
          durationLabel: '时长',
          required: true,
          useCalender: true,
          format: "yyyy/MM/dd HH:mm",
          autoCalcInterval: true,
          readonly: false,
          unit: '',
          defaultValue: ''
        }
      }, {
          componentName: 'RadioField', // 单选框(内部输入内容会被识别为字符串)
          props:
          {
            placeholder: "请选择(必填)",
            label: "是否法定假期",
            required: true,
            defaultValue: "", // 单选按钮必须有默认值
            options: ["是", "否"], 	// 单选按扭必须有1个选项
          }
      }, {
          componentName: 'SelectField',
          props:
          {
            placeholder: "请选择(必填)",
            label: "加班核算方式",
            required: true,
            defaultValue: "",
            options: ['方式1', '方式2']
          }
      }, {
          componentName: 'TextareaField',
          props:
          {
            placeholder: "请输入",
            label: "加班原因",
            required: false,
            defaultValue: ""
          }
      }
    ]
  }, {
    componentName: 'AttendanceSuite',
    props: {
      suite: 'suite',
      label: '补卡套件',
      print: false // 管理children的print
    },
    children: [
        {
          componentName: 'CalenderField',
          props:
          {
              id: 'time',
              placeholder: "请选择(必填)",
              label: "补卡时间",
              required: true,
              useCalender: true,                  // 是否使用日历
              format: "yyyy/MM/dd HH:mm" 
          }
        },
        {
          componentName: 'TextareaField',
          props:
          {
              placeholder: "请输入",
              label: "缺卡原因",
              required: false,
              defaultValue: ""
          }
        }
    ]
  }, {
    componentName: 'BusinessTripSuite',
    props: {
      suite: 'suite',
      label: '出差套件',
      print: false // 管理children的print
    },
    children: [{
        componentName: 'DetailField',
        props: {
            label: "行程明细", 
            addLabel: '增加明细',
            required: true,
            index: 1
        },
        children: [
          {
            componentName: 'TextField',
            props:
            {
                placeholder: "请输入(必填)",
                label: "出差地点",
                required: true
            }
          }, {
            componentName: 'CalenderRangeField',
            props:
            {
                id: ['startTime?', 'endTime?', 'days?'],
                label: '日期区间', 
                startTimeLabel: '开始时间',
                endTimeLabel: '结束时间',
                durationLabel: '天数',
                required: true,
                useCalender: true,
                format: "yyyy/MM/dd HH:mm",
                autoCalcInterval: true,
                readonly: true,
                unit: ''
            }
          }, {
            componentName: 'TextareaField',
            props:
            {
                placeholder: "请输入",
                label: "出差事由",
                required: false,
                defaultValue: ""
            }
          }
        ]
      }
    ]
  }, {
    componentName: 'LeaveSuite',
    props: {
    	suite: 'suite',
      	label: '请假套件',
        print: false // 管理children的print
    },
    children: [
        {
            componentName: 'SelectField',
            props:
            {
            	id: 'rule',
                placeholder: "请选择",
                related: "LeaveSuite",
                label: "请假类型",
                required: true,
                defaultValue: "",
                options: []
            }
        },
        {
            componentName: 'CalenderRangeField',
            props:
            {
                id: ['startTime', 'endTime', 'days'],
                label: '日期区间',
                startTimeLabel: '开始时间',
                endTimeLabel: '结束时间',
                durationLabel: '天数',
                required: true,
                useCalender: true,
                format: "yyyy/MM/dd HH:mm",
                autoCalcInterval: true,
                readonly: false,
                unit: ""
            }
        },
        {
            componentName: 'TextareaField',
            props:
            {
                placeholder: "请输入",
                label: "请假事由",
                required: false,
                defaultValue: ""
            }
        }
    ]
}]
