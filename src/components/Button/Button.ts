import { LitElement, html } from 'lit';
import './Button.scss';

export type ButtonCategory = 'primary' | 'secondary' | 'ghost';
export type ButtonVariant = 'default' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export class ScenerButton extends LitElement {
  static properties = {
    category: { type: String },
    variant: { type: String },
    size: { type: String },
    fullWidth: { type: Boolean, attribute: 'full-width' },
    loading: { type: Boolean },
    disabled: { type: Boolean },
  };

  declare category: ButtonCategory;
  declare variant: ButtonVariant;
  declare size: ButtonSize;
  declare fullWidth: boolean;
  declare loading: boolean;
  declare disabled: boolean;

  // 사용자가 <scener-button>...</scener-button> 안에 넣은 원본 콘텐츠를 보관합니다.
  private _content: Node[] = [];

  constructor() {
    super();
    this.category = 'primary';
    this.variant = 'default';
    this.size = 'medium';
    this.fullWidth = false;
    this.loading = false;
    this.disabled = false;
  }

  // Shadow DOM을 쓰지 않고, this(원래 엘리먼트)를 그대로 렌더링 위치로 사용합니다.
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    // Lit이 render()로 내용을 새로 그리기 전에,
    // 사용자가 넣은 원본 자식 노드들을 그대로 보관해둡니다 (텍스트뿐 아니라 어떤 요소든).
    this._content = Array.from(this.childNodes);
    this.textContent = '';
    super.connectedCallback();
  }

  render() {
    const isDisabled = this.disabled || this.loading;

    return html`
      <button
        class="scener-button"
        data-category=${this.category}
        data-variant=${this.variant}
        data-size=${this.size}
        ?data-full-width=${this.fullWidth}
        ?disabled=${isDisabled}
        aria-busy=${this.loading}
      >
        ${this.loading
          ? html`<span class="scener-button_spinner" aria-hidden="true"></span>`
          : html`<span class="scener-button_label"></span>`}
      </button>
    `;
  }

  updated() {
    // render() 직후, 보관해둔 원본 노드들을 라벨 영역에 옮겨 넣습니다.
    if (!this.loading) {
      const label = this.querySelector('.scener-button_label');
      if (label && this._content.length) {
        label.append(...this._content);
      }
    }
  }
}

customElements.define('scener-button', ScenerButton);

declare global {
  interface HTMLElementTagNameMap {
    'scener-button': ScenerButton;
  }
}
