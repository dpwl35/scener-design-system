import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './EventList';
import type { EventListItem } from './EventList';

interface EventListStoryArgs {
  items: EventListItem[];
}

const meta: Meta<EventListStoryArgs> = {
  title: 'Components/EventList',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '다가오는 행사를 리스트 형태로 보여주는 컴포넌트입니다. 각 행은 썸네일, 카테고리 배지, 제목, 장소·날짜, D-day 태그로 구성됩니다.',
      },
    },
  },
  args: {
    items: [
      {
        thumbnailSrc: '',
        category: 'performance',
        title: '실내악 시리즈 Vol.3',
        venue: '롯데콘서트홀',
        date: '06.28',
        ddayLabel: 'D-3',
      },
      {
        thumbnailSrc: '',
        category: 'film',
        title: '시네마테크 클래식 상영',
        venue: '서울아트시네마',
        date: '06.21',
        ddayLabel: 'D-DAY',
        urgent: true,
      },
    ],
  },
  render: (args) => {
    const el = document.createElement('scener-event-list');
    el.items = args.items;
    return el;
  },
};

export default meta;
type Story = StoryObj<EventListStoryArgs>;

export const Default: Story = {};

export const SingleItem: Story = {
  args: {
    items: [
      {
        thumbnailSrc: '',
        category: 'exhibition',
        title: '빛: 영원에서 영원으로',
        venue: '대림미술관',
        date: '~6.30',
        ddayLabel: 'D-7',
      },
    ],
  },
};
