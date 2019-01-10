<template>
  <div class="detail-box">
    <div class="" v-for="(item, index) in content" :key="index">
      <div :class="{detailBox: item.componentName == 'DetailField'}" v-if="item.componentName == 'DetailField' || item.componentName.indexOf('Suite')>-1">
        <div class="detail-title" v-if="item.componentName == 'DetailField'">{{item.props.label+item.props.index}}</div>
        <div :class="{detailContent: item.componentName == 'DetailField'}" v-for="(childItem, cIndex) in item.children" :key="cIndex">
          <div :class="{detailBox: childItem.componentName == 'DetailField'}" v-if="childItem.componentName === 'DetailField'">
            <div class="detail-title" v-if="childItem.componentName == 'DetailField'">{{childItem.props.label+childItem.props.index}}</div>
            <div :class="{detailContent: childItem.componentName == 'DetailField'}" v-for="(tjChildItem, tjcIndex) in childItem.children" :key="tjcIndex">
              <div v-if="tjChildItem.componentName === 'CalenderRangeField'">
                <div class="dateTimes-box clearfix">
                  <div class="f-left">
                    <span>{{tjChildItem.props.startTimeLabel}}：</span>
                    <span>{{tjChildItem.props.startTime}}</span>
                  </div>
                  <div class="f-left">
                    <span>{{tjChildItem.props.endTimeLabel}}：</span>
                    <span>{{tjChildItem.props.endTime}}</span>
                  </div>
                  <div class="f-left">
                    <span>{{tjChildItem.props.durationLabel}}：</span>
                    <span>{{tjChildItem.props.duration}}</span>
                  </div>
                </div>
              </div>
              <div v-else>
                <span>{{tjChildItem.props.label}}：</span>
                <span>{{tjChildItem.props.defaultValue}}</span>
              </div>
            </div>
          </div>
          <div v-else-if="childItem.componentName === 'CalenderRangeField'">
            <div class="dateTimes-box clearfix">
              <div class="f-left">
                <span>{{childItem.props.startTimeLabel}}：</span>
                <span>{{childItem.props.startTime}}</span>
              </div>
              <div class="f-left">
                <span>{{childItem.props.endTimeLabel}}：</span>
                <span>{{childItem.props.endTime}}</span>
              </div>
              <div class="f-left">
                <span>{{childItem.props.durationLabel}}：</span>
                <span>{{childItem.props.duration}}</span>
              </div>
            </div>
          </div>
          <div v-else>
            <span>{{childItem.props.label}}：</span>
            <span>{{childItem.props.defaultValue}}</span>
          </div>
        </div>
      </div>
      <div v-else-if="item.componentName === 'CalenderRangeField'">
        <div class="dateTimes-box clearfix">
          <div class="f-left">
            <span>{{item.props.startTimeLabel}}：</span>
            <span>{{item.props.startTime}}</span>
          </div>
          <div class="f-left">
            <span>{{item.props.endTimeLabel}}：</span>
            <span>{{item.props.endTime}}</span>
          </div>
          <div class="f-left">
            <span>{{item.props.durationLabel}}：</span>
            <span>{{item.props.duration}}</span>
          </div>
        </div>
      </div>
      <div v-else>
        <span>{{item.props.label}}：</span>: <span>{{item.props.defaultValue}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      content: {
        type: Array,
        default: null
      }
    }
  }
</script>
<style lang="less" scoped>
  .detail-box{
    line-height: 40px;
    padding:10px;
  }
  .detailBox{
    border:1px solid #ccc;
    margin-bottom:10px;
    .detail-title{
      padding:5px 10px;
      background:#f1f1f1;
    }
    .detailContent{
      padding:10px;
    }
  }
  .dateTimes-box{
    .f-left +.f-left{
      margin-left: 10px;
    }
  }
</style>
