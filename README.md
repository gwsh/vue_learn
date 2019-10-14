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
		<!-- important  要先引入 vue.js ==> https://cn.vuejs.org/js/vue.js-->
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
案例代码（全）：
<!--
 * @Description: In User Settings Edit
 * @Author: shundong
 * @Date: 2019-10-12 10:45:10
 * @LastEditTime: 2019-10-14 11:12:10
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
        // Vue.component("TodoItem",{
        //     props: ['content'],
        //     template:"<li >{{content}}</li>"
        // })
        //局部组件
        var TodoItem = {
            props: ['content'],
            template: "<li>{{content}}</li>"
        }
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

    </script>
</body>

</html>

```

* 子组件向父组件传值

<font color="red">显然，我们已经学会如何使用两种组件，已经父组件向子组件传值，那么，我们如实现子组件向父组件传值呢？</font>

案例：我们前面实现了input框的内容，click点击之后显示在 li 列表中，那么现在我们的新需求是：

​	我们点击 li 组件的时候，删除指定的li，显然这时候我们要拿到 数组的 一个index索引，且必然需要向父组件传值才能实现？  仔细想一下是不是这样的呀！

实现方法：

```html
首先我们需要给我们的组件绑定一个click事件(注:此时我用局部组件作为案例，全局写法基本一致)：

组件绑定的写法：
//局部组件
        var TodoItem = {
            props: ['content'],
            template: "<li @click='handleItemClike'>{{content}}</li>",
            methods: {
                handleItemClike: function(){
                    alert("clike ok ？");
                }
            }
        }
细心的同学会发现，我的绑定没有使用 v-on:click 实现点击的绑定 而是@click  其实两者是一样的后者是缩写
ok，我们回到绑定，绑定很简单，
1.就是在li 标签写上 绑定属性和方法，
2.然后在组件的配置里面 添加一个 methods的 属性，然后在里面写我们的function 即可

子组件向父组件传值：
	解析：此时我们再刚才绑定的function 里面向外面触发事件的方式，然后父组件监听这个事件。
	子组件写法（触发事件）：
					var TodoItem = {
            props: ['content'],
            template: "<li @click='handleItemClike'>{{content}}</li>",
            methods: {
                handleItemClike: function(){
										//子组件向外触发一个事件
                    this.$emit("delete")
                }
            }
        }
	父组件写法（接收事件）：
					解析:下面代码不难看出，我们监听了子组件的 delete方法，并且触发handleItemDelete方法，此时我们还	 需要在父组件的methods里面添加这个方法(Vue实例里面)
					<todo-item v-bind:content="item" 
                     v-bind:index="index"
                     v-for="(item,index) in list"
                     @delete="handleItemDelete">
          </todo-item>
					<!--注：此处@delete和@click一样是  v-on:* 缩写
					我们还多了v-bind:index="index" 传值个子组件，
					同时我们在 遍历的时候 多些了一个 遍历 那就是 index(拿到索引传给子组件)
					-->
	父组件handleItemDelete方法：
					此时的Vue实例因该是如下(接受index，然后删除改索引的list数组中的value值)
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
                },
								// delete时间在这里^_^
                handleItemDelete: function(index) {
										//删除从改索引开始的 1个元素
                    this.list.splice(index,1);
                }
            },
        });

					

```

* 粗谈 简写

```javascript
v-on:*   ->     @:*
v-bind:* ->      :*
```

