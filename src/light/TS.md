


## 初识TS

### 课程目标

1. TS简介
2. 安装typescript包
3. TS之hello world，类型检查
4. 学习资料介绍

### 知识点

#### 1.TS简介

TypeScript 是 JavaScript 的强类型版本。然后在编译期去掉类型和特有语法，生成纯粹的 JavaScript 代码。

TypeScript 是 JavaScript 的超集，这意味着他支持所有的 JavaScript 语法。

强类型语言的优势在于静态类型检查。

TypeScript是微软开发的语言。

vue3.0使用TS开发。

是github开源项目：https://github.com/Microsoft/TypeScript

2012 年 10 月诞生。

vscode是用ts编写的：https://github.com/Microsoft/vscode/

  
#### 2.安装typescript包

  装包：
```js
yarn global add typscript
```

  检查版本:
```js
  tsc -V
```

  初始化：
```js
tsc --init
```

#### 3.TS之hello world，类型检查
  语法格式：
```js
function greeter(name:string) {
  return `hello, world!${name}`
}

console.log(greeter('xu'))
document.body.innerHTML = greeter('徐')
```

#### 4.学习资料介绍

一起来拥抱强大的TypeScript吧--Ts+Vue完全教程:
https://blog.csdn.net/suhuaiqiang_janlay/article/details/80217323

中文手册:
https://zhongsp.gitbook.io/typescript-handbook/

英文手册:
https://www.typescriptlang.org/docs/handbook/basic-types.html

入门教程:
https://ts.xcatliu.com/

装饰器----阮一峰:
https://es6.ruanyifeng.com/#docs/decorator

### 授课思路

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512163214577.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)  

### 案例作业

1.上网收集TS资料学习一下  
2.安装TS环境并编写hello world代码  
3.研究类型检查的意义  
4.预习tsconfig.json各个属性的含义  

## 类型检查

### 课程目标

1. 基础类型
2. 类型断言
3. TS类型检查的意义
4. 学习资料介绍

### 知识点

#### 1.基础类型
  布尔，数字，字符串，数组，元祖，枚举，任意值，空值，null，undefined，never，object

```js
//布尔
let isDone: boolean = true

//数字
let count: number = 1

//字符串
let username: string = 'admin'

//数组
let list: number[] = [1, 2, 3]
let listPlus: Array<number> = [1, 2, 3]

//元组 Tuple
let x: [string, number]
x = ['hello', 10]

//枚举
enum Color { Red, Green, Blue }
let c: Color = Color.Green

//任意值
let notSure: any = 1
notSure = 'xu'
notSure = true

//空值
function greeter(): void {
  console.log('hello')
}

//null
let u:undefined = undefined
let n:null = null

//需要开启： "strictNullChecks": false
let num:number = null
let str1:string = undefined

//never 类型表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

//object
let obj:object = {}
```
  
#### 2.类型断言
  有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。   
  
  通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

类型断言（Type Assertion）可以用来手动指定一个值的类型

语法：
```js
　<类型>值
```

或者
```js
　值 as 类型
```

实例：
```js
(window as any).username = 'admin'
console.log((this as any).username)
```

#### 3.TS类型检查的意义
  TS对JS的改进主要是静态类型检查，静态类型检查有何意义？标准答案是“静态类型更有利于构建大型应用”。为什么静态类型有利于构建大型应用？我总结，利在两点。

  其一，静态类型检查可以做到early fail，即你编写的代码即使没有被执行到，一旦你编写代码时发生类型不匹配，语言在编译阶段（解释执行也一样，可以在运行前）即可发现。针对大型应用，测试调试分支覆盖困难，很多代码并不一定能够在所有条件下执行到。而假如你的代码简单到任何改动都可以从UI体现出来，这确实跟大型应用搭不上关系，那么静态类型检查确实没什么作用。

  其二，类型就是最好的注释。静态类型对阅读代码是友好的，比如我们举个例子 jQuery API Documentation 这是大家都非常喜欢用的jQuery.ajax，在这份文档中，详尽地解释了类型为object的唯一一个参数settings，它是如此之复杂，如果没有文档，我们只看这个函数声明的话，根本不可能有人把这个用法猜对。针对大型应用，方法众多，调用关系复杂，不可能每个函数都有人编写细致的文档，所以静态类型就是非常重要的提示和约束。而假如你的代码像jQuery这样所有函数基本全是API，根本没什么内部函数，而且逻辑关系看起来显而易见，这确实跟大型应用搭不上关系，那么静态类型对阅读代码确实也没什么帮助。总的来说，现代编程语言设计，很多特性已经有非常成熟的理论支持了，如果我们重视计算机基础，那么一些语言的适用场景就像是拼积木，可以用几句话概括。像是TS对JS这样，只是单一特性变化。

