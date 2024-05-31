//COUNTER 

const decreaseBt = document.getElementById('decreaseBT');
const resetBt = document.getElementById('resetBT');
const increaseBt = document.getElementById('increaseBT');
const countlabel = document.getElementById('countLabel');
let count = 0;

increaseBt.onclick = function(){
    count++;
    countlabel.textContent = count;

}
decreaseBt.onclick = function(){
    count--;
    countlabel.textContent = count;
}
resetBt.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}