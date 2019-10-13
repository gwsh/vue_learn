# vue
## 一、尝鲜

* 1.vue.js实现HelloWorld 2s后变成Bye World

``` javascript
<!--
 * @Description: In User Settings Edit
 * @Author: SHUNDONG
 * @Date: 2019-10-12 10:30:40
 * @LastEditTime: 2019-10-12 10:40:58
 * @LastEditors: Please set LastEditors
 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HelloWorld</title>
    <script src="js/vue.js"></script>
</head>

<body>
    <div id="app">{{content}}</div>
    <script>
    		//传统写法
        // let dom = document.getElementById("app");
        // dom.innerHTML = 'Hello World';
        // setTimeout(function(){
        //     dom.innerHTML = 'bye world';
        // },2000);
        
        //vue.js 写法
        let app = new Vue({
            el:'#app',
            data:{
                content: 'Hello World'
            }
        });
        setTimeout(function(){
            app.$data.content = 'bye world';
        },2000);
    </script>
</body>

</html>
```

* vue.js实现TodoList

``` 

```

