import { addDecorator } from '@storybook/react';
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/react';
import Center from '../src/components/Center/Center';

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box m='4'>
      <Story />
    </Box>
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
