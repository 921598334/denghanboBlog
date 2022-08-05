# 列表ListBox

`A`

  \<ListBox x:Name="lbPersons" Grid.Column="1" HorizontalAlignment="Left" Height="55" Margin="64,21,0,0" VerticalAlignment="Top" Width="118"\>

            \<ListBoxItem\>

                \<ListBoxItem.Content\>

                    \<Button Content="Button"\>\</Button\>

                \</ListBoxItem.Content\>

            \</ListBoxItem\>

            \<ListBoxItem\>

                \<Label Content="Lable"\>\</Label\>

            \</ListBoxItem\>

            \<ListBoxItem Content="ListItem"\>\</ListBoxItem\>

        \</ListBox\>

选择改变时触发的方法

![.png](image/.png)

后台对LIstBox赋值

lbPersons是一个listBox

![-1.png](image/-1.png)

在xml中这样设置的话，可以把Person类的Name属性打出来，

![-2.png](image/-2.png)

选择某一行后，用下面这句话可以得到Age属性（在上一句话中要有![-3.png](image/-3.png)

）

![-4.png](image/-4.png)

得到选中的行的信息

第一个返回选中行对象

第二个返回选中行对象的相关属性（在xml中要有![-5.png](image/-5.png)

设置）

![-6.png](image/-6.png)
