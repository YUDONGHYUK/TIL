import React from 'react';
import { Button } from '@chakra-ui/react';

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

// args 메커니즘 사용
const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  colorScheme: 'green',
  children: 'Success',
};

export const Danger = Template.bind({});
Danger.args = {
  colorScheme: 'red',
  children: 'Danger',
  onClick: () => console.log('click : ', process.env.STORYBOOK_THEME), // 개발자 도구 콘솔에 표시하기
};

// 기존 코드
// export const Success = () => <Button colorScheme='green'>Success</Button>;
// export const Danger = () => <Button colorScheme='red'>Danger</Button>;
