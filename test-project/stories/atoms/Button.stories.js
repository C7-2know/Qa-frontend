import Button from '../../components/Atoms/Button.vue';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    classes: { control: 'text' },
    click: { action: 'clicked' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" @click="click" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  classes: '',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  label: 'Custom Button',
  classes: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  classes: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  classes: 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger Button',
  classes: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
};
