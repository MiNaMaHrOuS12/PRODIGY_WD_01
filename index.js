let navHolder = document.querySelector("#navBar");

window.addEventListener('scroll', function(){
    if (window.scrollY > 70){
        navHolder.style.backgroundColor = '#b9b4b4';
        navHolder.style.width = "100%";
    }
    else{
        navHolder.style.backgroundColor = '#eee';
        navHolder.style.width = '80%';
}
} )