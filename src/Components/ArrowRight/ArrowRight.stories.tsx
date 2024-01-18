import { Meta, StoryObj } from '@storybook/react'
import { ArrowRight, ArrowRightProps } from './ArrowRight'

export default {
  component: ArrowRight,
  args: {
    fill: false,
    size: 32
  },
  title: 'Components/Arrow Right'
  // Our exports that end in "Data" are not stories.
} as Meta<ArrowRightProps>
export const Default: StoryObj<ArrowRightProps> = {}
