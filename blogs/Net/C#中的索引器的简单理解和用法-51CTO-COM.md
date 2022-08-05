# C#中的索引器的简单理解和用法 - 51CTO.COM

`A`

## C\#中的索引器的简单理解和用法

索引器是一种特殊的类成员，它能够让对象以类似数组的方式来存取，使程序看起来更为直观，更容易编写。 下面我们详细的来了解一下。

.

## 

[索引器是一种特殊的类成员，它能够让对象以类似数组的方式来存取，使程序看起来更为直观，更容易编写。](http://developer.51cto.com/art/201306/397265.htm#)

[**1、索引器的定义**](http://developer.51cto.com/art/201306/397265.htm#)

[C\#中的类成员可以是任意类型，包括数组和集合。当一个类包含了数组和集合成员时，索引器将大大简化对数组或集合成员的存取操作。](http://developer.51cto.com/art/201306/397265.htm#)

[定义索引器的方式与定义属性有些类似，其一般形式如下：](http://developer.51cto.com/art/201306/397265.htm#)

```
[修饰符] 数据类型 this[索引类型 index]   {      get{//获得属性的代码}                                                       set{ //设置属性的代码}  } 修饰符包括 public,protected,private,internal,new,virtual,sealed,override, abstract,extern.数据类型是表示将要存取的数组或集合元素的类型。索引器类型表示该索引器使用哪一类型的索引来存取数组或集合元素，可以是整数，可以是字符串；this表示操作本对象的数组或集合成员，可以简单把它理解成索引器的名字，因此索引器不能具有用户定义的名称。 例如：class Z  {          //可容纳100个整数的整数集          private long[] arr = new long[100];          //声明索引器          public long this[int index]          {              get             { //检查索引范围                  if (index < 0 || index >= 100)                  {                      return 0;                  }                  else                 {                      return arr[index];                  }              }              set             {                  if (!(index < 0 || index >= 100))                  {                      arr[index] = value;                  }              }     }  2、索引器的使用通过索引器可以存取类的实例的数组成员，操作方法和数组相似，一般形式如下：对象名[索引]其中索引的数据类型必须与索引器的索引类型相同。例如：Z  z=new  z();  z[0]=100;  z[1]=101;  Console.WriteLine(z[0]); 表示先创建一个对象z，再通过索引来引用该对象中的数组元素。C#中并不将索引器的类型限制为整数。例如，可以对索引器使用字符串。通过搜索集合内的字符串并返回相应的值，可以实现此类的索引器。由于访问器可以被重载，字符串和整数版本可以共存。example：class DayCollection{         string[] days={"Sun","Mon","Tues","Wed","Thurs","Fri","Sat"};        private int GetDay(string testDay)       {          int i=0;          foreach(string day in days)            {                if(day==testDay)                        return i;                        i++;             }           return -1;        }       public int this[string day]        {            get{return (GetDay(day))}        }  }     static void Main(string[] args)  {       DayCollection week=new DayCollection();       Console.WriteLine("Fri:{0}",week["Fri"]);       Console.WriteLine("ABC:{0}",week["ABC"]);  } 结果：Fri:5ABC:-13、接口中的索引器在接口中也可以声明索引器，接口索引器与类索引器的区别有两个：一是接口索引器不使用修饰符；二是接口索引器只包含访问器get或set，没有实现语句。访问器的用途是指示索引器是可读写、只读还是只写的，如果是可读写的，访问器get或set均不能省略；如果只读的，省略set访问器；如果是只写的，省略get访问器。例如：public interface IAddress  {  string this[int index]{get;set;}  string Address{get;set;}  string Answer();  } 表示所声明的接口IAddress包含3个成员：一个索引器、一个属性和一个方法，其中，索引器是可读写的。4、索引器与属性的比较 索引器与属性都是类的成员，语法上非常相似。索引器一般用在自定义的集合类中，通过使用索引器来操作集合对象就如同使用数组一样简单；而属性可用于任何自定义类，它增强了类的字段成员的灵活性。属        性                                          索  引  器允许调用方法，如同公共数据成员允许调用对象上的方法，如同对象是一个数组可通过简单的名称进行访问可通过索引器进行访问可以为静态成员或实例成员必须为实例成员其get访问器没有参数其get访问器具有与索引器相同的形参表其set访问器包含隐式value参数除了value参数外，其set访问器还具有与索引器相同的形参表原文链接：http://www.cnblogs.com/skm-blog/archive/2013/06/04/3117547.html
```
