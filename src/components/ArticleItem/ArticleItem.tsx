import type { HTMLAttributes } from 'react';
import './ArticleItem.scss';

export type ArticleLayout = 'card' | 'list';

export interface ArticleItemProps extends HTMLAttributes<HTMLDivElement> {
  /** 레이아웃 형태 — card(큰 이미지+텍스트 분리) 또는 list(작은 썸네일+가로 배치) */
  layout?: ArticleLayout;
  /** 썸네일 이미지 URL */
  imageSrc?: string;
  /** 카테고리 라벨. 예: "EDITOR'S NOTE", "CURATION", "INTERVIEW" */
  categoryLabel: string;
  /** 아티클 제목 */
  title: string;
  /** 작성자 이름. 예: "에디터 윤" */
  author: string;
  /** 읽는 시간(분 단위 숫자). 예: 4 */
  readTime: number;
}

/**
 * 에디터 아티클을 보여주는 컴포넌트.
 * layout="card"는 메인 추천 아티클용(이미지 아래 텍스트), layout="list"는
 * 작은 썸네일과 텍스트를 가로로 배치하는 리스트용입니다.
 * title, author, readTime은 각각 독립된 데이터로 받아, 마크업과 포맷팅(구분자, 단위)을
 * 컴포넌트 내부에서 책임집니다.
 */
export const ArticleItem = ({
  layout = 'card',
  imageSrc,
  categoryLabel,
  title,
  author,
  readTime,
  className = '',
  ...rest
}: ArticleItemProps) => {
  return (
    <div
      className={['scener-article-item', className].filter(Boolean).join(' ')}
      data-layout={layout}
      {...rest}
    >
      <div className='scener-article-item_thumbnail'>
        {imageSrc && <img src={imageSrc} alt={title} />}
      </div>

      <div className='scener-article-item_content'>
        <p className='scener-article-item_label'>{categoryLabel}</p>
        <p className='scener-article-item_title'>{title}</p>
        <div className='scener-article-item_meta'>
          <span className='scener-article-item_author'>{author}</span>
          <span className='scener-article-item_readtime'>{readTime}분</span>
        </div>
      </div>
    </div>
  );
};
