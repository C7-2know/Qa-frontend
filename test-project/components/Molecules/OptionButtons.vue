<template>
    <div class="text-xs text-blue-600 flex flex-col gap-4 w-full">
        <Button classes="bg-gray border border-color-gray" icon="google" iconcolor="blue" label="Continue with Google"/>
        <Button classes="bg-gray border border-color-gray" icon="facebook" label="Continue with Facebook"/>
        <Button classes="bg-gray border border-color-gray" icon="apple" label="Continue with Apple"/>
    </div>
</template>

<script>
import Button from '../Atoms/Button.vue';

export default {
    name: 'OptionButtons',
    components: {
        Button
    }
}
</script>