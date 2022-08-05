# WEB FORM

`A`

![.png](image/.png)

---

webForm和一般处理程序的关系

![-1.png](image/-1.png)

---

![-2.png](image/-2.png)

\<\!\-\-这表示了该页面继承自那个类\-\-\>

\<%@ Page Language="C\#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs"

    Inherits="WebApplication1.WebForm1" %\>

\<\!DOCTYPE html\>

\<html xmlns="http://www.w3.org/1999/xhtml"\>

\<head runat="server"\>

    \<title\>\</title\>

\</head\>

\<body\>

     \<\!\-\-这个非常重要！必须加\-\-\>

    \<form id="form1" runat="server"\>

          \<div\>

            \<\!\-\-可以得到后台变量的值，这里面的内容只能是C\#代码\-\-\>

                  \<h1\>\<%=age %\>\</h1\>

          \</div\>

     \</form\>

   

  

\</body\>

\</html\>

---

![-3.png](image/-3.png)

---

后台得到前台传过来的id

![-4.png](image/-4.png)
