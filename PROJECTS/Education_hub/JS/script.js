// Navbar-resp
Navlist = document.querySelector('.nav-list');
Burger = document.querySelector('.burger');
Nav = document.querySelector('.navbar')
txt = document.getElementById('search');
Burger.addEventListener('click', () => {
    U_S_list = document.querySelector('.search-list');
    Nav.classList.toggle('navbar-resp');
    Navlist.classList.toggle('v-class');
    if( U_S_list.style.marginTop != "225px")
        U_S_list.style.marginTop = "225px";
    else
        U_S_list.style.marginTop = "0";
})
// Search Bar
S_list = document.querySelector('.search-list');
S_bar = document.getElementById('search');
var L = [];
S_bar.addEventListener("input", () => {
    L = [];
    var li = document.getElementsByClassName("s-li");
    var In_text = document.getElementById('search').value.toUpperCase();
    if(In_text.length > 0){
        S_list.classList.add('u-search-list');
    }
    else{
        S_list.classList.toggle('u-search-list');
    }
    for (var i = 0; i < li.length; i++) {
        var text = li[i].innerHTML;
        if (text.toUpperCase().indexOf(In_text) > -1) {
            li[i].style.display = '';
            L.push(i);   
        }
        else {
            li[i].style.display = 'none';
        }
    }  
})

function fill(x){
    K1 = document.querySelector('.s-list');
    K2 = K1.getElementsByTagName('a').item(x)
    txt.value = K2.innerHTML;
    S_list.classList.toggle('u-search-list');
}

Hello = ()=>{
    txt.value = "Hello";
    alert("Hello... \nHave a Nice and Productive Day...");
}
clr = ()=>{
    txt.value = "";
    S_list.classList.remove('u-search-list');
}
S_bar.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementsByClassName("s-li")[L[0]].click();
    }
});
// S_list.addEventListener("mouseout", () => {
//     S_list.classList.toggle('u-search-list');
// })