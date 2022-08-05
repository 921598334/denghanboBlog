# C#批量插入大量数据到mysql

`A`

![.png](image/.png)

using Microsoft.Win32;

using System;

using System.Collections.Generic;

using System.Configuration;

using System.Data;

using System.Data.SqlClient;

using System.IO;

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

namespace WpfApplication3

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

        private void Button\_Add\_Click\(object sender, RoutedEventArgs e\)

        {

            //创建一张表

              DataTable dataTable = new DataTable\(\);

            //设列

            dataTable.Columns.Add\("startNumber"\);

            dataTable.Columns.Add\("postion"\);

            dataTable.Columns.Add\("telType"\);

            dataTable.Columns.Add\("telPostion"\);

            string filePath;

          

            OpenFileDialog dia = new OpenFileDialog\(\);

            if \(\(bool\)dia.ShowDialog\(\)\)

            {

                filePath = dia.FileName;

                 string\[\] lines = File.ReadLines\(filePath\).ToArray\<string\>\(\);

                foreach \(string line in lines\)

                 {

                        string\[\] s = line.Split\('\\t'\);

                      string startNumber = s\[0\];

                      string postion = s\[1\].Trim\('"'\);

                      string telType = s\[2\].Trim\('"'\);

                      string telPostion = s\[3\].Trim\('"'\);

                    //创建行

                     DataRow dataRow = dataTable.NewRow\(\);

                    dataRow\["startNumber"\] = startNumber;

                     dataRow\["postion"\] = postion;

                     dataRow\["telType"\] = telType;

                     dataRow\["telPostion"\] = telPostion;

                    //把创建的行加入表中

                    dataTable.Rows.Add\(dataRow\);

                 }

            }

            else

            {

                return;

            }

   

              string mySqlString = ConfigurationManager .ConnectionStrings\[ "SqlString" \] .ConnectionString;

           

              try

              {

                  using \(SqlBulkCopy bulkCopy = new SqlBulkCopy\("Data Source=.; Initial Catalog=database1;User ID=root;Password=denghanbo"\)\)

                  {

                      //把数据写在哪个表里面

                      bulkCopy.DestinationTableName = "Tel";

                      //建立数据库字段和DataTable的字段映射,第一个参数是DataTable中的字段，第二个是数据库中的字段

                      bulkCopy.ColumnMappings.Add\("startNumber", "Tel"\);

                      bulkCopy.ColumnMappings.Add\("postion", "Postion"\);

                      bulkCopy.ColumnMappings.Add\("telType", "TelType"\);

                      bulkCopy.ColumnMappings.Add\("telPostion", "PostionTel"\);

                      //把数据写在服务器里面

                      bulkCopy.WriteToServer\(dataTable\);

                  }

              }

              catch \(Exception e3\)

              {

                  MessageBox.Show\(e3.ToString\(\)\);

              }

        }

    }

}
