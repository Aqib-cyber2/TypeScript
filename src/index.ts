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

// type conversion 
let a:any = "1";
let b= a as number


// function...

type userInfo = {
    name: string,
    address: string
}
function userObj(user:userInfo) : userInfo {
    return { name: user.name, address: user.address };
}

console.log(userObj({name: "Aqib", address:"Peshawar Kohat Road"}))

// another function
function  add(a1:number ,b1:number) : number{
    return a1 + b1
}

console.log(add(1,2))