<template>
  <div class="small-components p20">
    <code>本demo整理了一些网页交互效果 利于提高用户体验 后期还会继续完善</code>
    <div class="components-box">
      <div>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Buttons</span>
            </div>
            <div style="margin-bottom:50px;">
              <el-col :span="4" class="text-center">
                <div class="pan-btn blue-btn">Documentation</div>
              </el-col>
              <el-col :span="4" class="text-center">
                <div class="pan-btn light-blue-btn">Icons</div>
              </el-col>
              <el-col :span="4" class="text-center">
                <div class="pan-btn pink-btn">Excel</div>
              </el-col>
              <el-col :span="4" class="text-center">
                <div class="pan-btn green-btn">Table</div>
              </el-col>
              <el-col :span="4" class="text-center">
                <div class="pan-btn tiffany-btn">Form</div>
              </el-col>
              <el-col :span="4" class="text-center">
                <div class="pan-btn yellow-btn">Theme</div>
              </el-col>
            </div>
          </el-card>
        </el-row>
        <el-row>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>点击水波纹效果</span>
          </div>
          <touch-ripple :color="color" class="love">
            <div class="heart heart1">
              <span class="text">H</span>
            </div>
          </touch-ripple>
          <touch-ripple :color="color" :speed="speed2" class="love">
            <div class="heart heart3">
              <span class="text">E</span>
            </div>
          </touch-ripple>
          <touch-ripple :color="color" :speed="speed1" :transition="transition" class="love">
            <div class="heart heart2">
              <span class="text">A</span>
            </div>
          </touch-ripple>
          <touch-ripple :color="color" :speed="speed3" class="love">
            <div class="heart heart4">
              <span class="text">R</span>
            </div>
          </touch-ripple>
          <touch-ripple :color="color" class="love">
            <div class="heart heart5">
              <span class="text">T</span>
            </div>
          </touch-ripple>
        </el-card>
        </el-row>       
        <el-card>
          <div slot="header" class="clearfix">
            <span>表单输入效果</span>
          </div>
          <el-row class="form-box">
            <el-col :span="6">
              <float-label type="primary">
                <input type="email" placeholder="E-email">
              </float-label>
            </el-col>
            <el-col :span="6">
              <float-label type="danger">
                <input type="text" placeholder="User-Name">
              </float-label>
            </el-col>
            <el-col :span="6">
              <float-label type="info">
                 <textarea placeholder="Comment"></textarea>
              </float-label>
            </el-col>
            <el-col :span="6">
              <float-label type="danger">
                <select>
                  <option disabled selected>Framework</option>
                  <option>Vue</option>
                  <option>React</option>
                  <option>Angular</option>
                  <option>Ember</option>
                </select>
              </float-label>
            </el-col>
            </el-row>
        </el-card>      
      </div>
    </div>
  </div>
</template>
<script>
  import touchRipple from './components/touchRipple';
  import FloatLabel from "./components/floatLabel";
  export default {
    components: {
      touchRipple,
      FloatLabel
    },
    data() {
      return {
        color: '#fff',
        speed1: 0.6,
        speed2: 0.9,
        speed3: 1,
        transition: 'ease-in'
      }
    }

  }
</script>
<style lang="less" scoped>
  .components-box{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .love{
    position: relative;
  }
  .heart{
    position: relative;
    width: 210px;
    height: 180px;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    .text{
      color:#fff;
      font-size: 30px;
      font-weight: bold;
      z-index: 99999;
    }
  }

  .heart:after, .heart:before {
    position: absolute;
    content: "";
    left: 110px;
    top: 10px;
    width: 110px;
    height: 170px;
    background: #fc2e5a;
    border-radius: 100px 100px 0 0;
    -webkit-transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
  }
  .heart1:after, .heart1:before{
    background: #30b08f;
  }
  .heart2:after, .heart2:before{
    background: #e65d6e;
  }
  .heart3:after, .heart3:before{
    background: #4ab7bd;
  }
  .heart4:after, .heart4:before{
    background: #3a71a8;
  }
  .heart5:after, .heart5:before{
    background: #324157;
  }
  .heart:after {
    left: 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
  :after, :before {
    border-style: solid;
    border-width: 0;
    text-decoration: inherit;
    vertical-align: inherit;
    box-sizing: inherit;
  }
  .form-box{
    padding-top: 5px;
  }
</style>
