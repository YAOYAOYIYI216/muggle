import type { Meta, StoryObj } from '@storybook/react';
import Input from './index';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// 默认的
export const defaultInput: Story = {
  args: {
    placeholder: "placeholder"
  },
};
// 禁用的
export const disabledInput: Story = {
  args: {
    placeholder: "disabled input",
    disabled: true
  },
};
// 带图标
export const IconInput: Story = {
  args: {
    placeholder: "placeholder",
    icon: "magnifying-glass"
  },
};
// 不同尺寸的
export const sizeInput: Story = {
  render: () => (
    <>
      <Input
        style={{ width: '300px' }}
        defaultValue="large size"
        size="lg"
      />
      <Input
        style={{ width: '300px' }}
        placeholder="small size"
        size="sm"
      />
    </>
  ),
  args: {

  },
};
// 前后缀
export const pandInput: Story = {
  render: () => (
    <>
      <Input
        style={{ width: '300px' }}
        defaultValue="prepend text"
        prepend="https://"
      />
      <Input
        style={{ width: '300px' }}
        defaultValue="google"
        append=".com"
      />
    </>
  ),
  args: {

  },
};
