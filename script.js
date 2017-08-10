var friends = ["Chris", "Jeremy", "Andrew", "Bob", "Ben", "Frank", "Alex", "Andrea", "Scott", "Skilla"]
document.addEventListener('DOMContentLoaded', function(){
// 1
    var button = document.createElement("button");
    button.innerHTML = '1';
    button.style.width = '50px';
    button.style.height = '50px';

    document.body.appendChild(button);
    button.addEventListener('click', function(){
    alert('Nice!');
        });
    
// 2
    var div = document.createElement("div")
    var button2 = document.getElementById('two');
    button2.innerHTML = '2';
    button2.style.width = '50px';
    button2.style.height = '50px';
    document.body.appendChild(div);
    div.appendChild(button2);
    button2.addEventListener('click', function(){
       var a = document.getElementById('textarea').value;
       alert(a);
    });
// 3
    document.getElementById('colorswitch').addEventListener("mouseover", mouseOver)
    document.getElementById('colorswitch').addEventListener("mouseout", mouseOut)
        function mouseOver() {
            document.getElementById('colorswitch').style.backgroundColor =  "green";
        }
        function mouseOut() {
            document.getElementById('colorswitch').style.backgroundColor= "goldenrod";
        }
// 4
    document.getElementById('colortext').addEventListener("click", function randomize(){
        document.getElementById('colortext').style.color = randomColors();
    })
    function randomColors() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
// 5
    document.getElementById('span').addEventListener("click", function(){
        var div = document.getElementById('five')
        var span = document.createElement("span");
        var text = document.createTextNode("Christopher");
        span.appendChild(text);
        div.innerHTML += "Christopher" 
    });
//6     
        var div6 = document.getElementById("six");
        var para = document.createElement('p');
        para.innerHTML = friends;
        document.getElementById("listfriends").addEventListener("click", function() {
        div6.appendChild(para);
        })
});
