# chart控件绘制图形

`A`

另外一篇介绍的文章

blog.sina.com.cn/s/blog\_621e24e20101cp64.html

# [C\# WinForm开发系列之c\# 通过.net自带的chart控件绘制饼图,柱形图和折线图的基础使用和扩展](http://blog.csdn.net/dannyiscoder/article/details/70225163)

.

标签： [c\#](http://www.csdn.net/tag/c%23)[控件](http://www.csdn.net/tag/%e6%8e%a7%e4%bb%b6)[布局](http://www.csdn.net/tag/%e5%b8%83%e5%b1%80)

2017\-04\-18 10:08 2164人阅读2164人阅读 [评论](http://blog.csdn.net/dannyiscoder/article/details/70225163#comments)\(0\)[评论](http://blog.csdn.net/dannyiscoder/article/details/70225163#comments)\(0\) [收藏](# "收藏") [举报](http://blog.csdn.net/dannyiscoder/article/details/70225163#report "举报")
.

![Center.jpg](image/Center.jpg)

 分类：

C\#基础知识_（10）_ ![Center-1.jpg](image/Center-1.jpg)

 C\#控件知识_（10）_ ![category_icon.jpg](image/category_icon.jpg)

.

版权声明：本文为博主原创文章，未经博主允许不得转载。

一.需要实现的目标是：

1.将数据绑定到pie的后台数据中，自动生成饼图。

2.生成的饼图有详细文字的说明。

1.设置chart1的属性Legends中默认的Legend1的Enable为false；

如图1所示：![Center-2.jpg](image/Center-2.jpg)

图1

2.设置Series的ChartType为Pie，如图2所示：

![Center-3.jpg](image/Center-3.jpg)

图2

![Center-4.jpg](image/Center-4.jpg)

图3

3.后台绑定数据

      List\<string\> xData = new List\<string\>\(\) { "A", "B", "C", "D" };

            List\<int\> yData = new List\<int\>\(\) { 10, 20, 30, 40 };

            chart1.Series\[0\]\["PieLabelStyle"\] = "Outside";//将文字移到外侧

            chart1.Series\[0\]\["PieLineColor"\] = "Black";//绘制黑色的连线。

            chart1.Series\[0\].Points.DataBindXY\(xData, yData\);

4.后台代码主要实现了数据绑定和将指示的文字移到饼图的外侧。如图4所示：

![Center-5.jpg](image/Center-5.jpg)

图4

折线图和柱形图的生成和饼图相同。

二.chart画饼图，折线图，柱形图的扩展。

1.使用chart控件创建，跟上面相同；

2.进行关于柱形图样式的数据数据，

代码展示：

 //画图柱形图的条数决定是由数据源也就Series决定。Series是对象，动态创建即可。

        private void Form2\_Load\(object sender, EventArgs e\)

        {

            //画图柱形图的条数决定是由数据源也就Series决定。Series是对象，动态创建即可。

            Series s1 = new Series\(\);

            Series s2 = new Series\(\);

            Series s3 = new Series\(\);

    //随机

            Random r = new Random\(\);

            for \(int i = 1; i \< 13; i\+\+\)

            {

                //绑定数据

                s1.Points.AddXY\(i, r.Next\(20, 30\)\);

                s2.Points.AddXY\(i, r.Next\(10, 30\)\);

                s3.Points.AddXY\(i, r.Next\(20, 30\)\);

            }

            //指定柱形条的颜色

            s1.Color = Color.Green;

            s2.Color = Color.Red;

            s3.Color = Color.Black;

            //加入到chart1中

            chart1.Series.Add\(s1\);

            chart1.Series.Add\(s2\);

            chart1.Series.Add\(s3\);

        }

3.柱形图效果如图5所示：

![Center-6.jpg](image/Center-6.jpg)

图5

4.C\# chart绑定数据的几种方式

（1）、数组, List 等简单Collection类型的方式

`Series s1= ``new` `Series（）；`

`然后绑定数据就可以了`

`chart1.Series[``"s1"``].Points.DataBindXY(Hdop, Vdop);`
（2）DataTable方式`  Series dataTable3Series = ``new` `Series(``"dataTable3"``);`

`  dataTable3Series.Points.DataBind(dataTable3.AsEnumerable(), ``"日期"``, ``"日发展"``, ``""``);`

`dataTable3Series.XValueType = ChartValueType.DateTime;``//设置X轴类型为时间`

`dataTable3Series.ChartType = SeriesChartType.Line;  ``//设置Y轴为折线`

`chart1.Series.Add(dataTable3Series);``//加入你的chart1`

三.chart控件画图的一些关键点

1.如何将折线图的各个数据点凸显出来

代码如下：

  private void Form3\_Load\(object sender, EventArgs e\)

        {

            List\<string\> xData = new List\<string\>\(\) { "A", "B", "C", "D" };

            List\<int\> yData = new List\<int\>\(\) { 10, 20, 30, 40 };

            //线条颜色

            chart1.Series\[0\].Color = Color.Green;

            //线条粗细

            chart1.Series\[0\].BorderWidth = 3;

            //标记点边框颜色      

            chart1.Series\[0\].MarkerBorderColor = Color.Black;

            //标记点边框大小

            chart1.Series\[0\].MarkerBorderWidth = 3;

            //标记点中心颜色

            chart1.Series\[0\].MarkerColor = Color.Red;

            //标记点大小

            chart1.Series\[0\].MarkerSize = 8;

            //标记点类型     

            chart1.Series\[0\].MarkerStyle = MarkerStyle.Circle;

            //将文字移到外侧

            chart1.Series\[0\]\["PieLabelStyle"\] = "Outside";

            //绘制黑色的连线

            chart1.Series\[0\]\["PieLineColor"\] = "Black";

            chart1.Series\[0\].Points.DataBindXY\(xData, yData\);

        }

效果图如图6所示：

![Center-7.jpg](image/Center-7.jpg)

图6

2.  如何去掉柱形图纵向线条

代码如下：

  private void Form2\_Load\(object sender, EventArgs e\)

        {

            //画图柱形图的条数决定是由数据源也就Series决定。Series是对象，动态创建即可。

            Series s1 = new Series\(\);

            Series s2 = new Series\(\);

            Series s3 = new Series\(\);

            Random r = new Random\(\);

            for \(int i = 1; i \< 13; i\+\+\)

            {

                //绑定数据

                s1.Points.AddXY\(i, r.Next\(20, 30\)\);

                s2.Points.AddXY\(i, r.Next\(10, 30\)\);

                s3.Points.AddXY\(i, r.Next\(20, 30\)\);

            }

            //指定柱形条的颜色

            s1.Color = Color.Green;

            s2.Color = Color.Red;

            s3.Color = Color.Black; 

            //加入到chart1中

            //X轴上网格

            chart1.ChartAreas\[0\].Axes\[0\].MajorGrid.Enabled = false;

            //y轴上网格

            //ct.ChartAreas\[0\].Axes\[1\].MajorGrid.Enabled = false;      

            chart1.Series.Add\(s1\);

            chart1.Series.Add\(s2\);

            chart1.Series.Add\(s3\);

        }

效果如图7所示：

![Center-8.jpg](image/Center-8.jpg)

图7

3.  如何使用chart控件画圆环图

操作与饼形图，折线图等相似，只是需要将chartType设置为Doughnut；

如图8所示：

![Center-9.jpg](image/Center-9.jpg)

图8

在这里可以设置关于圆环的内外百分比，如图9所示：

![arrow_triangle-down.jpg](image/arrow_triangle-down.jpg)

图9

效果图如图10所示：

%\!\(EXTRA markdown.ResourceType=, string=, string=\)

图10

注意：代码设置圆环大小代码如下：

 //DoughnutRadius用来设置用作圆环图大小的半径百分比

 chart1.Series\["data"\].CustomProperties = "DoughnutRadius = 20";

      [.](http://blog.csdn.net/dannyiscoder/article/details/70225163# "分享到微信")

[顶](http://blog.csdn.net/dannyiscoder/article/details/70225163# "分享到微信")[0](http://blog.csdn.net/dannyiscoder/article/details/70225163# "分享到微信")[踩](http://blog.csdn.net/dannyiscoder/article/details/70225163# "分享到微信")[0](http://blog.csdn.net/dannyiscoder/article/details/70225163# "分享到微信")[.](http://blog.csdn.net/dannyiscoder/article/details/70225163# "分享到微信")

 

 

* 上一篇[C\# WinForm开发系列之DataGridView部分属性总结和图片资源的引用方式](http://blog.csdn.net/DannyIsCoder/article/details/70157401)
* 下一篇[C\# 利用微软提供的画图类画图（如折线图）](http://blog.csdn.net/DannyIsCoder/article/details/70234213)
* .

####   相关文章推荐

* _•_[.NET chart控件使用方法](http://blog.csdn.net/lumliang1234/article/details/45077835 ".NET chart控件使用方法")_•_[C\#创建基本图表\(Chart Controls\)](http://blog.csdn.net/akof1314/article/details/5710866 "C#创建基本图表(Chart Controls)")_•_[C\# Winform Chart控件使用](http://blog.csdn.net/zx48822821/article/details/72811909 "C# Winform Chart控件使用")_•_[C\#之Chart篇](http://blog.csdn.net/Kang_xiong/article/details/53944487 "C#之Chart篇")_•_[chart控件的简单使用](http://blog.csdn.net/sunnyloves/article/details/5661841 "chart控件的简单使用")

* _•_[C\#内置chart的例子](http://blog.csdn.net/content6/article/details/53142878 "C#内置chart的例子")_•_[C\# Chart详细解析](http://blog.csdn.net/u011981242/article/details/51045673 "C# Chart详细解析")_•_[c\#报表控件Chart实例用法](http://blog.csdn.net/zlp_huanxiang/article/details/8781665 "c#报表控件Chart实例用法")_•_[共有12款C\# 报表/图表制作开源软件](http://blog.csdn.net/eidolon8/article/details/18853879 "共有12款C# 报表/图表制作开源软件")_•_[C\# Chart控件使用心得](http://blog.csdn.net/zhengyingcan/article/details/47263357 "C# Chart控件使用心得")