#### 4.学习资料介绍
  基础类型:
    https://zhongsp.gitbook.io/typescript-handbook/handbook/basic-types
    类型检查的意义：
    https://www.jianshu.com/p/d2d15111f9d4

### 授课思路


![在这里插入图片描述](https://img-blog.csdnimg.cn/2020051216334921.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)
### 案例作业

1.练习TS里的类型检查   
2.使用类型断言  
3.深入思考TS类型检查的意义  
4.预习变量声明  

## 接口

### 课程目标

1. 接口是什么
2. 举个栗子
3. 可选属性
4. 只读属性
5. 函数类型

### 知识点

#### 1.接口是什么
  接口简单来说就是规定一些 “事”，在后台中，接口指的是双方规定的 API，在 TS 里接口一般指这个变量拥有什么东西。
  TypeScript 的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在 TypeScript 里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
  接口一般是用来定义一组规范，比如我们常说的usb接口就是一种电脑外设的规范，不管是鼠标还是键盘还是u盘，只要符合这个规范的外设都可以插入这个接口。
    使用usb接口可以降低鼠标键盘这些外设和笔记本电脑的耦合性。


#### 2.举个栗子

```js
//定义一个person接口，用于描述一个对象的形状：必须包含name属性，且类型为string
interface Person {
  name: string
}

//Person接口就像一个普通类型一样去使用
function greeter(person: Person) {
  return `hello world!${person.name}`
}

//xu这个对象满足Person接口的约束，如果不满足，编译器会立马报错,这既是类型检查的意义所在
let xu:Person = {
  name: 'xu'
}

document.body.innerHTML = greeter(xu)
```
    

#### 3.可选属性
   接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。

```js
//添加一个问号可以变成可选属性
interface Person {
  name: string,
  age?: number
}

//Person接口就像一个普通类型一样去使用
function greeter(person: Person) {
  return `hello world!${person.name}`
}

//xu对象可以不包含age属性
let xu:Person = {
  name: 'xu'
}

document.body.innerHTML = greeter(xu)
```
    

#### 4.只读属性
   些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用readonly来指定只读属性

```js
//添加一个问号可以变成可选属性
interface Person {
  readonly name: string,
  age: number
}

//Person接口就像一个普通类型一样去使用
function greeter(person: Person) {
  return `hello world!${person.name}`
}

//xu对象可以不包含age属性
let xu:Person = {
  name: 'xu',
  age: 30
}

//可以修改age
xu.age = 31

//但是不可以修改name，不过只是类型检查时报个错，其实修改是并没有被阻止
xu.name = '徐'

document.body.innerHTML = greeter(xu)
```
#### 5.函数类型
   接口能够描述 JavaScript 中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型。
   为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。  
   因为函数也是对象，所以我们也可以通过接口来对函数做“规定”。

```js
//函数类型
interface Greeter {
  (name:string): string
}

let greeter: Greeter

//Person接口就像一个普通类型一样去使用
greeter = function (name:string) {
  return `hello world!${name}`
}

document.body.innerHTML = greeter('xu')
```

### 授课思路



![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512163421337.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)## 案例作业

1.研究接口含义   
2.定义普通的对象接口  
3.编写可选属性和只读属性  
4.编写函数接口  
5.预习TS中的类(class)  

## 类与继承

### 课程目标

1. 什么是类
2. 编写类
3. 什么是继承
4. 编写继承

### 知识点

#### 1.什么是类
   一切事物皆对象，通过面向对象的方式，将现实世界的事物抽象成对象，现实世界中的关系抽象成类、继承，帮助人们实现对现实世界的抽象与数字建模。
    面向对象的最基础的单元就是类。类（Class）是一个抽象的概念，是对某一类事物的描述。例如：猫，狗，人。而对象（object）就是类的实例化。即符合类描述的具体的单个成员。
    什么是类,类不是一个实体的存在,比如手机这个类,手机并不是实体,如iPhone7 才是一个实体,手机并不是,类只是一个模子,确定对象将会有的特征(属性)和行为(方法)。
    类 : 具有相同属性和技能的一类事物(类后面的变量需要首字母大写)。
    对象:具体类的表现,具体实实在在的一个实例。
    人是一个类,爱因斯坦是一个对象。
    狗是一个类,球球是一个对象。
    传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。 使用TypeScript，我们允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。

#### 2.编写类

```js
//定义一个类
class Greeter {
  //定义类的属性
  name: string

  //构造函数
  constructor(name: string) {
    this.name = name
  }

  //定义类的方法
  greet() {
    //访问内的程序时使用this
    document.body.innerHTML = `hello world!${this.name}`
  }
}

//使用new 构造了Greeter类的一个实例。它会调用之前定义的构造函数，创建一个Greeter类型的新对象，并执行构造函数初始化它。
let greeter = new Greeter('xu')

//这个对象具有打招呼的行为
greeter.greet()
```

#### 3.什么是继承
   基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。
    继承是指这样一种能力：它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。
    通过继承创建的新类称为“子类”或“派生类”。
    被继承的类称为“基类”、“父类”或“超类”。
    继承的过程，就是从一般到特殊的过程。
    

#### 4.编写继承    
```js
//定义一个类
class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  say() {
    console.log(`${this.name}:hello!大家好！`)
  }
}

//Teacher类继承了Person类，拥有了name属性和say方法
class Teacher extends Person {
  //增加自己的course属性
  course: string
  constructor(name:string, course:string) {
    super(name)
    this.course = course
  }
  //增加自己的teach方法
  teach() {
    //调用继承的方法
    this.say()
    //访问继承的属性
    console.log(`${this.name}:我要讲的课程是${this.course}!`)
  }
}

let teacher = new Teacher('徐同保', 'Vue')
teacher.teach()

```
    
### 授课思路


![在这里插入图片描述](https://img-blog.csdnimg.cn/202005121634503.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)
### 案例作业

1.研究类含义   
2.编写类代码  
3.研究继承的含义  
4.编写继承代码    

## 公共，私有与受保护的修饰符

### 课程目标

1. 概念
2. public
3. private
4. protected
5. 为啥要学这些

### 知识点

#### 1.概念
   public private 和 protected
    TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。
    public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
    private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
    protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的,受保护的属性和访问不能在类的实例上调用

#### 2.public
    默认所有的属性和方法都是 public 的。加不加都一样，所以别加了。
```js
//定义一个类
class Person {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  public say() {
    console.log(`${this.name}:hello!大家好！`)
  }
}
```

#### 3.private  
```js
//定义一个类
class Person {
  private name: string
  constructor(name: string) {
    this.name = name
  }
  private say() {
    console.log(`${this.name}:hello!大家好！`)
  }
}

let person = new Person('xu')
//访问私有属性会报错
console.log(person.name)
//访问私有方法会报错
person.say()
```
    注意：派生类也无法访问父类的的私有属性和方法！

#### 4.protected
    派生类可以访问父类中受保护的属性和访问。    
```js
//定义一个类
class Person {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
  protected say() {
    console.log(`${this.name}:hello!大家好！`)
  }
}

//Teacher类继承了Person类，拥有了name属性和say方法
class Teacher extends Person {
  //增加自己的course属性
  course: string
  constructor(name:string, course:string) {
    super(name)
    this.course = course
  }
  //增加自己的teach方法
  teach() {
    //调用继承的方法
    this.say()
    //访问继承的属性
    console.log(`${this.name}:我要讲的课程是${this.course}!`)
  }
}

let teacher = new Teacher('徐同保', 'Vue')
teacher.teach()
```

#### 5.为啥要学这些
   封装就是隐藏对象的属性和实现细节，仅对外公开接口，控制在程序中属性的读和修改的访问级别，将抽象得到的数据和行为（或功能）相结合，形成一个有机的整体，也就是将数据与操作数据的源代码进行有机的结合，形成“类”，其中数据和函数都是类的成员。

   封装的目的是增强安全性和简化编程，使用者不必了解具体的实现细节，而只是要通过外部接口，以特定的访问权限来使用类的成员。
    可以举个栗子，录音机就是封装的栗子，内部的结构是私有的，用户无法访问，播放键，快进键是共有的，用户可以访问。

   继承是指这样一种能力：它可以使用现有类的所有功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。

   如果没有protect，父类的属性和方法只能是public和private，对应一些需要继承但是有不想暴露的属性和方法就无能无力了。
    
### 授课思路



![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512163708324.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)### 案例作业

1.研究私有属性的含义   
2.研究受保护属性的含义  
3.编写代码实现封装和继承  
4.预习面向对象三大特征    


## 类接口

### 课程目标

1. 类接口的意义
2. 类接口实例
3. 继承接口
4. 学习资料介绍

### 知识点

#### 1.类接口的意义
   为什么需要一个接口，一个接口的实现类？接口是个规范。统一标准的目的，是大家都知道这个是做什么的，但是具体不用知道具体怎么做。定义接口有利于代码的规范：对于一个大型项目而言，架构师往往会对一些主要的接口来进行定义，或者清理一些没有必要的接口。这样做的目的一方面是为了给开发人员一个清晰的指示，告诉他们哪些业务需要实现；同时也能防止由于开发人员随意命名而导致的命名不清晰和代码混乱，影响开发效率。
    接口是一个标准，是一个约定，而不是一种实现，接口的目的是copy为了规范实现类，这样就可以不用具体管实现类，因为你不管怎么实现，我只要知道你百是实现了这个接口，那么你肯定有那些方法度，那么我调用这个接口的方法就肯定没问题。
    接口是一种高度的抽象，里面会规定一些将要实现的行为或者只作为一种标记。 

#### 2.类接口实例
    
```js
//架构师定义一个接口，告诉程序员按照这个规范去开发一个类
interface PersonI {
  name: string,
  say():void
}

//一个程序员用了三天的时间开发了一个Teacher类，这个类功能相当复杂
class Teacher implements PersonI {
  name: string
  constructor(name: string) {
    this.name = name
  }
  say() {
    console.log(`hello!大家好！我是${this.name}老师，今天咱们讲一下TS!`)
  }
}

//另一个程序员用了五天的时间开发了一个Student类，这个类的功能更复杂
class Student implements PersonI {
  name: string
  constructor(name: string) {
    this.name = name
  }
  say() {
    console.log(`老师好！我是${this.name},我写的代码有个报错，你帮我看看吧！`)
  }
}

//Teacher类和Student类是更庞大的在线教育项目的下面的若干类里的一员
//由于这个两个类都遵循相同的接口，所以使用起来很方便
let teacher = new Teacher('徐')
teacher.say()

let student = new Student('韩梅梅')
student.say()
```

#### 3.继承接口  
   接口是类的抽象。
    继承接口中，一个是类的抽象，另一个是比抽象更加抽象。
    这点和画家在创作时先画出轮廓，然后再一点一点的勾勒细节有异曲同工之妙。
    在由接口组成的继承层级中，从上往下看，是由抽象到具体的过程。通过继承我们可以保留父接口中定义的行为，同时对其可以做扩展。整个继承层级，其实是类似树结构的，树的层级越深，行为就更越复杂，能做的事情就更多。上一层是对下一层共性的抽象，下层是对上层不同维度的演进。
    因为对事物进行抽象的粒度是有粗细之分的。

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020051216380518.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)

```js
//任何动物都有名字
interface AnimalI {
  name: string
}

//不是所有动物都会说话，人会说话
interface PersonI extends AnimalI {
  say():void
}

//鸟会飞翔
interface BridI extends AnimalI {
  fly():void
}

//教师
class Teacher implements PersonI {
  name: string
  constructor(name: string) {
    this.name = name
  }
  say() {
    console.log(`hello!大家好！我是${this.name}老师，今天咱们讲一下TS!`)
  }
}

//鸟
class Brid implements BridI {
  name: string
  constructor(name: string) {
    this.name = name
  }
  fly() {
    console.log(`${this.name}会飞！`)
  }
}

let teacher = new Teacher('徐')
teacher.say()

let brid = new Brid('乌鸦')
brid.fly()

```

#### 4.学习资料介绍
    接口继承接口有什么实际意义：
    https://www.zhihu.com/question/48503724
    继承接口：
    https://zhongsp.gitbook.io/typescript-handbook/handbook/interfaces#ji-cheng-jie-kou
    
### 授课思路

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512163820309.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)

