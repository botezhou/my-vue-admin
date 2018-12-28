<template>
    <div class="image-crop">
        <my-upload field="img"
            @crop-success="cropSuccess"
            @crop-upload-success="cropUploadSuccess"
            @crop-upload-fail="cropUploadFail"
            v-model="imagecropperShow"
            :width="width"
            :height="height"
            :url="uploadUrl"
            :params="params"
            :headers="headers"
            img-format="png">
        </my-upload>
    </div>
</template>
<script>
	import myUpload from 'vue-image-crop-upload';
    export default {
        name: 'image-crop',
        props: {
            uploadUrl: {
                type: String,
                default: null
            },
            width: {
                type: Number,
                default: 200
            },
            height: {
                type: Number,
                default: 200
            },
            params: {
                type: Object,
                default: null
            },
            headers: {
                type: Object,
                default: null 
            },
            // imagecropperShow: {
            //     type: Boolean,
            //     default: false 
            // }
        },
		data() {
            return {
                imagecropperShow: false
            }			
		},
		components: {
			'my-upload': myUpload
		},
		methods: {
            /**
			 * crop success
			 *
			 * [param] imgDataUrl
			 * [param] field
			 */
			cropSuccess(imgDataUrl, field){
                console.log('-------- crop success --------');
                this.$emit('cropSuccess', imgDataUrl)
			},
			/**
			 * upload success
			 *
			 * [param] jsonData   服务器返回数据，已进行json转码
			 * [param] field
			 */
			cropUploadSuccess(jsonData, field){
				console.log('-------- upload success --------');
				console.log(jsonData);
                console.log('field: ' + field);
                this.$emit('cropUploadSuccess', jsonData)
			},
			/**
			 * upload fail
			 *
			 * [param] status    server api return error status, like 500
			 * [param] field
			 */
			cropUploadFail(status, field){
				console.log('-------- upload fail --------');
				console.log(status);
                console.log('field: ' + field);
                this.$emit('cropUploadFail', field)
			}
		}
    }
</script>