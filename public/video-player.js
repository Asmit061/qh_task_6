var player = videojs('videoPlayer', {
    controls: true,   
    autoplay: 'muted'
});
var previewPlayer= videojs(document.querySelector('.video-js'));
previewPlayer.bigPlayButton.on('click', function(){
    var currentVideo = 0;
    var videos = new Array("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4","http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"); //("BigBuck.m4v","Video.mp4","BigBuck.m4v","Video2.mp4");
    
    function nextVideo(){
        
        player.off('ended', nextVideo, false);
        player.src({
            type: 'video/mp4',
            src: videos[currentVideo]
        })
        player.play();
        currentVideo = (currentVideo + 1) % videos.length
        player.on('ended', nextVideo, false);
    };

    while(currentVideo <= videos.length){
        nextVideo();
    }
});
