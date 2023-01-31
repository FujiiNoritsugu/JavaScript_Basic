type MyInfo3 = { readonly name: string; age?: number };
const readOnlyName: MyInfo3 = { name: "My Name" };
readOnlyName.age = 25;
// readOnlyName.name = "My New Name";
console.log(readOnlyName);
