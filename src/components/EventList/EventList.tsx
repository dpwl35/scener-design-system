import type { HTMLAttributes } from 'react';
import { Badge, type Category } from '../Badge/index';
import './EventList.scss';

export interface EventListItemProps {
  /** 썸네일 이미지 URL */
  thumbnailSrc?: string;
  /** 카테고리(장르) */
  category: Category;
  /** 행사 제목 */
  title: string;
  /** 장소 · 날짜 등 부가 정보 */
  meta: string;
  /** D-day 텍스트. 예: "D-3", "D-DAY" */
  ddayLabel: string;
  /** true이면 D-day 태그가 강조(라임) 처리됩니다. 보통 D-DAY일 때 사용 */
  urgent?: boolean;
}

export interface EventListProps extends HTMLAttributes<HTMLDivElement> {
  /** 리스트로 보여줄 행사 항목들 */
  items: EventListItemProps[];
}

/**
 * 다가오는 행사를 리스트 형태로 보여주는 컴포넌트.
 * 각 행은 썸네일, 카테고리 배지, 제목, 장소·날짜, D-day 태그로 구성됩니다.
 */
export const EventList = ({
  items,
  className = '',
  ...rest
}: EventListProps) => {
  return (
    <div
      className={['scener-event-list', className].filter(Boolean).join(' ')}
      {...rest}
    >
      {items.map((item, index) => (
        <div className='scener-event-list_item' key={index}>
          <div className='scener-event-list_thumbnail'>
            {item.thumbnailSrc && (
              <img src={item.thumbnailSrc} alt={item.title} />
            )}
          </div>

          <div className='scener-event-list_content'>
            <Badge category={item.category} size='small' />
            <div className='scener-event-list_title'>{item.title}</div>
            <div className='scener-event-list_meta'>{item.meta}</div>
          </div>

          <div
            className='scener-event-list_dday'
            data-urgent={item.urgent ?? false}
          >
            {item.ddayLabel}
          </div>
        </div>
      ))}
    </div>
  );
};
