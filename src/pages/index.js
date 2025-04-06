import React from 'react'
import dynamic from 'next/dynamic.js';
import { createContext } from 'react';


const DynamicComponent = dynamic(() => import('../App.jsx'), {
  ssr: false,
})

const Context = createContext(null)

const main = () => {
  return (
    <Context.Provider value={null}>
      <div>
        <DynamicComponent/>
      </div>
    </Context.Provider>
  )
}

export default main;

