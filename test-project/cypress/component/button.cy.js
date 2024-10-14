import { mount } from 'cypress/vue';
import Button from '../../components/Atoms/Button.vue';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    const label = 'Click Me';

    mount(Button, {
      props: {
        label,
      },
    });
    cy.get('button').should('contain', label);
  });

  it('applies custom classes when provided', () => {
    const customClass = 'bg-red-500';

    mount(Button, {
      props: {
        label: 'Click Me',
        classes: customClass,
      },
    });

    cy.get('button').should('have.class', customClass);
  });

  it('emits click event when clicked', () => {
    const clickSpy = cy.spy();

    mount(Button, {
      props: {
        label: 'Click Me',
      },
      listeners: {
        click: clickSpy,
      },
    });

    cy.get('button').click();

    expect(clickSpy).to.have.been.calledOnce;
  });

});
