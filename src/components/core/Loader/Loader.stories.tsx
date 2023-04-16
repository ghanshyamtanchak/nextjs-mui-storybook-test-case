import { ComponentMeta, ComponentStory } from '@storybook/react';

import CoreLoader from '.';
import { COLORS } from '../../../constants/color';

export default {
  title: 'Loader',
  component: CoreLoader,
} as ComponentMeta<typeof CoreLoader>;

export const Loader: ComponentStory<typeof CoreLoader> = ({ ...args }) => (
  <CoreLoader {...args} />
);

Loader.args = {
  style: {
    width: 20,
    height: 20,
    color: COLORS.GRAY,
  },
};
