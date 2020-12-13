// TODO: fix scroll to a position, where the link to the next page cannot be accesed and no whole video can be seen.

// how to handle offset? intersectionObserver?
// observe every img, set the target. Wait until scroll stops + litle offset. Scroll to weird position.

var scrollTarget = 0;
var timeout;

document.addEventListener("DOMContentLoaded", initApp);

document.addEventListener("scroll", debounceScrollEvent);

function initApp(){
    const catObserver = new IntersectionObserver(setScrollTarget);
    var videos = document.querySelectorAll("video");
    videos.forEach(function(video){
        catObserver.observe(video);
    })
    
}

function setScrollTarget(observerEntries){
    var observerEntry = observerEntries[0];
    if(observerEntry.isIntersecting){
        console.log("update scroll target")
        scrollTarget = observerEntry.target.offsetTop + observerEntry.target.clientHeight/2;
    }
}

function debounceScrollEvent(e){
    // TODO: prevent programatical scroll from creating the timeout!
    console.log(e)
    clearTimeout(timeout);

    if(Math.abs(window.pageYOffset - scrollTarget)>50){
        timeout = setTimeout(scrollToTarget, 1000);
    }
}

function scrollToTarget(){
    console.log("trigger scroll");
    window.scrollTo({
        left:0,
        top:scrollTarget,
        behavior:"smooth"
    });
    clearTimeout(timeout);
}