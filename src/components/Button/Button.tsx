import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './Button.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼의 시각적 스타일 종류 */
  variant?: ButtonVariant;
  /** 버튼 크기 */
  size?: ButtonSize;
  /** 버튼이 부모 너비를 가득 채울지 여부 */
  fullWidth?: boolean;
  /** 로딩 상태 — true일 때 스피너 표시 및 인터랙션 비활성화 */
  loading?: boolean;
  /** 좌측 아이콘 슬롯 */
  iconLeft?: ReactNode;
  /** 우측 아이콘 슬롯 */
  iconRight?: ReactNode;
  children: ReactNode;
}

/**
 * SCENE;er의 기본 버튼 컴포넌트.
 * Primary는 브랜드 라임 컬러를 사용하는 핵심 CTA용,
 * Secondary는 보조 액션, Ghost는 텍스트형 액션에 사용합니다.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      iconLeft,
      iconRight,
      disabled,
      children,
      className = '',
      ...rest
    },
    ref
  ) => {
    const classNames = [
      'scener-button',
      `scener-button--${variant}`,
      `scener-button--${size}`,
      fullWidth ? 'scener-button--full-width' : '',
      loading ? 'scener-button--loading' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading ? (
          <span className="scener-button__spinner" aria-hidden="true" />
        ) : (
          <>
            {iconLeft && <span className="scener-button__icon scener-button__icon--left">{iconLeft}</span>}
            <span className="scener-button__label">{children}</span>
            {iconRight && <span className="scener-button__icon scener-button__icon--right">{iconRight}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
