### 邂逅Java

主要对java有一个初步认识，影响最深刻的内容是：

- JavaSE：Java基础语法。
- JavaMe：基于嵌入式。
- JavaEE：基于服务器。

写了一个Java小程序，Helloworld：

``` java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```

配置了Java开发环境，了解了Java的历史，能干啥。

**Write Once Run Anywhere.**

跨平台是通过虚拟机来实现的**JVM**。

JDK：JVM虚拟机，核心类库，开发工具。

JRE：Java运行环境，JVM，核心类库，运行工具。

JDK包含JRE包含JVM。