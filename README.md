# vue
## 一、尝鲜

* 1.vue.js实现HelloWorld 2s后变成Bye World

``` javascript
<!--
 * @Description: In User Settings Edit
 * @Author: SHUNDONG
 * @Date: 2019-10-12 10:30:40
 * @LastEditTime: 2019-10-14 10:57:02
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

``` html
<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 10:45:10
 * @LastEditTime: 2019-10-12 11:07:03
 * @LastEditors: Please set LastEditors
 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TodoList</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        #app {
            width: 200px;
            margin: 100px auto;
        }
        #app li {
            list-style: none;
        }
    </style>
</head>

<body>
    <div id="app">
        <input type="text" v-model="inputValue" />
        <button v-on:click="handleBtnClick">提交</button>
        <ul>
            <li v-for="item in list">{{item}}</li>
        </ul>
    </div>
    <script src="js/vue.js"></script>
    <script>
        var app = new Vue({
            el: '#app',
            data: {
                list: [],
                inputValue: ''
            },
            methods: {
                handleBtnClick: function () {
                    if (this.inputValue == undefined || this.inputValue == '') {
                        alert("请输入值");
                        return false;
                    } else {
                        this.list.push(this.inputValue);
                        this.inputValue = '';
                    }
                }
            },
        });

    </script>
</body>

</html>
```

* 全局组件的定义(同样实现 一个 todolist)

```html
// 全局组件
        Vue.component("TodoItem",{
            template:"<li >todo item</li>"
        })
        
        
例子:

<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 10:45:10
 * @LastEditTime: 2019-10-14 10:43:18
 * @LastEditors: Please set LastEditors
 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TodoList</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        #app {
            width: 200px;
            margin: 100px auto;
        }
        #app li {
            list-style: none;
        }
    </style>
</head>

<body>
    <div id="app">
        <input type="text" v-model="inputValue" />
        <button v-on:click="handleBtnClick">提交</button>
        <ul>
            <!-- <li v-for="item in list">{{item}}</li> -->
            <todo-item v-for="item in list"></todo-item>
        </ul>
    </div>
    <script src="js/vue.js"></script>
    <script>
        // 全局组件
        Vue.component("TodoItem",{
            template:"<li >todo item</li>"
        })
        
        var app = new Vue({
            el: '#app',
            data: {
                list: [],
                inputValue: ''
            },
            methods: {
                handleBtnClick: function () {
                    if (this.inputValue == undefined || this.inputValue == '') {
                        alert("请输入值");
                        return false;
                    } else {
                        this.list.push(this.inputValue);
                        this.inputValue = '';
                    }
                }
            },
        });

    </script>
</body>

</html>
```

* 父组件传值给子组件

上面代码确实是通过组件的方式可以实现 "<li>"标签的 组件化开发，但是我们的 组件却拿不到穿过来的值（这个值在实际开发中一般是后台传过来的），那么我们要如何传值给这个 component  子组件呢？话不多说直接上代码！

```html
<!-- 在我们父组件 引用子组件的时候 我们通过 v-bind: 将item 赋值给 content变量 -->
<!-- 写法如下： -->
<todo-item v-bind:content="item" v-for="item in list"></todo-item>
<!-- 而在我们子组件的component 如何接收这个 content 变量呢？？？ -->
<!-- 写法如下： -->
Vue.component("TodoItem",{
            props: ['content'],
            template:"<li >{{content}}</li>"
        })
<!-- 不难看出 我们再component里面添加了 一个属性  props，该属性是一个数组,我们通过这样的方式拿到content变量 -->

<!-- 案例代码 -->
<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 10:45:10
 * @LastEditTime: 2019-10-14 10:48:14
 * @LastEditors: Please set LastEditors
 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TodoList</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        #app {
            width: 200px;
            margin: 100px auto;
        }
        #app li {
            list-style: none;
        }
    </style>
</head>

<body>
    <div id="app">
        <input type="text" v-model="inputValue" />
        <button v-on:click="handleBtnClick">提交</button>
        <ul>
            <!-- <li v-for="item in list">{{item}}</li> -->
            <todo-item v-bind:content="item" v-for="item in list"></todo-item>
        </ul>
    </div>
    <script src="js/vue.js"></script>
    <script>
        // 全局组件
        Vue.component("TodoItem",{
            props: ['content'],
            template:"<li >{{content}}</li>"
        })
        
        var app = new Vue({
            el: '#app',
            data: {
                list: [],
                inputValue: ''
            },
            methods: {
                handleBtnClick: function () {
                    if (this.inputValue == undefined || this.inputValue == '') {
                        alert("请输入值");
                        return false;
                    } else {
                        this.list.push(this.inputValue);
                        this.inputValue = '';
                    }
                }
            },
        });

    </script>
</body>
</html>

```

* 局部组件的使用

```html
<!-- 我们刚刚尝试了 全局组件的 ，那么除了全局组件 是否还存在局部组件呢，这是显然的。-->

使用方法：

var TodoItem = {
	props:['content'],
	template:"<li >{{content}}</li>"
}
<!-- 上面的写法就是定义了一个局部组件，可以看出和我们的全局组件的属性是一样的 那么我们这样就可以使用了嘛？-->
<!-- 显然这样是不能使用的! 
		 此时我要使用局部组件，必须在Vue实例里面进行注册！
-->
注册方法：
        var app = new Vue({
            el: '#app',
            components: {
                TodoItem: TodoItem
            },
            data: {
                list: [],
                inputValue: ''
            },
            methods: {
                handleBtnClick: function () {
                    if (this.inputValue == undefined || this.inputValue == '') {
                        alert("请输入值");
                        return false;
                    } else {
                        this.list.push(this.inputValue);
                        this.inputValue = '';
                    }
                }
            },
        });
<!-- 上面代码 发现和我们前面的有何 不同？
		 没错 就是多了一个属性  components  后面可以采用对象的方式进行 注册
		 components: {
                TodoItem: TodoItem
     }
-->

```

