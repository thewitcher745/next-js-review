import {FC} from 'react';

import Heading from "@/app/components/Heading";

const HollowKnightReview: FC = () => {
    return (
        <>
            <Heading>Hollow Knight Review</Heading>
            <img src='/images/hollow-knight.jpg' alt='hollow-knight'
            width='640' height='360' className='rounded mb-2'/>
            <p>
                Hollow Knight is a 2017 action-adventure game developed and published by Team Cherry, and was released
                for Microsoft Windows, macOS, and Linux in 2017.
            </p>
            <h2>Review</h2>
            <p>
                Hollow Knight is a beautifully hand-drawn, action-packed platformer that offers an impressive amount of
                content. The game's immersive atmosphere, coupled with its challenging gameplay, provides a rewarding
                experience that is a must-play for any fan of the genre.
            </p>
        </>
    )
};

export default HollowKnightReview;
