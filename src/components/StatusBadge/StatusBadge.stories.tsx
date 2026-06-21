import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusBadge } from './StatusBadge';

const meta = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '전시·행사의 진행 상태(진행중/예정/종료)를 나타내는 뱃지입니다. 카테고리 색상과 분리된 별도의 상태 색상 체계를 사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['ongoing', 'upcoming', 'ended'],
    },
  },
  args: {
    status: 'ongoing',
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Ongoing: Story = {
  args: { status: 'ongoing' },
};

export const Upcoming: Story = {
  args: { status: 'upcoming' },
};

export const Ended: Story = {
  args: { status: 'ended' },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px' }}>
      <StatusBadge status="ongoing" />
      <StatusBadge status="upcoming" />
      <StatusBadge status="ended" />
    </div>
  ),
};
