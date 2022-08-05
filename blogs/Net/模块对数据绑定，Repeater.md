# 模块对数据绑定，Repeater

`A`

添加模版![.png](image/.png)

添加带有模版的webForm

![-1.png](image/-1.png)

然后添加DataSet类的控件就可以绑定数据了

---

\<%@ Page Language="C\#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication1.WebForm1" %\>

\<\!DOCTYPE html\>

\<html xmlns="http://www.w3.org/1999/xhtml"\>

\<head runat="server"\>

    \<title\>\</title\>

\</head\>

\<body\>

    \<form id="form1" runat="server"\>

        \<div\>

            \<table\>

                \<asp:Repeater ID="Repeater1" runat="server" DataSourceID="ObjectDataSource1"\>

                    \<ItemTemplate\>

                        \<tr\>

                            \<td\>

                                \<%\# Eval\("ProName"\) %\>

                            \</td\>

                            \<td\>

                                \<%\# Eval\("Spell"\) %\>

                            \</td\>

                            \<td\>

                                \<%\# Eval\("Id"\) %\>

                            \</td\>

                        \</tr\>

                    \</ItemTemplate\>

                \</asp:Repeater\>

            \</table\>

            \<asp:ObjectDataSource ID="ObjectDataSource1" runat="server" DataObjectTypeName="Model.Province" DeleteMethod="DeleteProvinceById" InsertMethod="InsertData" SelectMethod="GetAllProvince" TypeName="DAL.ProvinceDAL" UpdateMethod="UpdataData"\>

                \<DeleteParameters\>

                    \<asp:Parameter Name="id" Type="Int32" /\>

                \</DeleteParameters\>

            \</asp:ObjectDataSource\>

        \</div\>

    \</form\>

\</body\>

\</html\>

---

![-2.png](image/-2.png)
