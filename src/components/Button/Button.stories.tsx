import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'SCENE;er의 기본 버튼 컴포넌트입니다. Primary는 브랜드 라임 컬러를 사용하는 핵심 CTA(저장하기, 가보고싶어요 등)에, Secondary는 보조 액션, Ghost는 텍스트형 액션(더보기 등)에 사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: '버튼의 시각적 스타일',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '버튼 크기',
    },
    fullWidth: {
      control: 'boolean',
      description: '부모 너비를 가득 채울지 여부',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태 (스피너 표시, 인터랙션 비활성화)',
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    children: '버튼',
    variant: 'primary',
    size: 'md',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '저장하기',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '공유하기',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: '더보기',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: '가보고싶어요',
  },
  parameters: {
    layout: 'padded',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: '저장 중',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '저장하기',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="primary">저장하기</Button>
        <Button variant="secondary">공유하기</Button>
        <Button variant="ghost">더보기</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="primary" disabled>
          저장하기
        </Button>
        <Button variant="secondary" disabled>
          공유하기
        </Button>
        <Button variant="ghost" disabled>
          더보기
        </Button>
      </div>
    </div>
  ),
};
