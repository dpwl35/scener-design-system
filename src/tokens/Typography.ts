interface TypeSampleProps {
  /** 좌측에 표시할 라벨. 예: "Display · 34/700" */
  label: string;
  /** 실제로 그 스타일이 적용되어 보여질 샘플 텍스트 */
  sampleText: string;
  /** font-size 값 (CSS 변수 문자열). 예: "var(--text-display-size)" */
  fontSize: string;
  /** font-weight 값 (CSS 변수 문자열). 예: "var(--text-display-weight)" */
  fontWeight: string;
  /** line-height 값 (CSS 변수 문자열). 예: "var(--text-display-line-height)" */
  lineHeight?: string;
  /** 샘플 텍스트의 색상. 기본은 기본 텍스트 색상, Overline 등에는 다른 색을 줄 수 있음 */
  color?: string;
  /** 대문자 변환 등 추가 텍스트 스타일이 필요할 때 (예: overline) */
  textTransform?: string;
  /** 자간(letter-spacing)이 필요할 때 */
  letterSpacing?: string;
  /** true이면 구분선(border-bottom)을 표시하지 않습니다. 그룹의 마지막 항목에 사용 */
  isLast?: boolean;
}

/**
 * 디자인 토큰 문서(MDX)에서 타이포그래피 스케일을 한 줄(row)로 보여주기 위한 헬퍼 함수.
 * 왼쪽에는 라벨(이름·사이즈/굵기), 오른쪽에는 실제 스타일이 적용된 샘플 텍스트를 보여줍니다.
 * 실제 컴포넌트 라이브러리에는 포함되지 않으며, 문서 전용입니다.
 */
export const createTypeSample = ({
  label,
  sampleText,
  fontSize,
  fontWeight,
  lineHeight = '1.4',
  color = 'var(--color-text-primary)',
  textTransform,
  letterSpacing,
  isLast = false,
}: TypeSampleProps): HTMLElement => {
  const row = document.createElement('div');
  row.style.display = 'flex';
  row.style.alignItems = 'center';
  row.style.gap = '20px';
  row.style.padding = '16px 0';
  row.style.borderBottom = isLast
    ? 'none'
    : '1px solid var(--color-border-default)';
  row.style.fontFamily = 'var(--font-family-base)';

  const labelDiv = document.createElement('div');
  labelDiv.style.width = '140px';
  labelDiv.style.flexShrink = '0';
  labelDiv.style.fontSize = 'var(--text-body-4-size)';
  labelDiv.style.color = 'var(--color-text-tertiary)';
  labelDiv.innerText = label;

  const sampleDiv = document.createElement('div');
  sampleDiv.style.fontSize = fontSize;
  sampleDiv.style.fontWeight = fontWeight;
  sampleDiv.style.lineHeight = lineHeight;
  sampleDiv.style.color = color;
  if (textTransform) sampleDiv.style.textTransform = textTransform as any;
  if (letterSpacing) sampleDiv.style.letterSpacing = letterSpacing;
  sampleDiv.innerText = sampleText;

  row.appendChild(labelDiv);
  row.appendChild(sampleDiv);

  return row;
};

interface TypeSampleGroupProps {
  items: TypeSampleProps[];
}

/**
 * 여러 createTypeSample을 감싸서 하나의 카드 형태로 묶어주는 컨테이너.
 */
export const createTypeSampleGroup = ({
  items,
}: TypeSampleGroupProps): HTMLElement => {
  const group = document.createElement('div');
  group.style.borderTop = '1px solid var(--color-border-default)';
  group.style.margin = '16px 0 32px';

  items.forEach((item) => {
    group.appendChild(createTypeSample(item));
  });

  return group;
};
