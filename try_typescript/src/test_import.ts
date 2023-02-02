import {
  another_name,
  another_age,
  test_export_fn as another_fn,
  TestExportType as AnotherType,
} from "./test_export.js";
console.log(another_name, another_age);
console.log(another_fn(3, 5));
const testExport: AnotherType = {
  name: "AnotherExport",
  age: 24,
};
console.log(testExport);
