# MD5加密

`A`

引用

using System.Security.Cryptography;

using System.Text;

 public class MD5Helper

    {

        public static string  GetMD5\(string s\)

        {

            byte\[\] result = Encoding.Default.GetBytes\(s\);    //tbPass为输入密码的文本框

            MD5 md5 = new MD5CryptoServiceProvider\(\);

            byte\[\] output = md5.ComputeHash\(result\);

            return BitConverter.ToString\(output\).Replace\("\-", ""\);  //tbMd5pass为输出加密文本的文本框

        }

    }
