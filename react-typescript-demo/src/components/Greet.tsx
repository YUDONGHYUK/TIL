type GreedProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreedProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome to ${props.name}! You have ${props.messageCount} unread message`
          : 'Welcome Gueset'}
      </h2>
    </div>
  );
};
