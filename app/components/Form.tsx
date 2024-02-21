'use client'

import { useState, useEffect } from 'react'

export default function Form() {
  const [mode, setMode] = useState('toBinary')
  const [number, setNumber] = useState<number>(0)
  const [convertedNumber, setConvertedNumber] = useState<number>(0)

  useEffect(() => {
    if (mode === 'toBinary') {
      setConvertedNumber(parseInt(number.toString(2)))
    } else {
      let binaryString = number.toString(2)
      let decimalNumber = parseInt(binaryString, 2)
      setConvertedNumber(decimalNumber)
    }
  }, [mode, number])


  return (
    <div className="mt-8">
      <form className="flex flex-col">
        <label htmlFor="mode">Mode</label>
        <select 
          name="mode" 
          id="mode" 
          value={mode} 
          onChange={(e) => setMode(e.target.value)}
          className="border border-black rounded-md p-1"
        >
          <option value="toBinary">Decimal to Binary</option>
          <option value="toDecimal">Binary to Decimal</option>
        </select>
        <label htmlFor="number" className="mt-4">Number to convert</label>
        <input 
          type="number" 
          name="number" 
          id="number" 
          value={number} 
          onChange={(e) => setNumber(parseInt(e.target.value))} 
          className="border border-black rounded-md p-1"  
        />
      </form>
      <div className="mt-8">
        <h2>Result:</h2>
        <p className="text-2xl font-semibold">{convertedNumber}</p>
      </div>
    </div>
  )
}