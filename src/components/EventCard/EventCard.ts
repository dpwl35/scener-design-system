import { LitElement, html } from 'lit';
import '../Badge/Badge';
import '../Title/Title';
import './EventCard.scss';
import type { Category, Status } from '../Badge/Badge';

/**
 * 큰 이미지 배경 위에 카테고리·상태 배지와 추천 정보를 보여주는 카드.
 * 하단 텍스트는 Title 컴포넌트(recommendation variant)를 그대로 사용합니다.
 * venue, date는 각각 독립된 데이터로 받아, "·"로 잇는 포맷팅을 컴포넌트 내부에서 책임집니다.
 *
 * @element scener-event-card
 *
 * @attr {string} image-src - 배경 이미지 URL
 * @attr {string} category - 카테고리(장르)
 * @attr {string} status - 진행 상태
 * @attr {string} match-label - 취향 일치율. 예: "96% 취향 일치"
 * @attr {string} content-title - 콘텐츠 제목
 * @attr {string} venue - 장소. 예: "대림미술관"
 * @attr {string} date - 날짜. 예: "~6.30"
 */
export class ScenerEventCard extends LitElement {
  static properties = {
    imageSrc: { type: String, attribute: 'image-src' },
    category: { type: String },
    status: { type: String },
    matchLabel: { type: String, attribute: 'match-label' },
    contentTitle: { type: String, attribute: 'content-title' },
    venue: { type: String },
    date: { type: String },
  };

  declare imageSrc: string;
  declare category: Category;
  declare status: Status;
  declare matchLabel: string;
  declare contentTitle: string;
  declare venue: string;
  declare date: string;

  constructor() {
    super();
    this.imageSrc = '';
    this.category = 'exhibition';
    this.status = 'ongoing';
    this.matchLabel = '';
    this.contentTitle = '';
    this.venue = '';
    this.date = '';
  }

  createRenderRoot() {
    return this;
  }

  render() {
    const description = [this.venue, this.date].filter(Boolean).join(' · ');

    return html`
      <div class="scener-event-card">
        <div class="scener-event-card_image">
          ${this.imageSrc
            ? html`<img src=${this.imageSrc} alt=${this.contentTitle} />`
            : ''}
        </div>

        <div class="scener-event-card_badges">
          <scener-badge
            category=${this.category}
            appearance="outline"
          ></scener-badge>
          <scener-badge status=${this.status}></scener-badge>
        </div>

        <div class="scener-event-card_overlay">
          <scener-title
            variant="recommendation"
            label=${this.matchLabel}
            title=${this.contentTitle}
            description=${description}
          ></scener-title>
        </div>
      </div>
    `;
  }
}

customElements.define('scener-event-card', ScenerEventCard);

declare global {
  interface HTMLElementTagNameMap {
    'scener-event-card': ScenerEventCard;
  }
}