### 案例作业

1.定义类接口   
2.编写接口继承接口的代码  
3.上网阅读相关资料  
4.预习抽象类    

## 抽象类和多态

### 课程目标

1. 抽象类和接口的区别
2. 抽象类实例
3. 多态
4. 学习资料介绍

### 知识点

#### 1.抽象类和接口的区别
   抽象类
    抽象方法必须用abstract关键字进行修饰。如果一个类含有抽象方法，则称这个类为抽象类，抽象类必须在类前用abstract关键字修饰。
   抽象类就是为了继承而存在的
    如果一个类继承于一个抽象类，则子类必须实现父类的抽象方法。如果子类没有实现父类的抽象方法，则必须将子类也定义为为abstract类。

   抽象类和接口的区别：
    抽象类里面可以有方法的实现，但是接口完全都是抽象的，不存在方法的实现；
    子类只能继承一个抽象类，而接口可以被多个实现；
    抽象方法可以是public，protected，但是接口只能是public，默认的；
    抽象类可以有构造器，而接口不能有构造器；
    抽象类当做父类，被继承。且抽象类的派生类的构造函数中必须调用super()；接口可以当做“子类”继承其他类。

   抽象类与接口都无法实例化， 类类型接口实际上是一种 抽象类型。

   按个人理解，在使用类类型的接口时，类类型的接口其实就相当于抽象类的子集。抽象类中除了可以像接口那样只定义不实现外，还可以部分实现，而且也可以使用类型修饰符。

   类类型的接口更多的是当做一种抽象的数据类型使用，此处所说的类型通常是某个类的实例类型。
    接口中不能包含具体实现，抽象类中除抽象函数之外，其他函数可以包含具体实现。
    抽象类中的抽象方法在子类中必须实现， 接口中的非可选项在接口被调用时必须实现。
    抽象方法可当做类的实例方法，添加访问修饰符；但是接口不可以。
    抽象类: abstract 修饰， 里面可以没有抽象方法。但有抽象方法(abstract method)的类必须声明为抽象类(abstract class)

   抽象类的几个注意事项：

   1，抽象类使用abstract修饰

   2，抽象方法只能位于抽象类中

   3，抽象类不能实例化

   4，抽象方法没有方法体

   5，抽象类不能是静态类或者密封类

   6，子类必须重写父类的所有抽象方法，除非子类也是抽象类

   7，抽象类中可以有普通的方法

   8，抽象类中可以有构造函数

   9，抽象类中的抽象方法就是为了约束子类的方法形式。


