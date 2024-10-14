import { mount } from 'cypress/vue';
import Input from '../../components/Atoms/Input.vue';

describe('Input Component', () => {
  it('renders the input with the correct placeholder', () => {
    const placeholder = 'Enter your text';

    mount(Input, {
      props: {
        placeholder,
      },
    });

    cy.get('input').should('have.attr', 'placeholder', placeholder);
  });

  it('renders the input with the correct type', () => {
    const type = 'password';

    mount(Input, {
      props: {
        type,
      },
    });

    cy.get('input').should('have.attr', 'type', type);
  });

  it('applies custom classes when provided', () => {
    const customClass = 'bg-red-500';

    mount(Input, {
      props: {
        classes: customClass,
      },
    });

    cy.get('input').should('have.class', customClass);
  });

  it('emits update:modelValue event when input value changes', () => {
    const newValue = 'new value';

    mount(Input, {
      props: {
        modelValue: '',
      },
    });

    cy.get('input').type(newValue).then(() => {
      const emitted = Cypress.vueWrapper.emitted();
      expect(emitted['update:modelValue']).to.have.length(newValue.length);
    });
  });

  it('renders the input as required when the required prop is true', () => {
    mount(Input, {
      props: {
        required: true,
      },
    });

    cy.get('input').should('have.attr', 'required');
  });
});