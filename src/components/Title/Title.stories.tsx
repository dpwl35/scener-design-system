import type { Meta, StoryObj } from '@storybook/react-vite';
import { Title } from './Title';

const meta = {
  title: 'Components/Title',
  component: Title,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '메인 화면 등에서 섹션 제목을 보여주는 타이틀 영역입니다. simple(작은 라벨+큰 타이틀), recommendation(취향 일치율+제목+부가정보), withAction(라벨+제목+더보기 버튼) 3가지 변형이 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['simple', 'recommendation', 'withAction'],
    },
    label: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    actionLabel: {
      control: 'text',
    },
  },
  args: {
    variant: 'simple',
    label: 'FOR 민지',
    title: '취향에 맞춘 추천',
    actionLabel: '더보기',
  } as any,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    variant: 'simple',
    label: 'FOR 민지',
    title: '취향에 맞춘 추천',
  },
};

export const Recommendation: Story = {
  args: {
    variant: 'recommendation',
    label: '96% 취향 일치',
    title: '빛: 영원에서 영원으로',
    description: '대림미술관 · ~6.30',
  },
};

export const WithAction: Story = {
  args: {
    variant: 'withAction',
    label: 'TODAY',
    title: '투데이 아티클',
    actionLabel: '더보기',
  },
};
