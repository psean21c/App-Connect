
//  Question : In what order, this 
// 
function wait3seconds(){
    var ms = 30000 + new Date().getTime();
    while(new Date() < ms){}
    console.log('finish function');
}

function clickHandler(){
    console.log('click event!');
}

document.addEventListener('click',clickHandler);

wait3seconds();
console.log('finished execution');

