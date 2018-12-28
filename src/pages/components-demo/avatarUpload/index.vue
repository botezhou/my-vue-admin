<template>
    <div class="avatar-upload p20">
        <code>
			基于vue
      <a class="link-type" href="//github.com/dai-siki/vue-image-crop-upload"> vue-image-crop-upload</a>
		</code>
		<image-crop ref="imageCrop" 
			:height="200"
			:width="200"
			url="/upload"
			@cropUploadSuccess="cropUploadSuccess"
			@cropUploadFail="cropUploadFail"
		    @cropSuccess="cropSuccess">
		</image-crop>	
		<div :style="{zIndex:zIndex,height:height,width:width}" class="pan-item">
			<div class="pan-info">
			<div class="pan-info-roles-container">
				<slot/>
			</div>
			</div>
			<img :src="imgDataUrl" class="pan-thumb">
		</div>
		<el-button type="primary" icon="upload" style="margin-left: 40px;" @click="toggleShow">Change Avatar
    </el-button>
    </div>
</template>
<script>
	// import 'babel-polyfill'; // es6 shim
	import ImageCrop from '@/components/image-crop';
    export default {
		data() {
            return {
				zIndex: 1,
				width:200,
				height:200,
				imagecropperShow: false,
				imgDataUrl: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191',
            }			
		},
		components: {
			ImageCrop
		},
		methods: {
			toggleShow() {
				this.$refs.imageCrop.imagecropperShow = !this.$refs.imageCrop.imagecropperShow;
			},
			cropSuccess(imgDataUrl, field){
				this.imgDataUrl = imgDataUrl;
			},
			cropUploadSuccess(jsonData, field){
				console.log('-------- upload success --------');
				console.log(jsonData);
				console.log('field: ' + field);
			},
			cropUploadFail(status, field){
				console.log('-------- upload fail --------');
				console.log(status);
				console.log('field: ' + field);
			}
		}
    }
	

</script>
<style lang="less" scoped>
.pan-item {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  cursor: default;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.pan-info-roles-container {
  padding: 20px;
  text-align: center;
}

.pan-thumb {
  width: 100%;
  height: 100%;
  background-size: 100%;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  transform-origin: 95% 40%;
  transition: all 0.3s ease-in-out;
}

.pan-thumb:after {
  content: '';
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 50%;
  top: 40%;
  left: 95%;
  margin: -4px 0 0 -4px;
  background: radial-gradient(ellipse at center, rgba(14, 14, 14, 1) 0%, rgba(125, 126, 125, 1) 100%);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.9);
}

.pan-info {
  position: absolute;
  width: inherit;
  height: inherit;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 0 0 0 5px rgba(0, 0, 0, 0.05);
}

.pan-info h3 {
  color: #fff;
  text-transform: uppercase;
  position: relative;
  letter-spacing: 2px;
  font-size: 18px;
  margin: 0 60px;
  padding: 22px 0 0 0;
  height: 85px;
  font-family: 'Open Sans', Arial, sans-serif;
  text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);
}

.pan-info p {
  color: #fff;
  padding: 10px 5px;
  font-style: italic;
  margin: 0 30px;
  font-size: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
}

.pan-info p a {
  display: block;
  color: #333;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  color: #fff;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 1px;
  padding-top: 24px;
  margin: 7px auto 0;
  font-family: 'Open Sans', Arial, sans-serif;
  opacity: 0;
  transition: transform 0.3s ease-in-out 0.2s, opacity 0.3s ease-in-out 0.2s, background 0.2s linear 0s;
  transform: translateX(60px) rotate(90deg);
}

.pan-info p a:hover {
  background: rgba(255, 255, 255, 0.5);
}

.pan-item:hover .pan-thumb {
  transform: rotate(-110deg);
}

.pan-item:hover .pan-info p a {
  opacity: 1;
  transform: translateX(0px) rotate(0deg);
}
</style>