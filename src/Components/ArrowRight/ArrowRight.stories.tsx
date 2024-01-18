import { Meta, StoryObj } from '@storybook/react'
import { ArrowRight, ArrowRightProps } from './ArrowRight'

export default {
  component: ArrowRight,
  args: {
    fill: false,
    size: 32
  },
  title: 'Components/Arrow Right'
} as Meta<ArrowRightProps>
export const Default: StoryObj<ArrowRightProps> = {}
