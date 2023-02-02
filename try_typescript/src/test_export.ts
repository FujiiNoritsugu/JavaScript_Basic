// 外部に公開する変数
const test_name = "OutsideName";
const test_age = 23;

// 外部に公開する関数
function test_export_fn(a: number, b: number): number {
  return a + b;
}

// 外部に公開するオブジェクト型
type TestExportType = {
  name: string;
  age: number;
};

export {
  test_name as another_name,
  test_age as another_age,
  test_export_fn,
  TestExportType,
};
