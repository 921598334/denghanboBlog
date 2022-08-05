# c#中往mysql里批量插入上万条数据 - 编程源于生活 - 博客频道 - CSDN.NET

`A`

# [c\#中往mysql里批量插入上万条数据](http://blog.csdn.net/wwwww112233/article/details/8562630)

.

分类： [数据库](http://blog.csdn.net/wwwww112233/article/category/1207915) 2013\-02\-01 12:58 3845人阅读3845人阅读 [评论](http://blog.csdn.net/wwwww112233/article/details/8562630#comments)\(2\)[评论](http://blog.csdn.net/wwwww112233/article/details/8562630#comments)\(2\) [收藏]( "收藏") [举报](http://blog.csdn.net/wwwww112233/article/details/8562630#report "举报")

前面文章说采集了很多数据，要存入mysql数据库。之所以选择mysql数据库，原因只不过是mysql很方便安装应用范围也广，又小，也挺好用。呵呵

我仍然在csdn询问，http://bbs.csdn.net/topics/390357952?page=1\#post\-393577221，综合采纳了各位大侠的意见，反正最后我在本机上插入1\-\-5万条数据的时候，好像没感觉到占用什么时间。

我使用了mysql的批量数据格式，

比如

INSERT INTO TABLES \(LABLE1,LABLE2,LABLE3,...\) 

VALUES\(NUM11,NUM12,NUM13,...\), 

\(NUM21,NUM22,NUM23,...\),

....

\(NUMn1,NUMn2,NUMn3,..\);

我在前文中叙述的，每个账户的每个采集点就会生成几百个数据，这几百个数据我组合成上述一条语句，20多个账户多个采集点我一共生成上述语句300\-\-800多条，每条的数据项300\-500个，所以每次插入的数据共计10000\-\-50000条。

我把每条insert语句都保存在一个SQLStringList之中，又 在网上找点资料，采用了事务处理方式，本来我的事务方式是所有sql语句放在一个事务里，但有热心朋友告知“每当执行1000条DBCommand就提交\(Commit\)事务，然后再次开启事务，这样比较好。把过多的命令放在一个事务中，一旦超过物理内存分配限制，你的程序会变得很慢很慢。”

所以我后来修改了一下，每500条语句重启一次事务。c\#代码如下：

实现了IDisposible接口的对象可以用using，这样的话conn对象用完后可以自动回收

![.png](image/.png)

**\[csharp\]** [view plain](http://blog.csdn.net/wwwww112233/article/details/8562630# "view plain")[copy](http://blog.csdn.net/wwwww112233/article/details/8562630# "copy")

1. /// \<summary\>
2. /// 执行多条SQL语句，实现数据库事务。
3. /// \</summary\>mysql数据库
4. /// \<param name="SQLStringList"\>多条SQL语句\</param\>
5. publicstaticvoid ExecuteSqlTran\(List\<string\> SQLStringList\)  
6.         {  
7. using \(MySqlConnection conn = new MySqlConnection\(MySqlHelper.ConnStr\)\)  
8.             {  
9.                 conn.Open\(\);  
10.                 MySqlCommand cmd = new MySqlCommand\(\);  
11.                 cmd.Connection = conn;  
12.                 MySqlTransaction tx = conn.BeginTransaction\(\);  
13.                 cmd.Transaction = tx;  
14. try
15.                 {  
16. for \(int n = 0; n \< SQLStringList.Count; n\+\+\)  
17.                     {  
18. string strsql = SQLStringList\[n\].ToString\(\);  
19. if \(strsql.Trim\(\).Length \> 1\)  
20.                         {  
21.                             cmd.CommandText = strsql;  
22.                             cmd.ExecuteNonQuery\(\);  
23.                         }  
24. //后来加上的
25. if \(n \> 0 && \(n % 500 == 0 || n == SQLStringList.Count \- 1\)\)  
26.                         {  
27.                             tx.Commit\(\);  
28.                             tx = conn.BeginTransaction\(\);  
29.                         }  
30.                     }  
31. //tx.Commit\(\);//原来一次性提交
32.                 }  
33. catch \(System.Data.SqlClient.SqlException E\)  
34.                 {  
35.                     tx.Rollback\(\);  
36. thrownew Exception\(E.Message\);  
37.                 }  
38.             }  
39.         }  
