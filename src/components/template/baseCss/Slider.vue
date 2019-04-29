<template>
    <div class="block">
        <span class="demonstration">{{obj.label}}</span>
        <el-slider v-model="obj.value"></el-slider>
    </div>
</template>
<script>

export default {
    name: 'Slider',
    props: {
        obj: {
            type: Object
        }
    }
}
</script>


