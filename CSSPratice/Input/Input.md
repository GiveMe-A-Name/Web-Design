# Input样式

## **`outline：轮廓边框`**

当input输入框进行聚焦的时候，会有一个outline样式的生成

若要去掉聚焦发生的边框颜色 ： `outline:none`

or 改变input触发后改变边框颜色 ： `outline-color:red`

**注：`outline`与`border`的区别是，`outline`并不占据布局空间，而`border`会占据**
****

## **`box-sizing`**

- **content-box：padding和border不被包含在定义的width和height之内。**
- **border-box：padding和border被包含在定义的width和height之内**

> 在默认的情况下`body`元素是拥有8px的margin



****

## **`display:flex`**

> Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
>
> 我们可以给任意容器设置flex布局，行内元素也可以使用flex布局
>
> ```css
> .box{
>  display: flex;
> }
> .line_box{
>  display: inline-flex;
> }
> ```
>
> **注：设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。**



**基本概念**

> 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。
>
> 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）
>
> 主轴开始的位置叫做`main start` 结束位置`main end` 。
>
> 交叉轴开始地方叫`cross start` 结束位置`cross end`
>
> 项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

 **容器属性： 定义在容器上**

- `flex-direction` 决定主轴方向

  ```css
  .box {
    flex-direction: row | row-reverse | column | column-reverse;
  }
  ```

- `felx-wrap` 如果一条轴线排不下，如何换行

  ```c++
  .box{
    flex-wrap: nowrap | wrap | wrap-reverse;
  }
  ```

- `flex-flow` `flex-direction`属性和`flex-wrap`属性的简写形式

  ```css
  .box {
    flex-flow: <flex-direction> || <flex-wrap>;
  }
  ```

- `justify-content` 定义项目水平方向上的对齐方式

  ```css
  .box {
    justify-content: flex-start | flex-end | center | space-between | space-around;
  }
  ```

- `align-items` :  定义项目在竖直方向上的对齐方式

  ```css
  .box {
    align-items: flex-start | flex-end | center | baseline | stretch;
  }
  ```

- `align-content` 定义了多根轴线的对齐方式

  ```css
  .box {
    align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  }
  ```

**项目属性： 定义在项目上**

- `order` 定义项目的排列顺序。数值越小，排列越靠前，默认为0

  ```css
  .item {
    order: <integer>;
  }
  ```

- `flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

  ```css
  .item {
    flex-grow: <number>; /* default 0 */
  }
  ```

- `flex-shrink`属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。(~~补充~~)

  ```css
  .item {
    flex-shrink: <number>; /* default 1 */
  }
  ```

   如果所有项目的`flex-shrink`属性都为1，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为0，其他项目都为1，则空间不足时，前者不缩小。既当空间不足的时候才会进行缩小

- **~~补充~~**

****

## **`min-height`**

> 设置最小行高，既会进行自适应
>
> 而有些时候我们是不知道中间内容区域有多高的，但又想让该区域的高度恰好能放下中间内容区域，这个时候我们可以使用min-height,既这个位置越大越好，使得能够装下所有内容。
>
> **给这个`block`or `inline-block`设置一个最小高度，如果内容超过这个高度，会进行扩容；

```css
.box{
    min-height: 100vh;
}
```

****

## **`:focus 选择器`**

> **设置对象在成为输入焦点（该对象的onfocus事件发生）时的样式。**

```css
input:focus{ /* 当该input获得焦点，会应用该样式*/
    
}
```

****

**兄弟选择器**

> **E~F** { sRules } ,**选择E元素后面的所有兄弟元素F，元素E与F必须同属一个父级。**

```css
input:focus ~ label{ /* 当该input获得焦点，应用给它的后面的兄弟元素 */
    
}
```

****

## **`E: before / after`**

> **设置在对象前后发生的内容，用于在css渲染中向元素逻辑上的头部或尾部添加内容。这些内容不会在DOM中出现，仅仅是在CSS层渲染加入，所以不要用:before或:after展示有实际意义的内容，尽量使用它们显示修饰性内容，例如图标**
>
> ::before和::after必须配合content属性来使用，content用来定义插入的内容，content必须有值，至少是空。
