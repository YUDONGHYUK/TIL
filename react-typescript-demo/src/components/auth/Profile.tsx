export type ProfilePropsType = {
  name: string;
};

export const Profile = ({ name }: ProfilePropsType) => {
  return <div>Private Profile component. Name is {name}</div>;
};