#### 2.抽象类实例
    
```js
//抽象类，用于继承，不可以实例化
abstract class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  say() {
    console.log(`hello!大家好！我是${this.name}!`)
  }
  //抽象方法
  abstract job(): void
}

class Teacher extends Person {
  constructor(name: string) {
    super(name)
  }
  job() {
    console.log('我的工作是讲课!')
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name)
  }
  job() {
    console.log('我的工作是学习!')
  }
}

let teacher = new Teacher('徐同保')
teacher.say()
teacher.job()

let student = new Student('韩梅梅')
student.say()
student.job()
```

#### 3.多态  
   面试官：什么是多态呢？
    猪队友：多种形态，气体，液体，固体~
    面试官：go out! now!

   用最简单的一句话就是：父类型的引用指向子类型的对象。用一句比较通俗的话：同一操作作用于不同的对象，可以产生不同的效果。这就是多态。
    多种形态，既不同的对象对于同一个操作做出的响应不同。
    多态是同一个行为具有多个不同表现形式或形态的能力。多态就是同一个接口，使用不同的实例而执行不同操作。
    最终多态体现为父类引用变量可以指向子类对象。多态的前提是必须有子父类关系或者类实现接口关系，否则无法完成多态。
    在使用多态后的父类引用变量调用方法时，会调用子类重写后的方法。
    多态：同一操作作用于不同的对象，可以有不同的解释，产生不同的执行结果。在运行时，可以通过指向基类的指针，来调用实现派生类中的方法。

   格式：就是父类的引用变量指向子类对象
    父类类型  变量名 = new 子类类型();
    变量名.方法名();

