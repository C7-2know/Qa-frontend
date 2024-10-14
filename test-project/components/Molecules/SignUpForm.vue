<template>
    <div class="flex flex-col ">
        <passage class="p-3" content="Enter Your Details"/>
        <div class="space-y-4 mb-6 w-full">
          <Input placeholder="Name" classes="w-full bg-white-700 text-black border-white-600" icon="user" v-model="name"/>
          <Input placeholder="Surname" classes="w-full bg-white-700 text-black border-white-600" icon="user" v-model="surname"/>
          <Input placeholder="justatest@gmail.com"
            classes="w-full bg-white-700 text-black border-white-600"
            type="email" icon="envelope" v-model="email"/>
          <Input placeholder="Password" classes="w-full bg-white-700 text-black border-white-600"
            type="password" icon="key" v-model="password" />
          
          <Input placeholder="Confirm Password" classes="w-full bg-white-700 text-black border-white-600"
            type="password" icon="key" v-model="confirm_pass"/>
        </div>       
        <Button label="Enter" classes="w-full border hover:bg-gray-700 text-black text-center" @click="Signup"/>
    </div>
</template>
<script>
import Button from '../Atoms/Button.vue';
import Input from '../Atoms/Input.vue';
import Passage from '../Atoms/passage.vue';
import Title from '../Atoms/Title.vue';
import OptionButtons from './OptionButtons.vue';

export default {
    components:{Title,Input,Button,Passage,OptionButtons},
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods: {
    Signup(event) {
        event.preventDefault(); 
        if (this.validateInput()) {
            this.$emit('signup', { email: this.email, password: this.password });
        } else {
            alert('Please enter valid details.'); 
        }
    },
    validateInput() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!this.email || !emailRegex.test(this.email)) {
            return false; 
        }
        // other validations
        return true; 
    }
}

}
</script>

