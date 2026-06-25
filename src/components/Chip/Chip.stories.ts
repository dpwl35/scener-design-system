import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './Chip';
import type { ChipSize } from './Chip';

interface ChipStoryArgs {
  label: string;
  selected: boolean;
  size: ChipSize;
}

const meta: Meta<ChipStoryArgs> = {
  title: 'Components/Chip',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '\\#해시태그 형태의 선택 가능한 칩입니다. 전시·행사 상세페이지의 분위기 태그(예: #몽환적인, #가족과함께)나 필터링용 태그 선택에 사용합니다. 선택 시 배경이 브랜드 컬러(라임)로 바뀝니다. PC에서는 medium, 모바일에서는 small 사이즈를 권장합니다.',
      },
    },
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description: '선택된 상태 여부',
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: '칩 크기',
    },
  },
  args: {
    label: '아트',
    selected: false,
    size: 'medium',
  },
  render: (args) => html`
    <scener-chip ?selected=${args.selected} size=${args.size}
      >${args.label}</scener-chip
    >
  `,
};

export default meta;
type Story = StoryObj<ChipStoryArgs>;

export const Default: Story = {
  args: { label: '몽환적인', selected: false },
};

export const Selected: Story = {
  args: { label: '가족과함께', selected: true },
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 12px;">
      <scener-chip size="small">모바일 사이즈</scener-chip>
      <scener-chip size="medium">PC 사이즈</scener-chip>
    </div>
  `,
};

export const Interactive: Story = {
  render: () => {
    const tags = ['몽환적인', '가족과함께', '아트', '추상적인'];
    const selected = new Set(['가족과함께']);

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.gap = '10px';
    container.style.flexWrap = 'wrap';

    tags.forEach((tag) => {
      const chip = document.createElement('scener-chip');
      chip.textContent = tag;
      chip.toggleAttribute('selected', selected.has(tag));
      chip.addEventListener('scener-chip-toggle', () => {
        if (selected.has(tag)) {
          selected.delete(tag);
        } else {
          selected.add(tag);
        }
      });
      container.appendChild(chip);
    });

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: '클릭해서 선택/해제할 수 있는 칩 그룹 예시입니다.',
      },
    },
  },
};
