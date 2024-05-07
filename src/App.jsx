
import { useState } from 'react'
import './App.css'
import Button from './Components/Button';

function App() {
  let [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen duration-100">
        <div className="fixed w-full bottom-10 flex flex-wrap justify-center"> 
          <div className="flex w-5/6 justify-center space-x-20 bg-white rounded-full px-3 py-2">
            <Button color="Blue" />
            <Button color="Black" />
            <Button color="Yellow" />
            <Button color="Olive" />
            <Button color="Green" />
            <Button color="Red" />
            <Button color="Orange" />

          </div>
        </div>
      </div>
    </>
  )
}

export default App
