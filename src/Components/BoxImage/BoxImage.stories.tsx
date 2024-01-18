import { Meta, StoryObj } from '@storybook/react'
import { BoxImage, BoxImageProps } from './BoxImage'

export default {
  component: BoxImage,

  args: {
    url: 'teste'
  },
  title: 'Components/Box Image'
} as Meta<BoxImageProps>
export const Default: StoryObj<BoxImageProps> = {}
