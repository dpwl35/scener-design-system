import { LitElement } from 'lit';
export type Category = 'exhibition' | 'performance' | 'popup' | 'film';
export type Status = 'ongoing' | 'upcoming' | 'ended';
export type BadgeAppearance = 'subtle' | 'outline';
export type BadgeSize = 'small' | 'medium';
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
export declare class ScenerBadge extends LitElement {
    static properties: {
        category: {
            type: StringConstructor;
        };
        status: {
            type: StringConstructor;
        };
        appearance: {
            type: StringConstructor;
        };
        size: {
            type: StringConstructor;
        };
    };
    category?: Category;
    status?: Status;
    appearance: BadgeAppearance;
    size: BadgeSize;
    constructor();
    createRenderRoot(): this;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'scener-badge': ScenerBadge;
    }
}
