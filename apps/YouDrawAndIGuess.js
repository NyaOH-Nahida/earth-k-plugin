import fetch from "node-fetch";
import puppeteer from "../../../lib/puppeteer/puppeteer.js";
let ml = process.cwd()
let wanjia = []
let game = 0
let fq = 0
let daan = ""
let renshu = 0
let huihe = 0
let wjname = []
let wj = []
let fen = []
let wjname1 = []
let data1 = {}
let lunci = 0
let huihe1 = 0
let zhuren
let qun = 0

let ciku = ["猪", "猴子", "兔子", "蛇", "蝴蝶", "老鼠", "长颈鹿", "蝌蚪", "袋鼠", "鸡", "狗", "猩猩", "大熊猫", "金丝猴", "东北虎", "长颈鹿", "梅花鹿", "袋鼠", "黑猩猩", "羊", "青蛙", "呼啦圈", "麻将", "悠悠球", "瑜伽", "健美操", "有氧搏击", "哑铃", "碰碰车", "过山车", "蹦蹦床", "海盗船", "KTV", "台球", "登山", "攀岩", "跳伞", "日光浴", "滑雪", "三国杀", "鹌鹑蛋", "西瓜", "花生", "核桃", "黄瓜", "西红柿", "冰糖葫芦", "水煮鱼", "馒头", "矿泉水", "面条", "苹果", "牛奶", "瓜子", "冰淇淋", "玉米", "鸡蛋", "榴莲", "葡萄", "香蕉", "枕头", "被子", "眼镜", "尿布", "沙发", "杯子", "脸盆", "纸巾", "拖鞋", "电视机", "电冰箱", "手机", "电脑", "电风扇", "吹风机", "睡衣", "手电筒", "洗衣机", "剪刀", "计算器", "羽毛球", "篮球", "足球", "乒乓球", "滑冰", "跳水", "竞走", "游泳体操马拉松", "冰壶", "举重", "高尔夫", "跨栏", "帆船", "摔跤", "武术", "拳击", "网球", "跳高", "跳远", "太阳", "跳远", "糖葫芦", "铁扇公主", "昙花", "兔耳朵", "特价机票", "体温计", "桃子", "天鹅", "天安门广场", "天书", "铁公鸡", "太极拳", "塔", "天蝎", "天路", "图书馆", "田螺", "秃子", "五角星", "乌鸦", "舞狮", "玩具熊", "网球", "网线", "网址", "碗", "外套", "武松打虎", "闻鸡起舞", "网线", "围棋", "X:西红柿炒蛋", "西瓜刀", "洗脚水", "袖子", "星矢", "乌鸦喝水", "西红柿", "席子", "星星", "蜥蜴", "熊", "小草", "洗浴头", "熊猫眼", "雪人", "网络电视", "小头爸爸", "洗澡", "相片", "Y:鱼人", "鸭", "烟花", "易拉罐", "香水", "牙膏", "硬币", "玉米", "眼泪", "运动鞋", "鱼雷", "运动会", "扬子鳄", "烟台", "玉佩", "圆规", "吸烟", "牙签", "椰汁", "鹰钩鼻", "樱桃", "英特尔", "Z:珍珠", "坐", "折叠床", "中央电视台", "照妖镜", "桌布", "植物人", "足球", "坐便器", "桌面", "止汗液", "掌纹", "坐标", "蜻蜓点水", "画蛇添足", "惊弓之鸟", "鹤立鸡群", "守株待兔", "狗急跳墙", "狼吞虎咽", "抱头鼠窜", "龙飞凤舞", "愁眉苦脸", "盲人摸象", "嬉皮笑脸", "拔刀相助", "坐井观天", "目不转睛", "张牙舞爪", "指鹿为马", "朝三暮四", "喇叭", "IC卡", "明信片", "婚车", "锦旗", "洒水车", "转椅", "假牙", "地球仪", "呼啦圈", "请柬", "护身符", "梅兰芳", "丘比特", "姜子牙", "刘邦", "还珠格格", "李小龙", "丁俊晖", "刀郎", "徐静蕾", "师跃进", "高犇", "张蕾", "张永莉", "宋沧", "顿海英", "白崇玉", "臧原", "张榕麟", "曹振宁", "马宁", "刺猬", "蟋蟀", "海鸥", "松鼠", "金丝猴", "眼镜蛇", "蝙蝠侠", "黑猫警长", "猫头鹰", "鸽子", "斑马", "毛驴酸辣粉", "麻婆豆腐", "小笼包", "沙拉酱", "冰棒", "金针菇", "三明治", "珍珠奶茶", "爆米花", "棉花糖", "烤红薯", "菠萝", "过桥米线", "水煮鱼", "茶叶蛋", "麻花", "炸酱面", "开心果", "快马加鞭", "垂头丧气", "从容不迫", "纸上谈兵", "胸怀宽大", "牛头马面", "指手画脚", "嚎啕大哭", "目瞪口呆", "火山爆发", "虎背熊腰", "一刀两断", "回眸一笑", "张牙舞爪", "兴高采烈", "画蛇添足", "亡羊补牢", "金鸡独立", "颠三倒四", "汗流浃背", "幸灾乐祸", "鸡飞狗跳", "挥汗如雨", "回头是岸", "三长两短", "白日做梦", "闻鸡起舞", "一无所有", "夸夸其谈", "狼狈为奸", "天空之翼", "刻晴", "相泽楠", "天目影打刀", "飘浮灵", "无工大剑", "忍冬之果", "长枪", "八重神子", "优菈", "老爷子", "贯虹之槊", "匣里龙吟", "雷电将军", "风魔龙", "空", "岩晶碟", "派蒙", "赤角石溃杵", "魔晶矿", "恒常机关阵列", "盗宝团", "芭芭拉", "鹿野院平藏", "莫娜", "罗沙利亚", "奥兹", "北风的王狼", "天理", "雷音权现", "久岐忍", "可莉", "申鹤", "优菈", "瑶瑶", "捕风瓶", "浓缩树脂", "天空之傲", "衔珠海皇", "千岩长枪", "冰深渊法师", "神之心", "无主的星辉", "飞天大御剑", "勇者之心", "苍白之火", "悠古的磐岩", "逆飞的流星", "海染砗磲", "镜花之琴", "奇怪的丘丘人", "冰萤术士", "遗迹猎者", "深海龙蜥", "口袋锚点", "创世结晶", "柯莱", "多莉", "老天爷", "魔法师", "遮阳帽", "龙凤胎", "光棍节", "灰姑娘", "酸辣粉", "蝙蝠侠", "木糖醇", "水煮鱼", "灌汤包", "满天星", "高富帅", "零花钱", "扩音器", "图书店", "前男友", "皂角粉", "猪肉脯", "棒棒糖", "宋小宝", "王心凌", "刘亦菲", "红楼梦", "李连杰", "狄仁杰", "金丝猴", "鲜橙多", "沐浴皂", "护发素", "电动车", "辅导员", "碰碰车", "碧螺春", "灰姑娘", "四面楚歌", "努尔哈赤", "邓超孙俪", "工藤新一", "黛玉葬花", "花样男子", "天龙八部", "非诚勿扰", "全力以赴", "百事可乐", "王老吉", "伊利", "抱枕", "原魔", "论文", "媳妇", "神话", "水桶", "保镖", "烤串", "口红", "生菜", "喜羊羊", "东京", "橙子", "微信", "网易云音乐", "女人", "跑跑卡丁车", "劲舞团", "萌新", "雪碧", "羽毛球", "足球", "大专", "坏人", "椅子", "笔记本电脑", "胡须", "面具", "百事可乐", "牙膏", "可莉", "雷神", "屑空", "阿莫斯之弓", "凝光", "三上悠亚", "黑剑", "史莱姆", "尘世之锁", "四风残章", "长剑", "丽莎", "雷泽", "帝君", "尘世之锁", "匣里灭辰", "祸津御建鸣神命", "若坨龙王", "荧", "风晶碟", "原神", "若水", "水晶矿", "无相之岩", "愚人众", "珊瑚宫心海", "枫原万叶", "神里绫华", "优菈", "菲谢尔", "狼的末路", "派蒙", "纯水精灵", "烟绯", "迪卢克", "甘雨", "重云", "七七", "温迪", "原粹树脂", "天空之脊", "渔获", "千岩古剑", "凯亚", "神之眼", "无主的星辰", "飞天御剑", "行者之心", "染血的骑士道", "千岩牢固", "追忆之注连", "被恋爱的少女", "风物之诗琴", "丘丘人", "雷萤术士", "遗迹守卫", "岩龙蜥", "传送锚点", "原石", "提纳里", "久岐忍", "老佛爷", "魔术师", "鸭舌帽", "双胞胎", "情人节", "丑小鸭", "土豆粉", "蜘蛛侠", "口香糖", "酸菜鱼", "小笼包", "薰衣草", "富二代", "生活费", "麦克风", "图书馆", "男朋友", "洗衣粉", "牛肉干", "泡泡糖", "小沈阳", "张韶涵", "刘诗诗", "甄嬛传", "甄子丹", "包青天", "大白兔", "果粒橙", "沐浴露", "洗发露", "自行车", "班主任", "过山车", "铁观音", "丑小鸭", "十面埋伏", "成吉思汗", "谢娜张杰", "福尔摩斯", "贵妃醉酒", "流星花园", "神雕侠侣", "天天向上", "勇往直前", "可口可乐", "加多宝", "蒙牛", "枕头", "原神", "作文", "老婆", "童话", "水盆", "保安", "烤肉", "唇膏", "白菜", "熊出没", "北京", "橘子", "QQ", "QQ音乐", "男人", "QQ飞车", "QQ炫舞", "大佬", "七喜", "乒乓球", "篮球", "本科", "好人", "凳子", "台式电脑", "眉毛", "面膜", "可口可乐", "牙刷", "七七", "丽莎", "屑荧", "小题大做", "虎口拔牙", "坐井观天", "没心没肺", "笨鸟先飞", "争先恐后", "大惊小怪", "五音不全", "三从四德", "自言自语", "嬉皮笑脸", "口是心非", "顶天立地", "比翼双飞", "人声鼎沸", "一言九鼎", "抓耳挠腮", "口是心非", "火烧眉毛", "姗姗来迟", "袋鼠", "小天鹅", "波斯猫", "田螺", "蟒蛇", "泰迪熊", "水牛", "丹顶鹤", "鹦鹉", "红蜻蜓", "蜈蚣", "蝴蝶", "小白兔", "蜜蜂", "黑猩猩", "东北虎", "穿山甲", "扬子鳄", "藏羚羊", "恐龙", "热带鱼", "螃蟹", "金丝猴", "北极熊", "企鹅", "孔雀", "长颈鹿", "骆驼", "小熊猫", "松鼠猴", "海马", "斑马", "蝙蝠", "变色龙", "鸭嘴兽", "金钱豹", "蚂蚁", "鲨鱼", "犀牛", "考拉", "猎鹰", "猫头鹰", "麋鹿", "乌鸦", "刺猬", "水獭", "龙虾", "豚鼠", "红鲤鱼", "树袋熊", "隐形眼镜", "铁锤", "圆规", "扣子", "手电筒", "剪刀", "铲子", "橡皮擦", "指南针", "温度计", "牙刷", "鼠标", "杯子", "耳机", "镜子", "梳子", "香皂", "脸盆", "洗衣粉", "掏耳勺", "指甲刀", "雨伞", "水壶", "刮胡刀", "衣架", "拖鞋", "卫生纸", "口罩", "手套", "头盔", "螺丝刀", "钥匙链", "透明胶", "洁打火机", "面乳", "暖水瓶", "双面胶", "削皮器", "开瓶器", "花露水", "垃圾桶", "沐浴露", "卷笔刀", "电热毯", "卸妆水", "水果刀", "电风扇", "切菜板", "电饭煲", "洗洁剂披萨", "馒头", "西红柿", "方便面", "莲藕", "柚子", "冰激凌", "饼干", "酸菜鱼", "石榴", "燕窝", "荷包蛋", "菊花茶", "酸菜鱼", "棒棒糖", "热狗", "火龙果", "夫妻肺片", "黄瓜", "香蕉", "椰子", "菜花贾宝玉", "杨贵妃", "猪八戒", "周杰伦", "小沈阳", "武则天", "唐伯虎", "白娘子", "孙悟空", "鲁智深", "白骨精", "韦小宝", "灭绝师太", "张三丰", "段誉", "金毛狮王", "紫薇", "葛二蛋", "三毛", "郭靖", "济公", "贾宝玉", "赌神", "至尊宝", "刘罗锅", "李寻欢", "白展堂", "李大嘴", "刘星", "二郎神", "黄飞鸿", "展昭", "纪晓岚", "步惊云", "古三通", "雷震子", "郭芙蓉", "李云龙", "灯笼", "快板", "发热", "臭美", "愤怒", "教师节", "拓展培训师", "哭闹", "肌肉注射", "酱油", "花生油", "月亮", "喷香水", "吃面条", "夜宵", "假货", "和尚", "系鞋带", "抹指甲油", "心肺复苏", "发冷", "车票", "尼姑", "星星", "存折", "妇女节", "新生儿", "老师", "减肥", "不及格", "比赛", "骑自行车", "淘宝网", "撒腿就跑", "包饺子", "中大奖", "医院", "拓展教练", "射击", "嚎啕大哭", "小鸟依人", "旱鸭子", "打嗝", "一毛不拔", "扭秧歌", "暴跳如雷", "孙悟空", "大跌眼镜", "淘宝", "八卦", "画饼充饥", "奶瓶", "闭月羞花", "羊入虎口", "足球", "打酱油", "泰山压顶", "老鹰", "皮鞋", "钢笔", "加油站", "香蕉", "猩猩", "井底之蛙", "吃货", "击剑", "一石二鸟", "啤酒肚", "含笑九泉", "我爱你", "睡觉", "吃里扒外", "机不可失", "打麻将", "呆若木鸡", "大眼瞪小眼", "百里挑一", "鼠标", "一刀两断", "井底之蛙", "嬉皮笑脸", "香水", "开膛破肚", "鸭子", "七上八下", "方便面", "外星人", "熊猫", "企鹅", "心花怒放", "见钱眼开", "西瓜", "流口水", "馒头", "牛头马面", "鸡飞蛋打", "豆腐", "狗急跳墙", "油条", "张牙舞爪", "回眸一笑", "美女", "照镜子", "秋裤", "灭火器", "猪八戒", "跪地求饶", "最炫民族风", "打呼噜", "跨栏", "石榴", "洗澡", "狼吞虎咽", "沉鱼落雁", "公鸡打鸣", "海枯石烂", "手套", "斗地主", "狼心狗肺", "老鼠", "拔河", "飞机", "弱不禁风", "女汉子", "痛哭流涕", "苹果", "鹤立鸡群", "贼眉鼠眼",]

