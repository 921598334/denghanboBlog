# C# this扩展方法 - 开心学习

`A`

 # C\# this扩展方法

 更多2014/11/27 来源：C\#学习浏览量：6602 
  学习标签： [this](http://www.studyofnet.com/news?wd=this) 
 
 本文导读：扩展方法被定义为静态方法，但它们是通过实例方法语法进行调用的。 它们的第一个参数指定该方法作用于哪个类型，并且该参数以 this 修饰符为前缀。 扩展方法当然不能破坏面向对象封装的概念，所以只能是访问所扩展类的public成员。
  扩展方法使您能够向现有类型“添加”方法，而无需创建新的派生类型、重新编译或以其他方式修改原始类型。扩展方法是一种特殊的静态方法，但可以像扩展类型上的实例方法一样进行调用。

C\#扩展方法第一个参数指定该方法作用于哪个类型，并且该参数以 this 修饰符为前缀。

 

**C\# this扩展方法实例**

 

**实例1、给string 类型增加一个Add方法，该方法的作用是给字符串增加一个字母a**

 

 
C\# 代码   复制
```

       //必须是静态类才可以添加扩展方法
       Static class Program
       {
        static void Main(string[] args)
        {
%!(EXTRA markdown.ResourceType=, string=, string=)            string str = "quzijing";
%!(EXTRA markdown.ResourceType=, string=, string=)            //注意调用扩展方法,必须用对象来调用 
%!(EXTRA markdown.ResourceType=, string=, string=)            string Newstr = str.Add();
%!(EXTRA markdown.ResourceType=, string=, string=)            Console.WriteLine(Newstr);
%!(EXTRA markdown.ResourceType=, string=, string=)            Console.ReadKey();
%!(EXTRA markdown.ResourceType=, string=, string=)        }
%!(EXTRA markdown.ResourceType=, string=, string=)        //声明扩展方法
%!(EXTRA markdown.ResourceType=, string=, string=)        //扩展方法必须是静态的，Add有三个参数
%!(EXTRA markdown.ResourceType=, string=, string=)        //this 必须有，string表示我要扩展的类型，stringName表示对象名
%!(EXTRA markdown.ResourceType=, string=, string=)        //三个参数this和扩展的类型必不可少，对象名可以自己随意取如果需要传递参数，//再增加一个变量即可
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        public static  string  Add(this string stringName)
%!(EXTRA markdown.ResourceType=, string=, string=)        {
%!(EXTRA markdown.ResourceType=, string=, string=)            return stringName+"a";
%!(EXTRA markdown.ResourceType=, string=, string=)        }
%!(EXTRA markdown.ResourceType=, string=, string=)}
%!(EXTRA markdown.ResourceType=, string=, string=)
```

 

**实例2、给自定义的类型增加一个扩展方法，并增加一个传递的参数**

**\(1\)、声明一个Student类，它包含了两个方法StuInfo,getStuInfo**

 
 
C\# 代码   复制
```
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)    public class Student
%!(EXTRA markdown.ResourceType=, string=, string=)    {
%!(EXTRA markdown.ResourceType=, string=, string=)        public string StuInfo()
%!(EXTRA markdown.ResourceType=, string=, string=)        {
%!(EXTRA markdown.ResourceType=, string=, string=)            return "学生基本信息";
%!(EXTRA markdown.ResourceType=, string=, string=)        }
%!(EXTRA markdown.ResourceType=, string=, string=)        public  string getStuInfo(string stuName, string stuNum)
%!(EXTRA markdown.ResourceType=, string=, string=)        {
%!(EXTRA markdown.ResourceType=, string=, string=)       return string.Format("学生信息：\\n" + "姓名：{0} \\n" + "学号：{1}", stuName, stuNum);
%!(EXTRA markdown.ResourceType=, string=, string=)        }
%!(EXTRA markdown.ResourceType=, string=, string=)     }
%!(EXTRA markdown.ResourceType=, string=, string=)
```

 

**\(2\)、声明一个名为ExtensionStudentInfo的静态类，注意必须为静态**

这个类的作用就是包含一些我们想要扩展的方法，在此我们声明两个Student类型的扩展方法，Student类型为我们自定义的类型。

 
 
C\# 代码   复制
```
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)    public static class ExtensionStudentInfo
%!(EXTRA markdown.ResourceType=, string=, string=)    {
%!(EXTRA markdown.ResourceType=, string=, string=)        //声明扩展方法
%!(EXTRA markdown.ResourceType=, string=, string=)        //要扩展的方法必须是静态的方法，Add有三个参数
%!(EXTRA markdown.ResourceType=, string=, string=)        //this 必须有，string表示我要扩展的类型，stringName表示对象名
%!(EXTRA markdown.ResourceType=, string=, string=)        //三个参数this和扩展的类型必不可少，对象名可以自己随意取如果需要传递参数，再增加一个变量即可
%!(EXTRA markdown.ResourceType=, string=, string=)        public static string ExtensionStuInfo(this Student stuName)
%!(EXTRA markdown.ResourceType=, string=, string=)        {
%!(EXTRA markdown.ResourceType=, string=, string=)            return stuName.StuInfo();
%!(EXTRA markdown.ResourceType=, string=, string=)        }
%!(EXTRA markdown.ResourceType=, string=, string=)        //声明扩展方法
%!(EXTRA markdown.ResourceType=, string=, string=)        //要扩展的方法必须是静态的方法，Add有三个参数
%!(EXTRA markdown.ResourceType=, string=, string=)        //this 必须有，string表示我要扩展的类型，stringName表示对象名
%!(EXTRA markdown.ResourceType=, string=, string=)        //三个参数this和扩展的类型必不可少，对象名可以自己随意取如果需要传递参数，在此我们增加了两个string类型的参数
%!(EXTRA markdown.ResourceType=, string=, string=)        public static string ExtensionGetStuInfo(this Student student, string stuname, string stunum)
%!(EXTRA markdown.ResourceType=, string=, string=)        {
%!(EXTRA markdown.ResourceType=, string=, string=)            return student.getStuInfo(stuname, stunum)+"\\n读取完毕";
%!(EXTRA markdown.ResourceType=, string=, string=)        }
%!(EXTRA markdown.ResourceType=, string=, string=)    }
%!(EXTRA markdown.ResourceType=, string=, string=)
```

 

**\(3\)、使用自定义类的扩展方法，注意必须要用对象来调用扩展方法**

 
 
C\# 代码   复制
```
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        static void Main(string[] args)
%!(EXTRA markdown.ResourceType=, string=, string=)        {
%!(EXTRA markdown.ResourceType=, string=, string=)            Student newstudent = new Student();
%!(EXTRA markdown.ResourceType=, string=, string=)            //要使用对象调用我们的扩展方法
%!(EXTRA markdown.ResourceType=, string=, string=)            string stuinfo = newstudent.ExtensionStuInfo();
%!(EXTRA markdown.ResourceType=, string=, string=)            Console.WriteLine(stuinfo);
%!(EXTRA markdown.ResourceType=, string=, string=)            //要使用对象调用我们的扩展方法
%!(EXTRA markdown.ResourceType=, string=, string=)            string stuinformation = newstudent.ExtensionGetStuInfo("quzijing", "20081766");
%!(EXTRA markdown.ResourceType=, string=, string=)            Console.WriteLine(stuinformation);
%!(EXTRA markdown.ResourceType=, string=, string=)            Console.ReadKey();
%!(EXTRA markdown.ResourceType=, string=, string=)        }
%!(EXTRA markdown.ResourceType=, string=, string=)
```

 

**实例3、为string扩展一个验证邮件类**

**\(1\)、扩展方法**

 
 
C\# 代码   复制
```
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)using System;
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)using System.Collections.Generic;
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)using System.Linq;
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)using System.Text;
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)using System.Text.RegularExpressions;
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=) 
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)//声明扩展方法的步骤：类必须是static，方法是static，
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)//第一个参数是被扩展的对象，前面标注this。
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)//使用扩展方法的时候必须保证扩展方法类已经在当前代码中using
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)namespace 扩展方法
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=){
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)    //扩展方法必须是静态的
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)    public static class StringHelper
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)    {
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        //扩展方法必须是静态的，第一个参数必须加上this
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        public static bool IsEmail(this string _input)
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        {
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)            return Regex.IsMatch(_input, @"^\\w+@\\w+\\.\\w+$");
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        }
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        //带多个参数的扩展方法
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        //在原始字符串前后加上指定的字符
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        public static string Quot(this string _input, string _quot)
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        {
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)            return _quot + _input + _quot;
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        }
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)    }
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)}
%!(EXTRA markdown.ResourceType=, string=, string=)
```

 

**\(2\)、使用方法**

 
C\# 代码   复制
```
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)using System;
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)using System.Collections.Generic;
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)using System.Linq;
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)using System.Text;
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)namespace 扩展方法
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=){
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)    class Program
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)    {
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        static void Main(string[] args)
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        {
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)            string _myEmail = "abc@163.com";
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)            //这里就可以直接使用string类的扩展方法IsEmail了
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)            Console.WriteLine(_myEmail.IsEmail());
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)            //调用接收参数的扩展方法
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)            Console.WriteLine(_myEmail.Quot("!"));
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=) 
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)            Console.ReadLine();
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)        }
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)    }
%!(EXTRA markdown.ResourceType=, string=, string=)
%!(EXTRA markdown.ResourceType=, string=, string=)}
%!(EXTRA markdown.ResourceType=, string=, string=)
```

 

收藏346 很赞100

 
 上一篇：[C\#中ToDictionary,ToLookup](http://www.studyofnet.com/news/654.html "C#中ToDictionary,ToLookup ")  
 下一篇：[C\#中Obsolete](http://www.studyofnet.com/news/706.html "C#中Obsolete ")  
 
 
  **您可能感兴趣**
* [C\# 扩展方法](http://www.studyofnet.com/news/1186.html "C# 扩展方法")

 

 
