# 页面状态保存ViewState

`A`

当IsPostBack＝false时表示第一次请求

结论① 对于使用Server.Transfer进行迁移时迁移到的页面其IsPostBack＝false。

结论② Post方式如果Request中没有请求值，即Request.Form =null则IsPostBack＝false；Get方式如果Request中没有请求值，即

Request.QueryString =null则IsPostBack＝false。

结论③ 如果QueryString或Form虽然有请求值，但是QueryString或Form中的Key没有“\_\_VIEWSTATE”和“\_\_EVENTTARGET”和

“\_\_VIEWSTATEFIELDCOUNT”，并且没有键为“null”，值以“\_\_VIEWSTATE”开头并且也没有值为“\_\_EVENTTARGET”的键值对，则IsPostBack

＝false。

结论④ 使用Response.Redirect方式向自画面迁移时，此时IsPostBack＝false。

结论⑤ 发生跨页提交（CrossPagePostBack），当访问PreviousPage属性的时候，对于源Page，IsPostBack=true。

结论⑥ 发生跨页提交（CrossPagePostBack）时目标页面是IsPostBack＝false

结论⑦ 使用Server.Execute迁移到的页面其IsPostBack＝false。

结论⑧ 在Page运行期间其对应的DLL被更新了并且Page的树结构发生过变化，这种情况下请求时IsPostBack＝false。

可以这样来理解这些结论：一般情况判断Request中如果没有请求值则IsPostBack＝false。如果有请求值但是不包括“\_\_VIEWSTATE”等一些特

殊的键或值，则IsPostBack＝false（每次请求后.Net框架会将一些特殊的隐藏域“\_\_VIEWSTATE”等返回给客户端）。还有一些特殊的情形是

上面的规则不能正确判断的需要特殊处理的，这些情形包括Server.Transfer，Response.Redirect，CrossPagePostBack，Server.Execute，发

生了页面元素变化及重新编译。

---

page\_Load在页面被加载（刷新）时调用，第一次进入页面是非post的进入（没有任何name属性），如果用递交表单的方式进入了页面，那么就是post的进入，带有name，此时可以读取name属性

![.png](image/.png)

type=submit 没有指定地址的话是自动刷新网页，Page\_Load是网页每次开始的时候执行

---

全局禁用ViewState

![-1.png](image/-1.png)

局部禁用

![-2.png](image/-2.png)
