function ageInDays(){
    var birthYear = prompt('What year were you born?')
    var days = (2020 - birthYear) * 365;

    var h1 = document.createElement('h1');
    var text = document.createTextNode('You are ' + days + ' days old');

    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(text);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
    
}