```js
let teacher: Person = new Teacher('徐同保')
teacher.job()
```
   这句话很好理解：Person person = new Student("张三")；但是这个多态有什么作用呢？而我们又为什么要是有多态呢？

   首先讲下封装和继承：封装是把过程和数据包围起来，对数据的访问只能通过已定义的界面，他把实现的细节影藏起来了，比如你在java中去实现一个类，这个类中提供了一些功能方法，你只需要知道你需要传递什么样的参数，会达到什么样的效果，实现细节在类中定义好了。从而使得代码模块化；而继承可以扩展已存在的代码模块，而目的就是为了代码重用。

   那么多态除了代码的复用，还可以解耦。然而为什么要解耦？耦合度讲的是模块模块之间，代码代码之间的关联度，通过对系统的分析把他分解成一个一个子模块，子模块提供稳定的接口，达到降低系统耦合度的的目的，模块模块之间尽量使用模块接口访问，而不是随意引用其他模块的成员变量。

   多态有什么好处？

   有两个好处：

   1. 应用程序不必为每一个派生类编写功能调用，只需要对抽象基类进行处理即可。大大提高程序的可复用性。//继承 
    2. 派生类的功能可以被基类的方法或引用变量所调用，这叫向后兼容，可以提高可扩充性和可维护性。 //多态的真正作用，

#### 4.学习资料介绍
   什么是多态：
    https://blog.csdn.net/qq_28081081/article/details/80413186
    多态秒懂百科：
    https://baike.baidu.com/item/%E5%A4%9A%E6%80%81/2282489?fr=aladdin
    
### 授课思路

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512163854974.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)

### 案例作业

1.定义抽象类   
2.学习多态的概念  
3.上网阅读相关资料  
4.预习泛型    

## 泛型

### 课程目标

1. 使用泛型的意义
2. 泛型接口
3. 泛型类
4. 学习资料介绍

### 知识点

