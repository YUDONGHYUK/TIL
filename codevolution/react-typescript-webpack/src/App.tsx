import './styles.css';
import IMAGE from './react.png';
import LOGO from './logo.svg';
import { ClickCounter } from './ClickCounter';

export const App = () => {
  return (
    <>
      <h1>
        Helloooo React TypeScript Webpack Starter Template -{' '}
        {process.env.NODE_ENV}, {process.env.name}
      </h1>
      <img src={IMAGE} alt='React logo' width='300' height='250' />
      <img src={LOGO} alt='React logo' width='300' />
      <ClickCounter />
    </>
  );
};
