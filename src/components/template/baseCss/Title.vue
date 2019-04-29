<template>
    <h2>{{obj.value}}</h2>
</template>
<script>

export default {
    name: 'Title',
    props: {
        obj: {
            type: Object
        }
    }
}
</script>


