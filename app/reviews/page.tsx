import {FC} from "react";

import Heading from "@/app/components/Heading";
import ReviewGameCard from "@/app/components/ReviewGameCard";
// @ts-ignore
import {gameList, gameItem} from '@/app/content/reviews/gameList.tsx'


const ReviewsPage: FC = () => {
    return (
        <>
            <Heading>Reviews</Heading>
            <div className='flex flex-col align-middle gap-6 w-full'>
                {
                    gameList.map((gameItem: gameItem) => (
                        <ReviewGameCard gameName={gameItem.gameName}
                                        imgFilename={gameItem.imgFilename}
                                        imgAlt={gameItem.imgAlt}
                                        description={gameItem.description}/>

                    ))
                }
            </div>
        </>
    )
}

export default ReviewsPage;