# WebClinet请求网络数据，实现自动操作

`A`

![.png](image/.png)

---

var btns = webBrowser1.Document.GetElementsByTagName\("input "\);

foreach \(HtmlElement btn in btns \)

{

    if \(btn.GetAttribute\("class"\) == "loginbut"\)

    {

btn.InvokeMember\("click"\); 

    }

}

---

 var account = webBrowser1.Document.GetElementById\("account"\);

            var password = webBrowser1.Document.GetElementById\("password"\);

            account.SetAttribute\("value", "q1397257371"\);

            password.SetAttribute\("value", "1denghanbo"\);

            var login = webBrowser1.Document.GetElementById\("login\-form"\).Children\[4\].Children\[2\].Children\[0\];

            login.InvokeMember\("click"\);
