import { LitElement } from 'lit';
import { Category, Status } from '../Badge/Badge';
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
export declare class ScenerEventCard extends LitElement {
    static properties: {
        imageSrc: {
            type: StringConstructor;
            attribute: string;
        };
        category: {
            type: StringConstructor;
        };
        status: {
            type: StringConstructor;
        };
        matchLabel: {
            type: StringConstructor;
            attribute: string;
        };
        contentTitle: {
            type: StringConstructor;
            attribute: string;
        };
        venue: {
            type: StringConstructor;
        };
        date: {
            type: StringConstructor;
        };
    };
    imageSrc: string;
    category: Category;
    status: Status;
    matchLabel: string;
    contentTitle: string;
    venue: string;
    date: string;
    constructor();
    createRenderRoot(): this;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'scener-event-card': ScenerEventCard;
    }
}
