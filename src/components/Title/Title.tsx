import type { HTMLAttributes, ReactNode } from 'react';
import { Button } from '../Button';
import './Title.scss';

export type TitleVariant = 'simple' | 'recommendation' | 'withAction';

interface TitleBaseProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: TitleVariant;
}

interface SimpleProps extends TitleBaseProps {
  variant?: 'simple';
  /** 작은 라벨. 예: "FOR 민지" */
  label: ReactNode;
  /** 메인 타이틀. 예: "취향에 맞춘 추천" */
  title: ReactNode;
}

interface RecommendationProps extends TitleBaseProps {
  variant: 'recommendation';
  /** 강조 라벨. 예: "96% 취향 일치" */
  label: ReactNode;
  /** 콘텐츠 제목. 예: "빛: 영원에서 영원으로" */
  title: ReactNode;
  /** 부가 정보. 예: "대림미술관 · ~6.30" */
  description: ReactNode;
}

interface WithActionProps extends TitleBaseProps {
  variant: 'withAction';
  /** 작은 라벨. 예: "TODAY" */
  label: ReactNode;
  /** 섹션 제목. 예: "투데이 아티클" */
  title: ReactNode;
  /** 우측 버튼 텍스트. 예: "더보기" */
  actionLabel: ReactNode;
  /** 버튼 클릭 핸들러 */
  onAction?: () => void;
}

export type TitleProps = SimpleProps | RecommendationProps | WithActionProps;

/**
 * 메인 화면 등에서 섹션 제목을 보여주는 타이틀 영역.
 * - simple(기본값): 작은 라벨 + 큰 메인 타이틀(Display), 추천/온보딩 등에 사용
 * - recommendation: 강조 라벨(취향 일치율 등) + 콘텐츠 제목(H2) + 부가 정보, 추천 카드 헤더에 사용
 * - withAction: 작은 라벨(자간, 라임) + 제목(H3) + 우측 더보기 버튼(ghost), 섹션 헤더에 사용
 */
export const Title = (props: TitleProps) => {
  const { variant = 'simple', className = '', ...rest } = props;
  const baseClassName = ['scener-title', className].filter(Boolean).join(' ');

  if (variant === 'recommendation') {
    const { label, title, description, ...divProps } = rest as Omit<
      RecommendationProps,
      'variant' | 'className'
    >;
    return (
      <div
        className={baseClassName}
        data-variant='recommendation'
        {...divProps}
      >
        <div className='scener-title-label'>{label}</div>
        <div className='scener-title-title'>{title}</div>
        <div className='scener-title-description'>{description}</div>
      </div>
    );
  }

  if (variant === 'withAction') {
    const {
      label,
      title,
      actionLabel = '더보기',
      onAction,
      ...divProps
    } = rest as Omit<WithActionProps, 'variant' | 'className'>;
    return (
      <div className={baseClassName} data-variant='withAction' {...divProps}>
        <div className='scener-title-text'>
          <div className='scener-title-label'>{label}</div>
          <div className='scener-title-title'>{title}</div>
        </div>
        <Button category='ghost' size='sm' onClick={onAction}>
          {actionLabel}
        </Button>
      </div>
    );
  }
  const { label, title, ...divProps } = rest as Omit<
    SimpleProps,
    'variant' | 'className'
  >;
  return (
    <div className={baseClassName} data-variant='simple' {...divProps}>
      <div className='scener-title-label'>{label}</div>
      <div className='scener-title-title'>{title}</div>
    </div>
  );
};
