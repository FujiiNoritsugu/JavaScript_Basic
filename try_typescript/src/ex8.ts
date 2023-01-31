type Data<T> = {
  dataType: T;
};
// 実際に使用する場合には型<型>で表現する
const strData: Data<string> = { dataType: "文字列" };
const numData: Data<number> = { dataType: 123 };
console.log(strData);
console.log(numData);

function makeArray<T>(param1: T, param2: T): T[] {
  return [param1, param2];
}
console.log(makeArray<string>("abc", "xyz"));
console.log(makeArray<number>(123, 456));
