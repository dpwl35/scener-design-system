import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Chip.scss';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 칩 안에 들어갈 내용. # 기호는 자동으로 붙으므로 텍스트만 전달합니다. 예: "아트" */
  children: ReactNode;
  /** 선택된 상태 여부 */
  selected?: boolean;
  /** 칩 크기 — PC는 md, 모바일은 sm을 권장합니다 */
  size?: 'sm' | 'md';
}

/**
 * #해시태그 형태의 선택 가능한 칩.
 * 전시·행사 상세페이지의 분위기 태그, 또는 필터링용 태그 선택에 사용합니다.
 * 선택 시 배경이 브랜드 컬러(라임)로 바뀝니다.
 */
export const Chip = ({
  children,
  selected = false,
  size = 'md',
  className = '',
  ...rest
}: ChipProps) => {
  return (
    <button
      type='button'
      className={['scener-chip', className].filter(Boolean).join(' ')}
      data-selected={selected}
      data-size={size}
      aria-pressed={selected}
      {...rest}
    >
      #{children}
    </button>
  );
};
