 FROM nginx:latest
 
 # 删除原有配置文件，创建静态资源文件夹和ssl证书保存文件夹
 # RUN rm /etc/nginx/nginx.conf
 # 添加配置文件
 COPY ./nginx.conf /etc/nginx/nginx.conf
 
 # 关闭守护模式
 CMD ["nginx", "-g", "daemon off;"]