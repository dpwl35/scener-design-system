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
          'SCENE;er의 기본 버튼 컴포넌트입니다. category(primary/secondary/ghost)는 시각적 무게감을, variant(default/danger)는 의미를 나타내며, 두 축은 서로 독립적으로 조합됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: '버튼의 시각적 무게감',
    },
    variant: {
      control: 'select',
      options: ['default', 'danger'],
      description: '버튼의 의미(기본/위험)',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
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
    category: 'primary',
    variant: 'default',
    size: 'medium',
    fullWidth: false,
    loading: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    category: 'primary',
    variant: 'default',
    children: '저장하기',
  },
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export const Secondary: Story = {
  args: {
    category: 'secondary',
    variant: 'default',
    children: '공유하기',
  },
};

export const Ghost: Story = {
  args: {
    category: 'ghost',
    variant: 'default',
    children: '더보기',
  },
};

export const Danger: Story = {
  args: {
    category: 'primary',
    variant: 'danger',
    children: '삭제하기',
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Button {...args} size='small'>
        Small
      </Button>
      <Button {...args} size='medium'>
        Medium
      </Button>
      <Button {...args} size='large'>
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

export const AllCombinations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button category='primary' variant='default'>
          저장하기
        </Button>
        <Button category='secondary' variant='default'>
          공유하기
        </Button>
        <Button category='ghost' variant='default'>
          더보기
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button category='primary' variant='danger'>
          삭제하기
        </Button>
        <Button category='secondary' variant='danger'>
          탈퇴하기
        </Button>
        <Button category='ghost' variant='danger'>
          계정 삭제
        </Button>
      </div>
    </div>
  ),
};
