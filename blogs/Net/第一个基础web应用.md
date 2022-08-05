# 第一个基础web应用

`A`

选择空的web应用
![.png](image/.png)

然后在项目里面添加

![-1.png](image/-1.png)

html的代码

\<\!DOCTYPE html\>

\<html xmlns="http://www.w3.org/1999/xhtml"\>

\<head\>

\<meta http\-equiv="Content\-Type" content="text/html; charset=utf\-8"/\>

    \<title\>\</title\>

\</head\>

\<body\>

    \<\!\-\-包含了要提交的内容\-\-\>

    \<form action="Handler1.ashx" method="get"\>

        \<\!\-\-给Handler1.ashx下的name字段\-\-\>

        姓名：\<input type="text" name="name"/\>\<br /\>

        年龄：\<input type="text" name="age"/\>\<br /\>

        是否为VIP ：\<input type="checkbox" name="isVip" /\>\<br /\>

        感想： \<textarea name="content"\>\</textarea\>

        选择地区 \<select name="area"\>

                    \<option value="beiJin"\>北京\</option\>

                    \<option value="shanHai"\>上海\</option\>

                    \<option value="tianJin"\>天津\</option\>

                 \</select\>

        \<\!\-\-提交给Handler1.ashx这个页面\-\-\>

        \<input type="submit" /\>

    \</form\>

 

\</body\>

\</html\>

 //客户端访问服务器时，服务器执行的代码

        //客户端访问服务器时，服务器执行的代码

        public void ProcessRequest\(HttpContext context\)

        {

            context.Response.ContentType = "text/html";

            //在域名里面输入？name = xx可以替换

            string name = context.Request\["name"\];

            string age = context.Request\["age"\];

            string isVip = context.Request\["isVip"\];

            context.Response.Write\("我叫" \+ name \+ "\<br /\>"\);

            context.Response.Write\("我今年" \+ age \+ "岁" \+ "\<br /\>"\);

            context.Response.Write\("是否为VIP" \+ isVip\);

        }

![-2.png](image/-2.png)

![-3.png](image/-3.png)

context .Response. Redirect\("http://www.baidu.com/"\);
