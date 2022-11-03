import { GreetProps } from './Greet.types';

const Greet = ({ name }: GreetProps) => {
  return <div>Hello {name ? name : 'Guest'}</div>;
};

export default Greet;
