// OptionButtons.stories.js
import OptionButtons from '../../components/Molecules/OptionButtons.vue';

export default {
  title: 'Components/Molecules/OptionButtons',
  component: OptionButtons,
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Button label',
    },
    icon: {
      control: { type: 'text' },
      description: 'Icon for the button',
    },
    iconcolor: {
      control: { type: 'text' },
      description: 'Icon color',
    },
    classes: {
      control: { type: 'text' },
      description: 'CSS classes for custom styling',
    }
  }
};

const Template = (args) => ({
  components: { OptionButtons },
  setup() {
    return { args };
  },
  template: '<OptionButtons />',
});

export const Default = Template.bind({});
Default.args = {};
