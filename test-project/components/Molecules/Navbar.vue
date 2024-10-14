<template>
  <nav class="bg-gray-900">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center">
          <div class="w-full max-w-md">
            <Input
              class="w-full bg-gray-900 border-b border-white text-white placeholder-gray-400 focus:outline-none"
              type="search"
              v-model="searchQuery"
              placeholder="Search..."
              icon="fa-search"
              iconColor="#888"
            />
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="relative ml-3">
            <Button label="Join Us" classes="p-0 m-0 hover:bg-yellow-600" @click="clicked" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Button from '../Atoms/Button.vue';
// import Input from '../Atoms/Input.vue';

export default {
  components: { Button },
  data() {
    return {
      searchQuery: '', // This will store the search query
    };
  },
  methods: {
    clicked() {
      this.$emit('join');
    },
  },
};
</script>
