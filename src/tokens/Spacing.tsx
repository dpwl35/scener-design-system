interface SpacingSampleProps {
  variable: string;
  pxValue: string;
}

export const SpacingSample = ({ variable, pxValue }: SpacingSampleProps) => (
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
        height: '16px',
        width: `var(${variable})`,
        background: 'var(--color-brand-primary)',
        borderRadius: '3px',
        flexShrink: 0,
      }}
    />
    <div style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
      {pxValue}
    </div>
  </div>
);
