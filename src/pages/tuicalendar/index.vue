<template>
  <div class="p20">
    <code>文档暂不健全，后期完善</code>
  <calendar ref="calendar" style="height: 800px;"
            :calendars="calendarList"
            :schedules="scheduleList"
            :view="view"
            :taskView="taskView"
            :scheduleView="scheduleView"
            :theme="theme"
            :week="week"
            :month="month"
            :timezones="timezones"
            :disableDblClick="disableDblClick"
            :isReadOnly="isReadOnly"
            :template="template"
            :useCreationPopup="useCreationPopup"
            :useDetailPopup="useDetailPopup"
  />
  </div>
</template>
<script>
  import 'tui-calendar/dist/tui-calendar.css'
  import 'tui-calendar/node_modules/tui-date-picker/dist/tui-date-picker.css'
  import 'tui-calendar/node_modules/tui-time-picker/dist/tui-time-picker.css'
  import { Calendar } from '@toast-ui/vue-calendar';

  export default {
    name: 'myCalendar',
    components: {
      Calendar
    },
    data() {
      return {
        //选择类别
        calendarList: [
          {
            id: '0',
            name: 'home'
          },
          {
            id: '1',
            name: 'office'
          }
        ],
        //日历数据
        scheduleList: [
          {
            id: '1',
            calendarId: '1',
            title: 'my schedule',
            category: 'time',
            dueDateClass: '',
            start: '2019-01-09',
            end: '2019-01-10'
          },
          {
            id: '2',
            calendarId: '1',
            title: 'second schedule',
            category: 'time',
            dueDateClass: '',
            start: '2019-01-08',
            end: '2019-01-09'
          }
        ],
        //显示的视图 月 周 日 month week days
        view: 'month',
        taskView: false,
        scheduleView: ['time'],
        theme: {
          'month.dayname.height': '30px',
          'month.dayname.textAlign': 'center',
          'week.today.color': '#333',
          'week.daygridLeft.width': '100px',
          'week.timegridLeft.width': '100px'
        },
        week: {
          narrowWeekend: true,
          showTimezoneCollapseButton: true,
          timezonesCollapsed: false
        },
        month: {
          visibleWeeksCount: 7,
          startDayOfWeek: 1
        },
        timezones: [{
          timezoneOffset: 540,
          displayLabel: 'GMT+09:00',
          tooltip: 'Seoul'
        }, {
          timezoneOffset: -420,
          displayLabel: 'GMT-08:00',
          tooltip: 'Los Angeles'
        }],
        disableDblClick: false,
        isReadOnly: false,
        template: {
          milestone: function(schedule) {
            return `<span style="color:red;">${schedule.title}</span>`;
          },
          milestoneTitle: function() {
            return 'MILESTONE';
          },
        },
        useCreationPopup: true,
        useDetailPopup: true,
      }
    },
    method: {
      onAfterRenderSchedule(e) {
        this.$refs.tuiCalendar.getRootElement();
      },
      onBeforeCreateSchedule(e) {
        this.$refs.tuiCalendar.getRootElement();
      },
      onBeforeDeleteSchedule(e) {
        this.$refs.tuiCalendar.getRootElement();
      },
      onBeforeUpdateSchedule(e) {
        this.$refs.tuiCalendar.getRootElement();
      },
      onClickDayname(e) {
        this.$refs.tuiCalendar.getRootElement();
      },
      onClickSchedule(e) {
        this.$refs.tuiCalendar.getRootElement();
      },
      onClickTimezonesCollapseBtn(e) {
        this.$refs.tuiCalendar.getRootElement();
      }
    }
  }
</script>
