import React from 'react';
import { BsToggles2, MdSearch } from '../assets/icons';
import { useSelector } from 'react-redux';

const DBHeader = () => {
    const user = useSelector((state) => state.user);
  return (
    <div className=" w-full flex items-center justify-between gap-3">
        <p className='text-2xl text-headingColor'>
        Welcome to City
        {user?.name && (
        <span className='block text-base text-gray-500'>{`Hello ${user?.name}...!`}</span>
        )}
        </p>

        <div className='flex items-center justify-center gap-4'>
          
          <div>
              <MdSearch/>
              <input type="text" placeholder='Search Here...' />
              <BsToggles2 />
          </div>

        </div>
    </div>
  );
};

export default DBHeader;