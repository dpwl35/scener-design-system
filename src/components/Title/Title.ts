import { LitElement, html } from 'lit';
import '../Button/Button';
import './Title.scss';

export type TitleVariant = 'simple' | 'recommendation' | 'withAction';

/**
 * 메인 화면 등에서 섹션 제목을 보여주는 타이틀 영역.
 * - simple(기본값): 작은 라벨 + 큰 메인 타이틀(Display), 추천/온보딩 등에 사용
 * - recommendation: 강조 라벨(취향 일치율 등) + 콘텐츠 제목(H2) + 부가 정보, 추천 카드 헤더에 사용
 * - withAction: 작은 라벨(자간, 라임) + 제목(H3) + 우측 더보기 버튼(ghost), 섹션 헤더에 사용
 *
 * @element scener-title
 *
 * @attr {string} variant - 'simple' | 'recommendation' | 'withAction'
 * @attr {string} label - 작은 라벨
 * @attr {string} title - 제목
 * @attr {string} description - 부가 정보 (recommendation에서만 사용)
 * @attr {string} action-label - 우측 버튼 텍스트 (withAction에서만 사용, 기본값 "더보기")
 *
 * @fires scener-title-action - withAction일 때 버튼 클릭 시 발생
 */
export class ScenerTitle extends LitElement {
  static properties = {
    variant: { type: String },
    label: { type: String },
    title: { type: String },
    description: { type: String },
    actionLabel: { type: String, attribute: 'action-label' },
  };

  declare variant: TitleVariant;
  declare label: string;
  declare title: string;
  declare description: string;
  declare actionLabel: string;

  constructor() {
    super();
    this.variant = 'simple';
    this.label = '';
    this.title = '';
    this.description = '';
    this.actionLabel = '더보기';
  }

  createRenderRoot() {
    return this;
  }

  private _handleAction = () => {
    this.dispatchEvent(
      new CustomEvent('scener-title-action', {
        bubbles: true,
        composed: true,
      }),
    );
  };

  render() {
    if (this.variant === 'recommendation') {
      return html`
        <div class="scener-title" data-variant="recommendation">
          <div class="scener-title_label">${this.label}</div>
          <div class="scener-title_title">${this.title}</div>
          <div class="scener-title_description">${this.description}</div>
        </div>
      `;
    }

    if (this.variant === 'withAction') {
      return html`
        <div class="scener-title" data-variant="withAction">
          <div class="scener-title_text">
            <div class="scener-title_label">${this.label}</div>
            <div class="scener-title_title">${this.title}</div>
          </div>
          <scener-button
            category="ghost"
            size="small"
            @click=${this._handleAction}
          >
            ${this.actionLabel}
          </scener-button>
        </div>
      `;
    }

    return html`
      <div class="scener-title" data-variant="simple">
        <div class="scener-title_label">${this.label}</div>
        <div class="scener-title_title">${this.title}</div>
      </div>
    `;
  }
}

customElements.define('scener-title', ScenerTitle);

declare global {
  interface HTMLElementTagNameMap {
    'scener-title': ScenerTitle;
  }
}
