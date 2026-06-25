import { LitElement, html } from 'lit';
import './Badge.scss';

export type Category = 'exhibition' | 'performance' | 'popup' | 'film';
export type Status = 'ongoing' | 'upcoming' | 'ended';
export type BadgeAppearance = 'subtle' | 'outline';
export type BadgeSize = 'small' | 'medium';

const CATEGORY_LABEL: Record<Category, string> = {
  exhibition: '전시',
  performance: '공연',
  popup: '팝업',
  film: '영화',
};

const STATUS_LABEL: Record<Status, string> = {
  ongoing: '진행중',
  upcoming: '예정',
  ended: '종료',
};

/**
 * 콘텐츠의 장르(전시/공연/팝업/영화) 또는 진행 상태(진행중/예정/종료)를 나타내는 배지.
 * category를 쓰면 장르 배지(subtle 또는 outline), status를 쓰면 상태 배지(filled)가 됩니다.
 * 두 속성 중 하나만 전달해야 합니다.
 *
 * @element scener-badge
 *
 * @attr {string} category - 'exhibition' | 'performance' | 'popup' | 'film'
 * @attr {string} status - 'ongoing' | 'upcoming' | 'ended'
 * @attr {string} appearance - 'subtle' | 'outline' (category 배지일 때만 사용)
 * @attr {string} size - 'small' | 'medium'
 */
export class ScenerBadge extends LitElement {
  static properties = {
    category: { type: String },
    status: { type: String },
    appearance: { type: String },
    size: { type: String },
  };

  declare category?: Category;
  declare status?: Status;
  declare appearance: BadgeAppearance;
  declare size: BadgeSize;

  constructor() {
    super();
    this.category = undefined;
    this.status = undefined;
    this.appearance = 'subtle';
    this.size = 'medium';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    const isStatus = !!this.status;
    const label = isStatus
      ? STATUS_LABEL[this.status as Status]
      : this.category
        ? CATEGORY_LABEL[this.category]
        : '';
    const dataKey = isStatus ? this.status : this.category;
    const dataAppearance = isStatus ? 'filled' : this.appearance;

    return html`
      <div
        class="scener-badge"
        data-appearance=${dataAppearance}
        data-key=${dataKey ?? ''}
        data-size=${this.size}
      >
        <span class="scener-badge_dot" aria-hidden="true"></span>
        <span class="scener-badge_label">${label}</span>
      </div>
    `;
  }
}

customElements.define('scener-badge', ScenerBadge);

declare global {
  interface HTMLElementTagNameMap {
    'scener-badge': ScenerBadge;
  }
}
