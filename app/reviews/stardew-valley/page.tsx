import {FC} from 'react';

import Heading from "@/app/components/Heading";

const StardewValleyReview: FC = () => {
    return (
        <>
            <Heading>Stardew Valley Review</Heading>
            <img src='/images/stardew-valley.jpg' alt='stardew-valley'
                 width='640' height='360' className='rounded mb-2'/>
            <p>
                Stardew Valley is a simulation role-playing video game developed by Eric "ConcernedApe" Barone. It was
                initially released for Microsoft Windows in 2016, with later ports for various platforms.
            </p>
            <h2>Review</h2>
            <p>
                Stardew Valley is a charming, fun farming simulator that offers a relaxing yet engaging gameplay
                experience. With its beautiful pixel art, immersive world, and diverse activities, it's a must-play for
                fans of the genre.
            </p>
        </>
    )
};

export default StardewValleyReview;