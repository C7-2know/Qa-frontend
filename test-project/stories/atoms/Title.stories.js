// Title.stories.js
import Title from '../../components/Atoms/Title.vue';

export default {
  title: 'Components/Atoms/Title',
  component: Title,
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The text content of the title',
    },
    classes: {
      control: { type: 'text' },
      description: 'CSS classes for custom styling',
    }
  }
};

const Template = (args) => ({
  components: { Title },
  setup() {
    return { args };
  },
  template: '<Title v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Hello World',
  classes: 'text-lg font-bold',
};

export const LargeTitle = Template.bind({});
LargeTitle.args = {
  title: 'Welcome to the Application',
  classes: 'text-2xl text-blue-500',
};
