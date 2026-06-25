import { LitElement, html } from 'lit';
import './Chip.scss';

export type ChipSize = 'small' | 'medium';

/**
 * #해시태그 형태의 선택 가능한 칩.
 * 전시·행사 상세페이지의 분위기 태그, 또는 필터링용 태그 선택에 사용합니다.
 * 선택 시 배경이 브랜드 컬러(라임)로 바뀝니다.
 * 클릭하면 scener-chip-toggle 커스텀 이벤트가 발생합니다 (selected 값이 detail에 담겨 전달됨).
 *
 * @element scener-chip
 *
 * @attr {boolean} selected - 선택된 상태 여부
 * @attr {string} size - 'small' | 'medium' (PC는 medium, 모바일은 small 권장)
 *
 * @fires scener-chip-toggle - 클릭 시 발생. event.detail.selected로 토글된 새 상태를 전달
 */
export class ScenerChip extends LitElement {
  static properties = {
    selected: { type: Boolean },
    size: { type: String },
  };

  declare selected: boolean;
  declare size: ChipSize;

  private _content: Node[] = [];

  constructor() {
    super();
    this.selected = false;
    this.size = 'medium';
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    this._content = Array.from(this.childNodes);
    this.textContent = '';
    super.connectedCallback();
  }

  private _handleClick = () => {
    this.selected = !this.selected;
    this.dispatchEvent(
      new CustomEvent('scener-chip-toggle', {
        detail: { selected: this.selected },
        bubbles: true,
        composed: true,
      }),
    );
  };

  render() {
    return html`
      <button
        type="button"
        class="scener-chip"
        data-selected=${this.selected}
        data-size=${this.size}
        aria-pressed=${this.selected}
        @click=${this._handleClick}
      >
        #<span class="scener-chip_label"></span>
      </button>
    `;
  }

  updated() {
    const label = this.querySelector('.scener-chip_label');
    if (label && this._content.length && !label.hasChildNodes()) {
      label.append(...this._content.map((node) => node.cloneNode(true)));
    }
  }
}

customElements.define('scener-chip', ScenerChip);

declare global {
  interface HTMLElementTagNameMap {
    'scener-chip': ScenerChip;
  }
}