export class YouDrawAndIGuess extends plugin {
    constructor() {
        super({
            name: '[土块插件]你画我猜',
            dsc: '简单开发示例',
            event: 'message',
            priority: 1145,
            rule: [{
                reg: "^#加入你画我猜$",
                fnc: 'jryx'
            }, {
                reg: "^#开始你画我猜$|猜测(.*)",
                fnc: 'ksyx'
            }, {
                reg: "^#发起你画我猜$",
                fnc: 'jryx'
            }, {
                reg: "^#结束你画我猜$",
                fnc: 'jsyx'
            }

            ]
        })
    }
    async jsyx(e) {
        if (e.user_id == zhuren) {
            e.reply('你画我猜已结束')
            wanjia = []
            game = 0
            fq = 0
            daan = ""
            renshu = 0
            huihe = 0
            huihe1 = 0
            wjname = []
            wj = []
            fen = []
            wjname1 = []
            data1 = {}
            lunci = 0
            zhuren = 0
            qun = 0

        }
    }

    async jryx(e) {

        if (fq == 0 & e.msg == '#发起你画我猜') {
            zhuren = e.user_id
            fq = 1
            e.reply('你画我猜已发起，快来加入吧')
            qun = e.group_id
            console.log(e.group_id)
        } else if (fq == 1 & e.msg != '#加入你画我猜') {
            e.reply('已经发起过了，哼哼啊啊啊啊啊')
            return
        }
        else if (fq == 0 & e.msg == '#加入你画我猜') {
            e.reply('游戏还没发起呢')
            return
        }

        console.log(wanjia.indexOf(e.user_id))
        if (wanjia.indexOf(e.user_id) == -1) {
            if (game == 0) {

                wanjia[wanjia.length] = e.user_id
                let msg = [segment.at(e.user_id), '加入游戏成功，当前人数', String(wanjia.length), '人']
                e.reply(msg)
                renshu = wanjia.length

                wjname[wanjia.length - 1] = e.member?.card ? e.member.card : e.member?.nickname

            }
            if (game == 1) {
                e.reply('游戏已经开始了,哼哼啊啊啊啊啊啊啊')
            }
        } else {
            if (game == 0) {
                e.reply('你已经加入游戏了！')
            }
            if (game == 1) {
                e.reply('游戏已经开始了,哼哼啊啊啊啊啊啊啊')
            }
        }
    }

