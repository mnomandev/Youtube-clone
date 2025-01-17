export interface InitialState{
    videos: HomePageVideos[];
    currentPlaying: currentPlaying | null;
    searchTerm: string;
    searchResults:[];
    nextPageToken: string | null;
    recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos{
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    videoLink: string;
    videoThumbnail: string;
    videoDuration: string;
    videoViews: string;
    videoAge: string;
    channelInfo:{
        id: string;
        image: string;
        name: string;
    
    }
}
export interface currentPlaying{}
export interface RecommendedVideos{}