import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventList } from './EventList';

const meta = {
  title: 'Components/EventList',
  component: EventList,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '다가오는 행사를 리스트 형태로 보여주는 컴포넌트입니다. 각 행은 썸네일, 카테고리 배지, 제목, 장소·날짜, D-day 태그로 구성됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    items: [
      {
        category: 'performance',
        title: '실내악 시리즈 Vol.3',
        meta: '롯데콘서트홀 · 06.28',
        ddayLabel: 'D-3',
      },
      {
        category: 'film',
        title: '시네마테크 클래식 상영',
        meta: '서울아트시네마 · 06.21',
        ddayLabel: 'D-DAY',
        urgent: true,
      },
    ],
  },
} satisfies Meta<typeof EventList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleItem: Story = {
  args: {
    items: [
      {
        category: 'exhibition',
        title: '빛: 영원에서 영원으로',
        meta: '대림미술관 · ~6.30',
        ddayLabel: 'D-7',
      },
    ],
  },
};
