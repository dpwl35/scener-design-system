import { LitElement } from 'lit';
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
export declare class ScenerChip extends LitElement {
    static properties: {
        selected: {
            type: BooleanConstructor;
        };
        size: {
            type: StringConstructor;
        };
    };
    selected: boolean;
    size: ChipSize;
    private _content;
    constructor();
    createRenderRoot(): this;
    connectedCallback(): void;
    private _handleClick;
    render(): import('lit-html').TemplateResult<1>;
    updated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'scener-chip': ScenerChip;
    }
}
