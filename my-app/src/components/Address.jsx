import React from 'react';
const address = [{
    main: "Copenhagen",
    add1: "1 Carlsberg Gate",
    add2: "1260, København, Denmark" 
},
{
    main: "Copenhagen",
    add1: "1 Carlsberg Gate",
    add2: "1260, København, Denmark" 
},]
const Address = () => {
    return (
        <div className='px-8'>
            <h1>Our Offices</h1>
            {address.map(a => <div className='flex flex-col gap-2 my-5'>
                <h2 className='text-white font-medium'>{a.main}</h2>
                <p className=' text-gray-300'>{a.add1}</p>
                <p className='text-gray-300'>{a.add2}</p>
            </div>)}
            
        </div>
    );
}

export default Address;