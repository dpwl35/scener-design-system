import type { HTMLAttributes } from 'react';
import './Badge.scss';

export type Category = 'exhibition' | 'performance' | 'popup' | 'film';
export type Status = 'ongoing' | 'upcoming' | 'ended';
export type BadgeAppearance = 'subtle' | 'outline';
export type BadgeSize = 'small' | 'medium';

const CATEGORY_LABEL: Record<Category, string> = {
  exhibition: '전시',
  performance: '공연',
  popup: '팝업',
  film: '영화',
};

const STATUS_LABEL: Record<Status, string> = {
  ongoing: '진행중',
  upcoming: '예정',
  ended: '종료',
};

export interface BadgeProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'children'
> {
  /** 카테고리(장르) — 전시/공연/팝업/영화. status와 함께 쓸 수 없습니다. */
  category?: Category;
  /** 진행 상태 — 진행중/예정/종료. category와 함께 쓸 수 없습니다. */
  status?: Status;
  /** 카테고리 배지일 때만 사용. subtle(배경 없음, 기본값) 또는 outline(테두리만) */
  appearance?: BadgeAppearance;
  /** 배지 크기 */
  size?: BadgeSize;
}

/**
 * 콘텐츠의 장르(전시/공연/팝업/영화) 또는 진행 상태(진행중/예정/종료)를 나타내는 배지.
 * category prop을 쓰면 장르 배지(subtle 또는 outline), status prop을 쓰면 상태 배지(filled)가 됩니다.
 * 두 prop 중 하나만 전달해야 합니다.
 */
export const Badge = ({
  category,
  status,
  appearance = 'subtle',
  size = 'medium',
  className = '',
  ...rest
}: BadgeProps) => {
  const isStatus = status !== undefined;
  const label = isStatus
    ? STATUS_LABEL[status]
    : category
      ? CATEGORY_LABEL[category]
      : '';
  const dataKey = isStatus ? status : category;
  const dataAppearance = isStatus ? 'filled' : appearance;

  return (
    <div
      className={['scener-badge', className].filter(Boolean).join(' ')}
      data-appearance={dataAppearance}
      data-key={dataKey}
      data-size={size}
      {...rest}
    >
      <span className='scener-badge_dot' aria-hidden='true' />
      <span className='scener-badge_label'>{label}</span>
    </div>
  );
};
