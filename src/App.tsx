import React, { useCallback } from 'react'
import './App.css'

const Heading = ({ title }: { title: string }) => (
  <h2 className='heading'>{title}</h2>
)

const Box: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => <div className='box'>{children}</div>

const List: React.FunctionComponent<{
  items: string[]
  onClick?: (item: string) => void
}> = ({ items, onClick }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.(item)}>
        {item}
      </li>
    ))}
  </ul>
)

function App() {
  const onListClick = useCallback((item: string) => {
    alert(item)
  }, [])
  return (
    <div>
      <Heading title='Intro' />
      <Box> Hello there, click items from below to see an alert. </Box>
      <List items={['one', 'two', 'three']} onClick={onListClick} />
    </div>
  )
}

export default App
