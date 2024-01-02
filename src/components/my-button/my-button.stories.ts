export default {
  title: 'Components/MyButton',
};

const Template = args => `
  <my-button type="${args.type}">${args.label}</my-button>
`;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Mutant Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Mutant Secondary Button',
};
