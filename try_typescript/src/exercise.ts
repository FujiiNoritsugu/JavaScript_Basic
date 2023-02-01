// 型の使用
let username: string = "John Doe";
let age: number = 30;
let isStudent: boolean = false;

console.log(`Username: ${username}`);
console.log(`Age: ${age}`);
console.log(`Is student: ${isStudent}`);

let colors: string[] = ["red", "green", "blue"];

for (const color of colors) {
  console.log("color: ", color);
}

//オブジェクト型の定義
type Student = {
  name: string;
  age: number;
  email: string;
  inClassRoom: boolean;
};

let user: Student = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  inClassRoom: true,
};

console.log(user);

// 関数
function add(a: number, b: number): number {
  return a + b;
}
console.log("add:", add(1, 2));
const arrowAdd: (a: number, b: number) => number = (a, b) => a + b;
console.log("arrowAdd:", arrowAdd(3, 4));

// ジェネリクス
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(100));

function addArray<T>(param1: T[], param2: T): T[] {
  param1.push(param2);
  return param1;
}

console.log(addArray<number>([1, 2, 3], 100));
console.log(addArray<string>(["a", "b", "c"], "addedVale"));
