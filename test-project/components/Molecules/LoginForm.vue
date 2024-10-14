<template>
    <div class="flex flex-col container text-white gap-4 w-80 items-center">
        <Passage content="Enter your Email"/>
        <Input type="email" placeholder="Email Address" v-model="email" required="true"
        classes="w-100 bg-white border text-sm rounded-lg p-2 w-full placeholder-black " />
        <Button classes="bg-black text-white w-full border" label="Enter" @click="onSubmit"/>
    </div>
</template>
<script>
import Button from '../Atoms/Button.vue';
import Input from '../Atoms/Input.vue';
import Passage from '../Atoms/passage.vue';

export default {
    components:{Passage, Button,Input},
    data(){
        return{
            email: '',
        }
    },
    methods:{
        onSubmit(){
            this.$emit('login', {email: this.email})
        }
    }
}
</script>