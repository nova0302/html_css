window.onload = function () {
    document.querySelector('#id-add-btn').addEventListener('click', addGugu)
    document.querySelector('#id-rem-btn').addEventListener('click', remGugu)
    document.querySelector('#id-gugu').addEventListener('change', addGugu)
    
    let dan = document.querySelectorAll('input[name="dan"]');
    if (dan) {
        for (let i = 0; i < dan.length; i++) {
            dan[i].addEventListener("change", function () {
                let item = this.value; // this == the clicked radio, which launched the function
                console.log(item);
                y = item
                addGugu()
            });
        }
    }
}
var isExist = false
var y=4
function addGugu() {
    if (isExist) {
        remGugu()    
    }
    //var y = prompt('몇 단을 추가할까요?')
    //var y = document.querySelector('#id-gugu').value
    
    var theTable = document.createElement('table')
    theTable.setAttribute('border', '1')
    theTable.setAttribute('id', 'id-table')
    for (var x = 2; x < 7; x++) {
        let trNode = document.createElement('tr')
        let tdNode = document.createElement('td')
        tdNode.appendChild(document.createTextNode(`${y} * ${x} = ${y*x}`))
        trNode.appendChild(tdNode)
        theTable.appendChild(trNode)
    }
    document.body.appendChild(theTable)
    isExist = true
}

function remGugu() {
    document.querySelector('#id-table').remove()
    isExist = false
}
