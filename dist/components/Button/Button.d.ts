import { LitElement } from 'lit';
export type ButtonCategory = 'primary' | 'secondary' | 'ghost';
export type ButtonVariant = 'default' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export declare class ScenerButton extends LitElement {
    static properties: {
        category: {
            type: StringConstructor;
        };
        variant: {
            type: StringConstructor;
        };
        size: {
            type: StringConstructor;
        };
        fullWidth: {
            type: BooleanConstructor;
            attribute: string;
        };
        loading: {
            type: BooleanConstructor;
        };
        disabled: {
            type: BooleanConstructor;
        };
    };
    category: ButtonCategory;
    variant: ButtonVariant;
    size: ButtonSize;
    fullWidth: boolean;
    loading: boolean;
    disabled: boolean;
    private _content;
    constructor();
    createRenderRoot(): this;
    connectedCallback(): void;
    render(): import('lit-html').TemplateResult<1>;
    updated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'scener-button': ScenerButton;
    }
}
