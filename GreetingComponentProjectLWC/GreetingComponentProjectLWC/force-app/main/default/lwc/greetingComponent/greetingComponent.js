import { LightningElement } from 'lwc';

export default class GreetingComponent extends LightningElement {
    name = '';
    greeting = '';

    handleChange(event) {
        this.name = event.target.value;
    }

    handleClick() {
        this.greeting = `Hello, ${this.name}!`;
    }
}