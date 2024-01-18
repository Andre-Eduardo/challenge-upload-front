import { Meta, StoryObj } from '@storybook/react'
import { ArrowLeft, ArrowLeftProps } from './ArrowLeft'

export default {
  component: ArrowLeft,
  title: 'Components/Arrow Left',
  args: {
    fill: false,
    size: 32
  }
  // Our exports that end in "Data" are not stories.
} as Meta<ArrowLeftProps>
export const Default: StoryObj<ArrowLeftProps> = {}
