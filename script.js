document.getElementById('up').addEventListener('click',function () {
    let t = parseInt(document.getElementById('kenny').style.top);
    if (t > 0) {
        t = t - 10;
    }
    document.getElementById('kenny').style.top = t + 'px';
});

document.getElementById('left').addEventListener('click',function () {
    let t = parseInt(document.getElementById('kenny').style.left);
    if (t > 20) {
        t = t - 10;
    }
    else {
        alert("Kenny est mort !")
        t = 200;
    }

    document.getElementById('kenny').style.left = t + 'px';

});

document.getElementById('right').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    if (t < 470) {
        t = t + 10;
    }
    document.getElementById('kenny').style.left = t + 'px';
});

document.getElementById('down').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
        if (t < 470) {
           t = t + 10;
        }
    document.getElementById('kenny').style.top = t + 'px';
});