    async ksyx(e) {
        if (e.msg.includes('猜测') & game == 0) {

            return false
        }
        if (e.msg.includes('猜测') & game == 1) {

            if (wj.indexOf(e.user_id) == -1 & game == 1) {
                wj[wj.length] = e.user_id
                fen[fen.length] = 0
                wjname1[wjname1.length] = e.member.card
                console.log(wjname1[0])
            }
            let caice = e.msg.replace(/猜测/g, "").trim();
            if (caice == daan) {
                let msg4 = ""
                huihe = huihe + 1
                huihe1 = huihe1 + 1
                for (let i = 0; i < wj.length; i++) {

                    if (e.user_id == wj[i]) {
                        fen[i] = fen[i] + 1
                    }
                    msg4 = '\n' + wjname1[i] + '     ' + String(fen[i]) + '分' + msg4
                }
                //e.reply(['当前分数为：\n' + msg4 +'\n当前为第'+String(huihe)+'回合\n共10回合']);


                data1 = {
                    tplFile: './plugins/earth-k-plugin/resources/html/YouDrawAndIGuess/YouDrawAndIGuess.html',
                    dz: ml,
                    wjname: wjname1,
                    fen: fen,
                    huihe: huihe1,
                    ren: wanjia.length * 2

                }
                let img = await puppeteer.screenshot("123", {
                    ...data1,
                });
                e.reply(img)

                e.bot.pickGroup(qun).sendMsg(["恭喜", segment.at(e.user_id), '回答正确，加1分']);

                let i = Math.floor(Math.random() * ciku.length);
                if (lunci == 1 & huihe == wanjia.length) {
                    e.reply('你画我猜游戏结束，以上为最终得分')
                    wanjia = []
                    game = 0
                    fq = 0
                    daan = ""
                    renshu = 0
                    huihe = 0
                    huihe1 = 0
                    wjname = []
                    wj = []
                    fen = []
                    wjname1 = []
                    data1 = {}
                    lunci = 0
                    zhuren = 0
                    qun = 0
                    return
                }
                if (huihe == wanjia.length) {
                    huihe = 0
                    lunci = 1
                }

                let tp = segment.image('https://c2cpicdw.qpic.cn/offpic_new/0//1142407413-3587893631-F7E9A2A13278357600BB7B7E8895DD26/0')
                e.reply(['正确答案是：' + daan + '\n现在进入下一轮', '\n当前画画:', segment.at(wanjia[huihe]), tp])
                e.bot.pickUser(wanjia[huihe]).sendMsg(ciku[i]);
                e.bot.pickMember(e.group_id, wanjia[huihe]).sendMsg(ciku[i]);
                daan = ciku[i]
                console.log(daan)
                ciku.splice(i, 1)
            }
            return
        }

        if (game == 0 & e.msg == '#开始你画我猜' & fq == 1) {
            let tp = segment.image('https://c2cpicdw.qpic.cn/offpic_new/0//1142407413-3587893631-F7E9A2A13278357600BB7B7E8895DD26/0')
            e.reply([tp, '\n你画我猜已开始，请点击白布图片后，点击右下方的笔开始画画'])
            let i = Math.floor(Math.random() * ciku.length);
            daan = ciku[i]
            let msg2 = '以下为玩家对应的号码数'
            for (let i = 0; i < renshu; i++) {
                msg2 = msg2 + '\n' + String(i + 1) + '号：' + wjname[i]
            }
            e.reply([msg2, '\n当前画画:', segment.at(wanjia[huihe])])
            e.bot.pickUser(wanjia[0]).sendMsg(ciku[i]);
            e.bot.pickMember(e.group_id, wanjia[0]).sendMsg(ciku[i]);
            console.log(daan)
            ciku.splice(i, 1)
            game = 1

        } else if (game == 1 & e.msg == '#开始你画我猜') {
            e.reply('游戏已经开始了,哼哼啊啊啊啊啊啊啊')

        } else if (game == 0 & e.msg == '#开始你画我猜' & fq == 0) {
            e.reply('游戏还没有发起啊,哼哼啊啊啊啊啊啊啊')

        }
    }
}