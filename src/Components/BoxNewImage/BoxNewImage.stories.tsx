import { Meta, StoryObj } from '@storybook/react'

import { BoxNewImage, BoxNewImageProps } from './BoxNewImage'

export default {
  component: BoxNewImage,

  title: 'Components/Box new Image'
  // Our exports that end in "Data" are not stories.
} as Meta<BoxNewImageProps>
export const Default: StoryObj<BoxNewImageProps> = {}
