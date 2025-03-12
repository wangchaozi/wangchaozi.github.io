### 注释

- 单行注释
- 多行注释
- 文档注释

### 关键字

特定作用的英文，class...，

### 字面量

- 整数类型
- 小数类型
- 字符串类型
- 字符类型
- 布尔类型
- 空类型

```java
public class ValueDemo1 {
  public static void main(String[] args) {
    System.out.println(666);
    System.out.println(-1121);
    System.out.println(1.91);
    System.out.println(-123.123123);
    System.out.println("爱上电脑上的");
    System.out.println("jkpoas");
    System.out.println('s');
    System.out.println('2');
    System.out.println(true);
    System.out.println(false);
    // null没办法直接打印
    System.out.println("null");
  }
}
```

**制表符\t**

在打印的是很，把前面字符串的长度补齐到8，或者8的整合倍。最少补1个空格，最多补8个空格。

```java
public class ValueDemo2 {
  public static void main(String[] args) {
    System.out.println("name" + "\t" + "age");
    System.out.println("tom" + "\t" + "21");
  }
}
```



### 变量

数据类型 变量名 = 数据值;

注意事项：

- 只能存一个数值
- 变量名不允许重复定义
- 一条语句可以定义多个变量
- 变量在使用之前一定要赋值
- 变量的作用域范围

### 数据类型

#### 基本数据类型

四类八种：

- 整数：byte,short,int,long
- 浮点数：float,double
- 字符：char
- 布尔：boolean

#### 引用数据类型

``` java
public class VariableDemo1 {
  public static void main(String[] args) {
    byte a = 1;
    short b = 20; 
    int c = 30;
    System.out.println(a);
    System.out.println(b);
    System.out.println(c);
    // 加L
    long n = 99999999999999999L;
    System.out.println(n);
    // 加F
    float f = 10.1F;
    double d = 20.123;
    System.out.println(f);
    System.out.println(d);
    char m = '在';
    System.out.println(m);
    boolean o = true;
    System.out.println(o);
  }
}
```

