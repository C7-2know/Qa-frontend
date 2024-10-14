<template>
    <p :class="className">{{ content }}</p>
</template>

<script>
export default{
    name: 'Passage',
    props:{
        className:{
            type:String,
            default: "text-sm",
        },
        content:{
            type: String,
            required: true
        }
    }
}
</script>