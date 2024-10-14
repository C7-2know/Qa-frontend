<template>
  <div class="relative w-full">
    <!-- Input field -->
    <input
      :class="['w-full bg-white text-black text-sm rounded-lg p-2 pl-10', classes]"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      @focus="isFocused = true"
      @blur="isFocused = modelValue !== '' ? true : false"
      :required="required"
    />
    <!-- FontAwesome Icon inside the input -->
    <font-awesome-icon
      v-if="icon"
      :icon="icon"
      class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      :style="{ color: iconColor }"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isFocused: false
      };
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      classes: {
        type: String,
        default: ''
      },
      modelValue: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      required: {
        type: Boolean,
        default: false
      },
      icon: {
        type: String,
        default: '' // FontAwesome icon like 'fa-user'
      },
      iconColor: {
        type: String,
        default: '#000'
      }
    }
  };
</script>

<style scoped>
/* Custom styling for input and icon */
input {
  padding-left: 2.5rem; 
}
</style>
