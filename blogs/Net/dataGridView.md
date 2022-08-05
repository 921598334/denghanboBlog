# dataGridView

`A`

可以接受一个List对象来自动生成表格

dataGridView1.DataSource = GetList\(\);

也可以自定义栏目，然后然每个栏目和List中的某个对象的某个属性绑定

![.png](image/.png)

得到被选择的对象

var v = dataGridView1.SelectedRows;

            //返回一个集合，里面是所有被选择的行，每行又有很多项

            if \(v.Count \> 0\)

            {

                //这里得到第一项 id

                int id = \(int\)\(v\[0\].Cells\[0\].Value\);   

            }

            else

            {

                MessageBox.Show\("no selected"\);

            }

点击某个单元格就选中一行

![-1.png](image/-1.png)

可以添加鼠标双击事件来完成修改

![-2.png](image/-2.png)

![-3.png](image/-3.png)
