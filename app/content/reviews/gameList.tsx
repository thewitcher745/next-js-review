export interface gameItem {
    gameName: string,
    imgFilename: string,
    imgAlt: string,
    mdFilename: string
    description: string
}


export const gameList: gameItem[] = [
    {
        "gameName": "Hollow Knight",
        "imgFilename": "images/hollow-knight.jpg",
        "imgAlt": "hollow-knight",
        "mdFilename": "hollow-knight.md",
        "description": "An atmospheric adventure through a surreal, bug-infested world."
    },
    {
        "gameName": "Celeste",
        "imgFilename": "images/celeste.jpg",
        "imgAlt": "celeste",
        "mdFilename": "celeste.md",
        "description": "A narrative-driven, single-player adventure like mom used to make."
    },
    {
        "gameName": "Stardew Valley",
        "imgFilename": "images/stardew-valley.jpg",
        "imgAlt": "stardew-valley",
        "mdFilename": "stardew-valley.md",
        "description": "A farming simulation game with a rich story and immersive world."
    },
    {
        "gameName": "Undertale",
        "imgFilename": "images/undertale.jpg",
        "imgAlt": "undertale",
        "mdFilename": "undertale.md",
        "description": "A unique RPG, where you don't have to destroy anyone."
    },
    {
        "gameName": "Cuphead",
        "imgFilename": "images/cuphead.jpg",
        "imgAlt": "cuphead",
        "mdFilename": "cuphead.md",
        "description": "A classic run and gun action game heavily focused on boss battles."
    },
    {
        "gameName": "Hellblade",
        "imgFilename": "images/hellblade.jpg",
        "imgAlt": "hellblade",
        "mdFilename": "hellblade.md",
        "description": "A dark fantasy action-adventure game that explores themes of mental illness."
    }
]