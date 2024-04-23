export interface gameItem {
    gameId: string,
    gameName: string,
    imgFilename: string,
    imgAlt: string,
    mdFilename: string,
    description: string
}

export const gameList: gameItem[] = [
    {
        "gameId": "hollow-knight",
        "gameName": "Hollow Knight",
        "imgFilename": "/next-js-review/images/hollow-knight.jpg",
        "imgAlt": "hollow-knight",
        "mdFilename": "hollow-knight.md",
        "description": "An atmospheric adventure through a surreal, bug-infested world."
    },
    {
        "gameId": "celeste",
        "gameName": "Celeste",
        "imgFilename": "/next-js-review/images/celeste.jpg",
        "imgAlt": "celeste",
        "mdFilename": "celeste.md",
        "description": "A narrative-driven, single-player adventure like mom used to make."
    },
    {
        "gameId": "stardew-valley",
        "gameName": "Stardew Valley",
        "imgFilename": "/next-js-review/images/stardew-valley.jpg",
        "imgAlt": "stardew-valley",
        "mdFilename": "stardew-valley.md",
        "description": "A farming simulation game with a rich story and immersive world."
    },
    {
        "gameId": "undertale",
        "gameName": "Undertale",
        "imgFilename": "/next-js-review/images/undertale.jpg",
        "imgAlt": "undertale",
        "mdFilename": "undertale.md",
        "description": "A unique RPG, where you don't have to destroy anyone."
    },
    {
        "gameId": "cuphead",
        "gameName": "Cuphead",
        "imgFilename": "/next-js-review/images/cuphead.jpg",
        "imgAlt": "cuphead",
        "mdFilename": "cuphead.md",
        "description": "A classic run and gun action game heavily focused on boss battles."
    },
    {
        "gameId": "hellblade",
        "gameName": "Hellblade",
        "imgFilename": "/next-js-review/images/hellblade.jpg",
        "imgAlt": "hellblade",
        "mdFilename": "hellblade.md",
        "description": "A dark fantasy action-adventure game that explores themes of mental illness."
    }
]