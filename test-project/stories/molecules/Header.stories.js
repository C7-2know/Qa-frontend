// Header.stories.js
import Header from '../../components/Molecules/Header.vue';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the passage',
      defaultValue: 'Default Title',
    },
    passage: {
      control: 'text',
      description: 'Content of the passage',
      defaultValue: 'This is a default passage content.',
    },
  },
};

// Default story
const Template = (args) => ({
  components: { Header },
  setup() {
    return { args };
  },
  template: '<Header v-bind="args" />',
});

// Variants
export const Default = Template.bind({});
Default.args = {
  title: 'Welcome to Our Site',
  passage: 'We are glad to have you here. Explore our features and enjoy your stay!',
};

export const WithLongPassage = Template.bind({});
WithLongPassage.args = {
  title: 'Learn More About Us',
  passage: 'Our platform offers a variety of resources for students and educators. You can find tutorials, articles, and community support to enhance your learning experience. Join us today and start your journey towards knowledge!',
};


