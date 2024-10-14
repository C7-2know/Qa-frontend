<template>
    <div class="container border bg-black text-white gap-4 flex flex-col w-96 border justify-center items-center custom-border p-8 py-4 ">
        <a href="#"  @click="back" > 
            <font-awesome-icon class="mr-4" :icon="['fas', 'chevron-left']" /> Back to Log In</a>
        <Header title="Nice to meet you," passage="Upload a profile picture and complete your presentation"/>
        <div class="flex items-center text-gray-300 mb-4">
          <input type="checkbox" id="terms" class="mr-2" required v-model="termsAccepted" />
          <label for="terms" class="text-xs"> I accept
            <a href="#" class="text-blue-500 hover:underline">
              Terms & Conditions</a> and <a href="#" class="text-blue-500 hover:underline">Privacy Policy
            </a>
          </label>
        </div>
        <SignUpForm class=" w-full items-center"@signup="Signup"/>        
        <div class="text-center text-gray-400 mt-4 text-xs">
          <a href="#" class="hover:underline">Terms & Conditions</a>
        </div>
      </div>
  </template>
  
  <script>
import Input from '../Atoms/Input.vue';
import Button from '../Atoms/Button.vue';
import FirstTitle from '../Atoms/Title.vue';
import Header from '../Molecules/Header.vue';
import Passage from '../Atoms/passage.vue';
import SignUpForm from '../Molecules/SignUpForm.vue';
  
  export default {
    components: {
      Input,
      Button,
      FirstTitle,
      Header,
      Passage,
      SignUpForm
    },
    data(){
        return{
            termsAccepted: false
        }
    },
    methods:{
        back(){
            this.$emit('back');
        },
        Signup(){
            if (!this.termsAccepted) {
                alert('You must accept the terms and conditions before signing up.');
                return;
            }
            alert('Signed up successfully!');
            this.$emit('back');
        }
    }
  };
  </script>
  
  <style scoped>
  </style>
  