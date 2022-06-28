type GreetProps = {
  name: string;
  messageCount?: number; // optional type
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome to ${props.name}! You have ${messageCount} unread message`
          : 'Welcome Gueset'}
      </h2>
    </div>
  );
};
