import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() type: 'primary' | 'secondary' = 'primary';

  render() {
    const buttonClass = this.type === 'primary' ? 'primary-button' : 'secondary-button';

    return (
      <button class={buttonClass}>
        <slot></slot>
      </button>
    );
  }
}
