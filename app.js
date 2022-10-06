let i = 0;
let images = [];
let textEle = document.querySelector('header.showcase h2');
let texts = [
    "EVERY MAN IS GUILTY OF ALL THE GOOD HE DID NOT DO",
    textEle.textContent,
    "HELP SAVE LIFE, IT REALLY COUNT...",
    "Every investment in the lives of others today is an investment for yourself tommorrow",
    "Help others find purpose for living by laying hands of support...", "Become the mouth piece of them that can't speak for themselves..",
    "Every little effort counts..."]
let time = 5000;
// image lists
images[0] = 'PHOTO-2022-02-03-09-18-47_1.jpg';
images[1] = 'PHOTO-2022-02-03-09-18-47_2.jpg';
images[2] = 'PHOTO-2022-02-03-09-18-47_3.jpg';
images[3] = 'PHOTO-2022-02-03-09-18-47_4.jpg';
images[4] = 'PHOTO-2022-02-03-09-18-47_5.jpg';
images[5] = 'PHOTO-2022-02-03-09-18-47_6.jpg';
images[6] = 'PHOTO-2022-02-03-09-18-47_7.jpg';
// feedback Handler 
function feedBack(parentElement, msg, state) {
    let infoEle = document.createElement('div');
    infoEle.textContent = msg;
    infoEle.className = state;
    parentElement.prepend(infoEle);
    setTimeout(()=> {
        parentElement.removeChild(infoEle);
    }, 4000);
}
// change image function
function slide() {
    document.querySelector('header.showcase h2').textContent = String(texts[i]).toUpperCase();
    document.querySelector('header.showcase').style.backgroundImage = `url('${images[i]}'`;
    if(i <  images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("slide()", time);
}
slide();

// get elements
let navActionElements = document.querySelector('nav');
navActionElements.addEventListener('click', (e)=> {
    e.preventDefault();
    if(e.target.id === "home") {
        console.log('This is working');
        document.querySelector('.main-menu').classList.toggle('show')
        page.changeState(new homePage);
    } 
    if(e.target.id === "contact") {
        console.log('This is working');
        document.querySelector('.main-menu').classList.toggle('show')
        page.changeState(new contactState);
    } 
    if(e.target.id === "about") {
        console.log('This is working');
        document.querySelector('.main-menu').classList.toggle('show')
        page.changeState(new aboutState);
    } 
    if(e.target.id === "login") {
        console.log('This is working');
        document.querySelector('.main-menu').classList.toggle('show')
        page.changeState(new loginState);
        // window.s
    } 
    if(e.target.id === "register") {
        console.log('This is working');
        document.querySelector('.main-menu').classList.toggle('show')
        page.changeState(new registerState);
    } 
    
},0);
