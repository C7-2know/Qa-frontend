<template>
    <div class="flex flex-wrap cursor-default border border-gray-600 max-w-100 p-2 ">
        <img  src="../../assets/images/logo.png" class="max-w-40 max-h-40" alt="../" />
        <div>
            <MainTitle  :title="title"/> 
            <Passage :content="passage"/>
        </div>
    </div>
</template>

<script>
import Passage from '../Atoms/passage.vue'
import MainTitle from '../Atoms/Title.vue';
export default{
    components:{MainTitle,Passage},
    props:{
        title:{
            type: String,
            required:true,
            default: ''
        },
        passage:{
            type: String,
            default: ''
        }
    }
}
</script>
<style scoped>

div{
    flex: 4;
}
</style>