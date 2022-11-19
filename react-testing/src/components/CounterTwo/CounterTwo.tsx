import { CounterTowProps } from './CounterTwo.types'

const CounterTwo = ({
  count,
  handleIncrement,
  handleDecrement,
}: CounterTowProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  )
}

export default CounterTwo
