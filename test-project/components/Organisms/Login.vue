<template>
    <div class="container bg-black text-white gap-5 flex flex-col sm:w-96 border justify-center items-center custom-border p-8">
        <Header title="Welcome to Aladia," passage="create or access your account from here"/>
        <LoginForm class="max-w-full" @login="Login"/>
        <div class="flex items-center">
            <div class="div lr "></div>or<div class="div rl"></div>
        </div>
        <OptionButtons/>
        <a href="" class="text-gray-600 text-sm">Terms & Conditions</a>
    </div>
</template>
<script>
import Passage from '../Atoms/Title.vue'
import LoginForm from '../Molecules/LoginForm.vue'
import OptionButtons from '../Molecules/OptionButtons.vue'
import Header from '../Molecules/Header.vue';
import Signup from './Signup.vue';
export default {
    components:{Passage,LoginForm,OptionButtons,Header,Signup},
    data(){
        return{
            email: '',
            user:[
                {
                    name: 'John Doe',
                    email: 'john@gmail.com',
                },
                {
                    name: 'Jane Doe',
                    email: 'jane@gmail.com',
                }
            ]            
        }
    },
    methods:{
        Login({ email }) {
            this.email = email;
            const user = this.user.find((u) => u.email === email);
            if (user) {
                alert(`Welcome, ${user.name}!`);
            } else {
                this.$emit('join');
            }
        }
    }
}
</script>
<style scoped>
.div {
  height: 2px;
  width: 100%; 
}
.lr{
    background: linear-gradient(to right, black, white);
}
.rl{
 background: linear-gradient(to left, black, white);
}
.custom-border {
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient( #000000, #ffffff) 1;
}

</style>