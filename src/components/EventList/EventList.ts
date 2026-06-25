import { LitElement, html } from 'lit';
import '../Badge/Badge';
import './EventList.scss';
import type { Category } from '../Badge/Badge';

export interface EventListItem {
  /** 썸네일 이미지 URL */
  thumbnailSrc?: string;
  /** 카테고리(장르) */
  category: Category;
  /** 행사 제목 */
  title: string;
  /** 장소. 예: "롯데콘서트홀" */
  venue: string;
  /** 날짜. 예: "06.28" */
  date: string;
  /** D-day 텍스트. 예: "D-3", "D-DAY" */
  ddayLabel: string;
  /** true이면 D-day 태그가 강조(라임) 처리됩니다. 보통 D-DAY일 때 사용 */
  urgent?: boolean;
}

/**
 * 다가오는 행사를 리스트 형태로 보여주는 컴포넌트.
 * 각 행은 썸네일, 카테고리 배지, 제목, 장소·날짜, D-day 태그로 구성됩니다.
 * venue, date는 각각 독립된 데이터로 받아, "·"로 잇는 포맷팅을 컴포넌트 내부에서 책임집니다.
 *
 * @element scener-event-list
 *
 * @prop {EventListItem[]} items - 리스트로 보여줄 행사 항목들
 */
export class ScenerEventList extends LitElement {
  static properties = {
    items: { type: Array },
  };

  declare items: EventListItem[];

  constructor() {
    super();
    this.items = [];
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="scener-event-list">
        ${this.items.map((item) => {
          const meta = [item.venue, item.date].filter(Boolean).join(' · ');
          return html`
            <div class="scener-event-list_item">
              <div class="scener-event-list_thumbnail">
                ${item.thumbnailSrc
                  ? html`<img src=${item.thumbnailSrc} alt=${item.title} />`
                  : ''}
              </div>

              <div class="scener-event-list_content">
                <scener-badge
                  category=${item.category}
                  size="small"
                ></scener-badge>
                <div class="scener-event-list_title">${item.title}</div>
                <div class="scener-event-list_meta">${meta}</div>
              </div>

              <div
                class="scener-event-list_dday"
                data-urgent=${item.urgent ?? false}
              >
                ${item.ddayLabel}
              </div>
            </div>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('scener-event-list', ScenerEventList);

declare global {
  interface HTMLElementTagNameMap {
    'scener-event-list': ScenerEventList;
  }
}
