import { useCallback, useEffect, useState } from 'react'
import './App.css'
import Botoes from './components/Botoes'

function App() {

  const [num, setNum] = useState()
  const [nums, setNums] = useState([])

  const [soma, setSoma] = useState(false)
  const [sub, setSub] = useState(false)
  const [mult, setMult] = useState(false)
  const [divid, setDivid] = useState(false)
  
    const prevValue = ()=>{      
        setNums((prev) =>{
          const state = [...prev, num]
          return state
        }
        )
      }

    const handleValue = (numValue)=>{
      setNum([numValue])
    }  

  useEffect(()=>{
    prevValue()
  },[num])

  const clearScreen = ()=>{
    setNums([''])
    setNum([''])
  }

  const plus = useCallback(()=>{
    const inputsValue = nums
    const numParse = parseFloat(inputsValue.join(''))
    clearScreen()
    setSoma(numParse)
  },[nums])

  const minus = useCallback(()=>{
    const inputsValue = nums
    const numParse = parseFloat(inputsValue.join(''))
    clearScreen()
    setSub(numParse)
  },[nums])

  const multiply = useCallback(()=>{
    const inputsValue = nums
    const numParse = parseFloat(inputsValue.join(''))
    clearScreen()
    setMult(numParse)
  },[nums])

  const division = useCallback(()=>{
    const inputsValue = nums
    const numParse = parseFloat(inputsValue.join(''))
    clearScreen()
    setDivid(numParse)
  },[nums])


  const makeCalc = ()=>{
    if(soma){
      const valueA = soma
      const inputsValue = nums
      const valueB = parseFloat(inputsValue.join(''))
      isNaN(valueB)?setNums([valueA]) && setSoma(false):
      setNums([valueA+valueB])
      return setSoma(false) 
    }
    if(sub){
      const valueA = sub
      const inputsValue = nums
      const valueB = parseFloat(inputsValue.join(''))
      isNaN(valueB)?setNums([valueA]) && setSub(false):
      setNums([valueA - valueB])
      return setSub(false)
    }
    if(mult){
      const valueA = mult
      const inputsValue = nums
      const valueB = parseFloat(inputsValue.join(''))
      isNaN(valueB)?setNums([valueA]) && setMult(false):
      setNums([valueA*valueB])
      return setMult(false)
    }
    if(divid){
      const valueA = divid
      const inputsValue = nums
      const valueB = parseFloat(inputsValue.join(''))
      isNaN(valueB)?setNums([valueA]) && setDivid(false):
      setNums([valueA/valueB])
      return setDivid(false)
    }
    else{
        return prevValue
      }
  }

  return (

      <div className="container">
        <div id="main">
          <div id="visor">
            <div id='visor-area'>{nums}</div>
          </div>
          <Botoes 
            sendValue={handleValue}
              makeSum={plus}
              makeSub={minus}
              makeMult={multiply}
              clear={clearScreen}
              makeDivid={division}
            response = {makeCalc}
          />
        </div>
      </div>
  )
}

export default App
