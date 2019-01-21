首先，进入「https://geth.ethereum.org/downloads」官网下载相应系统的安装包（也可以在第三方网站下载，但官网是最佳的渠道，不过有时官网站点不太稳定）。
Geth下载页面
下载完毕后按照正常软件一步步直至安装成功！
Geth搭建私链
Geth是命令行客户端，所以我们在使用时请打开Dos或Shell窗口，小编这里使用了cygwin类Unix模拟环境。
第一步，在某个磁盘创建一个数据存储目录如E\testeth，新建一个genesis.json文件，内容如下：
创世区块描述
genesis.json是创世区块配置文件，通过此配置让我们很容易挖矿以方便测试，具体每个字段的含义可暂时忽略！
第二步，在命令行窗口进入到E\testeth目录下，执行创世区块的初始化，命令如下：
geth --datadir data init genesis.json
此时在testeth目录下会生成data目录，data目录又包含geth和keystore目录，geth目录存储区块数据，keystore目录则保存账户信息。命令执行结果如下：
初始化创世区块
第三步，启动节点连接私有测试网络，命令如下:
geth --datadir data --networkid 123 --nodiscover console
--networkid 123参数表示区块链网络ID标识，--nodiscover参数表示节点私有，console参数表示进入geth控制台。
连接测试网进入控制台
此时我们已经进入geth测试网的交互式控制台，窗口也显示「Welcome to the Geth JavaScript console」成功提示！
Geth交互使用
小编将使用一些常见命令来演示一些小功能！在以太坊网络中，账户是其重要的组成部分，下面我们以查询链上账户列表开始常用的指令功能。
查询账户列表
输入指令：eth.accounts
输出结果：[]
含义：意思是无账户地址，因为我们什么也没做，所以当然是不会凭空出现账户了。
创建新账户
输入指令：
personal.newAccount("123")
输出结果：
0x6683a72a78b4d3700c3ac78a49a52c706ae7f36a
含义：表明账户新建成功，返回账户地址，123为账户密码。此时我们再次查询账户列表会发现已有刚创建的地址了。
查询账户余额
输入指令：
eth.getBalance(eth.accounts[0])
输出结果：0
含义：表明这个账户的余额是0。
启动或停止挖矿
输入指令：
miner.start();admin.sleepBlocks(1);miner.stop()
输入指令：
eth.getBalance(eth.accounts[0])
输出结果：5000000000000000000
含义：这三条指令意思是启动挖矿程序，当挖到1个区块时停止挖矿，挖矿所得默认进入第一个账户里。耐心等待成功挖出1个块，此时我们的节点就是矿工节点啦！再次查询账户余额，输出5的18方wei。
单位转换
输入指令：
web3.fromWei(5000000000000000000)
输出结果：5
输入指令：web3.toWei(5)
输出结果：5000000000000000000
含义：wei是以太坊账户的最小单位，eth是最大单位，eth与wei的可以相互转换。通常我们使用eth作为使用单位更为直观。
发送交易
为了更好的演示交易的发送，我们再创建一个新账户，这样就有两个账户，我们把第一个账户的5个ETH，转2个ETH到新账户。
前提条件：解锁账户一
输入指令：
eth.sendTransaction({from:eth.accounts[0],to:eth.accounts[1],value:web3.toWei(2,"ether")})
输出结果：
INFO [12-24|00:07:39] Submitted transaction fullhash=0x9216e836a292a90d85684015c01144600a80024424ba9585199aaea05a0a3ea4 recipient=0x1d460A9EA3740BA8c3b80F3d617EF28062fACf31
"0x9216e836a292a90d85684015c01144600a80024424ba9585199aaea05a0a3ea4"
含义：在发起交易前先解锁第一个账户，使用eth.sendTransaction指令发起交易，结果返回交易哈希存根，此时我们这笔交易并没有生效，可以使用txpool.status指令查看交易池的情况pedding为1表明这笔交易还款打包进区块。因为打包区块是由矿工做的工作，所以我们启动矿工。耐心等待一会再次查看第一个账户余额显示8000000000000000000，而第二个账户显示2000000000000000000，说明我们的转账交易成功啦！为什么第一个账户是8个ETH呢？这是因为矿工节点又挖出5个ETH了，加上之前的3个刚好正确！
查看区块信息
输入指令：eth.getBlock(2)
输出结果：第二个区块信息
查看交易信息
输入指令：
eth.getTransaction("0x9216e836a292a90d85684015c01144600a80024424ba9585199aaea05a0a3ea4")
输出结果：该笔交易详情
以上几个指令仅仅是与以太坊交互的常规指令，实际上还有非常多的其它指令，这里就不一一列出了。以下是实际的几张指令效果图，感兴趣的朋友可以实际操作运行！
账户列表、余额及启动挖矿
单位转换
查看第2个区块信息
查看交易详情

来自 <http://baijiahao.baidu.com/s?id=1587654252975914463&wfr=spider&for=pc> 

