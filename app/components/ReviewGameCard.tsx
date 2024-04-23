import {FC} from 'react';
import Link from "next/link";


interface PropsType {
    gameName: string,
    imgFilename: string,
    imgAlt: string,
    description: string
}

const ReviewGameCard: FC<PropsType> = ({gameName, imgAlt, description}: PropsType) => {
    return (
        <Link href={`reviews/${imgAlt}`}>
            <div className='flex sm:gap-4 border-2 flex-col sm:flex-row h-70'>
                <div className='flex sm:flex-shrink-0 overflow-hidden border-4 border-amber-500 w-12/12 sm:w-60 aspect-[8/5]'>
                    {/*<img src={`/images/${imgFilename}`}*/}
                    {/*     alt={imgAlt} className='h-full w-auto'/>*/}
                </div>

                <div className='sm:w-8/12 py-4 my-1 px-4'>
                    <h2 className='font-semibold text-center sm:text-left'>{gameName}</h2>
                    <br className='hidden sm:block'/>
                    <p className='text-center sm:text-left'>{description}</p>
                </div>
            </div>
        </Link>
    )
};

export default ReviewGameCard
