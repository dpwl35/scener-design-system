import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import './Badge';
import type { Category, Status, BadgeAppearance, BadgeSize } from './Badge';

interface BadgeStoryArgs {
  category?: Category;
  status?: Status;
  appearance: BadgeAppearance;
  size: BadgeSize;
}

const meta: Meta<BadgeStoryArgs> = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '콘텐츠의 장르(전시/공연/팝업/영화) 또는 진행 상태(진행중/예정/종료)를 나타내는 배지입니다. category를 쓰면 장르 배지(subtle 또는 outline), status를 쓰면 상태 배지(filled)가 됩니다.',
      },
    },
  },
  args: {
    category: 'exhibition',
    appearance: 'subtle',
    size: 'medium',
  },
  render: (args) => html`
    <scener-badge
      category=${args.category ?? ''}
      status=${args.status ?? ''}
      appearance=${args.appearance}
      size=${args.size}
    ></scener-badge>
  `,
};

export default meta;
type Story = StoryObj<BadgeStoryArgs>;

export const CategorySubtle: Story = {
  args: {
    category: 'exhibition',
    appearance: 'subtle',
  },
};

export const CategoryOutline: Story = {
  args: {
    category: 'exhibition',
    appearance: 'outline',
  },
};

export const StatusOngoing: Story = {
  args: {
    category: undefined,
    status: 'ongoing',
  },
};

export const StatusUpcoming: Story = {
  args: {
    category: undefined,
    status: 'upcoming',
  },
};

export const StatusEnded: Story = {
  args: {
    category: undefined,
    status: 'ended',
  },
};

export const AllCategories: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px;">
      <scener-badge category="exhibition"></scener-badge>
      <scener-badge category="performance"></scener-badge>
      <scener-badge category="popup"></scener-badge>
      <scener-badge category="film"></scener-badge>
    </div>
  `,
};

export const AllCategoriesOutline: Story = {
  render: () => html`
    <div style="display: flex; gap: 10px;">
      <scener-badge category="exhibition" appearance="outline"></scener-badge>
      <scener-badge category="performance" appearance="outline"></scener-badge>
      <scener-badge category="popup" appearance="outline"></scener-badge>
      <scener-badge category="film" appearance="outline"></scener-badge>
    </div>
  `,
};

export const AllStatuses: Story = {
  render: () => html`
    <div style="display: flex; gap: 10px;">
      <scener-badge status="ongoing"></scener-badge>
      <scener-badge status="upcoming"></scener-badge>
      <scener-badge status="ended"></scener-badge>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: 16px;">
      <scener-badge category="exhibition" size="small"></scener-badge>
      <scener-badge category="exhibition" size="medium"></scener-badge>
    </div>
  `,
};
