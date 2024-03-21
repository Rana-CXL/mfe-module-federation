import { useState } from 'react'

 const Styler = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>Auth app countewssr</h3>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
    </div>
  )
}

export default Styler