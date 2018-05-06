import {LouisImage} from 'app/shared/dictionaries/Image.dictionary';

class Watch {
    constructor(public name: string
        , public images: Array<LouisImage>
        , public price: number
        , public currency: string
        , public description: string
        , public type: string
        , public isAvailable: boolean
        , public discount?: number) {

    }
}

class Comment {
    constructor(public id: string
        , public date: string
        , public comment: string
        , public watchId: string
        , public authorId: string) {

    }
}

export {Watch, Comment};
