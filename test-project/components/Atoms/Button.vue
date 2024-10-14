<template>
    <button
      :class="[
        'bg-black hover:bg-gray-800 text-white text-xs py-1 px-8 rounded-sm shadow-lg focus:ring-2 focus:ring-gray-400 transition duration-300 ease-in-out',
        classes,
      ]"
      @click="onClick"
    >
    <font-awesome-icon v-if="icon" :icon="['fab', icon]" :style="{ color: iconColor }" class="mr-2" />
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'Button',
    props: {
      classes: {
        type: String,
        default: '',
      },
      label: {
        type: String,
        required: true,
      },
      icon: {
        type: String, 
        default: null,
      },
    },
    methods: {
      onClick() {
        // this.$emit('click');
        // this.$emit('click');
      },
    },
  };
  </script>
  
  <style scoped></style>
  