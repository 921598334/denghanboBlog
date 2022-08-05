# Lambda表达式

`A`

之前一直以为C\#中Lambda表达式和Where语法很神圣，看人家写出一串这样的代码出来都感觉好高深，其实只是不敢接触而已，然后今晚看了一下，仔细理解一下也很简单！

看例子：

### **\[code\]csharpcode：**

![.jfif](image/.jfif)

运行效果图:

[![-1.jfif](image/-1.jfif)](http://www.unitymanual.com/data/attachment/album/201405/23/003702vc4lqibbe3pbnbfc.jpg)

Where语法格式

public static IEnumerable\<TSource\> Where\<TSource\>\(

        this IEnumerable\<TSource\> source,

        Func\<TSource, bool\> predicate

\)

#### 类型参数

_TSource__         source中元素的类型_

#### 参数

_source_类型：[System.Collections.Generic.IEnumerable]()\<TSource\>

要筛选的 [IEnumerable\<T\>]()。

_predicate_类型：[System.Func]()\<TSource, [Boolean]()\>

用于测试每个元素是否满足条件的函数。

一般where都是跟Lambda表达式一起使用的，where语法包含在Linq命名空间下，那何为Lambda表达式呢，简单的说就是匿名函数，也跟匿名委托差不多，所以没必要想的很神圣。

Lambda表达式例子：

### 

运行结果是：30

估计很容易看明白。

Lambda表达式规则：

表达式位于=\>运算符的右侧  （input parameters）=\>expression

当Lambda只有一个输入参数的时候，括号才是可选的，否则括号是必须的。

例如：（x,y）=\>x==y

有时候当编译器无法判断类型的时候，出现这种情况，你可以显式指定参数类型

例如：（int x,string y）=\>s.length \> x

当使用空括号表示指定0个参数

例如：（）=\>SomeMethod\(\)

Lambda第二个小例子：

![-2.jfif](image/-2.jfif)

其实理解了委托和事件就很容易理解这个Lambda，说白了就是匿名委托，再直白一点就是匿名函数。表示已经无法再直白的说下去了。

在介绍稍微复杂一点的Lambda表达式

![-3.jfif](image/-3.jfif)

上面声明的表达式，是以int类型作为参数，然后做一个比较，返回的是一个bool值。

如果参数是Expression\<Func\>时，你也可以提供Lambda表达式例如在 System.Linq.Queryable 内定义的标准查询运算符中。 如果指定 Expression\<Func\> 参数，lambda 将编译为表达式目录树。

此处显示了一个标准查询运算符，Count 方法：

![-4.jfif](image/-4.jfif)

计算出数组中基数的个数

再来个复杂点的例子，就是循环判断，知道不满足条件停止，类似于do while的结构

![.png](image/.png)

大体上先介绍到这儿，晚安！

我这里直接从我的论坛上复制古来的！[我的蛮牛](http://www.unitymanual.com/home.php?mod=space&uid=1261&do=blog&quickforward=1&id=744)，欢迎关注我的[围脖](http://weibo.com/dingxiaowei2013)！[如需交流，请Q我吧！](http://wpa.qq.com/msgrd?v=3&uin=1213250243&site=qq&menu=yes)
