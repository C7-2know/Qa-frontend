import Login from '../../components/Organisms/Login.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Pages/Login',
  component: Login,
  argTypes: {
    email: { control: 'text', description: 'The email input for login' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Login },
  props: Object.keys(argTypes),
  template: '<Login v-bind="$props" @login="onLogin" />',
  methods: {
    onLogin: action('login'),
  },
});

export const Default = Template.bind({});
Default.args = {
  email: '',
};

