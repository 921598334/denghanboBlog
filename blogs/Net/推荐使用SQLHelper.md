# 推荐使用SQLHelper

`A`

c\#连接中文乱码问题

[https://www.cnblogs.com/zeroone/p/3829923.html](https://www.cnblogs.com/zeroone/p/3829923.html)

---

![.png](image/.png)

名字必须为App

\<?xml version="1.0" encoding="utf\-8" ?\>

\<configuration\>

  \<connectionStrings\>

    \<add name="SqlString" connectionString="Database = database1;Data Source = 127.0.0.1;User Id = root;PassWord = denghanbo;Pooling = false;CharSet = utf8;port = 3306"/\>

  \</connectionStrings\>

\</configuration\>

要引入程序集![-1.png](image/-1.png)

要引入

using System.Configuration;

  string mySqlString = ConfigurationManager .ConnectionStrings\[ "SqlString" \] .ConnectionString;

这个程序要在其他电脑上用时，要在项目目录下吧App.config和exe一起给别人

---

新建类SQLHelper

using MySql.Data.MySqlClient;

using System;

using System.Collections.Generic;

using System.Configuration;

using System.Linq;

using System.Text;

using System.Threading.Tasks;

using System.Windows;

namespace WpfApplication1

{

    public class SQLHelper

    {

        private static string mySqlString = ConfigurationManager.ConnectionStrings\["SqlString"\].ConnectionString;

        /// \<summary\>

        ///  执行数据插入，删除，更新等

        /// \</summary\>

        /// \<param name="sqlString"\>数据库插入，删除，更新语句\</param\>

        /// \<param name="parameters"\>查询参数\</param\>

        /// \<returns\>\</returns\>

        public static int ExecuteNonQuery\(string sqlString,params MySqlParameter\[\] parameters\)

        {

            using \(MySqlConnection mySql = new MySqlConnection\(mySqlString\)\)

            {

                mySql.Open\(\);

                using \(MySqlCommand mySqlCommand = mySql.CreateCommand\(\)\)

                {

                    mySqlCommand.CommandText = sqlString;

                    mySqlCommand.Parameters.AddRange\(parameters\);

                    return mySqlCommand.ExecuteNonQuery\(\);

                }

            }

        }

            /// \<summary\>

        /// 查询，也可以修改返回值为List\<Student\>来返回相关对象

        /// \</summary\>

        /// \<param name="sqlString"\>查询语句\</param\>

        /// \<param name="parameters"\>查询参数\(加了params后是长度可变参数，必须作为最后一个参数\)\</param\>

        /// \<returns\>返回的东西自己根据想要的自己写\</returns\>

        public static int ExecuteQuery\(string sqlString,params MySqlParameter\[\] parameters\)

        {

            int count = 0;

                 using \(MySqlConnection mySql = new MySqlConnection\(mySqlString\)\)

                {

                    mySql.Open\(\);

                    using \(MySqlCommand mySqlCommand = mySql.CreateCommand\(\)\)

                    {

                        mySqlCommand.CommandText = sqlString;

                        mySqlCommand.Parameters.AddRange\(parameters\);

                        MySqlDataReader read = mySqlCommand.ExecuteReader\(\);

                        while \(read.Read\(\)\)

                        {

                            if \(read.HasRows\)

                            {

                                //MessageBox.Show\(read.GetString\("id"\)\);

                            

                            }

                            count\+\+;

                        }

                    }

                }

           return count;

        }

        public object FromDbValue\(object value\)

        {

            if \(value == DBNull.Value\)

            {

                return null;

            }

            else

            {

                return value;

            }

        }

        //从变量给数据库

        public object ToDbValue\(object value\)

        {

            if \(value == null\)

            {

                return DBNull.Value;

            }

            else

            {

                return value;

            }

        }

}

---

其他类中调用

 //登陆

        private void Button\_Click\(object sender, RoutedEventArgs e\)

        {

            try

            {

                //  SQLHelper.ExecuteQuery\("select \* from player where id\>@id",new MySqlParameter\("@id",10\)\);

                int count = SQLHelper.ExecuteQuery\("select \* from people where Name=@UserName and PassWorld=@PassWorld", new MySqlParameter\("@UserName", UserName.Text\), new MySqlParameter\("@PassWorld", PassWorld.Text\)\);

                if \(count == 0\)

                {

                    MessageBox.Show\("没有找到匹配的"\);

                }

                else

                {

                    MessageBox.Show\("登陆成功"\);

                }

            }

            catch \(Exception ex\)

            {

                MessageBox.Show\(ex.ToString\(\)\);

            }

        }

        //注册

        private void Button\_Click\_1\(object sender, RoutedEventArgs e\)

        {

            try

            {

                //  SQLHelper.ExecuteQuery\("select \* from player where id\>@id",new MySqlParameter\("@id",10\)\);

               int count =  SQLHelper.ExecuteQuery\("select \* from people where Name=@UserName", new MySqlParameter\("@UserName", UserName.Text\)\);

               if \(count \> 0\)

               {

                   MessageBox.Show\("用户名已经村在了"\);

               }

               else

               {

                   int i = SQLHelper.ExecuteNonQuery\("insert into people \(Name,PassWorld,ErroTime\) values \(@Name,@PassWorld,@ErroTime\)", new MySqlParameter\("@Name", UserName.Text\), new MySqlParameter\("@PassWorld", PassWorld.Text\), new MySqlParameter\("@ErroTime", "0"\)\);

                   //int i = SQLHelper.ExecuteNonQuery\("insert into people \(Name,PassWorld,ErroTime\) values \('x','x','1'\)"\);

                   MessageBox.Show\(i.ToString\(\) \+ "注册成功"\);

               }

            }

            catch \(Exception ex\)

            {

                MessageBox.Show\(ex.ToString\(\)\);

            }

        }
