import type { HTMLAttributes } from 'react';
import './StatusBadge.scss';

export type Status = 'ongoing' | 'upcoming' | 'ended';

const STATUS_LABEL: Record<Status, string> = {
  ongoing: '진행중',
  upcoming: '예정',
  ended: '종료',
};

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** 전시·행사의 진행 상태 */
  status: Status;
}

/**
 * 전시·행사 상세페이지에서 진행 상태(진행중/예정/종료)를 알려주는 뱃지.
 * 카테고리 색상과는 별개의 상태 색상 체계를 사용합니다.
 */
export const StatusBadge = ({ status, className = '', ...rest }: StatusBadgeProps) => {
  return (
    <span
      className={['scener-status-badge', `scener-status-badge--${status}`, className].filter(Boolean).join(' ')}
      {...rest}
    >
      <span className="scener-status-badge__dot" aria-hidden="true" />
      {STATUS_LABEL[status]}
    </span>
  );
};
