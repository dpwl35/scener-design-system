import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArticleItem } from './ArticleItem';

const meta = {
  title: 'Components/ArticleItem',
  component: ArticleItem,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '에디터 아티클을 보여주는 컴포넌트입니다. layout="card"는 메인 추천 아티클용(이미지 아래 텍스트), layout="list"는 작은 썸네일과 텍스트를 가로로 배치하는 리스트용입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['card', 'list'],
    },
  },
  args: {
    layout: 'card',
    categoryLabel: "EDITOR'S NOTE",
    title: '요즘 성수동에서 가장 뜨거운 전시 5',
    meta: '에디터 윤 · 4분',
  },
} satisfies Meta<typeof ArticleItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {};

export const List: Story = {
  args: {
    layout: 'list',
    categoryLabel: 'CURATION',
    title: '비 오는 날 가기 좋은 실내 문화 공간',
    meta: '에디터 민 · 6분',
  },
};

export const ListGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <ArticleItem
        layout='list'
        categoryLabel='CURATION'
        title='비 오는 날 가기 좋은 실내 문화 공간'
        meta='에디터 민 · 6분'
      />
      <ArticleItem
        layout='list'
        categoryLabel='INTERVIEW'
        title='미디어 아티스트 K가 빛을 다루는 법'
        meta='에디터 서 · 8분'
      />
    </div>
  ),
};
