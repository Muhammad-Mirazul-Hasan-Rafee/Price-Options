import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name , price , features} = option; // option theke distructuring kora hcche


    return (
        <div className='bg-slate-900 rounded-md p-6 flex flex-col text-white'>
            <h2><span className='text-4xl'>{price}</span><span className='text-3xl'>/month</span></h2>
            <h4 className='text-center my-8'>{name}</h4>

            <div className='pl-6 flex-grow'>
            {
                features.map((feature , index) => <Feature key={index} feature={feature}></Feature>)
            } 
            </div>

            <button className='mt-12 bg-green-800 w-28 h-8 font-bold hover:bg-slate-700'>Buy Now</button>

        </div>
        
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
    
};

export default PriceOption;