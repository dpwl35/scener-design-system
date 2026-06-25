import { LitElement, html } from 'lit';
import './ArticleItem.scss';

export type ArticleLayout = 'card' | 'list';

/**
 * 에디터 아티클을 보여주는 컴포넌트.
 * layout="card"는 메인 추천 아티클용(이미지 아래 텍스트), layout="list"는
 * 작은 썸네일과 텍스트를 가로로 배치하는 리스트용입니다.
 *
 * @element scener-article-item
 *
 * @attr {string} layout - 'card' 또는 'list'
 * @attr {string} image-src - 썸네일 이미지 URL
 * @attr {string} category-label - 카테고리 라벨. 예: "EDITOR'S NOTE"
 * @attr {string} title - 아티클 제목
 * @attr {string} author - 작성자 이름. 예: "에디터 윤"
 * @attr {number} read-time - 읽는 시간(분 단위 숫자). 예: 4
 */
export class ScenerArticleItem extends LitElement {
  static properties = {
    layout: { type: String },
    imageSrc: { type: String, attribute: 'image-src' },
    categoryLabel: { type: String, attribute: 'category-label' },
    title: { type: String },
    author: { type: String },
    readTime: { type: Number, attribute: 'read-time' },
  };

  declare layout: ArticleLayout;
  declare imageSrc: string;
  declare categoryLabel: string;
  declare title: string;
  declare author: string;
  declare readTime: number;

  constructor() {
    super();
    this.layout = 'card';
    this.imageSrc = '';
    this.categoryLabel = '';
    this.title = '';
    this.author = '';
    this.readTime = 0;
  }

  // Shadow DOM을 쓰지 않고, this(원래 엘리먼트)를 그대로 렌더링 위치로 사용합니다.
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div class="scener-article-item" data-layout=${this.layout}>
        <div class="scener-article-item_thumbnail">
          ${this.imageSrc
            ? html`<img src=${this.imageSrc} alt=${this.title} />`
            : ''}
        </div>

        <div class="scener-article-item_content">
          <p class="scener-article-item_label">${this.categoryLabel}</p>
          <p class="scener-article-item_title">${this.title}</p>
          <div class="scener-article-item_meta">
            <span class="scener-article-item_author">${this.author}</span>
            <span class="scener-article-item_readtime">${this.readTime}분</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('scener-article-item', ScenerArticleItem);

declare global {
  interface HTMLElementTagNameMap {
    'scener-article-item': ScenerArticleItem;
  }
}
