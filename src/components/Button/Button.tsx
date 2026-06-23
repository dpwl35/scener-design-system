import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './Button.scss';

export type ButtonCategory = 'primary' | 'secondary' | 'ghost';
export type ButtonVariant = 'default' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼의 시각적 무게감 */
  category?: ButtonCategory;
  /** 버튼의 의미(기본/위험) */
  variant?: ButtonVariant;
  /** 버튼 크기 */
  size?: ButtonSize;
  /** 버튼이 부모 너비를 가득 채울지 여부 */
  fullWidth?: boolean;
  /** 로딩 상태 — true일 때 스피너 표시 및 인터랙션 비활성화 */
  loading?: boolean;

  children: ReactNode;
}

/**
 * SCENE;er의 기본 버튼 컴포넌트.
 * category(primary/secondary/ghost)는 시각적 무게감을, variant(default/danger)는
 * 의미를 나타내며, 두 축은 서로 독립적으로 조합됩니다.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      category = 'primary',
      variant = 'default',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      children,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const classNames = ['scener-button', className].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        className={classNames}
        data-category={category}
        data-variant={variant}
        data-size={size}
        data-full-width={fullWidth || undefined}
        data-loading={loading || undefined}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading ? (
          <span className='scener-button-spinner' aria-hidden='true' />
        ) : (
          <>
            <span className='scener-button-label'>{children}</span>
          </>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
