import { LitElement } from 'lit';
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
export declare class ScenerTitle extends LitElement {
    static properties: {
        variant: {
            type: StringConstructor;
        };
        label: {
            type: StringConstructor;
        };
        title: {
            type: StringConstructor;
        };
        description: {
            type: StringConstructor;
        };
        actionLabel: {
            type: StringConstructor;
            attribute: string;
        };
    };
    variant: TitleVariant;
    label: string;
    title: string;
    description: string;
    actionLabel: string;
    constructor();
    createRenderRoot(): this;
    private _handleAction;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'scener-title': ScenerTitle;
    }
}
