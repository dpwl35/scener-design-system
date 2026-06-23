import type { HTMLAttributes } from 'react';
import { Badge, type Category, type Status } from '../Badge/index';
import { Title } from '../Title/Title';
import './EventCard.scss';

export interface EventCardProps extends HTMLAttributes<HTMLDivElement> {
  /** 배경 이미지 URL */
  imageSrc?: string;
  /** 카테고리(장르) */
  category: Category;
  /** 진행 상태 */
  status: Status;
  /** 취향 일치율. 예: "96% 취향 일치" */
  matchLabel: string;
  /** 콘텐츠 제목 */
  contentTitle: string;
  /** 장소 · 날짜 등 부가 정보 */
  description: string;
}

/**
 * 큰 이미지 배경 위에 카테고리·상태 배지와 추천 정보를 보여주는 카드.
 * 하단 텍스트는 Title 컴포넌트(recommendation variant)를 그대로 사용합니다.
 */
export const EventCard = ({
  imageSrc,
  category,
  status,
  matchLabel,
  contentTitle,
  description,
  className = '',
  ...rest
}: EventCardProps) => {
  return (
    <div
      className={['scener-event-card', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <div
        className='scener-event-card-image'
        style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : undefined}
      />

      <div className='scener-event-card-badges'>
        <Badge category={category} appearance='outline' />
        <Badge status={status} />
      </div>

      <div className='scener-event-card-overlay'>
        <Title
          variant='recommendation'
          label={matchLabel}
          title={contentTitle}
          description={description}
        />
      </div>
    </div>
  );
};
