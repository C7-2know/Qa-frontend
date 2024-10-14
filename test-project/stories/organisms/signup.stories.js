// SignUpPage.stories.js

import SignUpPage from '../../components/Organisms/Signup.vue'
export default {
  title: 'Components/Organisms/SignUpPage',
  component: SignUpPage,
  argTypes: {
    back: { action: 'back' },
    Signup: { action: 'Signup' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SignUpPage },
  props: Object.keys(argTypes),
  template: '<SignUpPage v-bind="$props" @back="back" @signup="Signup"/>',
});

export const Default = Template.bind({});
Default.args = {};
