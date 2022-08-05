# COOKIES

`A`

![.png](image/.png)

![-1.png](image/-1.png)

---

页面状态保存案例

 public string name;

        public string password;

        protected void Page\_Load\(object sender, EventArgs e\)

        {

            if \(\!IsPostBack\)

            {

                try

                {

                    if \(HttpContext.Current.Request.Cookies\["name"\].Value \!= null\)

                    {

                        name = HttpContext.Current.Request.Cookies\["name"\].Value;

                        password = HttpContext.Current.Request.Cookies\["password"\].Value;

                    }

                }

                catch \(Exception\)

                {

                }

            }

            else

            {

                name = Request\["Text1"\];

                password = Request\["Text2"\];

                //不知道为什么，这种方法行不通！！！

                //Response.Cookies\["name"\].Value = name;

                //Response.Cookies\["password"\].Value = password;

                HttpCookie myCookName = new HttpCookie\("name"\);

                myCookName.Value = name;

                myCookName.Expires = DateTime.Now.AddYears\(1\);

                Response.Cookies.Add\(myCookName\);

                HttpCookie myCookPassword = new HttpCookie\("password"\);

                myCookPassword.Value = password;

                myCookPassword.Expires = DateTime.Now.AddYears\(1\);

                Response.Cookies.Add\(myCookPassword\);

            }

        }

中文可能乱码，可以先进行编码，然后在解码

![-2.png](image/-2.png)

![-3.png](image/-3.png)
