interface ColorProps {
  name: string;
  variable: string;
  textColor?: string;
}

/**
 * 디자인 토큰 문서(MDX)에서 컬러를 시각적으로 보여주기 위한 헬퍼 함수.
 * 부모 div 하나에만 배경색을 적용하고(variable 그대로 var()로 참조),
 * 그 안에 변수명과 이름을 함께 표시합니다.
 */
export const createColor = ({
  name,
  variable,
  textColor = '#fff',
}: ColorProps): HTMLElement => {
  const container = document.createElement('div');

  // 부모 컨테이너 스타일 적용
  container.style.background = `var(${variable})`;
  container.style.borderRadius = 'var(--radius-medium)';
  container.style.padding = '16px';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.justifyContent = 'space-between';
  container.style.minHeight = '100px';
  container.style.fontFamily = 'var(--font-family-base)';

  // 컬러 이름 (상단 텍스트)
  const nameDiv = document.createElement('div');
  nameDiv.style.fontSize = '13px';
  nameDiv.style.fontWeight = '600';
  nameDiv.style.color = textColor;
  nameDiv.innerText = name;

  // 변수명 (하단 텍스트)
  const variableDiv = document.createElement('div');
  variableDiv.style.fontSize = '11px';
  variableDiv.style.color = textColor;
  variableDiv.style.opacity = '0.7';
  variableDiv.innerText = variable;

  // 자식 노드로 추가
  container.appendChild(nameDiv);
  container.appendChild(variableDiv);

  return container;
};

interface ColorGridProps {
  // React.ReactNode 대신 실제 HTMLElement 배열을 받거나 직접 생성하도록 구성합니다.
  colors: ColorProps[];
  columns?: number;
}

export const createColorGrid = ({
  colors,
  columns = 4,
}: ColorGridProps): HTMLElement => {
  const grid = document.createElement('div');

  // 그리드 레이아웃 스타일 적용
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  grid.style.gap = '12px';
  grid.style.margin = '16px 0 32px';

  // 전달받은 컬러 데이터를 기반으로 개별 칩 생성 후 그리드에 삽입
  colors.forEach((colorItem) => {
    const colorBlock = createColor(colorItem);
    grid.appendChild(colorBlock);
  });

  return grid;
};
