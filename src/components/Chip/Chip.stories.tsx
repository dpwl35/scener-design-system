import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '\\#해시태그 형태의 선택 가능한 칩입니다. 전시·행사 상세페이지의 분위기 태그(예: #몽환적인, #가족과함께)나 필터링용 태그 선택에 사용합니다. 선택 시 배경이 브랜드 컬러(라임)로 바뀝니다. PC에서는 md, 모바일에서는 sm 사이즈를 권장합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: 'boolean',
      description: '선택된 상태 여부',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: '칩 크기',
    },
  },
  args: {
    children: '아트',
    selected: false,
    size: 'md',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: '몽환적인', selected: false },
};

export const Selected: Story = {
  args: { children: '가족과함께', selected: true },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Chip {...args} size='sm'>
        모바일 사이즈
      </Chip>
      <Chip {...args} size='md'>
        PC 사이즈
      </Chip>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const ChipGroup = () => {
      const tags = ['몽환적인', '가족과함께', '아트', '추상적인'];
      const [selected, setSelected] = useState<string[]>(['가족과함께']);

      const toggle = (tag: string) => {
        setSelected((prev) =>
          prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
        );
      };

      return (
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              selected={selected.includes(tag)}
              onClick={() => toggle(tag)}
            >
              {tag}
            </Chip>
          ))}
        </div>
      );
    };
    return <ChipGroup />;
  },
  parameters: {
    docs: {
      description: {
        story: '클릭해서 선택/해제할 수 있는 칩 그룹 예시입니다.',
      },
    },
  },
};
