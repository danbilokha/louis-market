
class Watch {
    constructor(
        public id: string
        , public name: string
        , public image: string
        , public price: number
        , public description: string
        , public type: string
        , public isAvailable: boolean
        , public comments: Array<WatchComment>
        , public discount?: number
        ) {
        
    }
}

class WatchComment {
    constructor(
        public id: string
        , public date: string
        , public comment: string
        , public authorId?: string
    ) {
        
    }
}

export {Watch, WatchComment};