#### 1.使用泛型的意义
   泛型（Generics）就是类型变量，它是一种特殊的变量，只用于表示类型而不是值。泛指的类型.
    T大约是"Type" 这个词的首字母。 a type variable.
    泛泛：一般，平常。交情不深的朋友。
    泛泛之交，意思是交情不深的朋友。
    泛泛来讲就是大概讲一下、从表面讲一下的意思。
    泛型：把类型明确的工作推迟到创建对象或调用方法的时候才去明确的特殊的类型。
    好处：
    代码更加简洁【不用强制转换】。
    程序更加健壮。
    可读性和稳定性【在编写集合的时候，就限定了类型】。

   泛型，即“参数化类型”。就是将类型由原来的具体的类型参数化，类似于方法中的变量参数，此时类型也定义成参数形式（可以称之为类型形参），然后在使用/调用时传入具体的类型（类型实参）。
    一些常用的泛型类型变量：
    E：元素（Element），多用于java集合框架  
    K：关键字（Key）  
    N：数字（Number）  
    T：类型（Type）  
    V：值（Value）

   使用泛型的意义：
    (1)适用于多种数据类型执行相同的代码（代码复用）
    (2)泛型中的类型在使用时指定，类型安全，编译器会检查类型


```js
function identity<T>(arg: T) {
  return arg
}

console.log(identity(1))
console.log(identity<string>('a'))
console.log(identity(true))
```

#### 2.泛型接口

```js
interface IEcho<T> {
  (arg: T): T
}

function echo<T>(arg: T) {
  return arg
}

let myEcho: IEcho<number> = echo
let myEcho2: IEcho<string> = echo

console.log(myEcho(1))
console.log(myEcho2('a'))
```
    

#### 3.泛型类  
```js
//泛型类
class ArrayList<T> {
  array: T[] = []
  size: number
  add(item: T) {
    this.array.push(item)
    this.size = this.array.length
  }
  //共用一套逻辑
  print() {
    console.log(`全部数据:${this.array.join(' ')}`)
  }
}

//创建对象时才明确类型
let numberList = new ArrayList<number>()
numberList.add(1) //如果是错误类型，会报错
numberList.add(2)
console.log(numberList.size)
numberList.print()

let strList = new ArrayList<string>()
strList.add('xu')
strList.add('徐')
strList.add('hello')
console.log(strList.size)
strList.print()

```
#### 4.学习资料介绍
廖雪峰什么是泛型：
https://www.liaoxuefeng.com/wiki/1252599548343744/1265102638843296

深入理解java泛型：
https://www.sohu.com/a/245549100_796914
    
### 授课思路


![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512163915789.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)
### 案例作业

1.定义泛型类   
2.学习泛型了使用场景  
3.上网阅读相关资料  
4.预习装饰器    


## 装饰器

### 课程目标

1. 装饰器的意义
2. 类的装饰器
3. vue-property-decorator装饰器伪代码
4. 学习资料介绍

### 知识点

#### 1.装饰器的意义
   Decorator 提案经过了大幅修改，目前还没有定案，不知道语法会不会再变。

   装饰器（Decorator）是一种与类（class）相关的语法，用来注释或修改类和类方法。许多面向对象的语言都有这项功能，目前有一个提案将其引入了 ECMAScript。

   装饰器是一种函数，写成@ + 函数名。它可以放在类和类方法的定义前面。

   它们不仅增加了代码的可读性，清晰地表达了意图，而且提供一种方便的手段，增加或修改类的功能。

   Decorator 是 ES7 的一个新语法，目前仍处于第2阶段提案中，正如其“装饰器”的叫法所表达的，他通过添加@方法名可以对一些对象进行装饰包装然后返回一个被包装过的对象，可以装饰的对象包括：类，属性，方法等。

   在 ES6 中增加了对类对象的相关定义和操作（比如 class 和 extends ），这就使得我们在多个不同类之间共享或者扩展一些方法或者行为的时候，变得并不是那么优雅。这个时候，我们就需要一种更优雅的方法来帮助我们完成这些事情。

   注意，装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，装饰器能在编译阶段运行代码。也就是说，装饰器本质就是编译时执行的函数。

#### 2.类的装饰器
   Teacher和Student类被装饰上了新方法！

