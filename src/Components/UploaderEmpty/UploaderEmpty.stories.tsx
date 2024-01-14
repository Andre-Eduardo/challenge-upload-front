import { Meta, StoryObj } from '@storybook/react'
import { UploaderEmpty, UploaderEmptyProps } from './UploaderEmpty'

export default {
  component: UploaderEmpty,
  args: {
    isDragActive: false
  },
  title: 'Components/Uploader Empty'
  // Our exports that end in "Data" are not stories.
} as Meta<UploaderEmptyProps>
export const Default: StoryObj<UploaderEmptyProps> = {}
