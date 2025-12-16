import React, { useRef, useState } from 'react'
import ChildA from '../components/ChildA';
import ChildB from '../components/ChildB';

const Page3 = () => {
    const [message, setMessage] = useState();

    return (
        <>
            <h1 className='text-center text-6xl'>Child to Child</h1>

            <ChildA sendToParent={setMessage} />

            <ChildB message={message} />
        </>
    )
}

export default Page3