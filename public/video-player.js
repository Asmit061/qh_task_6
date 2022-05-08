var player = videojs('videoPlayer', {
    controls: true,   
    autoplay: 'muted'
});
var currentVideo = 0;
var videos = new Array("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4","http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"); //("BigBuck.m4v","Video.mp4","BigBuck.m4v","Video2.mp4");
function nextVideo(){
    player.src({
        type: 'video/mp4',
        src: videos[currentVideo]
    })
    player.play();
    currentVideo=(currentVideo+1)%videos.length;
};
var previewPlayer= videojs(document.querySelector('.video-js'));
player.on('ended',nextVideo);
previewPlayer.bigPlayButton.on('click', function(){
    nextVideo();
});

