window.onload = function(){
    var img = document.getElementById("cat");
    var count = document.getElementById("score");
    var score = 0;

    img.addEventListener('mousedown', function(){
        increaseScore();
        img.src = 'cat2.png';
    });
    img.addEventListener('mouseup', function(){
        img.src = 'cat.png';
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}