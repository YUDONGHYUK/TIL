import { Name } from './Person.types';

type PersonLIstProps = {
  names: Name[];
};

export const PersonList = (props: PersonLIstProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};
