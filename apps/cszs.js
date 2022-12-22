import { segment } from "oicq";
import fetch from "node-fetch";
import puppeteer from "../../../lib/puppeteer/puppeteer.js";
import fs from "fs"
const _path = process.cwd();
let data1 = {}

let shuju = ["一个女孩在海边捡到一个瓶子，打开后飞出来一只精灵，精灵说 我可以实现你一个愿望，女孩说我的家人对我一点都不好，我希望她们全死光，第二天清晨，女孩醒了，发现爸爸，妈妈，哥哥都在，过了一个星期，她又见到了精灵，精灵问我为你完成的愿望你满意吗。女孩愣了楞，马上哭了起来，问精灵可不可以收回愿望，可精灵说一切都太晚了。"	
,
"一个人半夜回家，他的家住在14楼，他走进电梯，过了几秒，发现八楼亮了，他想一定是八楼的人要坐电梯，过了一会儿他猛然按下了345楼，门打开就冲了出去，待在大楼附近的便利店直到第二天。"	
,
"这个故事是发生在我的一个朋友的身上。我朋友是一名寄宿生，在某个假期室友全都回家了，她依然留在宿舍中。 当晚，朋友在睡眠中感到尿急，可是由于厕所距离房间有一段距离， 四周又黑漆漆的，朋友感到害怕便叫醒睡在她身边的室友陪她一同去厕所， 当他进入厕所后，却在也不敢出去了"	,


	"今天我去图书馆借书来看。位于馆内角落的书架是小说类别的，我对小说很感兴趣因此便去那选书。当我出抽第一本书时，书页却零落的掉了下来。此时我与书架对面的人在我抽出书本时眼神交会了一会。我继续在书架前花了约10钟左右选出3本看起来挺有趣的书，拿到柜台请管理员办理借书手续。在回家的路上我心理想着应该也把第一本书借回来的，但是书变成那样也没办法了.....今天就借这些书回家吧"	,

"因为出勤的关系我与同事租住了一间酒店的房间当时同事还有事要办今晚不会回来因为我很胆小所以早早就上床睡觉但是在深夜的时候我却听到「咯咯」的敲门声「是酒店的职员吗?」我叫道却没人回应我看着房门感到非常害怕那个敲门声一直从深夜持续到黎明才停止然后我立刻就去退房了之后我和出勤回来的同事说起敲门声的事「果然发生了呢」他这样说他说这间酒店以前发生过火灾有个人因为逃走不及被困在那个房间里到现在还是找不到他的尸体或残骸啊啊... 还好我可以打开那个房门呢..",	

"某日，我和友人A君跟B君一同参加网路上约好的联谊。 到达指定餐厅后，马上就看到了女孩们的位置。 「你们本人比相片上还漂亮呢!!」我看着她们，亲切的笑着。 「但为什么你们只有两人呢?C小姐不来了吗」A君问道，的确，她们只有两人 「唉唉~不好意思，C小姐她今天感冒没办法来了~」其中最可爱的A小姐答道， 太可恶了，这不就代表今天我们三个男生一定会有一个要悲惨的孤单着吗?! 算了，不想这么多，反正我这么幸运，绝对不会是我。 抱着这样的想法，我开开心心的吃着晚餐，B君许多无厘头的搞笑把气氛炒得很热呢。 「唉唉...」我骑着车，看着骑在前面的A君跟B君双双对对，「想不到我就是那悲惨的人..」我以往都是最幸运的，只要有联谊，总会抽中最漂亮的那名女孩子，「看来是气数已尽。」 「你看起来很烦恼呢~」停红绿灯时，座在A君后面的B小姐转头看着我，「果然是没有女伴的关系阿」她笑着，露出一口整齐洁白的牙齿，两只手还紧紧抱着A君， 「你就别再这样说了吧~」我苦笑， 其实B小姐也是个美人儿呢，笑起来会有澹澹的酒窝，一头长发再加上瓜子脸，只是不知道她侧面如何，有些女孩子正面很好看，但侧面就不得而知	",

"今天在公司又被上司给骂了，就是那个连在公司女同事之间风评也差到爆的老秃驴。 “唉唉，该不会最近老觉得有人追踪我的犯人也是那老贼秃吧？”我一面这样想着，一面抵达家门口。 虽然说是家，但其实也是个只有两个房间的老旧公寓，就只有起居室厨房和寝室，也只有起居室才有窗户，虽说是真的很便宜啦。 打开门锁进了房间，吓了一大跳，起居室的衣橱被翻乱了！ 想起来了，今早吃完早餐出门时忘了锁门，就这样去上班…… 啊啊……窗户都有锁上，也就是说一定是从玄关侵入的！ 感觉好差劲！真让人不爽！好想去死！ 算了，今天已经这么累了，晚饭也别吃了，明天再报警吧！ 我再次确定玄关已经锁上，往寝室走去."	,

"	小明因为杀人而被判了无期徒刑，关进了世上最森严的监狱， 唯一逃出的方式，就是买通监狱的人员，协助他逃狱， 于是他买通了即将退休的狱医，与狱医准备逃狱的计划， 狱医说：「后天晚上，我会安排一具尸体下葬，棺木会放在太平间中， 你就趁没人注意的时候溜进太平间，躲在棺木里，警88察一早会抬着棺木去下葬， 等到警88察走了以后，我会去把棺木给挖出来，这样你就可以逃离这里了， 只是要辛苦你跟尸体待一晚.....」 这真是一个天衣无缝的计划，小明暗自高兴的这样想着…… 到了约定的那天晚上，小明溜进了太平间，果然看到了一口棺木， 于是他急急忙忙的躲了进去，虽然很害怕身旁的尸体， 但想到明天就可以获得自由，也就克服了恐惧躲了进去…… 一早，警88察们果然抬着棺木下葬了，透过棺木，小明听到厚厚的黄土， 逐渐覆盖在棺木上，小明躲在棺木里不敢出声，警88察走了之后， 小明在棺木里暗自窃喜着，等待狱医的到来， 时间慢慢的过去，坟墓上却一点动静也没有， 小明不禁开始紧张起来，狱医呢?!不会是拿了我的钱却不来救我吧……… 紧张的小明，已经顾不得对尸体的恐惧了，拿起了预先准备的打火机， 想要在棺木找到东西逃出去，可是，当他看清楚身旁的尸体，那张恐怖的脸孔， 却不禁嘶喊出最凄厉的叫声~~~ 但，深埋在土里的棺木所发出的惨叫，地面上却是一点声音都听不见！"	,

"某地的女性确定考上了在东京的大学，以后要一 个人住在东京。 在某公寓开始生活，意外的发现房间墙壁有一个小洞。 这个小孔似乎可以看穿到隔壁的房间，试着偷偷看了一 下。 小孔的另一边是深红色的。 隔壁的房间会不会是贴了红色的海报呢，抱持这样想法 的女大学生隔天隔天天也是这样偷看那个小孔。 不管怎麽看都一直是红红的，对隔壁的房间很在意的女 大学生询问了公寓的房东。 「我隔壁的房间住着什麽样的人呢？」 房东回答 「你隔壁的房间住着一个感染眼疾的人喔」	 "	,

"死因是CUSOTO中毒，这种物质很容易散发毒性，（一种化学物质，据说有剧毒至于是什么不重要），而警方调查，在这家酒店的三个住户的房间里发现了这种化学物质。第一位是村木八郎、是一个混混。而他和警方说，他是因为没事去他哥哥的化学工厂，闲的无聊偷来的。第二位叫木乃樱。他住在8号房，据他所说他是因为想自杀，但是没敢就一直保留这这个东西。第三位叫英齐龙二。他是一个作家，笔名叫抒情无限。 据警方了解，前两天龙二和八狼在死者的房间有过争吵，那么请问。谁才是真正的凶手？	",

"有5个人去登山.中途挂了一个.... 后来到了晚上.他们找到一间房子.里面很黑什么都没有....外面有是下着暴雨打着雷 那四个人很害怕..... 有个人提议玩个游戏~~~~ 4个人分别站在房子的四个角落.. 然后轮流去令一个角落碰那个人的手 如: A B C D A走过去碰B的 B碰D的 D碰C的 C有去碰回A的 他们一直玩到天亮................. 请问发现什么了吗?",
"一女子晚十点下班 感觉尿急 离家又有点远 就到一个公厕上厕所到那里发现没有灯 只能借外面路灯看见里面有个老人在拖地女子没在意 上完厕所回了家第二天 女子在新闻上看到 昨天自己上厕所的地方发现一具年轻女尸女子一想 差点吓死 为什么",
"他跟她是青梅竹马，以为能携手看夕阳。 35岁上，她得了肺癌。拿着诊断书，哭了笑，笑了哭。不抽烟，没有任何不良嗜好，何以得了肺癌？ 她来到他办公室，却看到他桌上一袋自己素日最爱吃的干果，旁边，放着个药瓶子，说明触目惊心。她流下泪来，红色。 三日后，她哭着为他点燃生日蜡烛，他不在。 她点燃了34根长蜡烛，一根短蜡烛，低笑道：你真是瘦了",
"有一天放学由美回到家中，看到父亲满脸的沧桑，父亲说，你母亲有外遇了。我跟他大吵了一架，结果失手杀了你的母亲，由美虽然很伤心，但是，心想就和爸爸一起相依为命。回到房间中，发现母亲给自己留了3张残碎的纸条，拼起来是，由美？快走，爸爸，失去理智了。 如果是你，你相信谁？",
"一家住在顶层的人。经常在他熟睡的时候，听到霹雳一般的声响，吓得他从梦中醒来。就此彻夜无眠，瞪着天花板，听着楼上的声音，直到天明。他终于忍无可忍。冲到了楼上，砸了砸门门开了，一个满脸忧郁的男人出来了。一场怒骂，他把平生知道的骂人话全部骂了出来。忧郁的男人连连抱歉，并说明天一定上门道歉。难得的好觉。起床时，突然吓死。"
,
"我搭上了一列特快车，大概在还差10分就午夜12点的时候，在中途站有一名男子也上了列车，他在车门关闭后，像是突然回复意识一般，开始左右环视着周遭乘客的脸。 “恕我愚昧，请问您今年28岁吗？”他如此的向我问道，“是的，不过您怎么知道呢？” 我如此反问他，但被他无视，只是自顾自的和别人说话。 “您今年45岁吧？” “是没错。” “您是62岁吗？” “你怎么知道的？” 一直和看似不相识的乘客群重复着诸如此类的对话，看来这名男子，似乎有着只要看着别人的脸就能知道其年龄的特殊能力。 此时到下个停车站还有15分钟左右的时间，全车箱包括我在内的乘客都对这名男子投以好奇的注目眼光，一直到他问到最后一名女士。 “您是50岁吗？” “是的，不过还有五分钟就51岁了！”那名女士如此微笑的回答道。 霎时，那名男子的脸色铁青，仿佛震撼到无以复加。"
,
"有个之前一起工作的前任工作伙伴最近转职到我的所属职场工作，因为彼此都是已婚男人，从以前就常一起出去游玩或喝酒谈天，于是便约他去附近的茶馆叙叙旧。我问他：“最近在干嘛，在赚什么黑心钱啊？”他闻言笑了笑，开始畅谈他过去的经历。大概在一年多前他邂逅了一名小他十岁的女子，在耶诞节假期他22、23、24、25都是在她公寓家里度过的。当然连续4天不回家的结果，使得他自己家人闹到差点没报警，再说他也深觉得对不起自己的小学女儿。于是在25日的晚上七点他坚决要回家去，结果那女人却哭叫着恳求他别走。最后两人大吵一架，他也因此不顾一切的留下她直接进入11楼的电梯下到1楼离开。“真没想到……”他又是笑了笑，说道：“等我走出公寓大门，她竟然已经在外头等我了…"
,
"在某妇产科医院有一名妇人生下了一个宝宝，当天半夜护士去婴儿房巡视情况，意外发现该婴儿已经全身冰冷无呼吸，死亡了。知道此事后的院方决定隐瞒此事，用一个也才刚出生没几天孤儿婴儿取代那名死婴。在生产时那名产妇并无意识，也还没见过自己的亲生孩子，因此理论上以还看不出特征的婴孩取代是万无一失的。隔天，院方安排该产妇见到那名代替的婴儿，但她一看就发狂般的大喊：“这不是我的宝宝！"
,
".“唉，还没好吗？”我面向背对着我的老婆这么问，为什么女人在准备的时候都要花这么久时间？“快好了，不必那么急嘛，你看看你，一副焦躁不安的样子，小翔，别再乱动了喔。”她说得没错，我天生就这副急性子，没办法。我从西装口袋取出香烟，点上火。“突然回去他们那，公公和婆婆不知道会不会吓一跳呢？”“哪会，看到孙子都这么大了，他们一定笑得合不拢嘴！”我看着一旁睡熟的儿子翔，如此回答她。“久等啰，好了，啊……”“嗯，怎么了？”“老公，你这里啦！”老婆指着我的脖子，我伸手一摸，“啊！忘了！”“老公真是的，不但焦躁还冒失，过来我帮你。”“老公，我爱你。”老婆一边帮我整理着脖子周围。“干嘛突然讲这个？”“有什么关系呢？我们当前是夫妇嘛！”老婆她往下逃避我的视线，似乎在害羞着。“嗯，我也爱你。”不知道已经有几年没讲得这么露骨了。虽然有点害羞，但感觉倒也不坏，我握着老婆的手。“那么走吧！”“嗯！”"
,
"我平日每天都会上澡堂去，而在洗完澡前进去三温暖好好流个汗更是例行公事。在我刚进三温暖房才一分钟左右，有个男人也跟着进来，一较高下看看谁待比较久吧，在这男人出去之前我绝不出去，这也是我特有的习惯。10分钟过了，对方是个看起来起码超过一百公斤的胖子。15分钟过了，明明汗流得跟瀑布一样还不放弃，挺能撑的嘛，死胖子！18分钟过了，终于那个胖子移动了身体，他摇摇晃晃的站起来，像是随时会不支倒地一般蹒跚的向三温暖房外走去。赢啦！我情不自禁的在三温暖房内摆出胜利姿势！………………………………..当我恢复意识后，发现自己在一个陌生的房间内，有个老阿伯正瞅着我，那老阿伯就是澡堂的收费台服务的人。他开口对我说：“我去检查的时候发现你就在三温暖外，靠着门坐倒着，已经丧失意识了！”看来我是中暑了，好像有点逞强过头了吧。阿伯继续感叹道：“把你扛到这里来可真累了我这身老骨头，下次多注意点啊！”我向老伯再三道谢才回家，好好喝个啤酒就休息"
,
"我曾经有个弟弟，虽然过往的记忆已经很模糊，但是我印象最深刻的就是跟弟弟分享爸爸给我的糖柑仔时，那份快乐的回忆。只是好景不常，弟弟出生没几个月就死了，只是到现在还活在每一个家人的心中。",
"1904年8月，我在家中发现了一本可疑的日记。先说明下，我家是6年前结婚的妻子挑屋并购入的中古住宅，不过我妻子已经在前年和两个儿一同在船难中丧生，两个女儿虽然在其两日后被冲上不同的两个海岸边，但还是没被救活。前几天，因为要改造妻子的房间故请了木工师傅来，结果他交给我一本说是在妻子房间天花板内发现的日记本。那本日记确实是妻子的笔迹没错，翻开看了看：7 / 15：从今天开始我就要老公你一起生活了。（那天是我跟妻子的结婚纪念日啊。）9 / 21：这是因为你才有了现在的我。12 / 9：尽管如此，我还是不会离开老公你的。2 / 23：就快了喔！2 / 29：你能够明白了吗？当下我立即感到无比惊惧，立刻搬家到很远的地方去了。",
"我终于从某处获得了传说中的“诅咒真书”。翻开来，里头开头第一句话就是：“若按照本书中所记载的步骤实施，便可成功的咒杀你所希望对象，但是若步骤有出一点错，那么这个咒杀令便会反噬到施咒者身上！即便如此你仍要继续吗？”废话！就是因为我有个绝对饶恕不得的仇，所以才费尽千辛万苦拿到这本诅咒真书的，我开始阅读并实行其书上的指令：“1、请先闭上你的眼睛，专心回想你想要咒杀的对象的脸。”那家伙的脸……我想忘也忘不了的，立刻闭上眼回想他的面容特征，再来是什么呢？“2、接着请仔细的想像该如何咒杀他的方式。”我立刻把脑海中所有能想到的痛苦死法都回想一遍，再来呢？“3、最后更新请睁开眼睛。”",
"不会读书、也无法与人交谈。 这样的我、对谁来说都是不需要的。 在家中作为父亲的出气筒。对我的施暴更变本加厉。 真的很令人悲伤。「我以为逃的掉的」想逃离家、马上遭遇的。是比以往更加倍的殴打。真的很讨厌无知的我。怀孕中的母亲、跟姐姐有说笑的准备晚餐。 这样辛苦的日子、今天是最后了吧。 意识慢慢模糊不清了。 这样应该会、照我期望的。大家、跟我…阿阿、去死吧。照我期望的！数月后「是很健康的男孩呢！」 叔叔这样说了。我并不是悲伤、却大声哭了起来。 睁开眼睛、有对男女看着我。 不知为什么很怀念的人。 男人用很温柔的声音说。「你觉得逃的掉吗" ,
"我和宅配员间的对话 「不好意思，我想请问这包裹的地址...」宅配员说 「喔喔，这个的话在B栋一楼喔。」我说 「谢谢你。」宅配员说 关上了门。 话说我的房间是C栋3楼呢"	,
"在我生日的那一天 我在自己家里举办了一个派对 最后在大家的合照照片上 却拍到了奇怪的东西 在我们背后的衣柜里 有一个我从未见过 皮肤苍白、双眼通红的女人探出头来 朝我们的方向凝视着 我觉得有点不安 所以把照片拿去给一位灵能者鉴定 「这张照片并没有任何的灵气，所以并不是灵异照片」他这样说 啊啊... 还以为是灵异照片真是吓了我一跳呢...",
"这是在某个小镇发生的事情。 有个男人在某个房间里被监禁了。 男人睁开双眼，听见了声音。 「给我从那个纸箱中找出两面相同的硬币」 眼前有一个很大的箱子，打开来看，里面有很多的硬币。 「如果找到两面相同的，用桌上的相机拍下那枚硬币。在找到以前不放你走。照片用那边的传真机发送。」 当然传真机除了被设定了的号码之外都无法传送。 男子在纸箱中全力的找寻。 然后找到了两面相同的铜板。 用要相机拍下照片用传真机送出的时候男人发觉了。 已经，一辈子都没办法从这房间里出去",
"湖上泛舟，说不定能邂逅一段意想不到的情缘。 女孩泛舟，到了湖中心船突然翻覆，一个男孩奋不顾身的跳下去救了她。 女孩很感激男孩，碰巧那天是女孩生日，女孩便邀请男孩与她一起过生日。 女孩跟男孩在餐厅吃饭，面对着生日蛋糕，女孩为了感谢男孩，让男孩吹熄蜡烛。 男孩鼓起勇气向女孩告白，女孩摇摇头：「你很勇敢，但是我比较喜欢聪明的人。」 男孩笑着跟女孩说：「你知道为什麽船会翻吗？」 女孩睁大了眼睛：「原来是你做的？」 男孩得意的笑了：「这样子我就证明自己的聪明了，可以当你的男朋友了吧？」 女孩又摇了摇头：「不对，你还是不够聪明。」",
"有一天，因为觉得妹妹的哭声非常的吵耳所以把她杀了 然后把尸体丢到屋外的井里 第二天再去看的时候，尸体却消失了 5年后，因为一点小争执所以把朋友杀了 然后把尸体丢到屋外的井里 第二天再去看的时候，尸体却消失了 10年后，因为被一个在酒醉后不小心令她怀孕的女人缠上所以把她杀了 然后把尸体丢到屋外的井里 第二天再去看的时候，尸体却消失了 15年后，因为上司的责骂所以把他杀了 然后把尸体丢到屋外的井里 第二天再去看的时候，尸体却消失了 20年后，因为厌倦照顾那个行动不便的母亲所以把她杀了 然后把尸体丢到屋外的井里 第二天再去看的时候，尸体却没有消失 第三天、第四天，之后每一天都去看... 尸体都没有消失",
"有一家三口刚搬进他们的新家 虽然有些老旧，不过能够找到如此便宜的平房十分难得啊! 一直以来都住在空间狭小的公寓 如今甚至还有个小庭院，能搬到这里真的是太好了! 一家人就这样在新家开始生活 大约一个月后 有一天夜晚，妻子又开始说出 「我觉得这房子有问题!」这样的话 这不是第一次了! 「一定又是你想太多了吧? 虽然这间房子很便宜，但并不表示....」 丈夫还未说完，就发现妻子的脸色不太对劲 妻子脸色铁青望向窗外的庭院 只见男孩很开心的在庭院里玩着 丈夫也看了看窗外 「你到底怎麽啦!根本没什麽特别的吧?」丈夫说",
"某天，有一个住在地方的六岁小女童行踪不明。 不管怎麽找都找不到，**在各地配置临检也是始终都没找到。 **也放弃了。 一个月后，不肯放弃的父母重金请了在美国的有名透视能力者。 马上的双亲就要求透视女儿的下落。 透视能力者开始了透视。 好像明白了什麽的透视能力者说了一句 「这孩子很有精神」 这句话让父母非常的高兴。 「在这孩子的周围看到了许多豪华的家具，能清楚明白是在一个富裕的家里面」 虽然对这句话多少有点疑问感但还是很高兴。 然后母亲紧接着深入重点 「女儿现在在哪里？」激动的口调问 透视能力者说了一句 「你的女儿现在在世界各地」",
"某个女孩子在地下室的图书室里费尽心力找到了她喜爱的书。 发现到那孩子的老师，在关上门之后就回去了。 今天是结业式，明天开始就是暑假。 门要从外面才能被打开，没有钥匙的话就没有办法出去。 那孩子用一种''因为有最喜欢的书陪伴，一点都不可怕''的心态 每天都写下了日记 暑假结束后老师前往地下室图书馆，发觉女孩已经死了。 读女孩所写下来的日记 「我一点都不觉得恐怖，因为有书陪伴着我。」 「不过只有一点真的很可怕，那个从钥匙孔看过来的眼睛真的很可怕...」",
"包柏?史密斯是我的助理工程师。他总是 专注在自己的份内的工作。另一方面包柏的同事 整天都沉浸在聊天打屁当中。浪费在公司的时间。包柏他 都很积极地在帮忙同事的工作。要是没有他的帮忙 工作绝对无法如期完成。不只如此，包柏他 在到休息时间之前，都埋在工作之中，其他的家伙 都在偷懒一直休息。包柏他对于职务与专门领域的知识 非常的丰富，但对这件事充满自傲的行为他 完全不会，如果包柏不在这个公司的话 工作就会停滞不前。如果改善对他的待遇 对 公司是非常有益的。承前，请立即将包柏 提拔为我们公司的干部，请依此提案 处理 进行。 project leader上",
"小华前些日子生病住院了，好友小明跟大明决定去医院探望他 跟护士问到哪间病房后，得知小华住在私人高级病房 (病房前) 小明 ： 「他把门锁上了..」 大明 ：「那就敲门呀，笨喔」 (敲门) 过了10来秒，门才渐渐打开，小明跟大明则迫不及待的走进去看小华了 提着水果篮，发现小华坐在床上看着天花板发呆，于是小明跟大明就跟他打闹瞎起哄~ 小华 ： 「谢谢你们来探望我，我很开心...」 小明跟大明 ：「朋友一场，哪需要那么客气~~」",
"各位朋友，你听说过「杀人影片」这种东西吗？ 那是一种在片里加入大量虐杀剧情，只有熟人才知道的地下影片。 有人说，这种影片甚至是凶手自己拍摄的真实杀人事件。 某天和我一起喝酒的朋友，说他手上有这类怪异影带 就好像老饕会拼死去吃河豚和毒蝎这样的珍馐 自认胆子颇大又充满好奇心的我，依旧希望能看到这样的东西 于是他约我在山上的隐蔽小屋，让我观看这样稀奇的影带 兴奋不已的我照约定准时的到了小屋 朋友却迟到了三十分钟，朋友脸红的笑着说 「抱歉、抱歉～因为我家的老三突然发烧了」 朋友放了期待的影片，背景充满令人鼻酸的哭闹和颤抖的笑声 是一个大约十岁的小孩，被凶手一刀一刀切割成碎片的悲惨故事 因为剧情实在是太过惨烈，我看到一半就后悔的把电视关掉 正所谓好奇心会杀死一只猫，提出想看影片的我真是罪该万死 看完后，我用着非常大声的声音像朋友不满的问说 「这种影片你居然看的下去，你不是自己也有孩子吗？」 面对着我那愤慨的问题，朋友漫不经心的回答了一句话 「对啊，有两个啊。但是，那又怎么样？」 听到朋友这句冷酷的话的我，脸色惨白的跌坐在一旁的沙发上。",
"差不多到了要出门的时间看了一下时钟已经快要黄昏了!我却连脸都还没洗呢!虽然觉得很麻烦但还是没有办法啊......我打开洗脸盆的水龙头用清水把脸沾湿然后把洗面奶倒在掌心双手磨擦让它起泡之后在两颊打圈按摩把洗面奶涂满脸上排水管里一直传来'咕噜咕噜'的流水声是候把泡沫洗干净了我用手去寻找水源咦?在哪?为什么我的手碰不到任何水呢?这时泡沫却流进我的眼睛让我不能直接用双眼去找水龙头... 水龙头在哪啊?啊啊...终于摸到水龙头了我把水龙头打开让它流出清水然后用水把脸上的泡沫洗干净用毛巾把脸擦干再把水龙头关掉啊...怎么感觉厕所的镜子看起来有点恐怖呢......接着我连胡子也还没剃就从家里逃走似的跑出来了",
"汤姆很期待来自圣诞老人送来的圣诞礼物。在汤姆早上起床之后，他看到圣诞树下放着三只礼物盒。汤姆注意到圣诞老人正在窗户外面偷看着他，圣诞老人虽然对着他露出牙齿笑着，却一直注视着他。而汤姆虽然觉得有点不高兴，却也一边露出牙齿对着他笑着，一边来到礼物盒旁边。汤姆拿起了第一个礼物盒，此时圣诞老人笑得更开心了。从第一个礼物盒里面，汤姆拿出了一条长裤。虽然汤姆觉得有点失望，但是还是继续打开第二个礼物盒。这时候圣诞老人开始抱着肚子笑起来了。第二个礼物盒里面，汤姆从里头取出一颗足球。汤姆渐渐地觉得不开心了甚至有种被激怒的感觉。最后，汤姆总算把第三个礼物箱，也就是最大的礼物盒打开了。这时最大的礼物箱里面跑出了一台脚踏车，在脚踏车出来的同时，圣诞老人终于忍不住在外面的雪地上打滚并哈哈大笑。而汤姆也终于忍耐不住，在圣诞树旁开始号啕大哭。",
"他恨死那条狗了。 不知道哪里来的野狗，又高又瘦，叫声大得吓死人，还有一双恶狠狠的红眼睛。 小区里那么多人，这条破狗见到其他人都是摇尾乞怜，温顺驯服，大家都很喜欢它， 唯独见到他时就会露出凶残的本＃， 追着他咆哮、撕咬， 一直到他飞速逃进楼道里为止。 每次他躲在楼道门后面，听着高亢的狗叫声，心脏跳得象奔跑的野马的时候， 都想亲手宰了那条狗。 他终于下手了，用一支朋友的气腔，装上浸过毒鼠强的子弹，轻松结束了野狗那卑贱的生命。 今天晚上回到小区时，他昂首挺胸，闲庭信步。",
"某个地方发生了大地震 当作临时避难所的小学挤满了人，想睡觉却觉得吵闹而且闷热无法入睡 想说出去吹个凉结果发现了一栋没开着灯的建筑物 里面很凉爽而且很安静所以有很多人躺在那边 就决定睡这里了! 过了不久却发现了不太对劲的地方，太安静了… 我冲出了那栋建筑物.",
"我们两个人都是大学的学生，美术班的同学，同时也是很要好的朋友。但是不知道为什么，自从学校要进行美术展览的时候，她就突然失了联系。一直到美术展的前几天，我接到了她打来的电话。「对不起了，缘，看来我没办法完成美术展览要用的雕像...」「什么？怎么了？」「还剩下手跟脸颊的部分，就拜托你了。」电话挂断了。美术展的前一天，我接到了P0LICE打来的电话，通知的是她的死亡。她已经死了快两个礼拜了。不可能啊？前几天我才接到电话！跟着案发到了现场，尸体倒在地上，死法是因为肚子内的脏器全部被掏空，凶手非常的狠毒，她的胸口到腹部的肌肉跟骨头都被挖掉了。房间的一角，摆着一个雕像，仔细一看是放在美术教室的那个雕像，头有着人的形状，但是是全白的，两肩没有手，反而肚子上的石头有被割开的痕迹，做成了盖子。基于好奇心，我趁P0LICE不注意的时候，掀开了雕像的肚子。但我马上感到了恐惧，立刻丢下盖子，转身走离她的房间。",
"我和友人A及B三人，半夜到几年前曾发生残杀案件的房子试胆。 「喂、听说不是残杀吗?怨念应该很重吧好恐怖」 「是啊，听说很悲惨。不但乱刀砍死，还被分尸...而且凶手还没被抓到呢」 「但是A啊，你平常不是常自夸幽灵之类的你根本不怕吗?」 ...边聊著这些，边拿著手电筒四处探视。 意外仍保持乾净的厨房、还有散乱著坐垫应该是客厅的房间，以及佛坛门敞开的佛堂...... 感觉看了就不舒服，且并未实际体验到什麼灵异现象，於是大家就离开了房屋。 「喂，我没看到什麼幽灵之类的东西，你看到了吗?」 「没啊，我也什～麼都没看到，你看到了吗?」 「我也完全没看到喔。」 「我也是，什麼也没看到喔」 结果似乎什麼也没发生的样子。 稍微有点失望，不过总算安心了",
"某天，我和朋友一起去山上露营 因为在山路走了太久的我，头变的昏昏沉沉的。 在回营区的帐篷的时候，路上经过一条很长的吊桥 吊桥下是水流非常湍急的溪谷，要是掉下去不死也半条命 虽然如此，但是我因为身上的疲劳而没有注意太多 结果走到中间，一块木板突然断掉而坠落到吊桥下 而吊桥下面正好有铺设安全的网子，让我捡回了一条命。 听到我的悲鸣的朋友立刻来到吊桥，把我拉上岸边 惊慌失措的我说着「我以为我死定了」，朋友却漫不经心的回答 「只要没事那就好，真是的！早该叫他们把绳子给修好的…」.",
"林娟很小就辍学出来打工，很多工作她都做过。这一次，她在一家玩具厂上班，公司包吃住。她感觉这家公司的工资待遇都很好，只是对宿有点不太满意，洗澡不方便，宿舍里没有配备浴室，每个人都要去公共洗澡房洗澡。林娟被安排住在三楼，每一层都配有一个洗澡房，洗澡房里总共有六个洗澡位。搬来宿舍的第一天晚上，林娟来到洗澡房洗澡，洗着洗着，她隐约听到洗澡房里有人在低声地哼着小曲。声音虽小，唱得很好听。有些老歌林娟也会唱，于是有时候她也会跟着唱了起来。几乎每次林娟来洗澡，她都会听到这美妙的歌声。她很想知道那个人是，但似乎每次那个人都会比她先洗完澡，所以她一直没有机会看到那个人的真面目。一天晚上，林娟和五个姐妹有说有笑地来到洗澡房洗澡，她们有一句没一句地聊着。就在这时，熟悉的歌声又在林娟的耳边响起了。林娟也自然而然地跟着唱了起来，她的五个姐妹都开玩笑说林娟唱难听，没别人唱得好听呢。第二天，林娟就搬走了，她在附近租了间房子。现在想起来，林娟还有些后怕呢。",
"我是一名业余记者，一次有幸被派到**博物馆采集信息。在进行参观拍照的时候，我不小心闯进了博物馆的地下暗道，迷失了方向。暗道里光线很暗，我只好打开摄像灯，帮助指引我找到出路。不知不觉地，我走进了一条很长的通道，通道的四周挂满了橱窗，里面都是一些动物标本。我仔细端详着这些标本，有猫头鹰，蛇，羚羊，老虎，狮子……种类很多，形态各异，我一个个地仔细观察并拍照，然而，当我将灯光靠我左手边的一个标本时，却被眼前的一幕吓了一跳。一具肚子被掏空，皮肤干瘪，略见骨头，眼睛却炯炯有神的尸体摆在我的眼前！这是一个性人体标本！我下意识地后退几步，虽然这里有人体标本并不足为奇，也许很多人都见过，但我确实是第一次看到这么恐怖的东西，所以心里面多少有些畏惧。匆忙拍下几张照片（这是职业病），就快速往前走了。希望能早点找到出口，赶紧离开这种地方。然而前面却没路了，我只好又往回走。这一次，我在我的左手边又看到了刚才那个标本，那个在我眼里看似无比诡异的人体标本！后来我发现，我竟逃不出去了！",
"的哥老魏无奈地看了看手表，还有五分钟就到晚上12点了。今天收获不理想啊。老魏叹了口气，开着出租车准备回家。经过一家医院的时候，老魏看见医院门口有个年轻的女孩向他招手。老魏让女孩上了车。“新星街14号，谢谢！”女孩的声音很阴沉，仿佛就是从一个80岁的老人发出来的声音。一路上，车里面很安静，老魏也没有说太多的话。因为老魏看得出，女孩好像心事很重。经过一片树林的时候，老魏再也忍不住了。他关心地问道：“小姐，你是不是有什么心事？”“我……我得了肺癌，已经晚期了。”“可惜呀！还这么年轻就……”“死于1997年，就永远都是18岁了！”老魏苦笑了几声，看着前面昏黄的道路，继续开着。",
"6月的尾声、一位住在公寓的大学生、以腐败尸体的状态被发现了。叫来了他的哥哥胜巳,确认身份之后，播放了电话留言。3月14日-母亲 往事、中间就切断了。3月16日-友人 旅行的邀请。3月21日-父亲 祖父想和你见面。4月25日-友人 去大学露脸一下吧。5月1日-母亲 联络胜巳吧。到此就结束了「你父母怎麼都在两点以后才打来呢...」员警向胜巳嘀咕著「我的父母、在我们很小时就死了???」",
"我出了家门发现路上竟然没有一个行人我坐上了公交车往日拥挤的车厢竟然也是空荡荡的到了公司惊奇的发现经常迟到的我今天竟然是第一个到的突然我想起了一件事，惊恐的尖叫起来",
"清明节放假，大家都回家扫墓了。宿舍里剩我一个人，有些无聊，于是去网吧打发时间。游戏 玩得正起兴，突然窗口弹出一条陌生的QQ信息，通常这种情况我都不予理睬的，可是它一直在响，企鹅跳个不停。迫于无奈，也好奇她会有什么话跟我说，于是看了信息。认真浏览了所有的内容，主要都是说她昨天晚上如何如何遇到了一年前死去的男友，问我该怎么办。瞎扯！世哪有鬼！我心里想觉得可笑，多半是寂寞找人聊天来着。我安慰了几句也就没再理她。回来的时候已经很晚，赶紧的洗了个澡就上床睡觉了。半夜里我从梦中惊醒！笃，笃，笃……好像是敲门声！“小伟，你有没有听见敲门声？”“哦。”可能是幻觉吧，我安慰自己。我翻了个身，突然定住了，再也没有了倦意！",
"史上最恐怖的一个谜语，谁能答对………………一天，一个杀人犯把她的妈妈在大街上杀了。而旁边一个小男孩惊恐的看着。杀人犯让小男孩快走，并威胁他。小男孩只说了一句话……那个杀人犯的吓死了请问小男孩说的是什么呢",
"一向多疑的秦先生被发现死在自己家里，死因是吃了大量的安眠药所致，经现场勘察，他属于自杀。没人知道他为什么会自杀，不过在他的床头发现了一本日记，日记里最后一天的内容很怪异，是这样子的：　　080215，晴　　我想这是我最后一次在日记里倾诉自己的心声了。　　错误，我犯了一个永远也无法宽恕的错误。　　想自杀来弥补一切却发现这是种多么可笑多么肮脏的偿还！　　贤惠的妻子苦苦忍受了恶魔8年的猜忌。　　我决定于子时释放我的灵魂，那不配拥有肉体的灵魂！　　为能够保全尸首我选择了这种方式来解脱自己，我不想看到自己的身上再沾上任何鲜血。　　恳求大家将我埋在一处安静的地方，虽然我知道自己早已经没资格这样说。　　显然此时多余的后悔并不能挽救什么，也不期望心灵会得到上天的救赎。　　我犹如静静躺在医院里的植物人，唯一不同的是，他们被善良所支配，我被恶魔所控制。　　——日记结束　　后来，人们找到了他的妻子。",
"、妈妈！我回来了小元是个非常听话懂事的孩子，妈妈体弱多病，常年卧病在床。他每天回家的时候都会冲着妈妈的卧室喊一声高：“妈妈！我回来了。”说完就跑进自己屋子写作业，写完作业就会钻进厨房做饭。小元是个非常听话懂事的孩子，妈妈体弱多病，常年卧病在床。他每天回家的时候都会冲着妈妈的卧室喊一声高：“妈妈！我回来了。”说完跑进自己屋子写作业，写完作业就会钻进厨房做饭。这一日小元的妈妈发现小元回来的晚了一些，天都有些黑了，小元还没有到家。不免有焦急。就在她拿起电话想要给老师打电话的时候，门响了，紧接着响起了一声“妈妈！我回来了。”小元的妈妈这才安心的放下电话，可就在时她的电话却突然响了起来。她接起来一听是老公焦急的声音：“孩子妈，你别急，听我说，小元他出车祸了，如今昏迷不醒，正在抢救……”话怕的一声掉在了地上，小元妈挣扎着下了地，拄着双拐打开卧室的门。她看见房门是打开的，一阵阵冷风从门口飕飕的灌进来。那声：“妈！我回来了。”似乎还在她耳边徘徊，她一急站立不稳差点摔倒，一双冰冷的手，及时扶住了她。她扭头，身后空无一人。",
"小宁最近很喜欢剪指甲，走近她身边常会听到「喀喀」的声音。　　「这指甲剪是我男朋友送我的喔，他说我可以把剪指甲当作剪掉不愉快的事，剪完了心情就会变好了。」她甜蜜的笑着。　　可不久后，他提出了分手。她开始以泪洗面，哭累了，就拿出他送的指甲剪，一点一点开始剪指甲，「我要把他忘掉，剪掉了就忘了，我要忘记他…」之后，她就没来上班了。　　几天后，小远上洗手间时，突然听到隔壁的厕所不断传来剪指甲的「喀喀」声。　　「小宁，是你吗？」几声询问都没有响应后，小远好奇的蹲下了身子，想看看隔壁是谁；之后，只知道她发狂尖叫冲出了厕所。　　工友开了门，在惊恐的众人眼前，只看到一只拿着指甲剪的手，以及满地指甲剪剪下，一人份的碎肉",
"那是我在非洲拍摄风景时发生的事，我当时用望远镜看到很远的一边的大树（不是猴面包树，普通的树木而已），有十个当地人待在那上，望着下方。我跟着看那下面，那下方有群狮子悠哉的待着，它们附近还掉落有一顶帽子。我再看看树上，那群人也都戴着跟那顶同样款式的帽子。“哈哈，真倒楣的家伙，帽子刚好掉在狮群附近，这下子捡不回来了。我笑了笑，把望远镜转到别的方向。,圣诞老公公 哇~谢谢爸爸阿!!不是爸爸,是圣诞老公公给的,对吧 妈妈??喝喝~~一定是这样的圣诞老公公我最喜欢圣诞老公公了我呀 如果长大的话也要成为圣诞老公公 今天我要一直玩 一直玩刚拿到的新玩具 喀咚嗳,什么声音... 爸爸是圣诞老公公 妈妈是圣诞老公公 那圣诞老公公是谁... 阿我也是圣诞老公公 阿哈哈哈",
"有一对双胞胎姊妹被绑架了两姊妹的双眼和嘴巴都被犯人用胶带封住 犯人在姐姐的耳边低声说「如果你尝试抵抗或者逃跑我就会杀掉你的妹妹」 然后犯人在妹妹的耳边低声说「如果你尝试抵抗或者逃跑我就会杀掉你的姐姐",
"刚刚，那个价值8000元的耳机突然坏了 是因为我不断用最大音量听音乐的关系吧? 突然「啪嚓」一声就坏了我生气地把它掷到那个价值4万元的电视上 然后立刻就后悔了心想「不会就这样坏了吧」的我一边打开电视的电源 影像方面是没有问题可是却没有声音了 太差劲了 连4万元的电视都坏了 话说回来今天外面也出奇地安静呢 还是出去散散步转换一下心情吧",
"越战结束后返国的前夜，青年士兵打电话回家「明天就能回去了，我想带个无依无靠的战友回去，能让他跟我们一起住在家里吗」 听到儿子能够回来的消息非常高兴的双亲，「当然没问题！」喜极而泣的回答「但是，有件事情得要先讲，他在作战中误踩地雷，失去了一只手和一条腿，但即使如此我还是想带他回家」听到这句话，双亲沉默下来「如果只是几天的话还没关系，照顾残障者很辛苦的，在家里的期，一起去找那位朋友的居所吧。你和我们都各自有自己的人生，要牺牲自己照顾那位朋友一辈子是不可能的」儿子听完之后不发一语挂上电话 隔天，**打来了一通电话退役士兵的父母被告知自己儿子从屋顶跳落坠死的消息 双亲看着尸体说不出话来，崩溃大哭",
"某天跟朋友两个人聊天说着说着，就突然提到很久没去拍灵异照片了。附近的山路里发生惨案的民宅现在还保存着。两个人晚上就前去了。 经过了玄关 客厅 浴室 厕所 厨房到了父亲的房间 走上楼梯往二楼去。 然后是小孩的房间 阳台 妈妈的房间 再回到一楼两个人都走过一遍才离开 然后到了今天 看了洗出来的相片后我们都吓了一跳 什么也没照到。我们当然是普通地拍但是灵体之类的东西都没照到 「**不奇怪吗？」「大概是已经成佛了吧」「果然是这样啊 那样的话那里已经拍不到灵异照片了」「不一定唷 我们去的路上不是有一家满孤立的民宅吗 下次去那里吧」 「喔喔! 真的吗? 那里也是废墟?」「怎么可能 有人住着啦 今天晚上就去吧」 「OK 我知道了 今天我准备好就去吧」 真是期待啊 很久没体验了所以很兴奋呢",
"确认脑死后的两个礼拜，他的皮肤连接了无数的接管，靠着人工呼吸器及点滴维持生命。 不过这也只是昨天的事了，他现在已经死了．“非常抱歉。我已经尽力了...”医生用非常悲伤的表情这么说着。当我抱着他的尸体时，非常地轻，他一定很痛苦吧。 不过，已经不用再痛苦了吧？因为已经解脱了。 “不需要给我治疗费用”发现到绝对不算是富裕的我的状况，真是个多么善良的医生啊。 “看着遗体很难受吧”医生盖上了白布。“一切的回忆就跟他一起烧掉忘却吧” 这句话让我重振了起来 谢谢你，医生。",
"友人「真的很抱歉」 我「喂 住手啊!」友人「妹妹...我妹妹生病了....我需要钱」 我「你没事吧? 冷静下来」 友人「...谢谢...」我「我这里有10万元 可以的话就借给你吧」 友人「真的很谢谢你...那个...怎么说呢」 我「我的晚餐还有剩不介意的话就吃吧」 友人「谢谢...」我「在说什么啊 我们不是好朋友吗?」友人「其实我差点就想自杀了...多亏你」 我「别在意」友人「这么晚真是抱歉啊」",
"大概两年前，有个住在附近镇上的女孩跟我搭讪。虽然是高中的同学个性也很好不过长相不是我的菜，我都优柔寡断的拒绝跟她交往。 那段时间我的工作也很不顺，坏事接二连三我的母亲也死于事故了。我一点也不想被同情，所以完全没跟别人讲这件事一个人独自沉寂着。 母亲死去的那晚，那个女生打电话来。 你的母亲似乎过世了...虽然我之前也都没提过，我的母亲也过世了..就在昨天。从家里的楼梯上跌下来..咦?我们都一样呢我似乎感觉被这句话救赎了我觉得她一定能了解我不需要被同情的心情只是想要有人能依赖被压抑的心情一次释放了出来，我大哭了一场。连我的这种丑态她也愿意一哭，不知不觉我就爱上她了。 这就是我跟太太相识的过程。",
"6月的尾声，一位住在公寓的大学生、以腐败尸体的状态被发现了。 叫来了他的哥哥胜巳,确认身份之后，播放了电话留言。3月14日-母亲：往事、中间就切断了。 3月16日-友人： 旅行的邀请。3月21日-父亲： 祖父想和你见面。 4月25日-友人： 去大学露脸一下吧。 5月1日-母亲： 联络胜巳吧。 到此就结束了「你父母怎麼都在两点以后才打来呢...」 员警向胜巳嘀咕著「我的父母、在我们很小时就死了???」",
"美术教室有一天我一个人被分配到打扫美术教室。教室里有一幅看起来很贵的画，画的是一个美女的肖像。 有点立体的材质，看起来栩栩如生。但她的眼睛大到好像一直在瞪我，我觉得有点诡异就赶快扫完回家了。 第二天到学校却引起了骚动。昨天那幅看起来很贵的画不见了！！『原来如此，所以你打扫的时候画还在罗？』『对啊～老师，那幅画是不是很贵啊？』『那幅《沉睡的女孩》是一位我认识的画家，画自己女儿睡觉时的样子而已，没有什麼特别价值啦！』 『原来如此…』结果最后那幅画还是没有找到，但不可思议的是，也没有小偷进入的痕迹……",
"学校附近的购物中心最近传出，有一个小女孩在厕所被**的消息 女孩被凌辱到子宫破裂，店家为了商誉因此用钱把事情压下来 考虑到学生的心情和安全，学校的家长会长特别向店长用电话询问 「事情已经在学生间传开了…请问真的有这种事情吗？还是只是谣言？」 店长非常直接回答说「根本就没有这种事情，您别听人家乱讲啦！」 「我们从开店时就在店里的每间厕所都装了监视器，我已经用我的双眼 一间一间的确认过了，这些事情都是空穴来风，请您千万不要担心！」 得知是谣言后，会长非常有礼貌的向店长道歉并承诺向学生们说明 但在挂下电话后，会长的脸瞬间从满足的微笑转为惊悚的惨白…"
]




