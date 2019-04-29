<template>
    <p :style="{'font-size': obj.fontSize, 'line-height': obj.lineHeight}">{{obj.value}}</p>
</template>
<script>

export default {
    name: 'P',
    props: {
        obj: {
            type: Object
        }
    }
}
</script>


