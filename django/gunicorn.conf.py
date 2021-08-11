bind = '0.0.0.0:8000'      #绑定ip和端口号
backlog = 512                #监听队列
timeout = 30      #超时

workers = 2   #进程数
threads = 2 #指定每个进程开启的线程数
loglevel = 'info' #日志级别，这个日志级别指的是错误日志的级别，而访问日志的级别无法设置