# 数据绑定和滑动条Slider

`A`

xml控件的数据绑定
![.png](image/.png)

C\#代码里面的数据绑定

新建一个类，注意要用到属性，字段不行

using System.ComponentModel;

 //要继承INotifyPropertyChanged，这样后台改变了，前台也会跟着改变，否则后台改变，前台不会变

    class Class1 : INotifyPropertyChanged

    {

        private string name;

        private string age;

        public string Name

        {

            get

            {

                return name;

            }

            set

            {

                name = value;

                if \(PropertyChanged \!= null\)

                {

                    PropertyChanged\(this, new PropertyChangedEventArgs\("Name"\)\);

                }

            }

        }

        public string Age

        {

            get

            {

                return age;

            }

            set

            {

                age = value;

                if \(PropertyChanged \!= null\)

                {

                    PropertyChanged\(this, new PropertyChangedEventArgs\("Age"\)\);

                }

            }

        }

        public event PropertyChangedEventHandler PropertyChanged;

    }

        private void Window\_Loaded\(object sender, RoutedEventArgs e\)

        {

            c = new Class1\(\);

            c.Age = "18";

            c.Name = "sdafdsa";

              //数据上下文

            t1.DataContext = c;

            t2.DataContext = c;

        }

选择要绑定的属性

 \<TextBox Text="{Binding Age }" x:Name="t1" HorizontalAlignment="Left" Height="23" Margin="60,112,0,0" TextWrapping="Wrap" VerticalAlignment="Top" Width="120" ToolTip="提示"/\>

        \<TextBox Text="{Binding Name}" x:Name="t2" Grid.Column="1" HorizontalAlignment="Left" Height="23" Margin="161,112,0,0" TextWrapping="Wrap" VerticalAlignment="Top" Width="120"/\>

也可以让xml中![-1.png](image/-1.png)

这样，grid里面所有控件的数据上下文都是c

   private void Window\_Loaded\(object sender, RoutedEventArgs e\)

        {

            c = new Class1\(\);

            c.Age = "18";

            c.Name = "sdafdsa";

     

         //子控件还有后代控件都用c

          gr.DataContext = c;

          //这样会重构

           t1.DataContext = c1;
        }
