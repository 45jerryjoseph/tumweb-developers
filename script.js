function Changer(){
    //if the header changes background find an alternative to make the links change color.
    // const header = document.getElementById('header');
    const list = document.querySelectorAll('#down_sign');
    const anchor = document.querySelectorAll('p');
    const tag = document.querySelectorAll('a');
    const main = document.querySelector('main');
    const welcome = document.getElementById('welc');
    const feature = document.getElementById('feature');
    const projects = document.getElementById('projects');
    const events = document.getElementById('events');
    const home = document.getElementById('home');
    const card = document.getElementsByClassName('card');
    // const part = document.getElementById('part6');
    const head4 = document.querySelectorAll('h4');
    const images = document.querySelectorAll('i');

    home.classList.toggle('color');
    

    // header.classList.toggle('active');
    for (let i = 0; i < list.length; ++i) {
         list[i].classList.toggle('color');
    }
    for(let j=0; j < anchor.length; ++j){
        anchor[j].classList.toggle('color');
    }
    for(let k=0; k < tag.length; ++k){
        tag[k].classList.toggle('color');
    }
    for(let l=0; l < card.length; ++l){
        card[l].classList.toggle('active');
    }
    for(let m=0; m < head4.length; ++m){
        head4[m].classList.toggle('active');
    }
    for(let n=0; n < images.length; ++n){
        images[n].classList.toggle('color');
    }
    // part.classList.toggle('color');



    main.classList.toggle('active');
    welcome.classList.toggle('active');
    feature.classList.toggle('active');
    projects.classList.toggle('active');
    events.classList.toggle('active');  

}
// seems ive forgot alot on there interactions start from here now.
