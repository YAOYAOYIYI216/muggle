import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Upload from './index';
import Icon from '../Icon';
import Button from '../Button';

const meta = {
  title: '上传',
  component: Upload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {

  },
  args: {
    action=""
    name: "fileName",
    onChange: fn(),
    onRemove: fn()
  },
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

// 默认上传
export const DefaultUpload: Story = {
  render: () => (
    <Upload
      action=""
      onChange={() => fn()}
      onRemove={() => fn()}
      name="fileName"
    >
      <Button btnType="primary">upload</Button>
    </Upload>
  )
};
/** 多选上传 */
export const MultipleUpload: Story = {
  render: () => (
    <Upload
      action=""
      onChange={() => fn()}
      onRemove={() => fn()}
      name="fileName"
      multiple
    >
      <Button btnType="primary">upload</Button>
    </Upload>
  ),
};
// 上传限制
export const SizeUpload: Story = {
  render: (args) => {
    const checkFileSize = (file: File) => {
      if (Math.round(file.size / 1024) > 50) {
        alert('文件超过50kb！')
        return false;
      }
      return true;
    }
    return (
      <Upload
        {...args}
        action=""
        beforeUpload={checkFileSize}
      >
        <Button size="lg" btnType="primary"><Icon icon="upload" /> 不能传大于50Kb！ </Button>
      </Upload>
    )
  }
};
export const DragUpload: Story = {
  render: () => (
    <Upload
      action=""
      onChange={() => fn()}
      onRemove={() => fn()}
      name="fileName"
      drag
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  ),
};