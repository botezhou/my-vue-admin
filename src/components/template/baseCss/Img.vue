<template>
    <div>
       <img :src="obj.value" :style="{'width': obj.width+'%'}" />
    </div>
</template>
<script>

export default {
    name: 'Img',
    props: {
        obj: {
            type: Object
        }
    }
}
</script>


