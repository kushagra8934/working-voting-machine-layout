var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var clickcount1 = document.getElementById('click-count1');
var clickcount2 = document.getElementById('click-count2');
var clickcount3 = document.getElementById('click-count3');
var lastline = document.getElementById('last-line');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var count1 = 0;
var count2 = 0;
var count3 = 0; 
box1.addEventListener('click', function(event) {
    count1++;
    console.log(count1);
    event.stopPropagation();

});
box2.addEventListener('click', function(event) {
    count2++;
    console.log(count2);
    event.stopPropagation();

});
box3.addEventListener('click', function(event) {
    count3++;
    console.log(count3);
    event.stopPropagation();

});

function res() {
    var result = Math.max(count1, count2, count3);
    console.log(result);
    console.log("box A got total vote = " + count1);
    a.innerText = count1 + " ";
    console.log("box B got total vote = " + count2);
    b.innerText = count2 + " ";
    console.log("box C got total vote = " + count3);
    c.innerText = count3 + " ";
    if (result == count1) {
        console.log("box a is winner");
        win.innerText = "BOX A";
    } else {
        if (result == count2) {
            console.log("box b is winner");
            win.innerText = "BOX B";
        } else {
            console.log("box c is winner");
            win.innerText = "BOX C";
        }
    }

}