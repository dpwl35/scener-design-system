interface SpacingProps {
  variable: string;
  pxValue: string;
}

/**
 * 디자인 토큰 문서(MDX)에서 spacing 값을 막대 길이로 보여주는 헬퍼 함수.
 * 실제 컴포넌트 라이브러리에는 포함되지 않으며, 문서 전용입니다.
 */
export const createSpacing = ({
  variable,
  pxValue,
}: SpacingProps): HTMLElement => {
  const row = document.createElement('div');
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '16px';
  row.style.padding = '10px 0';
  row.style.borderBottom = '1px solid var(--scener-color-border-default)';
  row.style.fontFamily = 'var(--scener-font-family-base)';

  const variableDiv = document.createElement('div');
  variableDiv.style.width = '160px';
  variableDiv.style.flexShrink = '0';
  variableDiv.style.fontSize = '12px';
  variableDiv.style.color = 'var(--scener-color-text-secondary)';
  variableDiv.innerText = variable;

  const bar = document.createElement('div');
  bar.style.height = '16px';
  bar.style.width = `var(${variable})`;
  bar.style.background = 'var(--scener-color-brand-primary)';
  bar.style.borderRadius = '3px';
  bar.style.flexShrink = '0';

  const pxValueDiv = document.createElement('div');
  pxValueDiv.style.fontSize = '12px';
  pxValueDiv.style.color = 'var(--scener-color-text-tertiary)';
  pxValueDiv.innerText = pxValue;

  row.appendChild(variableDiv);
  row.appendChild(bar);
  row.appendChild(pxValueDiv);

  return row;
};

interface SpacingListProps {
  items: SpacingProps[];
}

export const createSpacingList = ({ items }: SpacingListProps): HTMLElement => {
  const list = document.createElement('div');

  items.forEach((item) => {
    list.appendChild(createSpacing(item));
  });

  return list;
};
