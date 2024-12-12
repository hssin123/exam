const likeButton0 = document.getElementById('likeButton0');
var likeCountDisplay0 = document.getElementById('likeCount');

var likeCount = parseInt(likeCountDisplay0.textContent);

likeButton0.addEventListener('click', () => {
    likeCount++; 
    likeCountDisplay0.textContent = likeCount; 
});


const likeButton1 = document.getElementById('likeButton1');
var likeCountDisplay1 = document.getElementById('likeCount');

var likeCount = parseInt(likeCountDisplay1.textContent);

likeButton1.addEventListener('click', () => {
    likeCount++; 
    likeCountDisplay1.textContent = likeCount; 
});


const likeButton2 = document.getElementById('likeButton2');
var likeCountDisplay2 = document.getElementById('likeCount');

var likeCount = parseInt(likeCountDisplay2.textContent);

likeButton2.addEventListener('click', () => {
    likeCount++; 
    likeCountDisplay2.textContent = likeCount; 
});


const likeButton3 = document.getElementById('likeButton3');
var likeCountDisplay3 = document.getElementById('likeCount');

var likeCount = parseInt(likeCountDisplay3.textContent);

likeButton3.addEventListener('click', () => {
    likeCount++; 
    likeCountDisplay3.textContent = likeCount; 
});



var select= document.getElementById('select')
var result= document.getElementById('result')


function changedText() {
    
    result.innerText = select.value;
    

}