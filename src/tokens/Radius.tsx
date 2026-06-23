interface RadiusSampleProps {
  variable: string;
  pxValue: string;
}

/**
 * 디자인 토큰 문서(MDX)에서 radius 값을 사각형 박스로 보여주는 헬퍼 컴포넌트.
 * 실제 컴포넌트 라이브러리에는 포함되지 않으며, 문서 전용입니다.
 */
export const RadiusSample = ({ variable, pxValue }: RadiusSampleProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '10px 0',
      borderBottom: '1px solid var(--color-border-default)',
      fontFamily: 'var(--font-family-base)',
    }}
  >
    <div
      style={{
        width: '160px',
        flexShrink: 0,
        fontSize: '12px',
        color: 'var(--color-text-secondary)',
      }}
    >
      {variable}
    </div>
    <div
      style={{
        width: '56px',
        height: '56px',
        background: 'var(--color-brand-primary)',
        borderRadius: `var(${variable})`,
        flexShrink: 0,
      }}
    />
    <div style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
      {pxValue}
    </div>
  </div>
);
