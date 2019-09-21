FROM buildkite/puppeteer
    
## ---- 东八区 ---
ENV TZ Asia/Shanghai

# 工作区
WORKDIR /dir

## ---- 提升依赖层 ----
COPY package.json .

## ---- 版本依赖 ----
COPY yarn.lock .

## ---- 安装依赖 ----
RUN yarn --pure-lockfile --production

## ---- 复制代码 ----
COPY . .

# 暴露端口
EXPOSE 3000

# 启动时，只有一条默认命令
CMD ["sh","-c","yarn start"]