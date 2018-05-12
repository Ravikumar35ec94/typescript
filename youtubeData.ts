class youtubeData{
    VideoId: number;
    VideoTitle: string;
    VideoPublisher: string;
    VideoDescription: string;

    constructor(_VideoId: number, _VideoTitle: string, _VideoPublisher: string, _VideoDescription: string) {
        this.VideoId = _VideoId;
        this.VideoTitle = _VideoTitle;
        this.VideoPublisher = _VideoPublisher;
        this.VideoDescription = _VideoDescription;
    }

    totalViews(VideoId: number): any {
        //api call to get views for videoId
        console.log('Total views')
    }

    totalLikes(VideoId: number): any {
        //api call to get Likes for videoId
        console.log('Total likes')
    }

    totalDislikes(VideoId: number): any {
        //api call to get Dislikes for videoId
        console.log('Total dislikes')
    }

    totalSubscribe(VideoId: number): any {
        //api call to get total subscribers for videoId
        console.log('Total subscribe')
    }

    totalComments(VideoId: number): any {
        //api call to get comments for videoId
        console.log('Total Comments')
    }

    Comments(VideoId: number): any {
        /*api call to get top 20 comments for videoId, by implimenting the concept of 
        lazy loading further videos will be downloaded as per the vertical scrolling
        This will also het the likes dislikes for each comment*/
        console.log('Comments loaded in list')
    }
    repliesForComments(CommentId: number): any{
        //api call to get replies for comment
        console.log('replies if any for a comment')
    }
}

let b=new youtubeData(1,'a','b','c');
b.totalViews(1);
b.totalLikes(1);
b.totalDislikes(1);
b.totalSubscribe(1);
b.totalComments(1);
b.Comments(1);
b.repliesForComments(11);
