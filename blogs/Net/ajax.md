# ajax

`A`

 \<asp:ScriptManager ID="ScriptManager1" runat="server"\>\</asp:ScriptManager\>

    \<asp:UpdatePanel ID="UpdatePanel1" runat="server"\>

        \<ContentTemplate\>

写需要异步处理的代码

        \</ContentTemplate\>

    \</asp:UpdatePanel\>

但是实际上，还是把整个页面发送到了后台，伪异步
