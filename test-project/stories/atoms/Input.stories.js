// Input.stories.js
import Input from '../../components/Atoms/Input.vue';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'text' },
      description: 'Input type (text, email, password, etc.)',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    modelValue: {
      control: { type: 'text' },
      description: 'Bound value for v-model',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Is the field required?',
    },
    classes: {
      control: { type: 'text' },
      description: 'CSS classes for custom styling',
    }
  }
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  type: 'text',
  placeholder: 'Enter text',
  modelValue: '',
  required: false,
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: 'email',
  placeholder: 'Email Address',
  modelValue: '',
  required: true,
};
