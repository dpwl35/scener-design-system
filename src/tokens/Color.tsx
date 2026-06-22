interface SwatchProps {
  name: string;
  variable: string;
  textColor?: string;
}

/**
 * 디자인 토큰 문서(MDX)에서 컬러를 시각적으로 보여주기 위한 헬퍼 컴포넌트.
 * 부모 div 하나에만 배경색을 적용하고(variable 그대로 var()로 참조),
 * 그 안에 변수명과 이름을 함께 표시합니다.
 * 실제 컴포넌트 라이브러리에는 포함되지 않으며, 문서 전용입니다.
 */
export const Swatch = ({ name, variable, textColor = '#fff' }: SwatchProps) => (
  <div
    style={{
      background: `var(${variable})`,
      borderRadius: 'var(--radius-md)',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '100px',
      fontFamily: 'var(--font-family-base)',
    }}
  >
    <div style={{ fontSize: '13px', fontWeight: 600, color: textColor }}>
      {name}
    </div>
    <div style={{ fontSize: '11px', color: textColor, opacity: 0.7 }}>
      {variable}
    </div>
  </div>
);

interface SwatchGridProps {
  children: React.ReactNode;
  columns?: number;
}

export const SwatchGrid = ({ children, columns = 4 }: SwatchGridProps) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: '12px',
      margin: '16px 0 32px',
    }}
  >
    {children}
  </div>
);
