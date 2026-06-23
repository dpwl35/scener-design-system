import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventCard } from './EventCard';

const meta = {
  title: 'Components/EventCard',
  component: EventCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '큰 이미지 배경 위에 카테고리·상태 배지와 추천 정보를 보여주는 카드입니다. 하단 텍스트는 Title 컴포넌트(recommendation variant)를 재사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'select',
      options: ['exhibition', 'performance', 'popup', 'film'],
    },
    status: {
      control: 'select',
      options: ['ongoing', 'upcoming', 'ended'],
    },
  },
  args: {
    category: 'exhibition',
    status: 'ongoing',
    matchLabel: '96% 취향 일치',
    contentTitle: '빛: 영원에서 영원으로',
    description: '대림미술관 · ~6.30',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '280px', height: '340px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof EventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Upcoming: Story = {
  args: {
    category: 'performance',
    status: 'upcoming',
    matchLabel: '88% 취향 일치',
    contentTitle: '실내악 시리즈 Vol.3',
    description: '롯데콘서트홀 · 06.28',
  },
};
