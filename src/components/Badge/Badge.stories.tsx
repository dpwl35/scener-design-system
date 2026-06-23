import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '콘텐츠의 장르(전시/공연/팝업/영화) 또는 진행 상태(진행중/예정/종료)를 나타내는 배지입니다. category prop을 쓰면 장르 배지(subtle 또는 outline), status prop을 쓰면 상태 배지(filled)가 됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    category: 'exhibition',
    appearance: 'subtle',
    size: 'md',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

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
  args: { category: 'exhibition' },
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Badge category='exhibition' />
      <Badge category='performance' />
      <Badge category='popup' />
      <Badge category='film' />
    </div>
  ),
};

export const AllCategoriesOutline: Story = {
  args: { category: 'exhibition' },
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge category='exhibition' appearance='outline' />
      <Badge category='performance' appearance='outline' />
      <Badge category='popup' appearance='outline' />
      <Badge category='film' appearance='outline' />
    </div>
  ),
};

export const AllStatuses: Story = {
  args: { category: 'exhibition' },
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge status='ongoing' />
      <Badge status='upcoming' />
      <Badge status='ended' />
    </div>
  ),
};

export const Sizes: Story = {
  args: { category: 'exhibition' },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Badge category='exhibition' size='sm' />
      <Badge category='exhibition' size='md' />
    </div>
  ),
};
