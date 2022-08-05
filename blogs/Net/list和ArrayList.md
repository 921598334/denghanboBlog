# list和ArrayList

`A`

using System.Collections.Generic;

private List\<GameObject\> cardsList = new List\<GameObject\>\(\);

添加

cardsList.Add \(cardClone\);

添加多个数据在末尾

byte\[\] buffer = new byte\[1024\];

cardsList.AddRange\(buffer\)

转化为数组

cardsList.ToArray\(\);

数目

cardsList.Count

取

cardsList \[i\]

    List\<string \> l = new List\<string \>\(\);

//清除

            l .Clear\(\);

//移除

            l .Remove\("ad" \);

---

1. ArrayList list1 = **new** ArrayList\(\);  
2. //新增数据
3. list1.Add\("cde"\);  
4. list1.Add\(5678\);  
5. //修改数据
6. list\[2\] = 34;  
7. //移除数据
8. list.RemoveAt\(0\);  
9. //插入数据
10. list.Insert\(0, "qwe"\);  

![.png](image/.png)
