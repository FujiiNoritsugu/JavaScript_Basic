let anyValue: any = "Any Name"; // any型で変数を宣言
anyValue = 123; //any型で宣言した変数にはどんな型の値でも代入できる
anyValue = "example";
console.log(anyValue.toUpperCase()); //正常に実行できる。
anyValue = false;
console.log(anyValue.toUpperCase());
// any型で推論できない為、コンパイル時にエラーにならず、実行時にエラーが発生する
