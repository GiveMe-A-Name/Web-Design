# BitHeart样式

## **`animation`**

> 给元素设置动画，有两个步骤，首先定义动画，之后给元素绑定动画。

### 定义动画

```css
/*
@keyframes animation-name{
    from{
        
    }
    to{
        
    }
    
    or

    30%,%50{
        
    }
    70%,%100{
        
    }
}
*/
@keyframes{
    30%,50%{
        height:60px;
        transform: translateY(-30px)
    }
    70%,100%{
        heigth:0px;
        transform: translateY(0px);
    }
}


```

### 绑定动画

```css
/*
.box{
 	animation:name duration time-function delay iteration-count 
}
*/

li:nth-child(1){
	background: red;
	animation:love1 4s 0s infinite;
}
```

**总结**：

> 动画效果要比过渡效果更加灵活，我们可以为他设置每个百分比进度的样式，元素从最开始的样式是0%变为30%,50%,70%,100%,可以形成一个动画动态循环。

****

## **`E:nth-child(n)`**

说明：

> **匹配父元素的第n个子元素E**
>
> 要使该属性生效，E元素必须是某个元素的子元素，E的父元素最高是body，即E可以是body的子元素。既用来说明该元素是作为第几个子元素出现的；

```css
li:nth-child(1){
 	/* style */   
}
```

```html
<ul>
    <li></li> <!--匹配的是这里第一个li，作为第一个子元素出现-->
    <li></li>
    <li></li>
</ul>
```









