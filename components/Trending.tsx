import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

export default function Trending ({result}){

    return(
        <div className='hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between'>
            <div className='space-y-0.5'>
                <p className='text-[#6e767d] text-sm font-medium'>{result.heading}</p>
                <h6 className='font-bold max-w-[250px] text-sm'>{result.description}</h6>
                <p className='text-[#6e767d] text-xs font-medium max-w-[250px]'>Trending with{" "} {result.tag.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}</p>
            </div>

            {result.img ? (
                <Image
                src={result.img}
                width={70}
                height={70}
                objectFit="cover"
                className='rounded-2xl'
                 />
            ) : (
                <div className='icon group'>
                    <EllipsisHorizontalIcon className='h-5 text-[#6e767d] group-hover:text-[#1d9bf0]' />
                </div>
            )}
        </div>
    )

}