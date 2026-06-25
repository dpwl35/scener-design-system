import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './Button';
import type { ButtonCategory, ButtonVariant, ButtonSize } from './Button';

interface ButtonStoryArgs {
  category: ButtonCategory;
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
  loading: boolean;
  disabled: boolean;
  label: string;
}

const meta: Meta<ButtonStoryArgs> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'SCENE;er의 기본 버튼 컴포넌트입니다. category(primary/secondary/ghost)는 시각적 무게감을, variant(default/danger)는 의미를 나타내며, 두 축은 서로 독립적으로 조합됩니다.',
      },
    },
  },
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
    label: '버튼',
    category: 'primary',
    variant: 'default',
    size: 'medium',
    fullWidth: false,
    loading: false,
    disabled: false,
  },
  render: (args) => html`
    <scener-button
      category=${args.category}
      variant=${args.variant}
      size=${args.size}
      ?full-width=${args.fullWidth}
      ?loading=${args.loading}
      ?disabled=${args.disabled}
    >
      ${args.label}
    </scener-button>
  `,
};

export default meta;
type Story = StoryObj<ButtonStoryArgs>;

export const Primary: Story = {
  args: {
    category: 'primary',
    variant: 'default',
    label: '저장하기',
  },
};

export const Secondary: Story = {
  args: {
    category: 'secondary',
    variant: 'default',
    label: '공유하기',
  },
};

export const Ghost: Story = {
  args: {
    category: 'ghost',
    variant: 'default',
    label: '더보기',
  },
};

export const Danger: Story = {
  args: {
    category: 'primary',
    variant: 'danger',
    label: '삭제하기',
  },
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 12px;">
      <scener-button category="primary" size="small">Small</scener-button>
      <scener-button category="primary" size="medium">Medium</scener-button>
      <scener-button category="primary" size="large">Large</scener-button>
    </div>
  `,
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: '가보고싶어요',
  },
  parameters: {
    layout: 'padded',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: '저장 중',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: '저장하기',
  },
};

export const AllCombinations: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; gap: 12px;">
        <scener-button category="primary" variant="default"
          >저장하기</scener-button
        >
        <scener-button category="secondary" variant="default"
          >공유하기</scener-button
        >
        <scener-button category="ghost" variant="default">더보기</scener-button>
      </div>
      <div style="display: flex; gap: 12px;">
        <scener-button category="primary" variant="danger"
          >삭제하기</scener-button
        >
        <scener-button category="secondary" variant="danger"
          >탈퇴하기</scener-button
        >
        <scener-button category="ghost" variant="danger"
          >계정 삭제</scener-button
        >
      </div>
    </div>
  `,
};
