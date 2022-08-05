# C# chart 实时动态显示数据

`A`

   #   [C\# chart控件实时动态显示数据](http://blog.csdn.net/lj22377/article/details/38373609)   

    标签： [c\#](http://www.csdn.net/tag/c%23)[chart](http://www.csdn.net/tag/chart)[动态显示](http://www.csdn.net/tag/%e5%8a%a8%e6%80%81%e6%98%be%e7%a4%ba)  
  2014\-08\-04 18:51 9641人阅读9641人阅读  [评论](http://blog.csdn.net/lj22377/article/details/38373609#comments)\(0\) [评论](http://blog.csdn.net/lj22377/article/details/38373609#comments)\(0\)  [收藏](# "收藏")  [举报](http://blog.csdn.net/lj22377/article/details/38373609#report "举报") 
 .
   ![category_icon.jpg](image/category_icon.jpg)

 分类： 
   WinForm_（4）_ ![arrow_triangle-down.jpg](image/arrow_triangle-down.jpg)

  
 .
  版权声明：本文为博主原创文章，未经博主允许不得转载。

 
 这里介绍了一个最简单的实时显示数据的完整示例，

本文参考了 [使用MSChart实时动态显示折线图](http://blog.csdn.net/shining0/article/details/9358289) ，谢谢原作者的分享。

平台：VS2013，[C\#](http://lib.csdn.net/base/csharp "C#知识库")windows程序。

[源代码下载](http://download.csdn.net/detail/lj22377/7713939)：http://download.csdn[.NET](http://lib.csdn.net/base/dotnet ".NET知识库")/detail/lj22377/7713939

1、首先，将chart控件添加到窗口。

2、设置chart \- series 主要t属性：

2.1 IsXValueIndexed = true;

2.2 XValueType = Time;

3、编写初始化函数：

**\[csharp\]** [view plain](http://blog.csdn.net/lj22377/article/details/38373609# "view plain") [copy](http://blog.csdn.net/lj22377/article/details/38373609# "copy")

 

1. privatevoid InitChart\(\)  
2.         {  
3.             DateTime time = DateTime.Now;  
4.             chartTimer.Interval = 1000;  
5.             chartTimer.Tick \+= chartTimer\_Tick;  
6.             chartDemo.DoubleClick \+= chartDemo\_DoubleClick;  
7.             Series series = chartDemo.Series\[0\];  
8.             series.ChartType = SeriesChartType.Spline;  
9.             chartDemo.ChartAreas\[0\].AxisX.LabelStyle.Format = "HH:mm:ss";  
10.             chartDemo.ChartAreas\[0\].AxisX.ScaleView.Size = 5;  
11.             chartDemo.ChartAreas\[0\].AxisX.ScrollBar.IsPositionedInside = true;  
12.             chartDemo.ChartAreas\[0\].AxisX.ScrollBar.Enabled = true;  
13.             chartTimer.Start\(\);  
14.         }  

4、编写timer事件：

**\[csharp\]** [view plain](http://blog.csdn.net/lj22377/article/details/38373609# "view plain") [copy](http://blog.csdn.net/lj22377/article/details/38373609# "copy")

 

1. void chartTimer\_Tick\(object sender, EventArgs e\)  
2.         {  
3.             Random ra = new Random\(\);  
4.             Series series = chartDemo.Series\[0\];  
5.             series.Points.AddXY\(DateTime.Now, ra.Next\(1, 10\)\);  
6.             chartDemo.ChartAreas\[0\].AxisX.ScaleView.Position = series.Points.Count \- 5;  
7. //throw new NotImplementedException\(\);
8.         }  

5、编写chart双击事件。（因为滑动条可以隐藏，隐藏之后不知道怎么恢复，所以就编写了这个双击事件，以恢复滑动条）

**\[csharp\]** [view plain](http://blog.csdn.net/lj22377/article/details/38373609# "view plain") [copy](http://blog.csdn.net/lj22377/article/details/38373609# "copy")

 

1. void chartDemo\_DoubleClick\(object sender, EventArgs e\)  
2.         {  
3.             chartDemo.ChartAreas\[0\].AxisX.ScaleView.Size = 5;  
4.             chartDemo.ChartAreas\[0\].AxisX.ScrollBar.IsPositionedInside = true;  
5.             chartDemo.ChartAreas\[0\].AxisX.ScrollBar.Enabled = true;  
6. //throw new NotImplementedException\(\);
7.         }  

6、完整代码如下：

**\[csharp\]** [view plain](http://blog.csdn.net/lj22377/article/details/38373609# "view plain") [copy](http://blog.csdn.net/lj22377/article/details/38373609# "copy")

 

1. using System;  
2. using System.Collections.Generic;  
3. using System.ComponentModel;  
4. using System.Data;  
5. using System.Drawing;  
6. using System.Linq;  
7. using System.Text;  
8. using System.Threading.Tasks;  
9. using System.Windows.Forms;  
10. using System.Windows.Forms.DataVisualization.Charting; //需要添加的命名空间
11. namespace ChartRealTimeShow  
12. {  
13. public partial class Form1 : Form  
14.     {  
15. public Form1\(\)  
16.         {  
17.             InitializeComponent\(\);  
18.             InitChart\(\);  
19.         }  
20.         System.Windows.Forms.Timer chartTimer = new System.Windows.Forms.Timer\(\);  
21. privatevoid InitChart\(\)  
22.         {  
23.             DateTime time = DateTime.Now;  
24.             chartTimer.Interval = 1000;  
25.             chartTimer.Tick \+= chartTimer\_Tick;  
26.             chartDemo.DoubleClick \+= chartDemo\_DoubleClick;  
27.             Series series = chartDemo.Series\[0\];  
28.             series.ChartType = SeriesChartType.Spline;  
29.             chartDemo.ChartAreas\[0\].AxisX.LabelStyle.Format = "HH:mm:ss";  
30.             chartDemo.ChartAreas\[0\].AxisX.ScaleView.Size = 5;  
31.             chartDemo.ChartAreas\[0\].AxisX.ScrollBar.IsPositionedInside = true;  
32.             chartDemo.ChartAreas\[0\].AxisX.ScrollBar.Enabled = true;  
33.             chartTimer.Start\(\);  
34.         }  
35. void chartDemo\_DoubleClick\(object sender, EventArgs e\)  
36.         {  
37.             chartDemo.ChartAreas\[0\].AxisX.ScaleView.Size = 5;  
38.             chartDemo.ChartAreas\[0\].AxisX.ScrollBar.IsPositionedInside = true;  
39.             chartDemo.ChartAreas\[0\].AxisX.ScrollBar.Enabled = true;  
40. //throw new NotImplementedException\(\);
41.         }  
42. void chartTimer\_Tick\(object sender, EventArgs e\)  
43.         {  
44.             Random ra = new Random\(\);  
45.             Series series = chartDemo.Series\[0\];  
46.             series.Points.AddXY\(DateTime.Now, ra.Next\(1, 10\)\);  
47.             chartDemo.ChartAreas\[0\].AxisX.ScaleView.Position = series.Points.Count \- 5;  
48. //throw new NotImplementedException\(\);
49.         }  
50.     }  
51. }  

 
.
   顶 2   踩 0  
   
   
 
* 上一篇[C\# Excel CSV DataTable DataSet 相关代码及资料整理](http://blog.csdn.net/lj22377/article/details/38338425)
* 下一篇[移除快捷方式 用命令启动应用程序](http://blog.csdn.net/lj22377/article/details/43675373)

 
  #### 

     相关文章推荐 
  
* _•_[c\# chart 鼠标放在数据点上出现的小提示](http://blog.csdn.net/rztyfx/article/details/45912821 "c# chart 鼠标放在数据点上出现的小提示")
* _•_[使用MSChart实时动态显示折线图](http://blog.csdn.net/Shining0/article/details/9358289 "使用MSChart实时动态显示折线图")
* _•_[C\#绘制实时曲线](http://blog.csdn.net/ikevin/article/details/49848645 "C#绘制实时曲线")
* _•_[C\# Chart控件使用心得](http://blog.csdn.net/zhengyingcan/article/details/47263357 "C# Chart控件使用心得")
* _•_[C\# Chart控件，chart、Series、ChartArea曲线图绘制的重要属性](http://blog.csdn.net/u011981242/article/details/51045643 "C# Chart控件，chart、Series、ChartArea曲线图绘制的重要属性")

 
* _•_[C\#在winform中实时显示即时时间](http://blog.csdn.net/feiyangyongran/article/details/25316633 "C#在winform中实时显示即时时间")
* _•_[chart图像刷新](http://blog.csdn.net/lllljz/article/details/7734762 "chart图像刷新")
* _•_[C\#中多线程更新Chart控件与BeginInvoke](http://blog.csdn.net/sudoRoger/article/details/54955328 "C#中多线程更新Chart控件与BeginInvoke")
* _•_[chart控件的简单使用](http://blog.csdn.net/sunnyloves/article/details/5661841 "chart控件的简单使用")
* _•_[chart&nbsp;控件的各种数据绑定（…](http://blog.csdn.net/fuyoufang1/article/details/25150157 "chart&nbsp;控件的各种数据绑定（…")

 
 
 
 
