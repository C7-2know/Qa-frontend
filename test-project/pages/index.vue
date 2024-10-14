<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  
      <div :class="['flex flex-col h-screen bg-black', { 'blur-sm': login||signup }]">
        <Navbar @join="toggleLogin" />
  
        <div @join="toggleLogin" class="flex flex-wrap-reverse sm:flex-nowrap justify-center items-center justify-evenly gap-2 p-8 sm:p-16 md:p-24 lg:p-32 text-white">
          <div class="flex flex-col flex-4 ">
            <MainTitle classes="text-5xl font-bold text-yellow-300 w-full" 
              title="E-learning Revolution 2"
            />
            <Passage class="flex-4"
              content="We have worked to digitize our school, and give the whole world the opportunity to do it with a new study platform designed for teachers."
            />
            <Button classes="w-max bg-black rounded-md mt-2  p-0 m-0" label="Go to Marketplace" />
            <p>Hello</p>
            <p>En</p>
            <p>It</p>
          </div>
          <img class="flex-4" src="../assets/images/logo.png" alt="Logo" />
        </div>
      </div>
  
      <div v-if="login || signup" class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-transparent text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <Login @join="toggleSignUp" v-if="login" />
            <Signup  @back="toggleLogin" v-if="signup" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MainTitle from '~/components/Atoms/Title.vue';
  import Header from '~/components/Molecules/Header.vue';
  import Button from '~/components/Atoms/Button.vue';
  import Passage from '~/components/Atoms/passage.vue';
  import Navbar from '~/components/Molecules/Navbar.vue';
  import Login from '../components/Organisms/Login.vue';
  import Signup from '~/components/Organisms/Signup.vue';
  
  export default {
    components: { Header, MainTitle, Button, Passage, Navbar, Login, Signup },
    data() {
      return {
        login: false, 
        signup: false, 
      };
    },
    methods: {
      toggleLogin() {
        console.log('Login modal status:', this.login);
        this.login = !this.login; 
        this.signup = false;  
      },
      toggleSignUp(){
        this.signup = !this.signup; 
        this.login = false;  
      },
      closeModals() {
        this.login = false; 
        this.signup = false;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  