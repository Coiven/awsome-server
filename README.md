# Awsome-server

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### local mongo/redis

```bash
$ docker search redis // 查找是否有对应镜像
$ docker pull redis:latest // pull最新版本镜像
$ docker images // 查看镜像
$ docker run -itd --name redis-test -p 6379:6379 redis // 运行容器
$ docker ps // 查看容器是否成功创建
$ lsof -i:27017 // 查看端口是否成功映射
$ docker exec -it redis-test /bin/bash // 进入容器内部
$ redis-cli // 测试redis服务是否正常
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
