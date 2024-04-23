import {FC} from 'react';
import {readFile} from 'node:fs/promises'
import Markdown from 'react-markdown'

import {gameList, gameItem} from "@/app/content/reviews/gameList";

interface GameReviewProps {
    params: {
        slug: string
    }
}

const GameReview: FC<GameReviewProps> = async ({params}: GameReviewProps) => {
    const currentPageGameItem: gameItem = gameList.filter((game: gameItem) => game.gameId === params.slug)[0];

    const text = await readFile(`./app/content/reviews/${currentPageGameItem.mdFilename}`);
    const markdownContent = text.toString();

    return (
        <div className='flex flex-col gap-4'>
            <img src={currentPageGameItem.imgFilename} alt={currentPageGameItem.imgAlt} className='rounded-lg'/>

            {/*Have to use specific styling, because tailwind completely resets all HTML tags to basic, non-styled text*/}
            <Markdown components={{
                h2: ({...props}) => <h2 style={{fontWeight: 'bold'}} {...props} />
            }}>
                {markdownContent}
            </Markdown>
        </div>
    )
};

export default GameReview;
