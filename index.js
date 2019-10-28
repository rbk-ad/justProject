//Web development 2

//1
// we thought that it will be C Alice says hi, after 1 second. but it was F Bob says hi, immediately.

//2 
function sayHello () {
alert(this.name + " says hello!");
}
var alice = { name: "Alice" };
sayHello.call(alice)

//3
//20

//4
///we thought that it will be "Hi I am Alice" , after 1 second. but it was "Hi I am window".

//5 
//B 20

//6
//c Alice says hi, after 1 second

//7
//D DRY - don't repeat yourself (developer efficacy)


///////////////////
//git  awnsers
//1 C git clone
//2 B git status
//3 C rm *.json
//4 B rm config
//5 no question 
