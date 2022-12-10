import React from 'react';
import Table from './features/Datarepresentation/Components/Table';

function App() {

  return (
    <div className=" min-h-screen flex justify-center items-center  ">
      <div className='container mx-auto border bottom-1 border-gray-200 shadow-2xl rounded-lg'>
        <h1 className=' font-mono text-lg text-center py-8 sm:text-2xl lg:text-4xl'>Chefkart Frontend Developer Assignment  </h1>
        <Table />
      </div>
    </div>
  );
}

export default App;
