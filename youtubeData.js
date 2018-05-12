var youtubeData = /** @class */ (function () {
    function youtubeData(_VideoId, _VideoTitle, _VideoPublisher, _VideoDescription) {
        this.VideoId = _VideoId;
        this.VideoTitle = _VideoTitle;
        this.VideoPublisher = _VideoPublisher;
        this.VideoDescription = _VideoDescription;
    }
    youtubeData.prototype.totalViews = function (VideoId) {
        //api call to get views for videoId
        console.log('Total views');
    };
    youtubeData.prototype.totalLikes = function (VideoId) {
        //api call to get Likes for videoId
        console.log('Total likes');
    };
    youtubeData.prototype.totalDislikes = function (VideoId) {
        //api call to get Dislikes for videoId
        console.log('Total dislikes');
    };
    youtubeData.prototype.totalSubscribe = function (VideoId) {
        //api call to get total subscribers for videoId
        console.log('Total subscribe');
    };
    youtubeData.prototype.totalComments = function (VideoId) {
        //api call to get comments for videoId
        console.log('Total Comments');
    };
    youtubeData.prototype.Comments = function (VideoId) {
        /*api call to get top 20 comments for videoId, by implimenting the concept of
        lazy loading further videos will be downloaded as per the vertical scrolling
        This will also het the likes dislikes for each comment*/
        console.log('Comments loaded in list');
    };
    youtubeData.prototype.repliesForComments = function (CommentId) {
        //api call to get replies for comment
        console.log('replies if any for a comment');
    };
    return youtubeData;
}());
var b = new youtubeData(1, 'a', 'b', 'c');
b.totalViews(1);
b.totalLikes(1);
b.totalDislikes(1);
b.totalSubscribe(1);
b.totalComments(1);
b.Comments(1);
b.repliesForComments(11);
