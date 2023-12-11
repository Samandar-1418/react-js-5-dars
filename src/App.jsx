import Input from './com/input'
import { useState } from 'react'
import './App.css'
import Textarea from './com/textarea'
import Button from './com/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="form-wrapper">
         <Input id='title' name='' title='Sarlavha' isRequired={true} placeholder='Sarlavha' ></Input>
         <Textarea id='description' placeholder="Izoh" title='Izoh' isRequired={true} name='description'></Textarea>
         <Button className='blou-button' title='Davom etish'  ></Button>

    </div> 
    </>
  )
}

export default App
