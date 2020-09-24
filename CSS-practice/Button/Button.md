# Button

## *`background`*

```css
button{
	border: none;
	outline:none;
	width:400px;
	height:100px;
	font-size:28px;
	font-weight: bolder;
	border-radius:50px;
	cursor:pointer;
	background:linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
	background-size:300%;
	color:#fff;
	text-transform:uppercase;
	text-align:center;
	letter-spacing:4px;
}
```

- `background-image: linear-gradient()` : 代表创建一个渐变色的图片，并且设置到了元素背景中去
- `background-size` : 通过放大背景，来达到美化的目的，渐变色的过渡更加的缓和。并且为后面

## `filter：滤镜效果`

> <filter>：
>
> 要使用的滤镜效果。多个滤镜之间用空格隔开。

```css
.box{
    filter: blur(px) | brightness(%) | contrast(%)
    /*
    	blur : 高斯模糊滤镜；
        brightness : 设置图片亮度；
		contrast: 调整图像的对比度。
    */
}
```

## `opacity：设置元素透明度`

```css
.box{
   opacity:0.5;
    /*
    	在[0,1]直接浮动，0为全透明，1为全透明；
    */
}
```

## 奇招意淫

> 将元素的偏移参照点，设置为中心点；

```css
.box{
	left:50%;
	top:50%;
	transform: translate(-50%,-50%);
}
```



> 动态移动背景

```css
@keyframes sum{
    100%{
     	background-postion:-400% 0;   
    }
}
```







