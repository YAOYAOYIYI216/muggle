import type { Meta, StoryObj } from '@storybook/react';
import Button from './index'

const meta = {
  title: '按钮',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 默认按钮 */
export const DefaultButton: Story = {
  render: () => (<Button> button </Button>),
};
/** 不同尺寸 */
export const ButtonWithSize: Story = {
  render: () => (
    <>
      <Button size="lg"> large button </Button>
      <Button size="sm"> small button </Button>
    </>
  ),
  args: {

  },
};
/** 不同类型 */
export const ButtonWithType: Story = {
  render: () => (
    <>
      <Button btnType="primary"> primary button </Button>
      <Button btnType="danger"> danger button </Button>
      <Button btnType="link" href="https://google.com"> link button </Button>
    </>
  ),
  args: {

  },
};