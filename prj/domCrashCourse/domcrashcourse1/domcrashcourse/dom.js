// EXAMINE THE DOCUMENT OBJECT //
function showInfo(nodeName){
    console.log(document[nodeName])
}

//console.dir(document)
//console.log(document.body.innerHTML)
//console.log( "document.domain : " +  document.domain)
//console.log(document.URL);
//console.log(document['URL'])

//showInfo('URL')
//showInfo('title')
//showInfo('doctype')
//showInfo('domain')
//showInfo('head')
//showInfo('body')

//console.log(document['URL'])
//console.log(document['title'])
//console.log(document['doctype'])
//console.log(document['domain'])
//console.log(document['head'])
//console.log(document['body'])
//console.log(document['all'])
//console.log(document['all'][10])
//document.all[9].textContent = 'Hello'
//console.log(document.forms[0])
//console.log(document.links)
//console.log(document.images)

//console.log(document.doctype)
//document.title = '123'
//showInfo('title')

//console.log(document.head)
//console.log(document.body)
// console.log(document.title);
//document.title =  123;
//console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBY ID //
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle.innerText);
//console.log(headerTitle.textContent)
//console.log(headerTitle.innerHTML)
//headerTitle.innerHTML = '<h3> Hello </h3>'
var header = document.getElementById('main-header')
//header.style.borderBottom='solid 2px #00ff00'
//header.style.border='solid 4px #00ffff'
//headerTitle.textContent = 'textContent';
//headerTitle.innerText = 'innerText';
//headerTitle.innerHTML = '<h3>innerHTML</h3>';
//console.log(headerTitle);

// var header = document.getElementById('main-header');
// console.log(headerTitle);
//header.style.borderBottom = 'solid 2px #ff0000';
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

//function aa(){
//    //var headerTitle = document.getElementById('header-title');
//    //headerTitle.style.borderBottom='solid 3px #ff0000'
//    var items = document.getElementsByClassName('list-group-item');
//    //items[1].textContent = 'hello 1'
//    //items[2].innerHTML = 'hello 2'
//    //items[2].style.fontWeight = 'bold'
//    items[2].style.color = 'red'
//    //items[2].style.backgroundColor = 'green'
//    for(var i=0; i<items.length; i++){
//	items[i].style.backgroundColor = '#f4f4f4'
//    }
//}

// GETELEMENTSBY CLASSNAME //
//setTimeout(function(){
//    var items = document.getElementsByClassName('list-group-item');
//    for(var i=0; i<items.length; i++){
//	items[i].innerText = i + ': hello '
//	items[i].style.backgroundColor = 'yellow'
//    }
//}, 3000)

//console.log(items);
//items[0].innerText = 'hello 0'
//items[0].style.backgroundColor = 'yellow'

//items[1].textContent = 'hello 1'
//items[2].innerHTML = 'hello 2'

//items[3].style.fontWeight = 'bold'
//for(var i=0; i<items.length; i++){
//    //items[i].style.backgroundColor = 'yellow'
//    items[i].style.backgroundColor = '#f4f4f4'
//}

// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBY TAGNAME 
//console.log(li);
//
//console.log(li[1])
//
//li[0].textContent = 'Hello 2'

//setTimeout(function(){
//    var li = document.getElementsByTagName('li');
//    for(var i=0; i<li.length; i++){
//	li[i].style.backgroundColor = '#f4f4f4'
//	li[i].style.border= '2px solid #f6f6f6'
//	li[i].style.padding= '4px'
//    }
//}, 3000)

//function bb(){
//    var ul = document.getElementById('items')
//    for(var i=0; i<3; i++){
//	var li = document.createElement('li')
//	var liText = document.createTextNode("Item" + (5+i))
//	li.appendChild(liText)
//	li.style.color = 'red'
//	ul.appendChild(li)
//    }
//}

// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #ccc';
//
//var input = document.querySelector('input');
//input.value = 'Hello World'
//
//var submit = document.querySelector('input[type="submit"]');
//submit.value="SEND"
//
//var item = document.querySelector('.list-group-item');
//item.style.color = 'red';
//var evenItems = document.querySelectorAll('li:nth-child(even)')
//var oddItems = document.querySelectorAll('li:nth-child(odd)')
//for(var i=0; i<evenItems.length; i++){
//    evenItems[i].style.backgroundColor = 'blue'
//}
//for(var i=0; i<oddItems.length; i++){
//    oddItems[i].style.backgroundColor = 'green'
//}
//
//var lastItem = document.querySelector('.list-group-item:last-child')
//lastItem.style.backgroundColor='green'
//var secondItem = document.querySelector('.list-group-item:nth-child(2)')
var secondItem = document.querySelector('.list-group-item:first-child')
secondItem.style.backgroundColor = 'green'


//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'blue';
//
//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color = 'coral';
//
//// QUERYSELECTORALL //
//var titles = document.querySelectorAll('.title');
//
//console.log(titles);
//titles[0].textContent = 'Hello';
//
//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even= document.querySelectorAll('li:nth-child(even)');
//
//for(var i = 0; i < odd.length; i++){
//    odd[i].style.backgroundColor = '#f4f4f4';
//    even[i].style.backgroundColor = '#ccc';
//}

