let listv = document.querySelectorAll('.boxs .box ')
let mainv = document.querySelector('.play video')
let titv = document.querySelector('.th')
listv.forEach( video => {
    video.onclick=() =>{
        listv.forEach(box => box.classList.remove('active'))
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src')
            mainv.src = src;
            let tv = video.children[1].innerHTML;
            titv.textContent = "Playin : " +tv;
        };
    };
});