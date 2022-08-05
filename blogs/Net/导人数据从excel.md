# 导人数据从excel

`A`

DataTable GetDataFromExcelByCom\(bool hasTitle = false\)

{

    OpenFileDialog openFile = new OpenFileDialog\(\);

    openFile.Filter = "Excel\(\*.xlsx\)|\*.xlsx|Excel\(\*.xls\)|\*.xls";

    openFile.InitialDirectory = Environment.GetFolderPath\(Environment.SpecialFolder.Desktop\);

    openFile.Multiselect = false;

    if \(openFile.ShowDialog\(\) == DialogResult.Cancel\) return null;

    var excelFilePath = openFile.FileName;

    Excel.Application app = new Excel.Application\(\);

    Excel.Sheets sheets;

    object oMissiong = System.Reflection.Missing.Value;

    Excel.Workbook workbook = null;

    DataTable dt = new DataTable\(\);

    try

    {

        if \(app == null\) return null;

        workbook = app.Workbooks.Open\(excelFilePath, oMissiong, oMissiong, oMissiong, oMissiong, oMissiong,

            oMissiong, oMissiong, oMissiong, oMissiong, oMissiong, oMissiong, oMissiong, oMissiong, oMissiong\);

        sheets = workbook.Worksheets;

        //将数据读入到DataTable中

        Excel.Worksheet worksheet = \(Excel.Worksheet\)sheets.get\_Item\(1\);//读取第一张表 

        if \(worksheet == null\) return null;

        int iRowCount = worksheet.UsedRange.Rows.Count;

        int iColCount = worksheet.UsedRange.Columns.Count;

        //生成列头

        for \(int i = 0; i \< iColCount; i\+\+\)

        {

            var name = "column" \+ i;

            if \(hasTitle\)

            {

                var txt = \(\(Excel.Range\)worksheet.Cells\[1, i \+ 1\]\).Text.ToString\(\);

                if \(\!string.IsNullOrWhiteSpace\(txt\)\) name = txt;

            }

            while \(dt.Columns.Contains\(name\)\) name = name \+ "\_1";//重复行名称会报错。

            dt.Columns.Add\(new DataColumn\(name, typeof\(string\)\)\);

        }

        //生成行数据

        Excel.Range range;

        int rowIdx = hasTitle ? 2 : 1;

        for \(int iRow = rowIdx; iRow \<= iRowCount; iRow\+\+\)

        {

            DataRow dr = dt.NewRow\(\);

            for \(int iCol = 1; iCol \<= iColCount; iCol\+\+\)

            {

                range = \(Excel.Range\)worksheet.Cells\[iRow, iCol\];

                dr\[iCol \- 1\] = \(range.Value2 == null\) ? "" : range.Text.ToString\(\);

            }

            dt.Rows.Add\(dr\);

        }

        return dt;

    }

    catch { return null; }

    finally

    {

        workbook.Close\(false, oMissiong, oMissiong\);

        System.Runtime.InteropServices.Marshal.ReleaseComObject\(workbook\);

        workbook = null;

        app.Workbooks.Close\(\);

        app.Quit\(\);

        System.Runtime.InteropServices.Marshal.ReleaseComObject\(app\);

        app = null;

    }

}

可以用这个方法来测试得到的数据

 System.Data.DataTable d =  DataChangeExcel.ImportExcel\(true\);

            DataRow dr0 = d.Rows\[0\];

            DataRow dr1 = d.Rows\[1\];

            DataRow dr2 = d.Rows\[2\];
