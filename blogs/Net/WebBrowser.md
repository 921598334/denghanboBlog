# WebBrowser

`A`

# [C\#中WebBrowser控件的使用](http://www.cnblogs.com/LanTianYou/p/4802215.html)

今天在YouTube上看了一个关于WebBrowser控件用法的小视频，做一下总结。

首先创建一个WinForm程序，拖入一个textbox控件和一个button按钮，然后拖入一个panel控件，如图所示：

![.png](image/.png)

拖入panel控件后，找到[WebBrowser控件并双击，WebBrowser控件就会自动填充到panel控件上，像下面这样：]()

[![.gif](image/.gif)]()

[之后给button改个名，双击button按钮设置一个简单的跳转行为：]()

```
private void goButton_Click(object sender, EventArgs e)
{
     webBrowser1.Navigate(textBox1.Text);
}
```

[然后一个简易的浏览器功能界面就实现了：]()

[![-1.png](image/-1.png)]()

[以上就是C\#中WebBrowser控件的基本用法。]()

[另外，需要对Form的sizeChanged事件进行一下编写：]()

[![-2.png](image/-2.png)]( "复制代码")

```
 private void mainForm_SizeChanged(object sender, EventArgs e)
{
      panel1.Width = this.Width;
      panel1.Height = this.Height;
      webBrowserForm.Dock = DockStyle.Fill;
}
```

[%\!\(EXTRA markdown.ResourceType=, string=, string=\)]( "复制代码")

这样在Form窗体的大小改变时，panel的大小也会随着发生改变，并且让webBrowser控件始终填充panel控件。

为了让Form窗体中的内容显示完全，还要为其添加滚动条，可以直接在Form的构造方法中添加如下语句：

this.AutoScroll = true;
