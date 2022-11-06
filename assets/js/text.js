let text= [
    '&gt welcome @Burdin',
    '&gt interface show header',
    '&gt interface show social_network',
    '&gt user load infromation',
    '&gt interface show user-data',
    '&gt store reset'
]
function typeText(){
let line= 0;
let count = 0;
let out = '';
let text1 = document.querySelector('.out');
    function typeLine(){
let interval = setTimeout( function(){
    out += text[line][count];
    text1.innerHTML=out;
    } ,200)
    }
    typeLine();
}
typeText();