```js
const mixins = (obj: IObj) => (target:any) => {
  Object.assign(target.prototype, obj)
}

interface IObj {
  eat(): void
  walk(): void
}

let obj: IObj = {
  eat() {
    console.log('吃饭')
  },
  walk() {
    console.log('走路')
  }
}

@mixins(obj)
class Teacher {
  name: string
  constructor(name: string) {
    this.name = name
  }
  job() {
    console.log('讲课')
  }
}

@mixins(obj)
class Student {
  name: string
  constructor(name: string) {
    this.name = name
  }
  job() {
    console.log('学习')
  }
}

let teacher = new Teacher('徐同保')
teacher.job()

//@ts-ignore
teacher.eat()

let student = new Student('韩梅梅')

//@ts-ignore
student.walk()
```
#### 3.vue-property-decorator装饰器伪代码
   编写vue-property-decorator包提供的装饰器伪代码：Componetn、Prop、Emit。

```js
//类的装饰器，接收一个对象参数，对象参数可以包含一个components属性
//components属性的值表达要使用的组件
const Component = (obj: IComponent) => (target: any) => {
  Object.assign(target.prototype, obj)
}

//类属性的装饰器，可以设置属性的默认值
const Prop = (obj: IProp) => (target: any, key: string) => {
  target[key] = obj.default
}

//类方法的装饰器，类方法触发时，调用父组件传递过来的方法，参数是类方法的返回值
const Emit = (method: string) => (target: any, key: string, descriptor: any) => {
  let oldValue = descriptor.value

  descriptor.value = function() {
    
    let result = oldValue.apply(this, arguments)
    console.log(`触发父组件传递过来的方法：${method}(${JSON.stringify(result)})`)
  }
}

interface IComponent {
  components?: object
}

interface IProp {
  default: any
}

@Component({
  components: {
    Header: '组件'
  }
})
class Home {
  @Prop({ default: 'zhanwei' }) 
  name!: string

  @Emit('onClick')
  handleClick(id: number) {
    console.log('点击事件', this.name)
    return { id }
  }
}

let home = new Home()

//@ts-ignore
console.log(home.components)

console.log(home.name)

home.handleClick(1)
```

#### 4.学习资料介绍

阮一峰讲解装饰器
https://es6.ruanyifeng.com/#docs/decorator

装饰器提案：
https://tc39.es/proposal-decorators/
    
### 授课思路
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512163937581.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)

### 案例作业

1.定义类的装饰器   
2.定义类属性和类方法的装饰器  
3.预习vue+ts      

## vue-class-component基础

### 课程目标

1. 脚手架
2. vue-class-component是什么
3. vue-class-component怎么用
4. 学习资料介绍

### 知识点

#### 1.脚手架
   vue create m-app
    手动选择Typescript选项和TSLint选项
    报错问题：
    Missing trailing comma 缺少尾随逗号
    Missing semicolon 缺少分号
    解决方案：
    tslint.json文件里rules字段添加如下代码：
```json
    "trailing-comma": [false],
    "semicolon": [false]
```

#### 2.vue-class-component是什么
   vue-class-component 是尤雨溪推出的vue对typescript支持的装饰器(库)。
    vue-class-component 是 vue 的官方库，作用是用类的方式编写组件。
    vue-class-component强调了几点用法：
    1、methods可以直接声明为类成员方法
    2、computed属性可以声明为类属性访问器
    3、data数据可以声明为类属性
    4、data render 和所有Vue生命周期挂钩也可以直接声明为类成员方法，但不能在实例本身上调用它们。在声明自定义方法时，应避免使用这些保留名称。
    
#### 3.vue-class-component怎么用
  
加加减减：
```js
<template>
  <div>
    <div>{{count}}</div>
    <button @click="handleSub">减</button>
    <button @click="handleAdd">加</button>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class Login extends Vue {
  count = 0

  handleSub() {
    this.count--
  }
  
  handleAdd() {
    this.count++
  }
}

```
v-model:
```js
<template>
  <div>
    <input v-model="username">
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class Login extends Vue {
  username = 'admin'
}

export default Login
</script>

```

挂载完生命周期:
```js
<template>
  <div>
    1
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class Login extends Vue {
  mounted () {
    console.log('挂载完')
  }
}

export default Login
</script>

```

计算属性：
```js
<template>
  <div>
    {{double}}
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class Login extends Vue {
  count = 1
  get double() {
    return this.count * 2
  }
}

export default Login
</script>

```
    
#### 4.学习资料介绍

vue-class-component官网（无中文版）：
https://class-component.vuejs.org/

基本用法：
https://www.jianshu.com/p/2f65e9dea4f3
    
### 授课思路

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512163958287.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)

### 案例作业

1.通过脚手架搭建项目   
2.制作加加减减  
3.预习父子组件传值      


## vue-property-decorator基础

### 课程目标

1. vue-property-decorator是什么
2. vue-property-decorator父子组件传值
3. 学习资料介绍

### 知识点

