# 导出数据到excel

`A`

或者参考NPOI

典型错误

[https://www.crifan.com/csharp\_worksheet\_an\_unhandled\_exception\_of\_type\_system\_runtime\_interopservices\_comexception\_occurred\_in\_mscorlib\_dll/](https://www.crifan.com/csharp_worksheet_an_unhandled_exception_of_type_system_runtime_interopservices_comexception_occurred_in_mscorlib_dll/)

原参考资料

[http://www.cnblogs.com/fengrengui/articles/397899.html](http://www.cnblogs.com/fengrengui/articles/397899.html)

添加一个dll

![.png](image/.png)

![-1.png](image/-1.png)

 public static void ExportExcel\(List\<Student\> dtsSelect\)

        {

            List\<Student\> ds = dtsSelect;//数据源

            if \(ds == null\) return;

            string saveFileName = "";

            bool fileSaved = false;

            SaveFileDialog saveDialog = new SaveFileDialog\(\);

            saveDialog.DefaultExt = "xls";

            saveDialog.Filter = "Excel文件|\*.xls";

            saveDialog.FileName = "Sheet1";

            saveDialog.ShowDialog\(\);

            saveFileName = saveDialog.FileName;

            if \(saveFileName.IndexOf\(":"\) \< 0\) return; //被点了取消

            Microsoft.Office.Interop.Excel.Application xlApp = new Microsoft.Office.Interop.Excel.Application\(\);

            if \(xlApp == null\)

            {

                MessageBox.Show\("无法创建Excel对象，可能您的机子未安装Excel"\);

                return;

            }

            Microsoft.Office.Interop.Excel.Workbooks workbooks = xlApp.Workbooks;

            Microsoft.Office.Interop.Excel.Workbook workbook = workbooks.Add\(Microsoft.Office.Interop.Excel.XlWBATemplate.xlWBATWorksheet\);

            Microsoft.Office.Interop.Excel.Worksheet worksheet = \(Microsoft.Office.Interop.Excel.Worksheet\)workbook.Worksheets\[1\];//取得sheet1

                                                                                //写入字段

          

            //写入数值

            for \(int r = 1; r \<=ds.Count; r\+\+\)

            {

             

                worksheet.Cells\[r, 1\] = ds\[r\-1\].ID.ToString\(\);

                worksheet.Cells\[r, 2\] = ds\[r\-1\].Name.ToString\(\);

                worksheet.Cells\[r, 3\] = ds\[r\-1\].Age.ToString\(\);

                System.Windows.Forms.Application.DoEvents\(\);

            }

            worksheet.Columns.EntireColumn.AutoFit\(\);//列宽自适应。

          

            if \(saveFileName \!= ""\)

            {

                try

                {

                    workbook.Saved = true;

                    workbook.SaveCopyAs\(saveFileName\);

                    fileSaved = true;

                }

                catch \(Exception ex\)

                {

                    fileSaved = false;

                    MessageBox.Show\("导出文件时出错,文件可能正被打开！\\n" \+ ex.Message\);

                }

            }

            else

            {

                fileSaved = false;

            }

            xlApp.Quit\(\);

            GC.Collect\(\);//强行销毁

            if \(fileSaved && System.IO.File.Exists\(saveFileName\)\) System.Diagnostics.Process.Start\(saveFileName\); //打开EXCEL

        }

    }
