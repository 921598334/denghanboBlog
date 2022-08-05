# VS连接MYSQL

`A`

![.png](image/.png)

在浏览中找到![-1.png](image/-1.png)

（这个文件最好放在项目的lib文件下）

（用了三层架构后可以建立一个Dal类库，然后在这个类库中添加引用）

using System;

using System.Collections.Generic;

using System.Linq;

using System.Text;

using System.Threading.Tasks;

using MySql.Data.MySqlClient;

namespace ConsoleApplication1

{

    class Program

    {

        static void Main\(string\[\] args\)

        {

            MySqlConnection mySql = null;

            MySqlDataReader reader = null;

            try

            {

                string mySqlString = "Database = database1;Data Source = 127.0.0.1;User Id = root;PassWord = denghanbo;Pooling = false;CharSet = utf8;port = 3306";

                // 建立一个链接

                mySql = new MySqlConnection\(mySqlString\);

                // 命令

                string mySqlSelectAll = "select \* from player";

//  string mySqlSelectAll = "select \* from player where name=" \+ "'"\+ t .Text \+ "'";

                string mySqlInsert = "insert into player \(name,id,sex,age\) values \('test',83,' 男',12\)";

                // 打开数据库

                mySql.Open\(\);

                // 在那个连接下，使用那个命令

                MySqlCommand mySqlCommand = new MySqlCommand\(mySqlInsert, mySql\);

                mySqlCommand.ExecuteNonQuery\(\);

                 mySqlCommand = new MySqlCommand\(mySqlSelectAll, mySql\);

                reader = mySqlCommand.ExecuteReader\(\);

                // 每次读一个字符，查询结果是放在数据库中的

                while \(reader.Read\(\)\)

                {

                    // 判断是否都全一行

                    if \(reader.HasRows\)

                    {

                        Console.WriteLine\("name:" \+ reader.GetString\("name"\)\);

                    }

                }

            }

            catch \(Exception e\)

            {

                Console.WriteLine\(e\);

            }

            finally

            {

                reader.Close\(\);

   //释放内存

                reader .Dispose\(\);

                mySql.Close\(\);

   //释放内存

                mySql .Dispose\(\);

                Console.Read\(\);

            }

        }

    }

}

另外一种更好的方法

![-2.png](image/-2.png)

     用@实现安全的登录，@只能用在语句的后半部分

![-3.png](image/-3.png)

using System;

using System.Collections.Generic;

using System.Linq;

using System.Text;

using System.Threading.Tasks;

using System.Windows;

using System.Windows.Controls;

using System.Windows.Data;

using System.Windows.Documents;

using System.Windows.Input;

using System.Windows.Media;

using System.Windows.Media.Imaging;

using System.Windows.Navigation;

using System.Windows.Shapes;

using MySql.Data.MySqlClient;

namespace WpfApplication1

{

    /// \<summary\>

    /// MainWindow.xaml 的交互逻辑

    /// \</summary\>

    public partial class MainWindow : Window

    {

     

        public MainWindow\(\)

        {

            InitializeComponent\(\);

        }

        private void b1\_Click\(object sender, RoutedEventArgs e\)

        {

            MySqlConnection mySql = null;

            MySqlDataReader reader = null;

            try

            {

                string mySqlString = "Database = database1;Data Source = 127.0.0.1;User Id = root;PassWord = denghanbo;Pooling = false;CharSet = utf8;port = 3306";

                // 建立一个链接

                mySql = new MySqlConnection\(mySqlString\);

                // 命令

                string mySqlSelectAll = "select \* from player where age=@age && name=@Name";

              

                // 打开数据库

                mySql.Open\(\);

                MySqlCommand mySqlCommand = mySql.CreateCommand\(\);

                mySqlCommand.CommandText = mySqlSelectAll;

                mySqlCommand.Parameters.Add\(new MySqlParameter\("@Name", t.Text\)\);

                mySqlCommand.Parameters.Add\(new MySqlParameter\("@age", t2.Text\)\);

[C:\\Users\\921598334\\Documents\\Visual Studio 2015\\Projects\\SerialPort\\SerialPort\\Form1.cs](file:///C:/Users/921598334/Documents/Visual%20Studio%202015/Projects/SerialPort/SerialPort/Form1.cs)

                reader = mySqlCommand.ExecuteReader\(\);

                // 每次读一个字符

                while \(reader.Read\(\)\)

                {

                    // 判断是否都全一行

                    if \(reader.HasRows\)

                    {

                        MessageBox.Show\(reader.GetString\("name"\)\);

                       

                       // Console.WriteLine\("name:" \+ reader.GetString\("name"\)\);

                    }

                }

            }

            catch \(Exception ex\)

            {

                MessageBox.Show\(ex.ToString\(\)\);

            }

            finally

            {

                if \(reader \!= null\)

                {

                    reader.Close\(\);

                    //释放内存

                    reader.Dispose\(\);

                }

                if \(mySql \!= null\)

                {

                    //释放内存

                    mySql.Close\(\);

                    //释放内存

                    mySql.Dispose\(\);

                }

             

             

            }

        }

     

        private void Window\_Loaded\(object sender, RoutedEventArgs e\)

        {

          

        }

    }

}

  