export class cszs extends plugin {
  constructor () {
    super({
      name: '土块测试智商',
      dsc: '土块测试智商',
      event: 'message',
      priority: 1145,
      rule: [
        
		
		{
			reg:"^#测试智商$",
			fnc:'czs'
		}

      ]
    })
  }
  async czs(e){
	  
	  
	  
    //<p>([\s\S]*?)</p>
    //href="(.*)" class="question
    e.reply('想测试自己是不是笨比吗？好，等等我给你找找题')
	
	let a = Math.floor(Math.random() * 2);
	if(a==0){
		 let i =Math.floor(Math.random()*shuju.length)
	  console.log(i)
	  
	  e.reply(shuju[i])
	  return
		
	}
	
	
    //http://www.iqsuperman.net/page/2
	
	
    let n = Math.floor(Math.random() * 13);

    let url = 'http://www.iqsuperman.net/question-category/classic/page/'+String(n)

    let res = await fetch(url)
    res = await res.text()
    let liebiao = res.match(/href="(.*?)" class="question/g);
    for (let b = 0; b < liebiao.length; b++) {
      liebiao[b] = liebiao[b].replace(/href="/g, "").trim();
      liebiao[b] = liebiao[b].replace(/" class="question/g, "").trim();
      
  }
  let i = Math.floor(Math.random() * liebiao.length);
  let url2 =  liebiao[i]

  let res2 =  await fetch(url2)
  res2 = await res2.text()
  let liebiao2 = res2.match(/<p>([\s\S]*?)<div /g);
  //http://www(.*?)" alt
  let tup = res2.match(/http:\/\/www(.*?)" alt/g);
  for (let b = 0; b < tup.length; b++) {
    tup[b] = tup[b].replace(/" alt/g, "").trim();
   
    
}

 
  


  for (let b = 0; b < liebiao2.length; b++) {
    liebiao2[b] = liebiao2[b].replace(/<br \/>/g, "").trim();
    liebiao2[b] = liebiao2[b].replace(/<p>/g, "").trim();
    liebiao2[b] = liebiao2[b].replace(/<\/p><div/g, "").trim();
    liebiao2[b] = liebiao2[b].replace(/<div/g, "").trim();
    
}

 let tu = tup[0]
  if(tu.includes('class')){
   
    let msg = liebiao2[1]
    e.reply(msg)
  }else{
    console.log(tu)
    console.log(liebiao2[1])
    tu = segment.image(tup[0])
    let msg = liebiao2[1]
    e.reply([msg,tu])


  }
 

    
    



  }
  
 
  
  
  
  
}