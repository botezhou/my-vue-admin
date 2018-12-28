<template>
  <div class="container">
    <div class="right-container">
      <div class="gantt-selected-info">
        <div v-if="selectedTask">
          <h2>{{selectedTask.text}}</h2>
          <!-- <span><b>ID: </b>{{selectedTask.id}}</span><br/> -->
          <span><b>进度: </b>{{(selectedTask.progress ? Number(selectedTask.progress) : 0)|toPercent}}%</span><br/>
          <span><b>开始时间: </b>{{selectedTask.start_date|niceDate}}</span><br/>
          <span><b>结束时间: </b>{{selectedTask.end_date|niceDate}}</span><br/>
        </div>
        <div v-else class="select-task-prompt">
          <h2>Click any task</h2>
        </div>
      </div>
      <ul class="gantt-messages">
        <li class="gantt-message" v-for="(message,index) in messages" :key="index">{{message}}</li>
      </ul>
    </div>
    <gantt ref="gantt" class="left-container" v-if="isLoading" :tasks="tasks" @task-updated="logTaskUpdate" @link-updated="logLinkUpdate" @task-selected="selectTask"></gantt>
  </div>
</template>

<script>
import Gantt from '@/components/gantt'
// import { ganttModelURL } from '@/api/http.js';
export default {
  name: 'app',
  components: {Gantt},
  data () {
    return {
      tasks: {
        data: [],
        links: []
      },
      selectedTask: null,
      messages: [],
      isLoading: false
    }
  },
  filters: {
    toPercent (val) {
      if(!val) return '0'
      return Math.round((+val) * 100)
    },
    niceDate (obj){
      return `${obj.getFullYear()} / ${obj.getMonth() + 1} / ${obj.getDate()}`
    }
  },
  created() {
      // this._getTasksModel();
  },
  mounted() {
     this._getTasksModel();
  },
  methods: {
    _getTasksModel() {
      this.isLoading = true
      this.tasks = {
        //id数据id, text任务名，start_date开始时间，end_date结束时间，duration间隔，progress进度，person负责人，parent父级id
        data: [  
        {id: 1, text: 'Task #444', start_date: '2017-05-06', end_date: '2017-05-06', duration: 3, progress: 0.6,person: ['周','王'],parent: null,},
        {id: 10, text: 'Task #2222', start_date: '2017-04-04', duration: 3, progress: 0.4,person: '王'},
        {id: 11,parent: 1, text: 'Task #2222', start_date: '2017-04-04', duration: 3, progress: 0.4,person: '王'}
        ],

  //    // 任务之间的连接线
        //source根源 target目标 也就是从id为1的指向id为2的
        //type:'0'是从1任务完成到2任务开始，type:'1'是1任务开始到2任务开始，
        //type:'2'是从1任务完成到2任务完成，type:'3'是从1任务开始到2任务完成

        links: [
          {id: 1, source: 1, target: 2, type: '0'}
        ]
      }
    },
    // 选择查看一个任务 右侧显示框
    selectTask (task) {
      console.log(task)
      this.selectedTask = task
    },
    // 右侧显示框更新其实
    addMessage (message) {
      this.messages.unshift(message)
      if(this.messages.length > 40) {
        this.messages.pop()
      }
    },
    // 数据更新 调用后台接口保存
    logTaskUpdate (id, mode, task) {
      let text = (task && task.text ? ` (${task.text})`: '')
      let message = `Task ${mode}: ${id} ${text}`
      this.addMessage(message)
      this.tasks.data.push(task)
      console.log(this.tasks)
    },
    // 数据更新 调用后台接口保存
    logLinkUpdate (id, mode, link) {
      let message = `Link ${mode}: ${id}`
      if(link){
        message += ` ( source: ${link.source}, target: ${link.target} )`
      }
      this.addMessage(message)
    }
  }
}
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .container {
    height: 100%;
    width: 100%;
  }

  .left-container {
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .right-container {
    border-right: 1px solid #cecece;
    float: right;
    height: 100%;
    width: 300px;
    box-shadow: 0 0 5px 2px #aaa;
    position: relative;
    z-index:2;
  }

  .gantt-messages {
    list-style-type: none;
    height: 50%;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding-left: 5px;
  }

  .gantt-messages > .gantt-message {
    background-color: #f4f4f4;
    box-shadow:inset 5px 0 #d69000;
    font-family: Geneva, Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin: 5px 0;
    padding: 8px 0 8px 10px;
  }

  .gantt-selected-info {
  border-bottom: 1px solid #cecece;
    box-sizing: border-box;
    font-family: Geneva, Arial, Helvetica, sans-serif;
    height: 50%;
    line-height: 28px;
    padding: 10px;
  }

  .gantt-selected-info h2 {
    border-bottom: 1px solid #cecece;
  }
  
  .select-task-prompt h2{
    color: #d9d9d9;
  }
</style>
