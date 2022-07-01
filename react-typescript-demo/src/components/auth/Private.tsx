import React from 'react';
import { Login } from './Login';
import { ProfilePropsType } from './Profile';

type PrivatePropsType = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfilePropsType>;
};

export const Private = ({
  isLoggedIn,
  component: Component,
}: PrivatePropsType) => {
  if (isLoggedIn) {
    return <Component name='Doyu' />;
  } else {
    return <Login />;
  }
};
