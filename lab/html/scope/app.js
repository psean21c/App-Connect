
// function b(){
//     var myVar;
//     console.log('b called!'+ myVar);
// }
// function a(){
//     b();
//     console.log('a called!');
// }
// a();


function greet(name){
    name = name || ' <Your name here>';
    console.log('hello ' + name);
}

greet('Tony');
greet();