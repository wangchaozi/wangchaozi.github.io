## 1.如何去进行跨组件通信

### 业务场景

商城场景：当在浏览商品页时候，将商品添加购物车，此时购物车标签页面数字+1，这个场景下，很难去用组件之间的通信去完成，都说了是组件通信了，那标签页怎么做呢。

引导页场景：如果说我们需要去打开弹窗，然后对弹窗的title或者某些div进行高亮提示，那么我们这个弹窗是怎么打开的呢，具体一点，我们在sideBar去执行一个函数，这个函数需要打开另一个标签页的弹窗，我们如何去做。

### 方案介绍

#### 方案一：BroadCast Channel - 对讲机频道

业务二场景实现：截取部分代码

**函数消息传递-postMessage**

```ts
onNextClick: () => {
  guideBeginnerChannel.postMessage({ type: "closeDialog" });
  driverObj.moveNext();
},
side: "right",
align: "center",
```

```ts
const channel = new BroadcastChannel('video_translator_channel');
onMounted(() => {
  channel.onmessage = (event) => {
    if (event.data.type === 'openDialog') {
      openDialog.value = true;
    }
    if (event.data.type === 'closeDialog') {
      openDialog.value = false;
    }
  };
});
```

**特点：**

1. 类似于对讲机到一个频道聊天
2. 不支持IE
3. 适合频繁通信

#### 方案二：Service Worker - 隐形邮差

```js
// service-worker.js
self.addEventListener('message', (event) => {
  // 告诉所有标签页
  self.clients.matchAll().then(clients => {
    clients.forEach(client => client.postMessage(event.data));
  });
});

// 标签页代码
navigator.serviceWorker.onmessage = (event) => {
  console.log('邮差送来消息:', event.data);
};

// 发送消息
navigator.serviceWorker.controller.postMessage('快递到啦！');

```

**适用场景：**

1. PWA应用（比如离线可用的网页）
2. 需要后台同步的场景

#### 方案三：LocalStorage - 共享小本本

耳熟能详的存储方式

```js
// 标签1写下留言
localStorage.setItem('message', '今晚吃火锅！');

// 标签2监听小本本变化
window.addEventListener('storage', (event) => {
  if (event.key === 'message') {
    console.log('新留言:', event.newValue);
  }
});
```

**注：**当前页面不能触发自己的监听

#### 方案四：Shared Worker - 共享办公室

```js
// shared-worker.js
const ports = []; // 连接的所有标签页

onconnect = (e) => {
  const port = e.ports[0];
  ports.push(port);
  
  port.onmessage = (event) => {
    // 广播给其他同事
    ports.forEach(p => p !== port && p.postMessage(event.data));
  };
};

// 标签页代码
const worker = new SharedWorker('shared-worker.js');
worker.port.onmessage = (event) => {
  console.log('办公室通知:', event.data);
};
worker.port.postMessage('大家好呀！');

```

**记忆：**把标签页当做同事在一个办公室工作

#### **方案五与六：轮询侦查队（IndexedDB/Cookie）：**

```js
// 方案5：IndexedDB轮询
setInterval(() => {
  db.get('message').then(val => {
    if (val !== lastMessage) {
      console.log('发现新消息:', val);
      lastMessage = val;
    }
  });
}, 1000);

// 方案6：Cookie轮询
setInterval(() => {
  const msg = getCookie('message');
  if (msg !== lastMsg) {
    console.log('Cookie消息:', msg);
    lastMsg = msg;
  }
}, 1000);
```

**注：**

1. 轮询，顾名思义，一次一次的查询，像不断检查邮箱的求职者
2. 耗费资源，不推荐高频业务场景适用

#### **方案七：window.open - 父子窗口说悄悄话**

```js
// 父窗口
const child = window.open('child.html');
child.postMessage('乖儿子', 'https://same-origin.com');

// 子窗口
window.opener.postMessage('老爸好！', 'https://same-origin.com');

// 两边都要监听
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://same-origin.com') return;
  console.log('收到:', event.data);
});
```

**安全：**

1. 必须验证event.origin！
2. 就像只接收认识的人的信件

#### 方案八：WebSocket - 专业电话线

```js
// 所有标签页连接同一个WebSocket
const socket = new WebSocket('wss://example.com/chat');

socket.onmessage = (event) => {
  console.log('服务器通知:', event.data);
};

// 发送消息
socket.send('标签1发来的消息');
```

**优点：**

实时性强，适合服务器参与的复杂场景

#### 方案9：SharedArrayBuffer - 共享黑板（高级）

```js
// 主线程
const buffer = new SharedArrayBuffer(1024);
const arr = new Int32Array(buffer);

// 可以传递给Worker
worker.postMessage({ buffer });

// Worker中修改
Atomics.store(arr, 0, 123); // 线程安全写入
```

**注：**

1. 需要设置安全响应头
2. 适合高性能计算

#### 选择指南：

| 方案               | 适合场景       | 难度 | 实时性 | 记忆口诀     |
| ------------------ | -------------- | ---- | ------ | ------------ |
| BroadcastChannel   | 简单现代应用   | ⭐    | ⭐⭐⭐    | "对讲机聊天" |
| LocalStorage       | 少量数据同步   | ⭐    | ⭐⭐     | "共享小本本" |
| SharedWorker       | 复杂数据共享   | ⭐⭐⭐  | ⭐⭐⭐    | "共享办公室" |
| Service Worker     | PWA/离线应用   | ⭐⭐   | ⭐⭐⭐    | "隐形邮差"   |
| WebSocket          | 需要服务器参与 | ⭐⭐   | ⭐⭐⭐    | "专业电话线" |
| window.postMessage | 特定窗口通信   | ⭐⭐   | ⭐⭐⭐    | "父子悄悄话" |