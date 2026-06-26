import { LitElement } from 'lit';
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
export declare class ScenerArticleItem extends LitElement {
    static properties: {
        layout: {
            type: StringConstructor;
        };
        imageSrc: {
            type: StringConstructor;
            attribute: string;
        };
        categoryLabel: {
            type: StringConstructor;
            attribute: string;
        };
        title: {
            type: StringConstructor;
        };
        author: {
            type: StringConstructor;
        };
        readTime: {
            type: NumberConstructor;
            attribute: string;
        };
    };
    layout: ArticleLayout;
    imageSrc: string;
    categoryLabel: string;
    title: string;
    author: string;
    readTime: number;
    constructor();
    createRenderRoot(): this;
    connectedCallback(): void;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'scener-article-item': ScenerArticleItem;
    }
}