#### 1.vue-property-decorator是什么
   vue-property-decorator社区出品；vue-class-component官方出品。
    vue-property-decorator深度依赖了vue-class-component，拓展出了更多操作符：@Prop、@Emit等。
    vue-property-decorator的作者是kaorun343（日本）。


#### 2.vue-class-component父子组件传值
    使用Component装饰器注册子组件。
父组件：
```js
<template>
  <div>
    <Icon :name="visible ? 'show' : 'hide'" @onClick="handleVisible"></Icon>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Icon from '../components/Icon.vue'
@Component({
  components: {
    Icon
  }
})
class Login extends Vue {
  visible = false
  
  handleVisible(payload:object) {
    this.visible = !this.visible
  }
}
export default Login
</script>
```
   使用Prop装饰器获取父组件传递过来的值。可以使用default定义默认值。使用感叹号忽略类属性没有初始化的警告。
    使用Emit装饰器触发父组件的方法，括号里放方法名，函数返回值是载荷。

子组件：
```js
<template>
  <span :class="[`icon iconfont icon-${name} ${className}`]" @click="handleClick"></span>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
class Icon extends Vue {
  @Prop({ default: 'zhanwei' })
  name!: string

  @Prop({ default: '' })
  className!: string

  @Emit('onClick')
  handleClick() {
    return { id: 2 }
  }
}

export default Icon
</script>
```

#### 3.学习资料介绍

vue-property-decorator官网：
https://github.com/kaorun343/vue-property-decorator

### 授课思路


![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512164023203.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)
### 案例作业

1.通过vue-property-decorator做父子组件传值   
2.上网查询相关质料  
3.预习vuex-class      

## vuex-class基础

### 课程目标

1. vuex-class是什么
2. vuex-class同步修改仓库
3. vuex-class异步修改仓库
4. 学习资料介绍

### 知识点

#### 1.vue-class是什么
    vuex-class可以包装vuex的写法，使代码简化。
    vuex-class使vuex和vue-class-component相结合更简单。
    vuex-class的作者是ktsn（新加坡）。

#### 2.vuex-class同步修改仓库
    使用仓库做加加减减。
    @State
    @Mutation

仓库：
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface Payload {
  key: string,
  value: any
}

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    setState(state:any, payload:Payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
  },
  modules: {
  }
})

```

页面：
```js
<template>
  <div>
    <div>{{count}}</div>
    <button @click="handleSub">减</button>
    <button @click="handleAdd">加</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Mutation } from 'vuex-class'

@Component
class Login extends Vue {
  @State('count') count!:number
  @Mutation('setState') setState!:Function

  handleSub() {
    let count = this.count - 1
    this.setState({ key: 'count', value: count })
  }

  handleAdd() {
    let count = this.count + 1
    this.setState({ key: 'count', value: count })
  }
}

export default Login
</script>

```
    
#### 3.vuex-class异步修改仓库
    @Action

获取数据：
```js
<template>
  <div class="m-main m-home">
    <Sidebar></Sidebar>
    <List></List>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import Sidebar from '../components/Sidebar.vue'
import List from '../components/List.vue'

@Component({
  components: {
    Sidebar,
    List
  }
})
export default class Home extends Vue {
  @Action('list') list:any
  
  mounted() {
    this.list()
  }
}
</script>

<style>

</style>
```

提交action并且带载荷：
```js
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

@Component
export default class MyBookItem extends Vue {
  @Prop() book!:any
  @State(state => state.myBooks) myBooks!: any[]
  @Action('myBooksAction') myBooksAction!:Function

  handleAdd(id:number) {
    this.myBooksAction({ data: { id, operation: 'add' }, method: 'patch' })
  }
  handleSub(id:number) {  
    this.myBooksAction({ data: { id, operation: 'sub' }, method: 'patch' })   
  }
  handleInput(id:number, e:any) {
    let myBooks = this.myBooks
    let count = e.target.value.replace(/[^\d]/g, '') - 0
    if (count === 0) {
      count = 1
    }
    this.myBooksAction({ data: { id, operation: 'inputCount', count }, method: 'patch' })
  }
  handleChecked(id:number, e:any) {
    this.myBooksAction({ data: { id, operation: 'checked', checked: e.target.checked }, method: 'patch' })
  }   
  handleDelete(id:number) {
    this.myBooksAction({ data: { ids: [id] }, method: 'delete' })
  }    
}
</script>
```
    
#### 4.学习资料介绍

vuex-class官网：
https://github.com/ktsn/vuex-class
    
### 授课思路

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200512164041457.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3h1dG9uZ2Jhbw==,size_16,color_FFFFFF,t_70)

### 案例作业

1.使用vuex-class编写同步事件和异步事件   
2.上网查阅相关资料  
3.预习react+ts      



