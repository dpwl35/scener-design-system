import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, render } from 'lit';
import './EventCard';
import type { Category, Status } from '../Badge/Badge';

interface EventCardStoryArgs {
  imageSrc: string;
  category: Category;
  status: Status;
  matchLabel: string;
  contentTitle: string;
  venue: string;
  date: string;
}

const meta: Meta<EventCardStoryArgs> = {
  title: 'Components/EventCard',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '큰 이미지 배경 위에 카테고리·상태 배지와 추천 정보를 보여주는 카드입니다. 부모 요소의 width/height를 그대로 따라가므로, 사용하는 쪽에서 크기를 지정해야 합니다.',
      },
    },
  },
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
    imageSrc: '',
    category: 'exhibition',
    status: 'ongoing',
    matchLabel: '96% 취향 일치',
    contentTitle: '빛: 영원에서 영원으로',
    venue: '대림미술관',
    date: '~6.30',
  },
  render: (args) => html`
    <scener-event-card
      image-src=${args.imageSrc}
      category=${args.category}
      status=${args.status}
      match-label=${args.matchLabel}
      content-title=${args.contentTitle}
      venue=${args.venue}
      date=${args.date}
    ></scener-event-card>
  `,
  decorators: [
    (story) => {
      const wrapper = document.createElement('div');
      wrapper.style.width = '280px';
      wrapper.style.height = '340px';
      render(story(), wrapper);
      return wrapper;
    },
  ],
};

export default meta;
type Story = StoryObj<EventCardStoryArgs>;

const sourceFor = (args: EventCardStoryArgs) => `<scener-event-card
  image-src="${args.imageSrc}"
  category="${args.category}"
  status="${args.status}"
  match-label="${args.matchLabel}"
  content-title="${args.contentTitle}"
  venue="${args.venue}"
  date="${args.date}"
></scener-event-card>`;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: sourceFor({
          imageSrc: '',
          category: 'exhibition',
          status: 'ongoing',
          matchLabel: '96% 취향 일치',
          contentTitle: '빛: 영원에서 영원으로',
          venue: '대림미술관',
          date: '~6.30',
        }),
      },
    },
  },
};

export const Upcoming: Story = {
  args: {
    imageSrc: '',
    category: 'performance',
    status: 'upcoming',
    matchLabel: '88% 취향 일치',
    contentTitle: '실내악 시리즈 Vol.3',
    venue: '롯데콘서트홀',
    date: '06.28',
  },
  parameters: {
    docs: {
      source: {
        code: sourceFor({
          imageSrc: '',
          category: 'performance',
          status: 'upcoming',
          matchLabel: '88% 취향 일치',
          contentTitle: '실내악 시리즈 Vol.3',
          venue: '롯데콘서트홀',
          date: '06.28',
        }),
      },
    },
  },
};
