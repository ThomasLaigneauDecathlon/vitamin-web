/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface VtmnButton {
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size": 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant": | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
    }
    interface VtmnTextInput {
        /**
          * The helper of the text input.
         */
        "helper": string;
        /**
          * The icon to be displayed
         */
        "icon": string;
        /**
          * The id of the text input.
         */
        "id": string;
        /**
          * The disabled state of the text-input.
         */
        "isDisabled": boolean;
        /**
          * Is the text-input multiline or not.
         */
        "isMultiline": boolean;
        /**
          * The label of the text input.
         */
        "label": string;
        /**
          * The placeholder of the text input.
         */
        "placeholder": string;
        /**
          * The state of the text-input.
         */
        "state": 'valid' | 'error' | null;
    interface VtmnLink {
        /**
          * The hypertext link
          * @default '#'
         */
        "href": string;
        /**
          * Is the link standalone or not
          * @default null
         */
        "isStandalone": boolean;
        /**
          * The size of the link.
          * @default null
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * The target of the link
          * @default null
         */
        "target": string;
    }
}
declare global {
    interface HTMLVtmnButtonElement extends Components.VtmnButton, HTMLStencilElement {
    }
    var HTMLVtmnButtonElement: {
        prototype: HTMLVtmnButtonElement;
        new (): HTMLVtmnButtonElement;
    };
    interface HTMLVtmnTextInputElement extends Components.VtmnTextInput, HTMLStencilElement {
    }
    var HTMLVtmnTextInputElement: {
        prototype: HTMLVtmnTextInputElement;
        new (): HTMLVtmnTextInputElement;
    };
    interface HTMLElementTagNameMap {
        "vtmn-button": HTMLVtmnButtonElement;
        "vtmn-text-input": HTMLVtmnTextInputElement;
    interface HTMLVtmnLinkElement extends Components.VtmnLink, HTMLStencilElement {
    }
    var HTMLVtmnLinkElement: {
        prototype: HTMLVtmnLinkElement;
        new (): HTMLVtmnLinkElement;
    };
    interface HTMLElementTagNameMap {
        "vtmn-button": HTMLVtmnButtonElement;
        "vtmn-link": HTMLVtmnLinkElement;
    }
}
declare namespace LocalJSX {
    interface VtmnButton {
        /**
          * The size of the button.
          * @default 'medium'
         */
        "size"?: 'small' | 'medium' | 'large' | 'stretched';
        /**
          * The variant of the button.
          * @default 'primary'
         */
        "variant"?: | 'primary'
    | 'primary-reversed'
    | 'secondary'
    | 'secondary-reversed'
    | 'ghost'
    | 'conversion';
    }
    interface VtmnTextInput {
        /**
          * The helper of the text input.
         */
        "helper"?: string;
        /**
          * The icon to be displayed
         */
        "icon"?: string;
        /**
          * The id of the text input.
         */
        "id"?: string;
        /**
          * The disabled state of the text-input.
         */
        "isDisabled"?: boolean;
        /**
          * Is the text-input multiline or not.
         */
        "isMultiline"?: boolean;
        /**
          * The label of the text input.
         */
        "label"?: string;
        /**
          * The placeholder of the text input.
         */
        "placeholder"?: string;
        /**
          * The state of the text-input.
         */
        "state"?: 'valid' | 'error' | null;
    }
    interface IntrinsicElements {
        "vtmn-button": VtmnButton;
        "vtmn-text-input": VtmnTextInput;
    interface VtmnLink {
        /**
          * The hypertext link
          * @default '#'
         */
        "href"?: string;
        /**
          * Is the link standalone or not
          * @default null
         */
        "isStandalone"?: boolean;
        /**
          * The size of the link.
          * @default null
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * The target of the link
          * @default null
         */
        "target"?: string;
    }
    interface IntrinsicElements {
        "vtmn-button": VtmnButton;
        "vtmn-link": VtmnLink;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "vtmn-button": LocalJSX.VtmnButton & JSXBase.HTMLAttributes<HTMLVtmnButtonElement>;
            "vtmn-text-input": LocalJSX.VtmnTextInput & JSXBase.HTMLAttributes<HTMLVtmnTextInputElement>;
            "vtmn-link": LocalJSX.VtmnLink & JSXBase.HTMLAttributes<HTMLVtmnLinkElement>;
        }
    }
}
