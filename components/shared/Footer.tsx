import Image  from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center md:flex-between wrapper flex-col sm:flex-row gap-4 p-5 text-center'>
        <Link href="/">
          <div className="flex justify-center">
            <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
          </div>
        </Link>
        <p>2024 Evently. All Rights reserved</p>
       
      </div>
    </footer>
  );
};

export default Footer;
