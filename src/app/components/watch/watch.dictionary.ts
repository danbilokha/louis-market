
class Watch {
    constructor(
        public id: string
        , public name: string
        , public image: string
        , public price: number
        , public currency: string
        , public description: string
        , public type: string
        , public isAvailable: boolean
        , public comments?: Array<Comment>
        , public discount?: number
        ) {
        
    }
}

class Comment {
    constructor(
        public id: string
        , public date: string
        , public comment: string
        , public watchId: string 
        , public authorId: string
    ) {
        
    }
}

export {Watch, Comment};
