// data types
let i:number = 1;
let s:string;
s="Muhammad Aqib";
i=0.5;
const bool:boolean = true;

let any:any;
any = "Hello there!";
any = ['new',1,"4"]

// any data type array
let arr: any[] = new Array();
arr.push("string",11,false, [1,2]);

// we cant push single elemetn because we declare two dimensional array
let numArr: number[][] = new Array();
numArr.push([1122], [1,2,3,4]);

// now tuple
let person: [string, number, [boolean,string]][];
person =
[   
    ["hello", 1, [true, "String"] ],
    ["hi", 2, [false, "anotherstring"] ]
]



// objects...
type user = {
    // union types...
    id: number | string,
    name: string
}

let u1:user = {
    id: 1,
    name: "Muhammad Aqib"
}

// use interface for objects...
interface student{
    readonly regNo: string | number,   //can't change only read
    name: string,
    class: string,
    phone?: number  //optional
}
const std1:student = {
    regNo: "19pwbcs0695",
    name: "Muhammad Aqib",
    class: "6th Semister"
}
// std1.regNo = "18pwbcs0695"       //can't change or overwrite...
const std2:student = {
    regNo: "19pwbcs0697",
    name: "Mazhar Hussain",
    class: "6th semister",
    phone: 10101010101
}



// type conversion 
let a:any = "1";
let b= a as number





// Functions...

type userInfo = {
    name: string,
    address: string,
    age?: number
}
function userObj(user:userInfo) : userInfo {
    return { name: user.name, address: user.address };
}
let userfunc = userObj({name: "Aqib", address:"Peshawar Kohat Road"})
console.log(userfunc)

// another function with interface...
interface Numfun{
    (x: number, y:number) : number
}

// arrow function...
let sum:Numfun = (a:number, b:number):number => a + b;
console.log( sum(1,2) )