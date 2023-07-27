export interface IMarvelHQS {
    id: number,
    title: string,
    creators: ICreators,
    stories: IStories,
    thumbnail: {
        extension: string
        path: string
    }
}
export interface ICreators {
    items: {
        resourceURI: string,
        name: string,
        role: string
    }
}
export interface IStories {
    items: {
        resourceURI: string,
        name: string,
        type: string
    }
}


