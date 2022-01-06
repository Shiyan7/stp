const videos = document.querySelectorAll('.video');

let generateUrl = function (id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
};

let createIframe = function (id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('src', generateUrl(id));
    iframe.classList.add('video__iframe');

    return iframe;
};

for(let i = 0; i< videos.length; i++) {
    let el = videos[i];
    let videoHref = el.getAttribute('data-video');

    let deletedLength = 'https://youtu.be/'.length;

    let videoId = videoHref.substring(deletedLength, videoHref.length);

    let img = el.querySelector('.video__image');
    let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/sddefault.jpg';
    img.style.cssText = `background-image: url(${youtubeImgSrc})`;

    el.addEventListener('click', (e) => {
        e.preventDefault();

        let iframe = createIframe(videoId);
        el.querySelector('.video__image').style.display = 'none';
        el.appendChild(iframe);
        el.querySelector('button').style.display = 'none';
    });
};