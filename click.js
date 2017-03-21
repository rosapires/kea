/*When header is click add a class"*/

let myHeader = document.querySelector("#header");

myHeader.aadEventListener('click', doSomething);

function doSomething (){
    console.log("clicked");
    myHeader.classlist.add('awesome');
    myHeader.classlist.toggle('awesome');
}

/*animation var anim = document.querySelector("#main");
anim.addEventListener('click', startAnimation);

function startAnimation() {

    anim.classList.add('enable')*/
}
