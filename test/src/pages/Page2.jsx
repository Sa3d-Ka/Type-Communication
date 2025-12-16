import React from 'react'
import { Child } from '../components/Child'

const Page2 = () => {
    const handleDataFromChild = (data) => {
        alert(`Donnée reçue : ${data}`);
        console.log("Donnée reçue :", data);
    };
    return (
        <div>
            <h1 className='text-center text-6xl'>Child to Parent</h1>

            <Child sendData={handleDataFromChild} />
        </div>
    )
}

export default Page2