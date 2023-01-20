class MyClass {
	constructor(size, age){
  		this.size = size;
  		this.age = age;
  	}
	print_size(){
  		console.log(this.size);
  	}
	add_age(x){
  		this.age += x;
  	}
}

my_obj = new MyClass(160, 20)
empty_obj = {}
empty_obj.__proto__ = MyClass.prototype
empty_obj.age = 53
empty_obj.add_age()
empty_obj.age
empty_obj.print_size()
empty_obj.size = 180
empty_obj.print_size()
empty_obj.add_age(3)
empty_obj.age
empty_obj.age = 53
empty_obj.age
empty_obj.add_age(2)
empty_obj.age
