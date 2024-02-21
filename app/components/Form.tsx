'use client'

import { useState, useEffect } from 'react'

export default function Form() {
  const [mode, setMode] = useState('toBinary')
  const [number, setNumber] = useState<number>(0)
  const [convertedNumber, setConvertedNumber] = useState<string>("0")

  useEffect(() => {
    if (mode === 'toBinary') {
      //setConvertedNumber(parseInt(number.toString(2)))
      setConvertedNumber(convertDecimalToBinary(number))
    } else {
      let binaryString = number.toString(2)
      let decimalString = parseInt(binaryString, 2).toString()
      setConvertedNumber(decimalString)
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

const convertDecimalToBinary = (x: number): string => {
  let result = "1"
  let remainder = 0;
  let found = false;
  let i0 = 0;

  //figure out biggest power of 2
  while (found == false) {
    if (2**i0 <= x) {
      i0++;
    } else {
      found = true
    }
  }
  let mostSignificantPower = i0-1;
  remainder = x-2**mostSignificantPower;

  for (let i1 = i0-2; i1 >= 0; i1--) {
    if (2**i1 > remainder) {
      result += "0";
    } else {
      result +="1";
      remainder -= 2**i1;
    }
  }

  return result
}