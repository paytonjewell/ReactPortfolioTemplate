import MedalIcon from './components/icon/MedalIcon';
import MailIcon from './components/icon/MailIcon';
import HeartIcon from './components/icon/HeartIcon';
import LocateIcon from './components/icon/LocateIcon';

import React from 'react';

export default function Icons() {
  return (
    <ul className='text-gray-600 mb-4'>
      <li className='flex items-center mb-2'>
        <LocateIcon className='text-green-500 mr-2' />
        Based in Phuket / Thailand.
      </li>
      <li className='flex items-center mb-2'>
        <HeartIcon className='text-red-500 mr-2' />
        Dev and Music Lover.
      </li>
      <li className='flex items-center mb-2'>
        <MailIcon className='text-blue-500 mr-2' />
        kodlikejamesz@hotmail.com
      </li>
      <li className='flex items-center'>
        <MedalIcon className='text-yellow-500 mr-2' />
        Frontend Mentor.
      </li>
    </ul>
  );
}
