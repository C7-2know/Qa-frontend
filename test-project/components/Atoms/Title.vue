<template>
    <h1 :class="[classes,'font-bold']" >{{ title }}</h1>
</template>

<script>
export default{
    name: 'MainTitle',
    props:{
        classes:{
            type:String,
            default: "text-lg",
        },
        title:{
            type: String,
            default: 'hello'
        }
    }
}
</script>