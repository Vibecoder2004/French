/**
 * 法语复习 - 数据仓库 (DataStore)
 * 包含：动词列表、变位规则、语法常量、课文原文、课后习题
 * 来源：法语复习(3).html
 */

// ============================================================
// 1. 基础配置与动词列表
// ============================================================

window.PRON_ORDER = ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"];

// 完整动词库
window.VERB_LIST = [
  "être", "avoir", "aller", "faire", "venir", "savoir", "devoir", "vouloir", "pouvoir", 
  "falloir (il faut)", "pleuvoir (il pleut)", "ouvrir", "sortir", "partir", "dire", "lire", 
  "écrire", "attendre", "répondre", "perdre", "vendre", "rendre", "prendre", "apprendre", 
  "comprendre", "boire", "mettre", "connaître", "vivre", "voir", "(s’)asseoir", "sourire", 
  "recevoir", "admettre", "apparaître", "atteindre", "battre", "conduire", "construire", 
  "contenir", "découvrir", "devenir", "éteindre", "entretenir", "inscrire", "naître", 
  "obtenir", "parcourir", "permettre", "plaindre", "poursuivre", "reconnaître", "réduire", 
  "résoudre", "suffire", "suivre", "valoir", "croire"
];

// 高频动词库（用于重点练习）
window.HF_VERB_LIST = [
  "être", "avoir", "aller", "faire", "venir", "savoir", "devoir", "vouloir", "pouvoir", 
  "falloir (il faut)", "pleuvoir (il pleut)", "ouvrir", "sortir", "partir", "dire", "lire", 
  "écrire", "attendre", "répondre", "perdre", "vendre", "rendre", "prendre", "apprendre", 
  "comprendre", "boire", "mettre", "connaître", "vivre", "voir"
];

// ============================================================
// 2. 语法规则与变位表 (Grammar & Conjugation)
// ============================================================

// 助动词为 Être 的动词集合
window.ETRE_VERBS = new Set(["aller", "venir", "devenir", "partir", "sortir", "naître"]);

// 直陈式现在时变位表 (Présent)
window.PRESENT = {
  "être": {"je": ["suis"], "tu": ["es"], "il/elle/on": ["est"], "nous": ["sommes"], "vous": ["êtes", "etes"], "ils/elles": ["sont"]},
  "avoir": {"je": ["ai", "j ai", "j' ai", "j\u2019ai"], "tu": ["as"], "il/elle/on": ["a"], "nous": ["avons"], "vous": ["avez"], "ils/elles": ["ont"]},
  "aller": {"je": ["vais"], "tu": ["vas"], "il/elle/on": ["va"], "nous": ["allons"], "vous": ["allez"], "ils/elles": ["vont"]},
  "faire": {"je": ["fais"], "tu": ["fais"], "il/elle/on": ["fait"], "nous": ["faisons"], "vous": ["faites"], "ils/elles": ["font"]},
  "venir": {"je": ["viens"], "tu": ["viens"], "il/elle/on": ["vient"], "nous": ["venons"], "vous": ["venez"], "ils/elles": ["viennent"]},
  "savoir": {"je": ["sais"], "tu": ["sais"], "il/elle/on": ["sait"], "nous": ["savons"], "vous": ["savez"], "ils/elles": ["savent"]},
  "devoir": {"je": ["dois"], "tu": ["dois"], "il/elle/on": ["doit"], "nous": ["devons"], "vous": ["devez"], "ils/elles": ["doivent"]},
  "vouloir": {"je": ["veux"], "tu": ["veux"], "il/elle/on": ["veut"], "nous": ["voulons"], "vous": ["voulez"], "ils/elles": ["veulent"]},
  "pouvoir": {"je": ["peux", "puis"], "tu": ["peux"], "il/elle/on": ["peut"], "nous": ["pouvons"], "vous": ["pouvez"], "ils/elles": ["peuvent"]},
  "falloir (il faut)": {"il/elle/on": ["faut"]},
  "pleuvoir (il pleut)": {"il/elle/on": ["pleut"]},
  "ouvrir": {"je": ["ouvre"], "tu": ["ouvres"], "il/elle/on": ["ouvre"], "nous": ["ouvrons"], "vous": ["ouvrez"], "ils/elles": ["ouvrent"]},
  "sortir": {"je": ["sors"], "tu": ["sors"], "il/elle/on": ["sort"], "nous": ["sortons"], "vous": ["sortez"], "ils/elles": ["sortent"]},
  "partir": {"je": ["pars"], "tu": ["pars"], "il/elle/on": ["part"], "nous": ["partons"], "vous": ["partez"], "ils/elles": ["partent"]},
  "dire": {"je": ["dis"], "tu": ["dis"], "il/elle/on": ["dit"], "nous": ["disons"], "vous": ["dites"], "ils/elles": ["disent"]},
  "lire": {"je": ["lis"], "tu": ["lis"], "il/elle/on": ["lit"], "nous": ["lisons"], "vous": ["lisez"], "ils/elles": ["lisent"]},
  "écrire": {"je": ["écris", "ecris"], "tu": ["écris", "ecris"], "il/elle/on": ["écrit", "ecrit"], "nous": ["écrivons", "ecrivons"], "vous": ["écrivez", "ecrivez"], "ils/elles": ["écrivent", "ecrivent"]},
  "attendre": {"je": ["attends"], "tu": ["attends"], "il/elle/on": ["attend"], "nous": ["attendons"], "vous": ["attendez"], "ils/elles": ["attendent"]},
  "répondre": {"je": ["réponds", "reponds"], "tu": ["réponds", "reponds"], "il/elle/on": ["répond", "repond"], "nous": ["répondons", "repondons"], "vous": ["répondez", "repondez"], "ils/elles": ["répondent", "repondent"]},
  "perdre": {"je": ["perds"], "tu": ["perds"], "il/elle/on": ["perd"], "nous": ["perdons"], "vous": ["perdez"], "ils/elles": ["perdent"]},
  "vendre": {"je": ["vends"], "tu": ["vends"], "il/elle/on": ["vend"], "nous": ["vendons"], "vous": ["vendez"], "ils/elles": ["vendent"]},
  "rendre": {"je": ["rends"], "tu": ["rends"], "il/elle/on": ["rend"], "nous": ["rendons"], "vous": ["rendez"], "ils/elles": ["rendent"]},
  "prendre": {"je": ["prends"], "tu": ["prends"], "il/elle/on": ["prend"], "nous": ["prenons"], "vous": ["prenez"], "ils/elles": ["prennent"]},
  "apprendre": {"je": ["apprends"], "tu": ["apprends"], "il/elle/on": ["apprend"], "nous": ["apprenons"], "vous": ["apprenez"], "ils/elles": ["apprennent"]},
  "comprendre": {"je": ["comprends"], "tu": ["comprends"], "il/elle/on": ["comprend"], "nous": ["comprenons"], "vous": ["comprenez"], "ils/elles": ["comprennent"]},
  "boire": {"je": ["bois"], "tu": ["bois"], "il/elle/on": ["boit"], "nous": ["buvons"], "vous": ["buvez"], "ils/elles": ["boivent"]},
  "mettre": {"je": ["mets"], "tu": ["mets"], "il/elle/on": ["met"], "nous": ["mettons"], "vous": ["mettez"], "ils/elles": ["mettent"]},
  "connaître": {"je": ["connais"], "tu": ["connais"], "il/elle/on": ["connaît", "connait"], "nous": ["connaissons"], "vous": ["connaissez"], "ils/elles": ["connaissent"]},
  "vivre": {"je": ["vis"], "tu": ["vis"], "il/elle/on": ["vit"], "nous": ["vivons"], "vous": ["vivez"], "ils/elles": ["vivent"]},
  "voir": {"je": ["vois"], "tu": ["vois"], "il/elle/on": ["voit"], "nous": ["voyons"], "vous": ["voyez"], "ils/elles": ["voient"]},
  "(s’)asseoir": {"je": ["m'assieds", "m’assieds", "m assois", "m'assois", "m’assois"], "tu": ["t'assieds", "t’assieds", "t assois", "t'assois", "t’assois"], "il/elle/on": ["s'assied", "s’assied", "s assoit", "s'assoit", "s’assoit"], "nous": ["nous asseyons"], "vous": ["vous asseyez"], "ils/elles": ["s'assoient", "s’assoient"]},
  "sourire": {"je": ["souris"], "tu": ["souris"], "il/elle/on": ["sourit"], "nous": ["sourions"], "vous": ["souriez"], "ils/elles": ["sourient"]},
  "recevoir": {"je": ["reçois", "recois"], "tu": ["reçois", "recois"], "il/elle/on": ["reçoit", "recoit"], "nous": ["recevons"], "vous": ["recevez"], "ils/elles": ["reçoivent", "recoivent"]},
  "admettre": {"je": ["admets"], "tu": ["admets"], "il/elle/on": ["admet"], "nous": ["admettons"], "vous": ["admettez"], "ils/elles": ["admettent"]},
  "apparaître": {"je": ["apparais"], "tu": ["apparais"], "il/elle/on": ["apparaît", "apparait"], "nous": ["apparaissons"], "vous": ["apparaissez"], "ils/elles": ["apparaissent"]},
  "atteindre": {"je": ["atteins"], "tu": ["atteins"], "il/elle/on": ["atteint"], "nous": ["atteignons"], "vous": ["atteignez"], "ils/elles": ["atteignent"]},
  "battre": {"je": ["bats"], "tu": ["bats"], "il/elle/on": ["bat"], "nous": ["battons"], "vous": ["battez"], "ils/elles": ["battent"]},
  "conduire": {"je": ["conduis"], "tu": ["conduis"], "il/elle/on": ["conduit"], "nous": ["conduisons"], "vous": ["conduisez"], "ils/elles": ["conduisent"]},
  "construire": {"je": ["construis"], "tu": ["construis"], "il/elle/on": ["construit"], "nous": ["construisons"], "vous": ["construisez"], "ils/elles": ["construisent"]},
  "contenir": {"je": ["contiens"], "tu": ["contiens"], "il/elle/on": ["contient"], "nous": ["contenons"], "vous": ["contenez"], "ils/elles": ["contiennent"]},
  "découvrir": {"je": ["découvre", "decouvre"], "tu": ["découvres", "decouvres"], "il/elle/on": ["découvre", "decouvre"], "nous": ["découvrons", "decouvrons"], "vous": ["découvrez", "decouvrez"], "ils/elles": ["découvrent", "decouvrent"]},
  "devenir": {"je": ["deviens"], "tu": ["deviens"], "il/elle/on": ["devient"], "nous": ["devenons"], "vous": ["devenez"], "ils/elles": ["deviennent"]},
  "éteindre": {"je": ["éteins", "eteins"], "tu": ["éteins", "eteins"], "il/elle/on": ["éteint", "eteint"], "nous": ["éteignons", "eteignons"], "vous": ["éteignez", "eteignez"], "ils/elles": ["éteignent", "eteignent"]},
  "entretenir": {"je": ["entretiens"], "tu": ["entretiens"], "il/elle/on": ["entretient"], "nous": ["entretenons"], "vous": ["entretenez"], "ils/elles": ["entretiennent"]},
  "inscrire": {"je": ["inscris"], "tu": ["inscris"], "il/elle/on": ["inscrit"], "nous": ["inscrivons"], "vous": ["inscrivez"], "ils/elles": ["inscrivent"]},
  "naître": {"je": ["nais"], "tu": ["nais"], "il/elle/on": ["naît", "nait"], "nous": ["naissons"], "vous": ["naissez"], "ils/elles": ["naissent"]},
  "obtenir": {"je": ["obtiens"], "tu": ["obtiens"], "il/elle/on": ["obtient"], "nous": ["obtenons"], "vous": ["obtenez"], "ils/elles": ["obtiennent"]},
  "parcourir": {"je": ["parcours"], "tu": ["parcours"], "il/elle/on": ["parcourt"], "nous": ["parcourons"], "vous": ["parcourez"], "ils/elles": ["parcourent"]},
  "permettre": {"je": ["permets"], "tu": ["permets"], "il/elle/on": ["permet"], "nous": ["permettons"], "vous": ["permettez"], "ils/elles": ["permettent"]},
  "plaindre": {"je": ["plains"], "tu": ["plains"], "il/elle/on": ["plaint"], "nous": ["plaignons"], "vous": ["plaignez"], "ils/elles": ["plaignent"]},
  "poursuivre": {"je": ["poursuis"], "tu": ["poursuis"], "il/elle/on": ["poursuit"], "nous": ["poursuivons"], "vous": ["poursuivez"], "ils/elles": ["poursuivent"]},
  "reconnaître": {"je": ["reconnais"], "tu": ["reconnais"], "il/elle/on": ["reconnaît", "reconnait"], "nous": ["reconnaissons"], "vous": ["reconnaissez"], "ils/elles": ["reconnaissent"]},
  "réduire": {"je": ["réduis", "reduis"], "tu": ["réduis", "reduis"], "il/elle/on": ["réduit", "reduit"], "nous": ["réduisons", "reduisons"], "vous": ["réduisez", "reduisez"], "ils/elles": ["réduisent", "reduisent"]},
  "résoudre": {"je": ["résous", "resous"], "tu": ["résous", "resous"], "il/elle/on": ["résout", "resout"], "nous": ["résolvons"], "vous": ["résolvez"], "ils/elles": ["résolvent"]},
  "suffire": {"je": ["suffis"], "tu": ["suffis"], "il/elle/on": ["suffit"], "nous": ["suffisons"], "vous": ["suffisez"], "ils/elles": ["suffisent"]},
  "suivre": {"je": ["suis"], "tu": ["suis"], "il/elle/on": ["suit"], "nous": ["suivons"], "vous": ["suivez"], "ils/elles": ["suivent"]},
  "valoir": {"je": ["vaux"], "tu": ["vaux"], "il/elle/on": ["vaut"], "nous": ["valons"], "vous": ["valez"], "ils/elles": ["valent"]},
  "croire": {"je": ["crois"], "tu": ["crois"], "il/elle/on": ["croit"], "nous": ["croyons"], "vous": ["croyez"], "ils/elles": ["croient"]}
};

// 过去分词表 (Participe Passé)
window.PP = {
  "être": "été", "avoir": "eu", "aller": "allé", "faire": "fait", "venir": "venu", "savoir": "su", "devoir": "dû", "vouloir": "voulu", "pouvoir": "pu",
  "falloir (il faut)": "fallu", "pleuvoir (il pleut)": "plu", "ouvrir": "ouvert", "sortir": "sorti", "partir": "parti", "dire": "dit", "lire": "lu", "écrire": "écrit",
  "attendre": "attendu", "répondre": "répondu", "perdre": "perdu", "vendre": "vendu", "rendre": "rendu", "prendre": "pris", "apprendre": "appris", "comprendre": "compris",
  "boire": "bu", "mettre": "mis", "connaître": "connu", "vivre": "vécu", "voir": "vu", "(s’)asseoir": "assis", "sourire": "souri", "recevoir": "reçu", "admettre": "admis",
  "apparaître": "apparu", "atteindre": "atteint", "battre": "battu", "conduire": "conduit", "construire": "construit", "contenir": "contenu", "découvrir": "découvert",
  "devenir": "devenu", "éteindre": "éteint", "entretenir": "entretenu", "inscrire": "inscrit", "naître": "né", "obtenir": "obtenu", "parcourir": "parcouru", "permettre": "permis",
  "plaindre": "plaint", "poursuivre": "poursuivi", "reconnaître": "reconnu", "réduire": "réduit", "résoudre": "résolu", "suffire": "suffi", "suivre": "suivi", "valoir": "valu", "croire": "cru"
};

// 助动词变位 (Auxiliary)
window.AUX = {
  "avoir": {
    "pres": {"je": "ai", "tu": "as", "il/elle/on": "a", "nous": "avons", "vous": "avez", "ils/elles": "ont"},
    "imp": {"je": "avais", "tu": "avais", "il/elle/on": "avait", "nous": "avions", "vous": "aviez", "ils/elles": "avaient"},
    "fut": {"je": "aurai", "tu": "auras", "il/elle/on": "aura", "nous": "aurons", "vous": "aurez", "ils/elles": "auront"}
  },
  "être": {
    "pres": {"je": "suis", "tu": "es", "il/elle/on": "est", "nous": "sommes", "vous": "êtes", "ils/elles": "sont"},
    "imp": {"je": "étais", "tu": "étais", "il/elle/on": "était", "nous": "étions", "vous": "étiez", "ils/elles": "étaient"},
    "fut": {"je": "serai", "tu": "seras", "il/elle/on": "sera", "nous": "serons", "vous": "serez", "ils/elles": "seront"}
  }
};

// 简单将来时词干 (Futur Stem)
window.FUTUR_STEM = {
  "être":"ser","avoir":"aur","aller":"ir","faire":"fer","savoir":"saur","devoir":"devr","vouloir":"voudr","pouvoir":"pourr","voir":"verr",
  "recevoir":"recevr","connaître":"connaîtr","naître":"naîtr","venir":"viendr","devenir":"deviendr","contenir":"contiendr","entretenir":"entretiendr","obtenir":"obtiendr",
  "(s’)asseoir":"assiér","boire":"boir","courir":"courr","parcourir":"parcourr","valoir":"vaudr","pleuvoir (il pleut)":"pleuvr","falloir (il faut)":"faudr",
  "éteindre":"éteindr","atteindre":"atteindr","mettre":"mettr","admettre":"admettr","permettre":"permettr","prendre":"prendr","apprendre":"apprendr","comprendre":"comprendr",
  "battre":"battr","conduire":"conduir","construire":"construir","inscrire":"inscrir","écrire":"écrir","dire":"dir","lire":"lir","vivre":"vivr","suivre":"suivr",
  "sourire":"sourir","plaindre":"plaindr","réduire":"réduir","résoudre":"résoudr","vendre":"vendr","rendre":"rendr","perdre":"perdr","attendre":"attendr","répondre":"répondr",
  "ouvrir":"ouvrir","découvrir":"découvrir","sortir":"sortir","partir":"partir","poursuivre":"poursuivr","reconnaître":"reconnaîtr","apparaître":"apparaîtr","suffire":"suffir","croire":"croir"
};

// 时态词尾规则
window.FUTUR_END = {"je":"ai","tu":"as","il/elle/on":"a","nous":"ons","vous":"ez","ils/elles":"ont"};
window.IMP_END = {"je":"ais","tu":"ais","il/elle/on":"ait","nous":"ions","vous":"iez","ils/elles":"aient"};

// ============================================================
// 3. 课文与翻译 (Lessons)
// ============================================================

window.LESSONS_RAW = [
  {
    id: 'einstein',
    title: 'Einstein',
    fr: `En 1905, Einstein est entré un jour dans le bureau de poste de Berne. Il portait des vêtements très modestes et on le reconnaissait de loin à ses cheveux tout épais. Il s'est approché d'un guichet et a donné à l'employé une enveloppe jaune adressée à la revue scientifique de Leipzig. Dans cette enveloppe, il y avait environ trente feuilles de papier, fruit d'un énorme travail qui durait depuis plusieurs années. La revue en a publié le texte, et les savants du monde entier ont tremblé.
Le professeur Lademburg a dit un jour:« Il y a deux sortes de savants : d'abord Einstein, ensuite tous les autres. »
Einstein est né en 1879 à Ulm, petite ville d'Allemagne du Sud. Il était un enfant calme. Il préférait faire de longues promenades dans les bois. Il a gardé ce goût toute sa vie.
En classe, il ne se distinguait pas comme un élève actif: il parlait peu, et pour être sûr de ne pas se tromper, réfléchissait longtemps avant de répondre à une question. Pour Einstein, l'école était toujours une charge fatigante: maîtres et professeurs demandaient aux élèves d'apprendre par coeur règles, dates, noms et prénoms; lui, il pensait qu'il n'était pas utile de perdre son temps à étudier ce que l'on pouvait trouver dans les livres et les dictionnaires; il cherchait plutôt à connaître le pourquoi des choses.
Il a terminé tant bien que mal ses études au lycée. Depuis longtemps, il connaissait son avenir: la physique. Il a étudié les livres des plus grands savants et a travaillé nuit et jour dans le laboratoire de l'université.
En 1905, il a publié ses premiers travaux sur la célèbre théorie de la relativité. Depuis, le nom du grand savant était connu, même de ceux qui ne savaient rien de la science. On a découvert son nom et sa photo dans tous les journaux du monde. On l'a invité à donner des cours dans les plus grands instituts scientifiques; il s'est rendu en France, aux Pays-Bas, en Espagne, au Japon, en Russie, aux États-Unis.
En 1921, il a reçu le prix Nobel de physique. Et plus tard, il s'est rendu aux États-Unis, à Princeton (New Jersey), où il est devenu professeur à l'Institut d'études supérieures de cette ville.
En 1945, il a arrêté l'enseignement, mais a continué jusqu'à sa mort (le 18 avril 1955) les recherches qui lui étaient chères.`,
    cn: `1905年的一天，爱因斯坦走进伯尔尼的一家邮局。他衣着简朴，从那一头很浓密的头发，老远就能认出他来。他走近一个窗口，把一个黄色信封递给了工作人员，信是寄给莱比锡的一份科学杂志的。信封里约有30张纸，这是他多年来一项庞大研究的成果。杂志刊登了这篇文章，全世界的学者为之而震惊。
有一天，拉登布尔教授说：“有两种学者，首先是爱因斯坦这样的，然后是其他所有的学者。”
爱因斯坦1879年出生在乌尔姆，德国南部的一个小城市。他是一个安静的孩子。他喜欢在森林里长时间散步。他一生都保持着这个爱好。
在课堂上，他不是一个出众的活跃的学生：他很少说话，为了不出错，在回答问题前，他要长时间地思考。对爱因斯坦来说，学校始终是一个令人厌倦的负担；教师要求学生背出规则、日期、人的姓名；他却认为没有必要浪费时间学习在书和词典中能够找到的内容；他力求了解事物的来龙去脉。
他总算完成了中学学业。他早就确定了自己的未来：物理学。他研究最著名的学者的书，并夜以继日地在大学的实验室里工作。
1905年，他发表了著名的相对论的最初研究成果。从此，这位伟大的学者名扬四海，甚至连那些对科学一无所知的人都知道他的名字。在世界上所有的报刊上都能看到他的名字和照片。人们邀请他到最著名的科学研究机构讲课；他去过法国、荷兰、西班牙、日本、俄罗斯和美国。
1921年，他获得了诺贝尔物理学奖。随后，他去了美国新泽西州的普林斯顿，任普林斯顿高等研究院的教授。
1945年，他停止了授课，但是一直到他去世（1955年4月18日），他仍继续进行着他所钟爱的科学研究。`
  },
  {
    id: 'sports',
    title: 'Les sports des Français',
    fr: `Pour les Français, le sport est aussi important que le travail, car ils se sont rendu compte que le corps était aussi une machine et qu'il était nécessaire de l’entretenir. La plupart sont des sportifs ou fanatiques de sport. S’ils étaient en train de faire du sport, ce serait difficile de leur faire faire autre chose. Une entreprise, Sportlibre, a fait récemment une enquête sur ce sujet (en 2018). 
Voici le résultat.
Près de 55 % des Français déclarent aimer faire du sport.  
7 sur 10 des Français sont membres d’une association sportive.  
Environ 68 % des Français pratiquent une activité sportive au moins une fois par semaine.  
Plus d’un Français sur quatre déclare pratiquer une activité physique plusieurs fois par semaine ou tous les jours.  
Seuls 14 % des Français ne font jamais de sport.  
Le sport le plus pratiqué des Français est la randonnée, ensuite ce sont la course à pied et la natation. Viennent après le cyclisme, le fitness et le ski. Les sports collectifs (le football, le basket-ball et le volley-ball) sont quant à eux très peu pratiqués.  
Si les femmes et les hommes montrent un intérêt commun pour la randonnée (41 % et 40 % respectivement), les femmes sont particulièrement attirées par la natation, alors que les hommes font plus de footing. Les jeunes préfèrent la course à pied et le fitness.  
De plus, la pétanque, un jeu de boules pratiqué tout spécialement dans le Midi de la France, est nommée « sport national » tandis que le Tour de France, lui, attire tous les Français, et même les étrangers.  
Quelles sont leurs motivations ? Six Français sur dix pratiquent une activité sportive pour rester en forme et environ 42 % pour se détendre. Le sport est également une aide à la perte de poids pour un quart des Français. Près de 13 % des Français interrogés déclarent pratiquer un sport pour passer un bon moment entre amis. Si les Français ont du temps, ils ne resteront pas à la maison.`,
    cn: `对于法国人来说，体育活动和工作同样重要，因为他们意识到人的身体也是一台机器，需要进行保养。大部分人是体育活动的参与者或者是体育的狂热爱好者。假如他们正在做运动，很难让他们去做其他的事情。一家名叫“体育自由”的公司最近(2018年)做了一个相关调查。结果如下：
大约55%的法国人声称喜欢做运动。
十分之七的法国人是某个体育协会的成员。
大约68%的法国人每周至少参加一次体育活动。
超过四分之一的法国人声称每周多次或者天天参加体育活动。
只有14%的法国人从不参加体育活动。
法国人最常参加的体育活动是徒步行走，然后是跑步和游泳。接下来依次是自行车、健身运动和滑雪。至于集体性的体育活动（足球、篮球、排球），参加的人很少。
如果说女人和男人对于徒步行走有着同样的兴趣(分别为41%和40%)，其他的活动则不同了，女人特别喜欢游泳，而男人喜欢慢跑。年轻人更喜欢跑步和健身。
另外，滚球游戏是法国南部尤为盛行的球类游戏，被称为法国的“国民运动”，还有环法自行车大赛吸引着所有的法国人，甚至外国人。
他们参加体育活动的目的是什么呢？十分之六的法国人参加体育活动是为了强身，42%的人是为了放松一下。有四分之一的人认为运动可以帮助减轻体重。约13%参与调查的法国人声称参加体育活动是为了和朋友一起度过快乐的时光。如果法国人有时间的话，他们是不会待在家里的。`
  },
  {
    id: 'planet',
    title: 'Les bons gestes pour protéger notre planète et notre corps',
    fr: `Avec le développement plus rapide dans le monde entier, notre planète se trouve dans un état assez catastrophique : la pollution est présente dans tous les domaines, telle que l’eau polluée, l’effet de serre… et l’épuisement des énergies. Et nous, en tant qu’habitants de la planète, qu’est-ce que nous pouvons faire quand on est à la maison ?
Dans la chambre  
Nous devons penser à aérer régulièrement la chambre, cela peut éviter d’avoir trop d’humidité dans la pièce et on se sentira mieux après ! Voilà un geste très simple pour ne pas utiliser trop d’énergie.  
Il ne faut pas mettre le chauffage trop fort : la température idéale pour bien dormir ne doit pas dépasser 22 °C.  
On doit épousseter régulièrement la poussière et passer l’aspirateur au moins une fois par semaine. On verra que l’air sera beaucoup plus agréable à respirer. On fait d’une pierre deux coups : économiser de l’énergie et protéger notre corps.  
Il nous faut encore veiller à toujours éteindre la lumière quand on sort de la chambre… !  
Dans la salle de bains  
Il vaut mieux prendre une douche plutôt qu’un bain ! Une douche consomme beaucoup moins d’eau qu’un bain. Et n’oubliez pas de fermer le robinet quand on se savonne !  
On doit bien fermer le robinet aussi quand on se brosse les dents !  
Dans la cuisine  
Il nous faut préparer au moins deux poubelles pour les déchets : l’une pour les déchets non recyclables et l’autre pour les déchets recyclables. On comprendra ainsi qu’on ne jette pas les épluchures de fruits et une bouteille d’eau dans la même poubelle.  
Après avoir lavé des fruits ou des légumes, on peut utiliser cette eau pour arroser les plantes dans le jardin !  
À propos des fruits et légumes, les personnes âgées nous disent souvent qu’il faut choisir ceux de saison, parce qu’ils contiennent moins de produits chimiques et nécessitent moins de transport, et que la plupart sont produits pas très loin, donc la pollution y est réduite.  
Sortir  
Quand nous voulons sortir pour aller quelque part, à vélo ou à pied, c’est le meilleur choix, si c’est un lieu proche. Autrement, il est préférable de prendre un moyen de transport en commun.  
Il y a bien sûr plein d’autres choses que nous pouvons faire pour protéger la planète. Ces gestes sont simples et on peut les faire tous les jours. Nous devons bien comprendre que la planète est aussi notre famille, une grande famille pour toute l’humanité.`,
    cn: `随着世界更加迅速的发展，我们的星球处于比较危险的状态：各个领域的污染，例如水污染、温室效应…以及能源枯竭。而我们，作为这个星球的居民，当我们在家里时，能做些什么呢？
在卧室里
我们要想着经常给房间通风，这样可以避免房间里太潮湿，我们也会感到更舒服一些。这便是一个避免使用过多能源的简单行为。
不要把暖气开得太足：睡眠时理想的温度不应超过22摄氏度。
我们要经常除尘，至少每周做一次吸尘。这样呼吸的空气会更加清新，既节约电能又保护身体，一举两得。
我们还要注意的是，离开房间时要随手关灯！…
在浴室里
最好是洗淋浴而不是盆浴！淋浴所使用的水比盆浴少很多。并且不要忘记，在擦抹肥皂时关闭水龙头。
刷牙时，也应该关闭水龙头。
在厨房里
我们至少要准备两个垃圾桶：一个用于不可回收的垃圾，另一个用于可回收的垃圾。这样我们就明白了不能把果皮和水瓶扔在同一个垃圾桶里。
我们可以使用洗水果和蔬菜的水浇花园里的植物。
关于水果和蔬菜，老人们经常对我们说，应该选择应季的，因为应季的水果和蔬菜里含的化学物质较少，它们也不需要长途运输，大部分是在附近生产的，因此污染也少一些。
外出
当我们外出去一个地方时，如果不太远，骑自行车或步行是最好的选择。如果较远的话，最好使用公共交通工具。
当然，为了保护星球，我们还可以做很多事情。这些做法都很简单，我们每天都可以做。我们应该明白，这个星球也是我们的家，是全人类的大家庭。`
  },
  {
    id: 'death',
    title: 'Jouer avec la mort',
    fr: `« Vous m'entendez ? Est-ce que vous m'entendez ? Je ne contrôle plus l'avion ! »
Au sol, le chef-pilote, Raimond Guillaume, les ingénieurs et les techniciens attendaient. Ils étaient inquiets, mais ils gardaient leur sang-froid.  
Quelques secondes après, ils n'ont plus rien entendu. Dans l'avion, Jacqueline Auriol venait de perdre connaissance.  
Le silence a duré des siècles. Et, au sol, le silence avait le sens de « mort ».  
C'était le 12 octobre, une journée comme les autres, une journée comme les cinq autres de la semaine où la pilote Jacqueline Auriol travaillait en plein ciel, au centre de vol de Brétigny. Elle était montée rapidement dans les airs.  
Puis « la chose » était arrivée : « Je ne contrôle plus l'avion ! »  
Avant de perdre complètement connaissance, la jeune femme avait pris une mesure, mais ça n’avait pas marché.  
Lorsqu'elle est revenue à elle, l'avion tombait.  
Alors, Jacqueline Auriol a parlé de nouveau de son avion : « L'avion tombe, j’appuie sur ma gauche. Je crois que cette fois, ça y est. Adieu ! »  
À terre, pilotes, ingénieurs et techniciens gardaient le silence. Que pouvait-elle faire avec l'avion ? Rien ! Quelle aide pouvaient-ils lui apporter ? Rien !  
Elle a parlé de nouveau. Sa voix était tellement calme : « L'avion ne tombe plus. Je suis à cent mètres du sol. Je ne passerai pas. »  
À vingt, vingt-cinq mètres du sol. Un miracle. L'avion a touché le sol sans aucun accident. Elle a sauté de l'avion. Elle souriait.  
Jacqueline Auriol criait avec joie que la vie était belle, que le paysage était magnifique. Elle a embrassé tout le monde.  
Ses jambes n'avaient pas tremblé, elle n'avait même pas eu le temps d’avoir peur.  
Avant 1955, les Américaines et Jacqueline Auriol ont battu le record du monde féminin de vitesse à plusieurs reprises.  
Enfin, au mois de mai 1955, on a décidé qu’à partir du 1er juillet, les records féminins ne seraient plus approuvés. Lorsque cette décision lui avait été annoncée, Jacqueline Auriol a pensé qu’il ne lui restait qu’un mois pour trouver un avion rapide et saisir l’occasion de battre le record une fois pour toutes. Quand elle avait obtenu l’avion, le temps restait toujours mauvais. Les jours passaient mais elle a continué d’attendre le beau temps.  
Le 30 juin est arrivé. C’était le dernier jour. Il n’était plus possible de retarder son vol. Malgré toutes les difficultés, Jacqueline Auriol a battu le record sur un Mystère. Elle est devenue la femme la plus rapide du monde. Elle avait gagné la partie, à force de volonté et de courage.`,
    cn: `“你们听见我说话了吗？听见我说话了吗？我控制不住飞机了！”
在地面上，飞行队长雷蒙·纪尧姆、工程师和技术员都在等待着。尽管他们很焦虑，但依旧保持着镇静。
几秒钟之后，他们什么声音也听不到了。在飞机里，雅克琳·奥里奥尔刚刚失去了知觉。
寂静好像持续了几个世纪。在地面上，无声就意味着“死亡”。
这天是10月12日，是普通的一天，这一天就像飞行员雅克琳·奥里奥尔每周其他那5天在布雷梯尼航空中心上空飞行的日子一样。她迅速升空。
随后发生了“问题”：“我无法控制飞机了！”
在完全失去知觉之前，这位年轻的女士已经采取了措施，但无济于事。
当她恢复知觉时，飞机正在坠落。
这时，雅克琳·奥里奥尔重新说起了她的飞机：“飞机正在坠落，我按着左升降杆。我觉得这次完了。永别了！”
在地面上，飞行员、工程师和技术员保持着冷静。她能对飞机做什么呢？无能为力！他们可以为她做点什么呢？无能为力！
她又说话了。她的声音是如此的镇静：“飞机不再下坠。我离地面还有100米。我不会成功的。”
离地面20米、25米。奇迹出现了。飞机安全着陆。她微笑着，跳下了飞机。
雅克琳·奥里奥尔高兴地喊着：“生活真美好，景色真美丽。”她拥抱了所有人。
她的双腿没有颤抖过，她甚至没有时间害怕。
1955年以前，美国女飞行员及雅克琳·奥里奥尔多次打破女子飞行速度世界纪录。
最后，在1955年的5月，人们决定自7月1日起，女子纪录不再得到承认。当雅克琳·奥里奥尔听到该决定时，她想到她只剩一个月的时间去找一架高速飞机，并抓住这最后一次打破记录的机会。当她找到了飞机后，天气总是不好。日子一天天过去，她一直在等待着好天气的到来。
时间来到了6月30日。这是最后一天。不能再拖延飞行时间了。尽管困难重重，雅克琳·奥里奥尔仍然驾驶着“神秘号”飞机打破了纪录。她成为了世界上飞行速度最快的女性。凭借着意志和勇气，她获胜了。`
  },
  {
    id: 'pei',
    title: 'I. M. Pei et la pyramide de verre',
    fr: `« Le Grand Louvre tiendra la première place dans ma vie d'architecte. »  
— I. M. Pei
Quand, au printemps 1983, les Français ont appris qu’un certain Ieoh Ming Pei était chargé de transformer le Grand Louvre, cela a été une grande surprise. Cet architecte, bien célèbre aux États-Unis, à Hong Kong ou à Pékin, n’était pas du tout connu en France.  
I. M. Pei est né en 1917 en Chine. Son enfance, il l’a passée à Hong Kong et à Shanghai où son père dirigeait la Banque de Chine. Pendant ses vacances d’été, il restait souvent à Suzhou, cette Venise chinoise dont les canaux, les ponts et la beauté des jardins sont connus dans le monde entier.  
En 1935, son père lui a conseillé de partir à Londres pour devenir ingénieur. Mais I. M. Pei se sentait attiré par l’Amérique. Son choix était fait : à Oxford ou Cambridge, il a préféré Harvard et sa faculté d’architecture.  
« Breuer m’a appris que pour comprendre l’architecture, il faut comprendre la vie », dit-il aujourd’hui. I. M. Pei admire et respecte ses maîtres et leur influence a été profonde, mais dès ses premières études, il ne l’a pas complètement acceptée et a développé un style qui lui est propre. Modeste, il n’aime pas parler de son style. Pour lui, au contraire de la peinture, l’architecture est avant tout un art populaire.  
Avec l’hôtel Xiangshan, un des plus beaux hôtels d’Asie, il a cherché à créer une nouvelle langue pour l’architecture chinoise. Il a refusé de construire un grand hôtel qu’on lui avait demandé d’élever au centre de la ville de Pékin, au milieu de ces milliers de « hutong » avec des maisons à un étage. I. M. Pei a décidé de le construire à l’ouest de Pékin, au milieu de Xiangshan, dans une forêt centenaire. Puis, avant de dessiner son projet, Pei est retourné aux sources de son enfance : des cours et des maisons de la région de Suzhou. La grande distance entre Pékin et New York ne pouvait pas le séparer de la civilisation de son pays natal.  
Grâce à la transformation du bâtiment classique de l’ancien musée de la National Gallery à Washington, son nom est maintenant connu de presque tous les Américains. I. M. Pei s’intéressait toujours aux musées, parce qu’il aimait l’art.  
En 1983, François Mitterrand, président de la France, n’a pas hésité à lui laisser l’avenir du Grand Louvre. Il se sentait à la fois fier et inquiet. Dès qu’il avait proposé sa pyramide de verre, beaucoup de Français ont protesté contre ce projet « étrange ». Certains journalistes ont réussi à appeler les Parisiens à protester contre cette pyramide « drôle » de ce « Sino-Américain » tout juste bon à construire des bâtiments à Dallas, et non à Paris. À cette pyramide, on a donné un terrible nom : la « Maison des morts », qu’il fallait installer à Disneyland !  
Mais François Mitterrand a bien tenu sa promesse et I. M. Pei n’a pas quitté le Grand Louvre. Aujourd’hui, la pyramide, cette maison de lumière, s’élève au centre de la cour Napoléon dont le sous-sol est l’entrée principale du musée.`,
    cn: `大卢浮宫项目在我的建筑生涯中位居首位。
—— 贝聿铭
1983年春季，当法国人得知将有一位名叫贝聿铭的先生来改造卢浮宫时，他们都很吃惊。这位在美国、香港或北京已十分出名的建筑师在法国却并不为人所知。
贝聿铭1917年出生在中国。他的童年是在香港和上海度过的，他父亲曾是那里中国银行的负责人。暑假的时候，他时常待在苏州，这个城市号称“中国威尼斯”，它的运河、桥梁以及漂亮的园林举世闻名。
1935年，他父亲建议他去伦敦，将来成为一名工程师。但是，贝聿铭向往去美国。他做出了选择：他更喜欢哈佛和哈佛的建筑系，而不是牛津或剑桥。
“布劳耶告诉我，要理解建筑，一定要理解生活。”他今天如是说。贝聿铭崇拜和尊敬他的老师，他们的影响是深远的。但是自学业开始，他就没有完全接受他们的学说，而是发展了自己的风格。他很谦虚，不喜欢谈论自己的风格。他认为，与绘画不同，建筑首先应是大众的艺术。
在设计亚洲最漂亮宾馆之一的香山宾馆时，他试图为中国的建筑创造新的表现形式。他拒绝在北京市中心，在成千上万的只有平房的胡同中建一座高大的宾馆。贝聿铭决定将它建在北京的西部，香山的一座百年树林中。然后，在绘制设计图之前，贝聿铭吸取了他童年时的源泉：苏州地区的庭院和房子。北京和纽约的遥远距离没有把他与他的故乡文化分开。
因为他改造了华盛顿原国家美术馆的古典建筑，所以现如今几乎所有的美国人都知道他。贝聿铭一直以来都对博物馆感兴趣，因为他喜欢艺术。
1983年，法国总统弗朗索瓦·密特朗毫不犹豫地把卢浮宫的未来交给了他。他既自豪又担忧。当他刚一提出建造玻璃金字塔的建议，许多法国人立即就反对这个“古怪”的计划。有些记者成功地让巴黎人起来抗议，反对这个“美籍华人”的古怪金字塔，认为这只能建在达拉斯，而不是巴黎。人们给这个金字塔起了一个可怕的名字“死人宫”，说它应该建在迪斯尼乐园。
弗朗索瓦·密特朗遵守了他的诺言，贝聿铭没有离开卢浮宫项目。如今，这个引人瞩目的金字塔屹立在拿破仑庭院的中心，它的下面便是博物馆的主入口。`
  },
  {
    id: 'manger',
    title: 'Comment mangent les Français ?',
    fr: `Comment mangent les Français ?
La cuisine française est très connue et les Français aiment bien les bons repas.  
Le matin, au petit déjeuner, les Français ne mangent pas beaucoup. Ils prennent un thé, un café ou un café au lait et mangent du pain ou des céréales, un œuf, un fruit ou un yaourt, et de temps en temps un croissant de plus.  
À midi, beaucoup de Parisiens n’ont pas assez de temps pour rentrer chez eux. Ils prennent leur déjeuner dans les petits restaurants ou les cafés près de leurs bureaux. Pour beaucoup d’entre eux, le déjeuner, c’est souvent un sandwich et une tasse de café. Mais dans les petites villes comme Limoges, Niort ou Avignon, et à la campagne, le déjeuner est encore le plus gros repas de la journée. On prend de la salade, de la viande, des légumes, du fromage, des fruits ou un dessert. On boit de l’eau, peut-être du vin ou de la bière aussi, mais jamais de lait. Les étudiants vont souvent aux resto-U : là, on ne paie pas beaucoup, mais on mange bien.  
Le soir, les Français mangent assez tard : au plus tôt à sept heures, mais souvent entre huit et neuf heures. Le dîner est un gros repas de la journée. Il y a souvent de la soupe à la place de la salade. Ils passent beaucoup de temps à table. Ils parlent de toutes les choses intéressantes de la journée.  
Le dimanche, les Français aiment manger en famille. Ils vont parfois au restaurant. Un bon repas est le plus grand plaisir du dimanche pour eux.  
Demandez l’adresse d’un bon petit restaurant à vos amis français ou cherchez sur Internet. Vous en trouverez certainement plusieurs. Vous y passerez de merveilleux moments.`,
    cn: `法国人怎么吃饭？
法国菜非常有名，法国人也很喜欢美食。
早晨，在早餐时，法国人吃得不多。他们喝一杯茶、一杯咖啡或一杯牛奶咖啡，吃面包或麦片，一个鸡蛋、一份水果或一杯酸奶，有时还会再加一个牛角面包。
中午，很多巴黎人没有足够的时间回家。他们就在办公室附近的小餐馆或咖啡馆吃午饭。对他们中的许多人来说，午饭往往只是一个三明治和一杯咖啡。但在像利摩日、尼奥尔或阿维尼翁这样的中小城市，或者在乡下，午餐依然是一天中最丰盛的一顿。人们会吃沙拉、肉类、蔬菜、奶酪、水果或甜点。喝水，可能还会喝点葡萄酒或啤酒，但绝不会喝牛奶。学生们经常去大学食堂：在那里花费不多，但吃得不错。
晚上，法国人吃饭比较晚：最早在七点，但通常在八点到九点之间。晚餐是一日中的一顿大餐。常常是汤代替沙拉。他们会在餐桌旁花很多时间，谈论一天中所有有趣的事情。
星期天，法国人喜欢和家人一起吃饭。他们有时会去餐馆。对他们来说，一顿美味的饭菜是星期天最大的享受。
向你的法国朋友要一家好小餐馆的地址，或者在网上查一查。你一定会找到好几家。在那里，你会度过美妙的时光。`,
    noPara: true
  },
  {
    id: 'nicolas',
    title: 'Petit Nicolas',
    fr: `Petit Nicolas
Nicolas habite avec ses parents dans une petite ville. Cette ville est au pied de la montagne, très belle et calme.  
Pour aller à l’école, il lui faut une demi-heure. Alors tous les matins, Nicolas se lève de bonne heure. À ce moment-là, il a encore envie de dormir mais il ne veut pas rater le bus, il demande à sa maman de le réveiller à six heures et quart. Sa mère se lève à cinq heures et demie, en hiver comme en été.  
Elle prépare le petit déjeuner pour toute la famille : elle fait le café des parents, chauffe le lait de Nicolas et lui coupe la baguette. C’est toujours elle qui s’occupe du petit déjeuner.  
Tous les matins, Nicolas fait sa toilette, se brosse les dents, et s’habille toujours à la même heure et à la même vitesse. À sept heures, il prend son petit déjeuner. Il mange deux morceaux de baguette avec du beurre et de la confiture et boit un grand bol de chocolat chaud.  
Après le petit-déjeuner, Nicolas met ses livres, ses cahiers, ses crayons et ses stylos dans son cartable. Sa mère l’embrasse. Mini, son chien, l’attend déjà devant la porte, sous un arbre. Nicolas dit au revoir à sa maman et à Mini, puis il part en direction de l’arrêt de bus.  
Il marche vite car il ne veut pas être en retard. Nicolas est un bon élève. Il aime bien ses maîtres et ses copains de classe.`,
    cn: `小尼古拉
尼古拉和他的父母住在一个小城镇。这座城镇位于山脚下，非常美丽而宁静。
去学校需要半个小时。所以每天早晨，尼古拉都很早起床。那时，他还想继续睡觉，但又不想错过公共汽车，于是他让妈妈在六点一刻叫醒他。他的妈妈每天五点半起床，不论冬天还是夏天。
她为全家准备早餐：她给父母煮咖啡，给尼古拉加热牛奶，并切好长棍面包。总是她来负责早餐。
每天早晨，尼古拉洗漱、刷牙，总是在同一时间、以同样的速度穿好衣服。七点钟，他吃早餐。他吃两片抹着黄油和果酱的长棍面包，还喝一大碗热巧克力。
吃完早餐后，尼古拉把书、本子、铅笔和钢笔放进书包。他的妈妈吻了他一下。米尼，他的狗，已经在门口的树下等着他。尼古拉向妈妈和米尼道别，然后朝公交车站走去。
他走得很快，因为他不想迟到。尼古拉是个好学生，他很喜欢自己的老师和同学们。`,
    noPara: true
  },
  {
    id: 'lettre',
    title: 'Une lettre',
    fr: `Une lettre
Paris, le 15 août 2019 
Cher papi, chère mamie,
Nous sommes à Paris depuis bientôt un mois. Comme le temps passe vite !  
Nous habitons dans un quartier très ancien. Notre appartement donne sur la Seine ! Du salon, on voit le Louvre et les tours de Notre-Dame de Paris.  
Vous savez, nous avons déjà visité le Louvre. J’ai vu la Joconde. Je suis restée devant elle pendant une demi-heure. Comme elle est belle avec son sourire ! Nous avons fait un tour dans le centre Pompidou. Il y a beaucoup de salles dans ce centre : salles audiovisuelles, salles de lecture, salles d’exposition et une boutique de souvenirs. Papa m’a donné un beau souvenir comme cadeau pour mes bonnes notes. Hier, nous avons visité le château de Versailles et la maison de Balzac.  
On a fait aussi de belles promenades le long de la Seine. J’ai acheté plusieurs livres chez les bouquinistes, mais je n’ai pas le temps de les lire pour le moment. Papa nous a amené au sommet de la tour Eiffel. Là, on voit tout Paris. En haut, j’ai beaucoup admiré le bois de Vincennes et le bois de Boulogne. Nous avons pris beaucoup de photos. Je vais vous envoyer ces photos dans quelques jours.  
Je fais souvent des courses avec maman parce qu’elle ne parle pas très bien français. La vie est chère à Paris. On dit souvent : « Paris, c’est cher ! »  
J’aime bien cette ville, beaucoup de grands hommes y ont vécu.  
Nous partons demain pour Avignon.  
Cher papi, chère mamie, je suis heureuse de visiter la France. Je pense à vous.  
Je vous embrasse.  
Votre petite-fille,  
Chun Yan`,
    cn: `一封信
巴黎，2019年8月15日
亲爱的爷爷奶奶：
我们已经在巴黎待了快一个月了。时间过得真快！
我们住在一个非常古老的街区。我们的公寓临着塞纳河！从客厅里，可以看到卢浮宫和巴黎圣母院的塔楼。
你们知道吗？我们已经参观过卢浮宫了。我看到了《蒙娜丽莎》。我在她面前站了半个小时。她的微笑真是太美了！我们还参观了蓬皮杜中心。这个中心里有很多展厅：视听厅、阅览室、展览厅，还有一家纪念品商店。爸爸因为我成绩好，送了我一个漂亮的纪念品作为礼物。昨天，我们参观了凡尔赛宫和巴尔扎克故居。
我们还沿着塞纳河散了不少步。我在旧书商那里买了好几本书，不过目前还没时间读。爸爸带我们登上了埃菲尔铁塔的顶层。从那里可以看到整个巴黎。在塔顶上，我极尽欣赏了文森森林和布洛涅森林。我们拍了很多照片。我会在几天后把这些照片寄给你们。
我经常和妈妈一起去购物，因为她的法语不是很好。巴黎的生活很贵。人们常说：“巴黎，东西很贵！”
我很喜欢这座城市，许多伟人都曾在这里生活过。
我们明天就要动身去阿维尼翁了。
亲爱的爷爷奶奶，我很高兴能参观法国。我想念你们。
给你们一个大大的拥抱。
你们的孙女
春燕`,
    noPara: true
  },
  {
    id: 'centre',
    title: 'Au centre commercial',
    fr: `Au centre commercial
Claudine a 72 ans et habite dans un petit village. Elle est arrivée à Paris il y a deux jours pour passer une semaine chez sa nièce Sarah.  
Sarah est la directrice d’un musée. Elle travaille beaucoup pendant la semaine. Hier, samedi, elle a amené sa tante en voiture à un centre commercial pour faire des achats. Elles y sont arrivées en vingt minutes.  
Claudine n’est jamais entrée dans un si grand magasin, elle est bien étonnée. Là, il y a une cinquantaine de boutiques : boulangerie, pâtisserie, pharmacie, fleuriste, salon de coiffure… et il y a aussi un cinéma et un supermarché. C’est la première fois qu’elle voit un centre commercial. Dans le village de Claudine, il n’y a que quelques magasins : une épicerie, une boulangerie, un bureau de tabac… Quand elle a besoin de quelque chose, elle va au supermarché d’une petite ville voisine. Elle achète aussi du pain ou un journal aux magasins du village pour bavarder avec les commerçants et ses vieux amis.  
« Il y a pas mal de centres commerciaux comme ça, aux alentours de toutes les grandes villes », lui a expliqué Sarah.  
« Ah bon ! »  
« On y vend un peu de tout, et c’est pratique. »  

Les voilà au supermarché. Elles se sont dirigées d’abord vers le rayon boucherie pour y choisir un kilo de bœuf et un poulet. Ensuite, elles ont pris du beurre, du fromage et du lait au rayon des produits laitiers. Enfin, elles ont pris des fruits, des légumes et un gâteau au chocolat.  
« Il y a un monde fou ! »  
« Oui, » a répondu Sarah, « mais on ne perd pas de temps ici. »  
À la sortie du centre commercial, Claudine s’est dit : « On est plus tranquille à la campagne ! »`,
    cn: `在购物中心
克洛丁娜今年72岁，住在一个小村庄。她两天前来到巴黎，在她的侄女萨拉家住一个星期。
萨拉是一家博物馆的馆长。她在平日工作非常繁忙。昨天（星期六），她开车带着姑妈去一家购物中心买东西。她们在二十分钟后到达了那里。
克洛丁娜从来没有进过这么大的商场，她感到十分惊讶。那里大约有五十家商店：面包店、糕点店、药店、花店、美发沙龙……还有一家电影院和一家大超市。这是她第一次看到购物中心。在克洛丁娜的村子里，只有几家商店：一家杂货店、一家面包店、一家烟草店……需要买东西的时候，她会去邻近小城里的超市。她也会在村里的商店买面包或报纸，好和店主、老朋友聊聊天。
“像这样的购物中心在所有大城市的周边都有不少。”萨拉向她解释道。
“啊，是吗！”
“那里什么都卖，而且很方便。”
她们来到了超市。她们首先走向肉食区，买了一公斤牛肉和一只鸡。接着，她们在乳制品区买了黄油、奶酪和牛奶。最后，她们买了水果、蔬菜和一个巧克力蛋糕。
“人真多啊！”
“是的，”萨拉回答说，“不过在这里我们没有浪费时间。”
离开购物中心时，克洛丁娜心想：“在乡下还是更安静！”`,
    noPara: true
  },
  {
    id: 'cabinet',
    title: 'Au cabinet médical',
    fr: `Au cabinet médical
Depuis trois jours, Philippe Blanc est malade et il vient de passer une mauvaise nuit. Il s’est levé avec difficulté ce matin, il avait de la fièvre et très mal à la tête. Lise, sa femme, a aussitôt téléphoné au médecin, puis elle a dit à son mari :  
« Mon chéri, ne travaille pas ce matin. Je viens de téléphoner à ton médecin. Tu as rendez-vous dans la matinée, à 10 heures et demie. Prends ta température, et reste bien dans ton lit. Je vais te faire du thé. »  
Philippe a pris sa température et regardé le thermomètre : 38,6 °C. Il s’est demandé s’il avait la grippe.  
Au cabinet médical, le docteur André a examiné Philippe : il lui a regardé la langue, la bouche et la gorge, puis il lui a écouté les poumons sur la poitrine et dans le dos. Enfin, il lui a dit :  
« Vous avez une violente fièvre. Il faut la faire baisser rapidement. »  
« Quand est-ce que je peux retourner au travail ? »  
« Quel courage, cher ami ! Pour le moment, il faut vous reposer. »  
Le médecin s’est assis derrière son bureau et lui a demandé :  
« Vous n’avez pas mal aux oreilles ? »  
« Non, docteur. Pas du tout. »  
« Au ventre ? Non ? Vous n’avez pas mal aux yeux ? Bien, ce n’est pas grave. Vous avez seulement une grippe. Je vais vous faire une ordonnance. »  
« Pas trop de médicaments, s’il vous plaît, docteur. »  
« Il en faut quelques-uns, si vous voulez vous guérir vite. »  
« Oui, bien sûr. Je vous écoute. »  
« Vous allez prendre ces médicaments trois fois par jour pendant cinq jours. Prenez-les avant le repas. Vous allez bien dormir ce soir ! Et n’oubliez pas de faire du sport dès que vous serez guéri ! »`,
    cn: `在诊所
菲利普·布朗已经病了三天，昨晚又睡得很不好。今天早上他起床很困难，发着烧，还头痛得厉害。妻子莉丝立刻打电话给医生，然后对丈夫说：
“亲爱的，今天早上不要工作了。我刚刚打电话给你的医生。你上午十点半有个预约。量一下体温，好好待在床上。我去给你泡茶。”
菲利普量了体温，看了看体温计：38.6℃。他怀疑自己是不是得了流感。
在诊所里，安德烈医生给菲利普做了检查：他看了舌头、嘴巴和喉咙，又听了胸前和背部的肺部。最后，他说：
“您发高烧了，必须马上把烧退下去。”
“我什么时候可以回去工作呢？”
“真有精神啊，亲爱的朋友！目前您必须休息。”
医生坐到办公桌后面，问道：
“您耳朵不疼吗？”
“没有，医生，一点也不疼。”
“肚子呢？不疼？眼睛不疼？很好，这没什么大碍。您只是得了流感。我给您开个处方。”
“别开太多药，拜托您了，医生。”
“还是得开一些，如果您想快点好起来的话。”
“好的，当然。我听您的。”
“您要把这些药一天三次，吃五天。要在饭前服用。今晚您会睡得很好！而且别忘了，一旦康复，就要开始做运动！”`,
    noPara: true
  },
  {
    id: 'employe',
    title: 'Quel employé cherchez-vous ?',
    fr: `Quel employé cherchez-vous ?
Cela fait longtemps que les femmes travaillent. Pendant la Première et la Seconde Guerre mondiale, elles ont dû remplacer les hommes dans leur travail parce que beaucoup d’hommes sont allés à la guerre.  
Les femmes travaillent dans tous les domaines aujourd’hui. Il est normal de travailler comme les hommes et de toucher autant de salaires qu’eux, mais la réalité laisse à désirer. Elles ont souvent du mal à trouver un emploi idéal malgré leurs diplômes.  
Hier, à l’entrée du bureau de l’ANPE, j’ai rencontré Claire Lamy, une femme de 38 ans. Elle m’a dit :  
« J’habite en banlieue. Sortie de bonne heure sans manger, j’ai pris le premier métro pour être une des premières. »  
« Quel employé cherchez-vous ? » lui ai-je demandé.  
« Quel emploi je cherche ? Un poste d’employée, si possible près de chez moi. J’ai ma licence d’histoire, mais un mari souvent en déplacement et deux enfants en bas âge. C’est ce qui me semble le mieux pour le moment. »  
« Oui, ce n’est pas facile pour vous. Je vous comprends. »  
« Vous savez, monsieur, comment je passe ma journée ? Levée à 6 heures, je me lève en vitesse et réveille les enfants. Après le petit déjeuner, je les aide à se préparer et les emmène à l’école. Si j’ai le temps, je fais quelques courses avant d’aller au travail. De 9 heures à 12 heures, je travaille. À midi, je déjeune très simplement, un sandwich et une tasse de café, et je me repose un peu. De 13 heures à 17 heures, je reprends mon travail. Ensuite, il faut une heure pour rentrer à la maison. Après le dîner, je dois faire la vaisselle, coucher les enfants, laver du linge… Alors, le soir, je suis bien fatiguée. Heureusement que mon mari m’aide quand il est là. »`,
    cn: `您在找什么样的工作？
女人工作已经有很长时间了。在第一次和第二次世界大战期间，她们不得不在工作中替代男人，因为许多男人都上了战场。
如今，女性在各个领域都在工作。像男人一样工作、拿和男人一样的薪水，这是理所当然的，但现实却差强人意。尽管拥有文凭，她们往往还是很难找到理想的工作。
昨天，在就业局（ANPE）的大门口，我遇到了38岁的克莱尔·拉米。她对我说：
“我住在郊区。清早没吃东西就出门了，我赶上了第一班地铁，好能成为最早到的人之一。”
“您在找什么样的工作？”我问她。
“我在找什么样的工作？一份文职工作，如果可能的话，最好离家近一些。我有历史学学士学位，但我的丈夫经常出差，还有两个年幼的孩子。对我来说，这似乎是目前最合适的。”
“是啊，这对您来说不容易。我理解。”
“您知道吗，先生，我的一天是怎么过的吗？早上六点起床，我赶快起身，叫醒孩子们。吃过早饭后，我帮他们准备好，再送他们去学校。如果有时间，我在上班前会顺便买点东西。九点到十二点，我工作。中午，我很简单地吃午饭，一个三明治和一杯咖啡，然后稍微休息一下。下午一点到五点，我继续工作。之后，回家要花一个小时。晚饭以后，我得洗碗、哄孩子睡觉、洗衣服……所以，到了晚上，我就非常疲惫了。幸好我丈夫在家的时候会帮我。”`,
    noPara: true
  }
];

// ============================================================
// 4. 课后习题 (Homework)
// ============================================================

window.HOMEWORK_RAW = [
  {
    id: 'manger',
    title: 'Comment mangent les Français ?',
    qas: [
      { cn: '大学生喜欢在学生食堂吃饭。', fr: 'Les étudiants aiment manger au resto-U.' },
      { cn: '在那里，人们吃得好，花钱却不多。', fr: 'Là, on mange bien et on ne paie pas beaucoup.' },
      { cn: '中午，我们只（seulement）喝水，不喝酒。', fr: 'À midi, nous buvons seulement de l’eau, pas d’alcool.' },
      { cn: '中国人在餐桌上花费很多时间吗？', fr: 'Les Chinois passent-ils beaucoup de temps à table ?' },
      { cn: '今天我们有足够的时间在家做饭。', fr: 'Aujourd’hui, nous avons assez de temps pour cuisiner à la maison.' }
    ]
  },
  {
    id: 'nicolas',
    title: 'Petit Nicolas',
    qas: [
      { cn: '无论冬夏，我妈妈总是起得很早。', fr: 'En hiver comme en été, ma mère se lève toujours de bonne heure.' },
      { cn: '尼古拉今天喝了一大碗牛奶。', fr: 'Aujourd’hui, Nicolas a bu un grand bol de lait.' },
      { cn: '这座美丽的小城位于山脚下。', fr: 'Cette belle petite ville est située au pied de la montagne.' },
      { cn: '你愿意负责这项有趣的工作吗？', fr: 'Veux-tu t’occuper de ce travail intéressant ?' },
      { cn: '我们走得很快，因为我们不想迟到。', fr: 'Nous marchons vite parce que nous ne voulons pas être en retard.' }
    ]
  },
  {
    id: 'lettre',
    title: 'Une lettre',
    qas: [
      { cn: '春燕到巴黎已经有20天了。', fr: 'Chun Yan est à Paris depuis vingt jours.' },
      { cn: '我们的房间面向一条林荫大道。', fr: 'Notre chambre donne sur une avenue bordée d’arbres.' },
      { cn: '姑娘们参观了卢浮宫和巴黎圣母院。', fr: 'Les filles ont visité le Louvre et Notre-Dame de Paris.' },
      { cn: '这两个小伙伴沿着塞纳河拍了很多照片。', fr: 'Ces deux petits camarades ont pris beaucoup de photos le long de la Seine.' },
      { cn: '安妮送给她妈妈一个漂亮的纪念品。', fr: 'Anne a offert à sa maman un joli souvenir.' }
    ]
  },
  {
    id: 'centre',
    title: 'Au centre commercial',
    qas: [
      { cn: '他的姑妈是一家商店的经理。', fr: 'Sa tante est la directrice d’un magasin.' },
      { cn: '我们先在奶制品柜台挑选了一些奶酪。', fr: 'Nous avons d’abord choisi du fromage au rayon des produits laitiers.' },
      { cn: '我们没有买鸡和蛋糕。', fr: 'Nous n’avons pas acheté de poulet ni de gâteau.' },
      { cn: '商场里的人多极了！不过，我们只花半个小时就完成了购物。', fr: 'Il y avait énormément de monde dans le centre commercial ! Mais nous avons terminé nos courses en seulement une demi-heure.' },
      { cn: '我们在这个小城市周围发现了一些不错的咖啡馆。', fr: 'Nous avons découvert quelques bons cafés autour de cette petite ville.' }
    ]
  },
  {
    id: 'cabinet',
    title: 'Au cabinet médical',
    qas: [
      { cn: '布朗先生病了，他头痛，嗓子痛。', fr: 'M. Blanc est malade, il a mal à la tête et à la gorge.' },
      { cn: '我叔叔一夜没睡好觉。', fr: 'Mon oncle n’a pas bien dormi de toute la nuit.' },
      { cn: '她心里想：“是否应该立即去医院。”', fr: 'Elle a pensé : « Faut-il aller à l’hôpital tout de suite ? »' },
      { cn: '他没有勇气回到这座城市工作。', fr: 'Il n’a pas eu le courage de retourner travailler dans cette ville.' },
      { cn: '医生仔细(avec attention)检查了这个病人。', fr: 'Le médecin a examiné ce patient avec attention.' }
    ]
  },
  {
    id: 'employe',
    title: 'Quel employé cherchez-vous ?',
    qas: [
      { cn: '如今，妇女和男人一样工作。', fr: 'Aujourd’hui, les femmes travaillent comme les hommes.' },
      { cn: '马丁和他太太自结婚以后就住在郊区了。', fr: 'Martin et sa femme habitent en banlieue depuis leur mariage.' },
      { cn: '对这位年轻人来说，要找到一份理想的工作非常困难。', fr: 'Pour ce jeune homme, il est très difficile de trouver un emploi idéal.' },
      { cn: '她在办公室门口碰到一位记者。', fr: 'Elle a rencontré un journaliste à la porte du bureau.' },
      { cn: '一天工作完，她感觉（se sentir）非常疲劳。', fr: 'Après une journée de travail, elle se sent très fatiguée.' }
    ]
  },
  {
    id: 'einstein',
    title: 'Einstein',
    qas: [
      { cn: '你对你所说的有把握吗？你没有弄错?', fr: 'Es-tu sûr de ce que tu as dit ? Tu ne te trompes pas ?' },
      { cn: '这个工作太累了，我不想再干了。', fr: 'Ce travail est trop fatigant, je ne veux plus le faire.' },
      { cn: '米歇尔走近信箱，将两封信投了进去。', fr: 'Michel s’est approché de la boîte aux lettres et y a jeté deux lettres.' },
      { cn: '为了不迟到，他马马虎虎洗了洗，什么也没吃，就出发了。', fr: 'Pour ne pas être en retard, il s’est lavé tant bien que mal, et il est parti sans rien manger.' },
      { cn: '每次课后，他都力求把老师所讲的全弄懂。', fr: 'Chaque fois après la classe, il cherche à comprendre tout ce que le professeur a dit.' }
    ]
  },
  {
    id: 'sports',
    title: 'Les sports des Français',
    qas: [
      { cn: '大约68%的法国人表示每周至少进行一次体育运动。', fr: 'Environ 68 % des Français déclarent pratiquer une activité sportive au moins une fois par semaine.' },
      { cn: '越来越多的人意识到身体健康很重要。', fr: 'De plus en plus de gens se rendent compte que la santé est très importante.' },
      { cn: '每年，许多法国人去山上滑雪。', fr: 'Chaque année, beaucoup de Français vont dans les montagnes pour faire du ski.' },
      { cn: '如果要求法国人不出去参加体育运动，他们是不愿意的。', fr: 'Si on demandait aux Français de ne pas sortir faire du sport, ils ne le voudraient pas.' },
      { cn: '年轻人喜欢参加健身运动。', fr: 'Les jeunes préfèrent faire du fitness.' }
    ]
  },
  {
    id: 'planet',
    title: 'Les bons gestes',
    qas: [
      { cn: '我们应该保护我们的星球。', fr: 'Nous devons protéger notre planète.' },
      { cn: '出门时注意关灯。', fr: 'Veillez à éteindre la lumière quand vous sortez.' },
      { cn: '别忘记了锁门。', fr: 'N’oubliez pas de fermer la porte à clé.' },
      { cn: '大部分的人都很明白保护环境的重要性。', fr: 'La plupart des gens comprennent bien l’importance de la protection de l’environnement.' }
    ]
  },
  {
    id: 'death',
    title: 'Jouer avec la mort',
    qas: [
      { cn: '好主意，我完全同意你（的意见）。', fr: 'Bonne idée, je suis tout à fait d’accord avec toi.' },
      { cn: '他什么都不怕。而你呢，什么都怕。', fr: 'Il n’a peur de rien. Et toi, tu as peur de tout.' },
      { cn: '天黑了，孩子们还没回来，她开始担忧了。', fr: 'Il faisait noir, les enfants ne sont pas encore rentrés. Elle a commencé à s’inquiéter.' },
      { cn: '她夜以继日地工作，最后终于成功了。', fr: 'Elle travaille nuit et jour, enfin, elle a réussi.' },
      { cn: '明天晚上，大学生们将组织一个露天晚会。', fr: 'Demain soir, les étudiants organiseront une soirée en plein air.' }
    ]
  },
  {
    id: 'pei',
    title: 'I. M. Pei et la pyramide de verre',
    qas: [
      { cn: '这位伟大的建筑师受到所有人的赞赏和尊敬。', fr: 'Ce grand architecte est admiré et respecté de tous.' },
      { cn: '系主任建议他留校当老师。', fr: 'Le directeur du département lui a conseillé de rester à l’école comme professeur.' },
      { cn: '皮埃尔在地下室安装了一台仪器。', fr: 'Pierre a installé un appareil au sous-sol.' },
      { cn: '她被小城的美丽风光吸引了。', fr: 'Elle a été attirée par les beaux paysages de cette petite ville.' },
      { cn: '他决心创立一种崭新的艺术风格。', fr: 'Il a décidé de créer un nouveau style d’art.' }
    ]
  }
];
// ============================================================
// 1. 基础词库 (用于动态生成题目)
// ============================================================
window.VOCAB_DB = {
  // 名词库：[单数, 复数, 词义, 类别规则]
  nouns: [
    // 一般规则 (-s) [cite: 93]
    { sg: "rue", pl: "rues", mean: "街道", rule: "reg" },
    { sg: "professeur", pl: "professeurs", mean: "教师", rule: "reg" },
    { sg: "cinéma", pl: "cinémas", mean: "电影院", rule: "reg" },
    // -s, -x, -z 结尾 (不变) [cite: 98]
    { sg: "choix", pl: "choix", mean: "选择", rule: "inv" },
    { sg: "gaz", pl: "gaz", mean: "气体", rule: "inv" },
    { sg: "souris", pl: "souris", mean: "老鼠", rule: "inv" },
    // -au, -eau, -eu 结尾 (+x) 
    { sg: "manteau", pl: "manteaux", mean: "大衣", rule: "x" },
    { sg: "bureau", pl: "bureaux", mean: "办公室", rule: "x" },
    { sg: "cheveu", pl: "cheveux", mean: "头发", rule: "x" },
    { sg: "jeu", pl: "jeux", mean: "游戏", rule: "x" },
    // -al 结尾 (-aux) [cite: 100]
    { sg: "journal", pl: "journaux", mean: "报纸", rule: "aux" },
    { sg: "cheval", pl: "chevaux", mean: "马", rule: "aux" },
    // -al 特例 (+s) [cite: 100]
    { sg: "bal", pl: "bals", mean: "舞会", rule: "reg_al" },
    { sg: "festival", pl: "festivals", mean: "节日", rule: "reg_al" }
  ],
  // 冠词填空库
  articles: [
    // 定冠词 vs 不定冠词 [cite: 121-133]
    { q: "J'aime ___ café. (总体概念)", a: "le", expl: "表总体概念用定冠词 [cite: 133]" },
    { q: "Isabelle a ___ sœur. (首次提到)", a: "une", expl: "首次提到用不定冠词 [cite: 129]" },
    { q: "C'est ___ voiture de Paul. (特指)", a: "la", expl: "特指所属用定冠词 [cite: 122]" },
    { q: "Il va à ___ école. (省音)", a: "l'", expl: "元音开头单数名词前省音 [cite: 126]" }
  ]
};

// ============================================================
window.GRAMMAR_BOOK = [
  {
    id: "part1",
    title: "第一部分：词类与词形变化",
    desc: "Morphologie et Flexion des Mots",
    chapters: [
      {
        id: "chap1",
        title: "第一章：名词 (Le Nom)",
        content: `
          <h3>1.1 名词的性别 (Genre du Nom)</h3>
          <p>法语名词仅分两种语法性： <strong>阳性</strong> 和 <strong>阴性</strong> 。</p>
          <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>表示人的名词</strong>：通常按自然性别划分，例如 <em>un professeur</em>（教师，阳性）、<em>une sœur</em>（姐妹，阴性）。</li>
            <li><strong>表示事物的名词</strong>：性别为约定俗成的固定形式，例如 <em>un cinéma</em>（电影，阳性）、<em>une voiture</em>（汽车，阴性）。</li>
          </ul>

          <h3>1.2 名词的数 (Nombre du Nom)</h3>
          <p>大多数名词有 <strong>单数</strong> 和 <strong>复数</strong> 两种形式，核心变化规则如下：</p>
          
          <div class="bg-slate-50 p-3 rounded mb-4">
            <h4 class="font-bold text-sm mb-2">一般规则</h4>
            <p class="text-sm">复数在单数词尾加 <strong>-s</strong>，且复数的 -s 不发音。示例：</p>
            <ul class="list-disc pl-5 text-sm">
              <li><em>un cinéma – des cinéma<strong>s</strong></em>（电影）</li>
              <li><em>une rue – des rue<strong>s</strong></em>（街道）</li>
              <li><em>un professeur – des professeur<strong>s</strong></em>（教师）</li>
            </ul>
          </div>

          <h4 class="font-bold text-sm mb-2">特殊规则</h4>
          <table class="w-full text-sm border-collapse mb-4 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">词尾情况</th><th class="p-2 border">规则</th><th class="p-2 border">示例</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">以 -s、-x、-z 结尾</td><td class="p-2 border">单复数同形</td><td class="p-2 border"><em>un choix – des choix</em>（选择）</td></tr>
              <tr><td class="p-2 border">以 -au、-eau、-eu 结尾</td><td class="p-2 border">复数加 <strong>-x</strong></td><td class="p-2 border"><em>un manteau – des manteau<strong>x</strong></em>（大衣）<br><em>un cheveu – des cheveu<strong>x</strong></em>（头发）</td></tr>
              <tr><td class="p-2 border">以 -al 结尾</td><td class="p-2 border">多数变 -al 为 <strong>-aux</strong></td><td class="p-2 border"><em>un journal – des journ<strong>aux</strong></em>（报纸）</td></tr>
            </tbody>
          </table>
          <div class="text-xs text-amber-700 bg-amber-50 p-2 rounded border-l-4 border-amber-400 mb-4">
            <strong>少数例外（-al 结尾加 -s）：</strong><br>
            <em>le bal – les bals</em>（舞会）、<em>le festival – les festivals</em>（节日）。
          </div>

          <h4 class="font-bold text-sm mb-2">礼貌称谓</h4>
          <p class="text-sm">madame（夫人）→ mesdames [mɛdam]（夫人们）<br>monsieur（先生）→ messieurs [mɛsjø]（先生们）</p>

          <h3>1.3 名词的类别 (Catégories de Noms)</h3>
          <p class="text-sm">名词分为 <strong>普通名词</strong> 和 <strong>专有名词</strong> 两类：</p>
          <ul class="list-disc pl-5 text-sm space-y-1">
            <li><strong>普通名词</strong>：泛指人或事物，首字母小写，例如 <em>un ingénieur</em>（工程师）、<em>une heure</em>（小时）、<em>des écoles</em>（学校）。</li>
            <li><strong>专有名词</strong>：特指独一无二的人、地方或事物，首字母必须大写，例如 <em>Julie</em>（朱莉，人名）、<em>la Chine</em>（中国，国名）、<em>la France</em>（法国，国名）。</li>
          </ul>

          <h3>1.4 阴性名词的构成 (Formation du Féminin des Noms)</h3>
          <p class="text-sm mb-2">表示职业或身份的名词，阴性形式多由阳性形式变化而来，少数为不规则变化：</p>
          
          <h4 class="font-bold text-sm text-slate-700">1.4.1 规则变化（表格）</h4>
          <table class="w-full text-sm border-collapse mb-4 bg-white">
             <thead class="bg-slate-100"><tr><th class="p-2 border">阳性形式</th><th class="p-2 border">变化规则</th><th class="p-2 border">阴性形式</th></tr></thead>
             <tbody>
                <tr><td class="p-2 border">un étudiant（学生）</td><td class="p-2 border">+ e</td><td class="p-2 border">une étudiante</td></tr>
                <tr><td class="p-2 border">un ouvrier（工人）</td><td class="p-2 border">-er → -ère</td><td class="p-2 border">une ouvrière</td></tr>
                <tr><td class="p-2 border">un paysan（农民）</td><td class="p-2 border">-an → -anne</td><td class="p-2 border">une paysanne</td></tr>
                <tr><td class="p-2 border">un vendeur（售货员）</td><td class="p-2 border">-eur → -euse</td><td class="p-2 border">une vendeuse</td></tr>
                <tr><td class="p-2 border">un instituteur（小学教师）</td><td class="p-2 border">-teur → -trice</td><td class="p-2 border">une institutrice</td></tr>
             </tbody>
          </table>

          <h4 class="font-bold text-sm text-slate-700">1.4.2 不规则变化</h4>
          <p class="text-sm">阴性与阳性形式差别较大，需单独记忆，例如：</p>
          <ul class="grid grid-cols-2 gap-2 text-sm bg-slate-50 p-3 rounded">
             <li>un homme – une femme（男人 / 女人）</li>
             <li>le père – la mère（父亲 / 母亲）</li>
             <li>un oncle – une tante（叔叔 / 姑妈）</li>
             <li>le frère – la sœur（兄弟 / 姐妹）</li>
          </ul>
        `
      },
      {
        id: "chap2",
        title: "第二章：冠词与限定词",
        content: `
          <h3>2.1 不定冠词与定冠词 (Articles Indéfinis et Définis)</h3>
          <p class="text-sm mb-2">冠词位于名词前，体现名词的 <strong>性、数</strong> 及 <strong>泛指 / 确指</strong> ：</p>
          <ul class="list-disc pl-5 text-sm mb-3">
             <li><strong>不定冠词</strong>：用于首次提到或不确定的人 / 事物。</li>
             <li><strong>定冠词</strong>：用于已知或被特指的人 / 事物。</li>
          </ul>

          <h4 class="font-bold text-sm">2.1.1 形式表格</h4>
          <table class="w-full text-sm border-collapse mb-4 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">冠词类型</th><th class="p-2 border">单数（阳性）</th><th class="p-2 border">单数（阴性）</th><th class="p-2 border">复数</th></tr>
             <tr><td class="p-2 border">不定冠词</td><td class="p-2 border">un</td><td class="p-2 border">une</td><td class="p-2 border">des</td></tr>
             <tr><td class="p-2 border">定冠词</td><td class="p-2 border">le (l’)</td><td class="p-2 border">la (l’)</td><td class="p-2 border">les</td></tr>
          </table>

          <h4 class="font-bold text-sm">2.1.2 省音规则</h4>
          <p class="text-sm mb-3">以 <strong>元音</strong> 或 <strong>哑音 h</strong> 开头的单数名词前，定冠词 le/la 省音为 <strong>l’</strong>，例如：<em>l’école</em>（学校）、<em>l’avenue</em>（大街）。</p>

          <h4 class="font-bold text-sm">2.1.3 用法示例</h4>
          <div class="text-sm space-y-2 mb-4">
             <p><strong>不定冠词：</strong><br><em>Isabelle a une sœur.</em>（伊莎贝尔有一个姐妹，首次提到 “姐妹”）<br><em>Isabelle a des livres.</em>（她有一些书，不确定数量）</p>
             <p><strong>定冠词：</strong><br><em>Julie a une sœur; la sœur de Julie est professeur.</em>（朱莉有一个姐姐，这个姐姐是老师，特指前文提到的 “姐姐”）<br><em>Sophie aime le café.</em>（索菲喜欢咖啡，表 “咖啡” 这一总体概念）</p>
          </div>

          <h3>2.2 冠词的省略 (Omission des Articles)</h3>
          <p class="text-sm mb-2">以下情况名词前不加冠词：</p>
          <ul class="list-disc pl-5 text-sm space-y-1">
             <li>名词作表语，说明 <strong>职业、国籍或身份</strong> （主语为 ce 时例外），例如：<em>Il est ingénieur.</em>（他是工程师）。</li>
             <li>名词作 <strong>称呼语</strong> ，例如：<em>Salut, ami !</em>（你好，朋友！）。</li>
             <li>名词前已有其他限定词（主有形容词、指示形容词、疑问形容词等），例如：<em>C’est ma mère.</em>（这是我母亲）。</li>
             <li>名词 <strong>列举</strong> 时，例如：<em>Femmes, hommes, vieillards, enfants, tout le monde est venu.</em>（妇女、男人、老人、孩子，所有人都来了）。</li>
             <li>名词作 <strong>同位语</strong> ，例如：<em>Paris, capitale de la France.</em>（巴黎，法国的首都）。</li>
          </ul>

          <h3>2.3 缩合冠词 (Articles Contractés)</h3>
          <p class="text-sm mb-2">介词 <strong>à</strong> 和 <strong>de</strong> 与定冠词 le、les 连用时必须缩合，形成缩合冠词；与 la、l’ 不缩合。</p>
          
          <h4 class="font-bold text-sm">2.3.1 缩合形式与例句</h4>
          <table class="w-full text-sm border-collapse mb-4 text-left bg-white">
             <thead class="bg-slate-100"><tr><th class="p-2 border">缩合形式</th><th class="p-2 border">构成规则</th><th class="p-2 border">例句及翻译</th></tr></thead>
             <tbody>
                <tr><td class="p-2 border font-bold text-center">au</td><td class="p-2 border">à + le</td><td class="p-2 border"><em>Pascal va au cinéma.</em> (帕斯卡去电影院)</td></tr>
                <tr><td class="p-2 border font-bold text-center">aux</td><td class="p-2 border">à + les</td><td class="p-2 border"><em>Ils vont aux États-Unis.</em> (他们去美国)</td></tr>
                <tr><td class="p-2 border font-bold text-center">du</td><td class="p-2 border">de + le</td><td class="p-2 border"><em>C’est le bureau du professeur.</em> (这是老师的办公室)</td></tr>
                <tr><td class="p-2 border font-bold text-center">des</td><td class="p-2 border">de + les</td><td class="p-2 border"><em>C’est la classe des étudiants.</em> (这是大学生的教室)</td></tr>
             </tbody>
          </table>

          <h4 class="font-bold text-sm">2.3.2 注意事项</h4>
          <p class="text-sm">缩合冠词 <strong>des</strong> 与不定冠词 <strong>des</strong> 词形相同，但意义不同：缩合冠词表 “…… 的”（所属），不定冠词表 “一些”，需结合上下文区分，例如：<br><em>J’ai <strong>des</strong> livres.</em>（不定冠词，我有一些书）<br><em>C’est la chambre <strong>des</strong> étudiants.</em>（缩合冠词，这是学生们的房间）</p>

          <h3>2.4 部分冠词 (Articles Partitifs)</h3>
          <p class="text-sm mb-2">部分冠词用于表示 <strong>不确指且不可数</strong> 的名词，常译为 “某些”“一些”。</p>
          
          <h4 class="font-bold text-sm">2.4.1 形式表格</h4>
          <table class="w-full text-sm border-collapse mb-3 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">数 / 性</th><th class="p-2 border">阳性</th><th class="p-2 border">阴性</th></tr>
             <tr><td class="p-2 border">单数</td><td class="p-2 border">du / de l’</td><td class="p-2 border">de la / de l’</td></tr>
             <tr><td class="p-2 border">复数</td><td class="p-2 border" colspan="2">des</td></tr>
          </table>

          <h4 class="font-bold text-sm">2.4.2 用法规则</h4>
          <ul class="list-disc pl-5 text-sm space-y-1 mb-3">
             <li>以元音或哑音 h 开头的单数名词前，无论阴阳性均用 <strong>de l’</strong>，例如：<em>de l’eau</em>（水）、<em>de l’air</em>（空气）。</li>
             <li>抽象名词或表总体概念时，用 <strong>定冠词</strong> 而非部分冠词，例如：<em>Les Français aiment le café.</em>（法国人喜欢咖啡，表 “咖啡” 整体）。</li>
             <li><strong>否定句</strong> 中， <strong>直接宾语</strong> 前的 <strong>部分冠词 / 不定冠词</strong> 需替换为 <strong>de</strong>，例如：<em>Il a du pain, mais il n’a pas <strong>de</strong> pain.</em>（他有面包，但他没有面包了）；但以下情况不变：
                <ul class="list-[circle] pl-5 mt-1 text-xs text-slate-600">
                  <li>定冠词后的名词：<em>Jacqueline n’aime pas le café.</em>（雅克琳不喜欢咖啡）</li>
                  <li>主有形容词后的名词：<em>Il n’a pas son livre.</em>（他没有他的书）</li>
                  <li>作表语的名词：<em>Ce n’est pas un arbre.</em>（这不是一棵树）</li>
                </ul>
             </li>
          </ul>

          <h3>2.5 指示形容词 (Adjectifs Démonstratifs)</h3>
          <p class="text-sm mb-2">指示形容词位于名词前，用于 <strong>指示特定的人或物</strong> ，需与名词的性、数一致。</p>
          
          <h4 class="font-bold text-sm">2.5.1 形式表格</h4>
          <table class="w-full text-sm border-collapse mb-3 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">性 / 数</th><th class="p-2 border">单数</th><th class="p-2 border">复数</th></tr>
             <tr><td class="p-2 border">阳性</td><td class="p-2 border">ce（辅音开头名词）<br>cet（元音 / 哑音 h 开头名词）</td><td class="p-2 border" rowspan="2">ces</td></tr>
             <tr><td class="p-2 border">阴性</td><td class="p-2 border">cette</td></tr>
          </table>
          
          <h4 class="font-bold text-sm">2.5.2 用法示例</h4>
          <p class="text-sm"><em>ce livre</em>（这本书，阳性单数，辅音开头）<br><em>cet ami</em>（这个朋友，阳性单数，元音开头）<br><em>cette porte</em>（这扇门，阴性单数）<br><em>ces élèves</em>（这些学生，复数）</p>

          <h3>2.6 主有形容词 (Adjectifs Possessifs)</h3>
          <p class="text-sm mb-2">主有形容词位于名词前，表 <strong>所属关系</strong> ，需与 <strong>所修饰名词的性、数</strong> 一致（与拥有者的性别无关）。</p>
          
          <h4 class="font-bold text-sm">2.6.1 形式表格</h4>
          <table class="w-full text-sm border-collapse mb-3 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">拥有者</th><th class="p-2 border">单数阳性名词</th><th class="p-2 border">单数阴性名词</th><th class="p-2 border">复数名词</th></tr>
             <tr><td class="p-2 border">我的</td><td class="p-2 border">mon</td><td class="p-2 border">ma</td><td class="p-2 border">mes</td></tr>
             <tr><td class="p-2 border">你的</td><td class="p-2 border">ton</td><td class="p-2 border">ta</td><td class="p-2 border">tes</td></tr>
             <tr><td class="p-2 border">他 / 她的</td><td class="p-2 border">son</td><td class="p-2 border">sa</td><td class="p-2 border">ses</td></tr>
             <tr><td class="p-2 border">我们的</td><td class="p-2 border">notre</td><td class="p-2 border">notre</td><td class="p-2 border">nos</td></tr>
             <tr><td class="p-2 border">你们 / 您的</td><td class="p-2 border">votre</td><td class="p-2 border">votre</td><td class="p-2 border">vos</td></tr>
             <tr><td class="p-2 border">他们 / 她们的</td><td class="p-2 border">leur</td><td class="p-2 border">leur</td><td class="p-2 border">leurs</td></tr>
          </table>

          <h4 class="font-bold text-sm">2.6.2 特殊规则</h4>
          <p class="text-sm">当阴性单数名词以 <strong>元音或哑音 h</strong> 开头时，为避免元音连读冲突，ma/ta/sa 需变为 <strong>mon/ton/son</strong>，例如：<br><em>mon école</em>（我的学校，école 为阴性单数，元音开头）<br><em>ton amie</em>（你的朋友，amie 为阴性单数，元音开头）<br>若名词前有其他形容词，则按原规则使用，例如：<em>ma vieille amie</em>（我年长的朋友，vieille 修饰 amie，避免元音冲突）。</p>

          <h3>2.7 疑问形容词与感叹形容词</h3>
          <p class="text-sm mb-2">疑问形容词 <strong>quel</strong> 用于 <strong>询问</strong> ，感叹形容词用于 <strong>赞叹 / 惊叹</strong> ，二者形式相同，需与所修饰名词的性、数一致。</p>
          
          <h4 class="font-bold text-sm">2.7.1 形式表格</h4>
          <table class="w-full text-sm border-collapse mb-3 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">形式类型</th><th class="p-2 border">单数</th><th class="p-2 border">复数</th></tr>
             <tr><td class="p-2 border">阳性</td><td class="p-2 border">quel</td><td class="p-2 border">quels</td></tr>
             <tr><td class="p-2 border">阴性</td><td class="p-2 border">quelle</td><td class="p-2 border">quelles</td></tr>
          </table>

          <h4 class="font-bold text-sm">2.7.2 用法示例</h4>
          <ul class="list-disc pl-5 text-sm">
             <li><strong>疑问形容词：</strong><br><em>Quel est son nom ?</em>（他 / 她叫什么名字？）<br><em>Quels livres prenez-vous ?</em>（您要拿哪些书？）</li>
             <li><strong>感叹形容词：</strong><br><em>Quel beau temps !</em>（多么好的天气！）<br><em>Quelle belle ville !</em>（多么美丽的城市！）</li>
          </ul>

          <h3>2.8 形容词 tout (L'Adjectif Tout)</h3>
          <p class="text-sm mb-2">形容词 tout/toute/tous/toutes 表 “ <strong>全部的、整个的</strong> ”，常位于冠词、指示形容词或主有形容词前。</p>
          <h4 class="font-bold text-sm">2.8.1 用法示例</h4>
          <p class="text-sm"><em>tous nos amis</em>（我们所有的朋友，tous 修饰复数名词 amis）<br><em>toute la matinée</em>（整整一个上午，toute 修饰阴性单数名词 matinée）</p>
          <h4 class="font-bold text-sm">2.8.2 部分否定规则</h4>
          <p class="text-sm">句式 <strong>tout… ne… pas</strong> 或 <strong>ne… pas tout…</strong> 形式上是全部否定，实际为 <strong>部分否定</strong> ，例如：<br><em>Tous les enfants ne sont pas heureux.</em>（并非所有的孩子都幸福）<br><em>Nicole n’aime pas toutes les fleurs.</em>（妮可并不是所有的花都喜欢）</p>

          <h3>2.9 形容词前的冠词变化 (Changement d'Article devant un Adjectif)</h3>
          <p class="text-sm">不定冠词 <strong>des</strong> 修饰复数名词时，若形容词位于名词 <strong>之前</strong> ，des 需变为 <strong>de</strong>；若形容词位于名词之后，des 不变。</p>
          <h4 class="font-bold text-sm">2.9.1 规则示例</h4>
          <p class="text-sm"><strong>形容词在前：</strong> <em>Elle peut faire <strong>de</strong> bons repas.</em>（她能做一手好饭菜，bons 位于 repas 前，des 变 de）<br><strong>形容词在后：</strong> <em>Elle a <strong>des</strong> repas bons.</em>（她有好吃的饭菜，bons 位于 repas 后，des 不变）</p>
          <h4 class="font-bold text-sm">2.9.2 例外情况</h4>
          <p class="text-sm">在 <strong>固定词组</strong> 或 <strong>形容词与名词构成的复合名词</strong> 中，des 不变，例如：<br><em>des petits pains</em>（小面包，固定词组）<br><em>des jeunes gens</em>（年轻人，固定搭配）</p>
        `
      },
      {
        id: "chap3",
        title: "第三章：代词 (Les Pronoms)",
        content: `
          <h3>3.1 主语人称代词 (Pronoms Personnels Sujets)</h3>
          <p class="text-sm mb-2">主语人称代词位于动词前，表动作的执行者，需与动词变位一致。</p>
          
          <h4 class="font-bold text-sm">3.1.1 形式表格</h4>
          <table class="w-full text-sm border-collapse mb-4 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">人称</th><th class="p-2 border">单数</th><th class="p-2 border">复数</th></tr>
             <tr><td class="p-2 border">第一人称</td><td class="p-2 border">je [ʒə]（我）</td><td class="p-2 border">nous [nu]（我们）</td></tr>
             <tr><td class="p-2 border">第二人称</td><td class="p-2 border">tu [ty]（你）</td><td class="p-2 border">vous [vu]（你们 / 您，礼貌）</td></tr>
             <tr><td class="p-2 border">第三人称</td><td class="p-2 border">il [il]（他 / 它）<br>elle [ɛl]（她 / 它）</td><td class="p-2 border">ils [il]（他们 / 它们）<br>elles [ɛl]（她们 / 它们）</td></tr>
          </table>

          <h4 class="font-bold text-sm">3.1.2 泛指代词 on</h4>
          <p class="text-sm">on 用作 <strong>泛指主语</strong> ，相当于汉语 “一般人、大家”，动词用第三人称单数，重读形式为 soi，例如：<br><em>On ne doit pas penser seulement à soi.</em>（人不能只想着自己）</p>

          <h3>3.2 重读人称代词 (Pronoms Personnels Toniques)</h3>
          <p class="text-sm mb-2">重读人称代词用于 <strong>突出或强调</strong> ，不单独作主语，常见用法如下：</p>

          <h4 class="font-bold text-sm">3.2.1 用法场景</h4>
          <ul class="list-disc pl-5 text-sm space-y-1 mb-3">
             <li>在 c’est 后作表语，例如：<em>— Qui est là ? — C’est moi.</em>（谁在那儿？是我。）</li>
             <li>与主语同位语并列，例如：<em>Lui, il est professeur.</em>（他呀，他是老师。）</li>
             <li>介词后，例如：<em>Nous travaillons avec eux.</em>（我们和他们一起工作。）</li>
             <li>省略句中，例如：<em>Je vais au cinéma, et toi ?</em>（我去看电影，你呢？）</li>
          </ul>

          <h4 class="font-bold text-sm">3.2.2 形式表格</h4>
          <table class="w-full text-sm border-collapse mb-4 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">人称</th><th class="p-2 border">单数</th><th class="p-2 border">复数</th></tr>
             <tr><td class="p-2 border">第一人称</td><td class="p-2 border">moi（我）</td><td class="p-2 border">nous（我们）</td></tr>
             <tr><td class="p-2 border">第二人称</td><td class="p-2 border">toi（你）</td><td class="p-2 border">vous（你们 / 您）</td></tr>
             <tr><td class="p-2 border">第三人称</td><td class="p-2 border">lui（他）/ elle（她）</td><td class="p-2 border">eux（他们）/ elles（她们）</td></tr>
          </table>

          <h3>3.3 直接宾语人称代词 (Pronoms Personnels C.O.D.)</h3>
          <p class="text-sm mb-2">直接宾语人称代词代替 <strong>及物动词的直接宾语</strong> （人或物），通常位于动词前。</p>

          <h4 class="font-bold text-sm">3.3.1 形式表格</h4>
          <table class="w-full text-sm border-collapse mb-3 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">单数</th><th class="p-2 border">复数</th></tr>
             <tr><td class="p-2 border">me (m’)（我）</td><td class="p-2 border">nous（我们）</td></tr>
             <tr><td class="p-2 border">te (t’)（你）</td><td class="p-2 border">vous（你们 / 您）</td></tr>
             <tr><td class="p-2 border">le (l’)（他 / 它，阳性）<br>la (l’)（她 / 它，阴性）</td><td class="p-2 border">les（他们 / 它们）</td></tr>
          </table>

          <h4 class="font-bold text-sm">3.3.2 用法示例</h4>
          <p class="text-sm">原句：<em>Madame Dupont regarde sa montre.</em>（杜邦夫人看她的手表）<br>替换后：<em>Elle <strong>la</strong> regarde.</em>（她看它，la 代替 sa montre）</p>

          <h4 class="font-bold text-sm">3.3.3 省音规则</h4>
          <p class="text-sm">当动词以 <strong>元音或哑音 h</strong> 开头时，me/te/le/la 省音为 m’/t’/l’，例如：<br><em>Tu peux m’appeler ce soir.</em>（你今晚可以给我打电话，appeler 元音开头，me 省音为 m’）</p>

          <h3>3.4 间接宾语人称代词 (Pronoms Personnels C.O.I.)</h3>
          <p class="text-sm mb-2">间接宾语人称代词代替 <strong>由介词 à 引出的间接宾语</strong> ，位于动词前。</p>

          <h4 class="font-bold text-sm">3.4.1 形式表格</h4>
          <table class="w-full text-sm border-collapse mb-3 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">单数</th><th class="p-2 border">复数</th></tr>
             <tr><td class="p-2 border">me (m’)（我）</td><td class="p-2 border">nous（我们）</td></tr>
             <tr><td class="p-2 border">te (t’)（你）</td><td class="p-2 border">vous（你们 / 您）</td></tr>
             <tr><td class="p-2 border">lui（他 / 她 / 它）</td><td class="p-2 border">leur（他们 / 她们 / 它们）</td></tr>
          </table>

          <h4 class="font-bold text-sm">3.4.2 用法示例</h4>
          <p class="text-sm">原句：<em>Alain présente son ami à ses grands-parents.</em>（阿兰把他的朋友介绍给他的祖父母）<br>替换后：<em>Il <strong>leur</strong> présente son ami.</em>（他把朋友介绍给他们，leur 代替 à ses grands-parents）</p>

          <h3>3.5 宾语代词的顺序 (L'Ordre des Pronoms Objets)</h3>
          <p class="text-sm mb-2">当句中出现多个宾语代词（直接宾语、间接宾语、副代词 y/en）时，顺序固定，需根据句型（陈述句 / 否定句、肯定命令式）调整。</p>

          <h4 class="font-bold text-sm">3.5.1 陈述句与否定句中的顺序</h4>
          <p class="text-sm mb-2">代词位于动词前，顺序为：</p>
          <div class="bg-slate-800 text-white p-2 rounded text-xs font-mono mb-3 overflow-x-auto whitespace-nowrap">
             ne + (me/te/nous/vous/se) + (le/la/les) + (lui/leur) + y + en + 动词 + pas
          </div>
          <p class="text-sm">示例：<br><em>Il me les a données.</em>（他把这些东西给了我，me 间接宾语，les 直接宾语）<br><em>Est-ce qu’elle la lui a envoyée ?</em>（她把裙子寄给她了吗？la 直接宾语，lui 间接宾语）</p>

          <h4 class="font-bold text-sm mt-3">3.5.2 肯定命令式中的顺序</h4>
          <p class="text-sm mb-2">代词紧跟动词后，用连字符连接，顺序为：</p>
          <div class="bg-slate-100 text-slate-700 p-2 rounded text-xs font-mono border border-slate-300 mb-3">
             动词 + (le/la/les) + (moi/toi/lui/nous/vous/leur) + y + en
          </div>
          <div class="text-sm bg-slate-50 p-2 rounded">
            <strong>注意事项：</strong>
            <ul class="list-disc pl-5 mt-1">
              <li>me/te 在肯定命令式中需变为重读形式 moi/toi，例如：<em>Excusez-moi !</em>（原谅我！）</li>
              <li>当代词后接 y 或 en 时，写作 m’y、t’y、m’en、t’en，例如：<em>Vas-y !</em>（去吧！）、<em>Donne-m’en !</em>（给我一些！）</li>
              <li>避免使用 “l’en” 组合（语法错误）。</li>
            </ul>
          </div>
          <p class="text-sm mt-2">示例：<br><em>Donnez-les-moi !</em>（把那些东西给我！les 直接宾语，moi 间接宾语）<br><em>Montre-les-leur !</em>（把那些东西给他们看！les 直接宾语，leur 间接宾语）</p>

          <h3>3.6 副代词 y 和 en (Pronoms Adverbiaux Y et EN)</h3>
          <p class="text-sm mb-2">副代词兼具代词和副词功能，用于替代特定介词短语或名词短语，避免重复。</p>

          <h4 class="font-bold text-sm">3.6.1 副代词 y</h4>
          <div class="bg-blue-50 p-3 rounded border border-blue-100 text-sm mb-2">
            <strong>功能：</strong> 代替以 <strong>à、dans、en</strong> 等介词引出的 <strong>地点状语</strong> ，或 “去某处”“在某处” 的概念。<br>
            <strong>位置：</strong> 位于动词前（否定句中位于 ne 和动词之间）。<br>
            <strong>示例：</strong><br>
            <em>Il va au restaurant et y passe de bons moments.</em>（他去餐馆，在那儿度过了愉快的时光，y 代替 au restaurant）<br>
            <em>Vas-tu à la montagne ? — Non, je n’y vais pas.</em>（你去山里吗？—— 不，我不去那儿，y 代替 à la montagne）
          </div>

          <h4 class="font-bold text-sm">3.6.2 副代词 en</h4>
          <div class="bg-orange-50 p-3 rounded border border-orange-100 text-sm">
            <strong>功能：</strong>
            <ul class="list-disc pl-5 mt-1">
               <li>代替 “不定冠词 / 部分冠词 + 名词” 作直接宾语，例如：<em>Avez-vous des tasses ? — Oui, j’en ai quatre.</em>（您有杯子吗？—— 有，我有四个，en 代替 des tasses）。</li>
               <li>代替 “数词 / 数量副词 + 名词”，例如：<em>Il y a combien de garçons dans votre classe ? — Il y en a beaucoup.</em>（你们班有多少男生？—— 有很多，en 代替 de garçons）。</li>
               <li>代替 “由 de 引出的形容词补语”（不指代人），例如：<em>Le professeur est-il content de votre travail ? — Oui, il en est content.</em>（老师对您的作业满意吗？—— 满意，en 代替 de votre travail）。</li>
            </ul>
            <strong>位置：</strong> 同 y，位于动词前（否定句中在 ne 和动词之间）。
          </div>

          <h3>3.7 中性代词 le (Le Pronom Neutre LE)</h3>
          <p class="text-sm">中性代词 le 无 <strong>性、数变化</strong> ，可代替名词、形容词、动词不定式或从句，仅用于第三人称。</p>
          <h4 class="font-bold text-sm">3.7.1 用法示例</h4>
          <ul class="list-disc pl-5 text-sm space-y-1">
             <li>代替名词（作表语）：<em>— Êtes-vous ingénieur ? — Oui, je le suis.</em>（您是工程师吗？—— 是的，我是，le 代替 ingénieur）</li>
             <li>代替形容词（作表语）：<em>— Sont-ils heureux ? — Oui, ils le sont.</em>（他们幸福吗？—— 是的，他们幸福，le 代替 heureux）</li>
             <li>代替宾语从句（作直接宾语）：<em>Marc est très gentil. — Oui, je le sais.</em>（马克很和蔼。—— 是的，我知道，le 代替 que Marc est très gentil）</li>
             <li>代替动词不定式（作直接宾语）：<em>Partez tout de suite, si vous le voulez.</em>（如果您愿意，就马上出发吧，le 代替 partir）</li>
          </ul>

          <h3>3.8 关系代词 (Les Pronoms Relatifs)</h3>
          <p class="text-sm mb-2">关系代词引导 <strong>关系从句</strong> ，连接先行词（被修饰的名词 / 代词）和从句，在从句中承担主语、宾语等成分。</p>

          <h4 class="font-bold text-sm">3.8.1 关系代词 qui (Le Pronom Relatif Qui)</h4>
          <p class="text-sm">功能：在从句中作 <strong>主语</strong> ，可指代人或物，先行词的性、数决定从句动词的变位。<br>
          用法示例：<em>J’ai trouvé un magasin <strong>qui</strong> vend des fromages français.</em>（我找到了一家卖法国奶酪的商店，qui 指代 magasin（阳性单数），动词 vend 用单数）<br>
          <em>La dame <strong>qui</strong> s’occupe de cette salle de lecture est la mère de Luc.</em>（负责这个阅览室的女士是吕克的母亲，qui 指代 dame（阴性单数），动词 s’occupe 用单数）</p>

          <h4 class="font-bold text-sm">3.8.2 关系代词 que (Le Pronom Relatif Que)</h4>
          <p class="text-sm">功能：在从句中作 <strong>直接宾语</strong> ，可指代人或物，需与先行词的性、数一致（过去分词需配合）。<br>
          用法示例：<em>Montre-moi la voiture <strong>que</strong> tu as achetée.</em>（给我看看你买的车，que 指代 voiture（阴性单数），过去分词 achetée 配合）<br>
          <em>Les amis français <strong>que</strong> vous avez rencontrés font leurs études dans notre école.</em>（您认识的法国朋友们在我们学校上学，que 指代 amis（阳性复数），过去分词 rencontrés 配合）<br>
          特殊用法：代替形容词作表语，例如：<em>Innocent <strong>que</strong> il est, il ne peut pas commettre de crime.</em>（他是无辜的，不会犯罪，que 代替 innocent）</p>

          <h4 class="font-bold text-sm">3.8.3 关系代词 où (Le Pronom Relatif Où)</h4>
          <p class="text-sm">功能：在从句中作 <strong>地点状语</strong> 或 <strong>时间状语</strong> ，不可省略，可指代 “地方” 或 “时间”。<br>
          用法示例：<em>La ville <strong>où</strong> mon père travaille est au bord d’un fleuve.</em>（我父亲工作的城市位于河畔，où 指代 ville，作地点状语）<br><em>La construction a commencé le jour <strong>où</strong> il faisait beau.</em>（施工在天气晴朗的那一天开始，où 指代 jour，作时间状语）</p>

          <h4 class="font-bold text-sm">3.8.4 关系代词 dont (Le Pronom Relatif Dont)</h4>
          <p class="text-sm mb-1">功能：代替 “ <strong>de + 名词</strong> ” 结构，可在从句中作间接宾语、名词补语、形容词补语、数量补语或状语。</p>
          <table class="w-full text-sm border-collapse mb-4 text-left bg-white">
             <thead class="bg-slate-100"><tr><th class="p-2 border">用法类型</th><th class="p-2 border">例句及说明</th></tr></thead>
             <tbody>
               <tr><td class="p-2 border">间接宾语</td><td class="p-2 border">Je vais voir le film <strong>dont</strong> vous m’avez parlé. (我要去看您提过的那部电影，dont 代替 de ce film)</td></tr>
               <tr><td class="p-2 border">名词补语</td><td class="p-2 border">Nous avons visité cette usine <strong>dont</strong> le directeur est un savant célèbre. (我们参观了这家工厂，其厂长是著名学者，dont 代替 de cette usine)</td></tr>
               <tr><td class="p-2 border">形容词补语</td><td class="p-2 border">Il nous a raconté ses succès <strong>dont</strong> il est très fier. (他向我们谈起他十分自豪的成绩，dont 代替 de ses succès)</td></tr>
               <tr><td class="p-2 border">数量补语</td><td class="p-2 border">Nous avons reçu dix visiteurs français <strong>dont</strong> six sont étudiants. (我们接待了 10 位法国参观者，其中 6 位是学生，dont 代替 de ces dix visiteurs)</td></tr>
               <tr><td class="p-2 border">状语（原因 / 方式）</td><td class="p-2 border">La maladie <strong>dont</strong> il est mort était très rare. (他死于的那种病非常罕见，dont 代替 de cette maladie（原因状语）)；<br>La manière <strong>dont</strong> il travaille n’est pas ordinaire. (他的工作方式很特别，dont 代替 de cette manière（方式状语）)</td></tr>
             </tbody>
          </table>

          <h3>3.9 指示代词 (Les Pronoms Démonstratifs)</h3>
          <p class="text-sm mb-2">指示代词用于 <strong>指代特定的人或物</strong> （无需后接名词），分简单形式、复合形式和中性形式。</p>

          <h4 class="font-bold text-sm">3.9.1 形式一览 (Vue d'Ensemble des Formes)</h4>
          <table class="w-full text-sm border-collapse mb-4 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">类型</th><th class="p-2 border">单数阳性</th><th class="p-2 border">单数阴性</th><th class="p-2 border">中性</th><th class="p-2 border">复数阳性</th><th class="p-2 border">复数阴性</th></tr>
             <tr><td class="p-2 border">简单形式</td><td class="p-2 border">celui</td><td class="p-2 border">celle</td><td class="p-2 border">ce</td><td class="p-2 border">ceux</td><td class="p-2 border">celles</td></tr>
             <tr><td class="p-2 border">复合形式</td><td class="p-2 border">celui-ci<br>celui-là</td><td class="p-2 border">celle-ci<br>celle-là</td><td class="p-2 border">ceci<br>cela(ça)</td><td class="p-2 border">ceux-ci<br>ceux-là</td><td class="p-2 border">celles-ci<br>celles-là</td></tr>
          </table>

          <h4 class="font-bold text-sm">3.9.2 简单形式的用法 (Usage des Formes Simples)</h4>
          <p class="text-sm">简单形式后常接 “de + 补语” 或关系从句，避免重复前文提到的名词。<br>示例：<br><em>Voici ma voiture, et <strong>celle</strong> de mon père est garée derrière la maison.</em>（这是我的车，我父亲的车停在房子后面，celle 代替 la voiture）<br><em>Je cherche des journaux, <strong>ceux</strong> qui étaient sur la table hier.</em>（我在找报纸，就是昨天在桌子上的那些，ceux 代替 les journaux）<br><em>Tiens, tu vois trois hommes là-bas ? <strong>Celui</strong> qui porte un chapeau, c’est le directeur.</em>（喂，你看到那边三个男人了吗？戴帽子的那个是经理，celui 代替 l’homme）<br><strong>独立用法</strong>：复数形式（ceux/celles）可泛指一类人或事物，例如：<br><em><strong>Ceux</strong> qui ne travaillent pas ne reçoivent rien.</em>（不劳动者不得食）<br><em><strong>Ceux</strong> qui veulent visiter le musée doivent se présenter à l’entrée à dix heures.</em>（想参观博物馆的人需十点在入口集合）</p>

          <h4 class="font-bold text-sm">3.9.3 复合形式的用法 (Usage des Formes Composées)</h4>
          <p class="text-sm">复合形式（加 -ci/-là）用于 <strong>对比两组事物</strong> 或 <strong>表明远近</strong> ：<br><strong>-ci</strong>：指 “近的事物” 或 “后面提到的事物”<br><strong>-là</strong>：指 “远的事物” 或 “前面提到的事物”<br>示例：<br><em>Voici ces deux châteaux ; <strong>celui-ci</strong> a été construit au XVe siècle, <strong>celui-là</strong> au XVIe.</em>（这是两座城堡，这座（近的）建于 15 世纪，那座（远的）建于 16 世纪）<br><em>Maman nous a donné deux robes ; <strong>celle-ci</strong> est à toi, <strong>celle-là</strong> est à moi.</em>（妈妈给了我们两条裙子，这条是你的，那条是我的）<br>叙述文本中，celui-ci 常指后文事物，celui-là 指前文事物，例如：<em>Honoré de Balzac et Victor Hugo étaient deux grands écrivains français ; <strong>celui-ci</strong> (Hugo) est romantique, <strong>celui-là</strong> (Balzac) est réaliste.</em>（奥诺雷・德・巴尔扎克和维克多・雨果是两位法国大作家，前者（雨果）是浪漫主义者，后者（巴尔扎克）是现实主义者）</p>

          <h4 class="font-bold text-sm">3.9.4 中性指示代词 (Pronoms Démonstratifs Neutres: Ce, Ceci, Cela)</h4>
          <p class="text-sm">中性指示代词不指代具体的人或物，可指代 “不明确的事物”“整个句子” 或 “抽象概念”。<br><strong>代词 ce</strong>：<br>作主语、宾语或表语，例如：<em>C’est un étudiant.</em>（这是一个学生，作主语）；<em>Ce sont des étudiants.</em>（这些是学生，复数用 ce sont）。<br>与关系代词连用，例如：<em>Je vois de mes propres yeux <strong>ce qui</strong> s’est passé.</em>（我亲眼看到了发生的事，ce qui 指代 “发生的事”）；<em><strong>Ce que</strong> vous avez fait nous plaît beaucoup.</em>（您做的事我们很喜欢，ce que 指代 “您做的事”）。<br><strong>代词 ceci、cela (ça)</strong>：<br>用于区分前后文事物，例如：<em>Ceci est à moi, cela est à toi.</em>（这个是我的，那个是你的）。<br>指代整件事，例如：<em>Je n’aime pas ça.</em>（我不喜欢这样 / 这件事）。</p>

          <h3>3.10 泛指代词 tout (Le Pronom Indéfini Tout)</h3>
          <p class="text-sm">泛指代词 tout 用于指物表 “ <strong>所有的东西</strong> ”，复数形式（tous/toutes）可指人或物，需与所指代对象的性、数一致。</p>
          <h4 class="font-bold text-sm">3.10.1 用法表格</h4>
          <table class="w-full text-sm border-collapse mb-4 text-left bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">形式</th><th class="p-2 border">用法说明</th><th class="p-2 border">例句及翻译</th></tr>
             <tr><td class="p-2 border">tout（阳性单数）</td><td class="p-2 border">指 “一切事物”（不可数）</td><td class="p-2 border"><em>Tout a changé en Chine.</em> (在中国一切都变了)</td></tr>
             <tr><td class="p-2 border">tous [tus]（阳性复数）</td><td class="p-2 border">指 “所有的人 / 物”（阳性）</td><td class="p-2 border"><em>On ne peut pas plaire à tous.</em> (我们不可能让所有人满意)</td></tr>
             <tr><td class="p-2 border">toutes（阴性复数）</td><td class="p-2 border">指 “所有的人 / 物”（阴性）</td><td class="p-2 border"><em>Elles sont toutes venues à la soirée.</em> (她们都来参加晚会了)</td></tr>
          </table>

          <h3>3.11 重读代词 soi (Le Pronom Tonique Soi)</h3>
          <p class="text-sm">代词 soi 是泛指代词 <strong>on</strong> 的重读形式，表 “ <strong>一般人、某人自己</strong> ”，可与 chacun（每人）、personne（无人）等词搭配使用。<br>3.11.1 用法示例<br><em>Chacun travaille pour soi.</em>（人人都为自己工作）<br><em>Personne ne rentre chez soi.</em>（没有人回家）<br><em>On ne peut pas travailler seulement pour soi.</em>（人不能只为自己工作）<br><em>Cela va de soi.</em>（这是当然的，固定表达）</p>
        `
      },
      {
        id: "chap4",
        title: "第四章：形容词与副词",
        content: `
          <h3>4.1 形容词的性和数变化 (L'Accord en Genre et en Nombre des Adjectifs)</h3>
          <p class="text-sm">形容词需与所修饰的名词在 <strong>性、数</strong> 上保持一致，多数规则变化，少数特殊。</p>
          
          <h4 class="font-bold text-sm">4.1.1 变化规则表格</h4>
          <table class="w-full text-sm border-collapse mb-3 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">规则类型</th><th class="p-2 border">阳性单数</th><th class="p-2 border">阴性单数</th><th class="p-2 border">阳性复数</th><th class="p-2 border">阴性复数</th></tr>
             <tr><td class="p-2 border">一般规则</td><td class="p-2 border">libre<br>bleu</td><td class="p-2 border">libre<br>bleue</td><td class="p-2 border">libres<br>bleus</td><td class="p-2 border">libres<br>bleues</td></tr>
             <tr><td class="p-2 border" rowspan="6">特殊规则</td><td class="p-2 border">ancien (-en)</td><td class="p-2 border">ancienne (-enne)</td><td class="p-2 border">anciens</td><td class="p-2 border">anciennes</td></tr>
             <tr><td class="p-2 border">bon (-on)</td><td class="p-2 border">bonne (-onne)</td><td class="p-2 border">bons</td><td class="p-2 border">bonnes</td></tr>
             <tr><td class="p-2 border">heureux (-eux)</td><td class="p-2 border">heureuse (-euse)</td><td class="p-2 border">heureux</td><td class="p-2 border">heureuses</td></tr>
             <tr><td class="p-2 border">actif (-f)</td><td class="p-2 border">active (-ve)</td><td class="p-2 border">actifs</td><td class="p-2 border">actives</td></tr>
             <tr><td class="p-2 border">premier (-er)</td><td class="p-2 border">première (-ère)</td><td class="p-2 border">premiers</td><td class="p-2 border">premières</td></tr>
             <tr><td class="p-2 border">gros (-s)</td><td class="p-2 border">grosse (-sse)</td><td class="p-2 border">gros</td><td class="p-2 border">grosses</td></tr>
             <tr><td class="p-2 border" rowspan="3">特殊词形</td><td class="p-2 border">beau</td><td class="p-2 border">belle</td><td class="p-2 border">beaux</td><td class="p-2 border">belles</td></tr>
             <tr><td class="p-2 border">vieux</td><td class="p-2 border">vieille</td><td class="p-2 border">vieux</td><td class="p-2 border">vieilles</td></tr>
             <tr><td class="p-2 border">nouveau</td><td class="p-2 border">nouvelle</td><td class="p-2 border">nouveaux</td><td class="p-2 border">nouvelles</td></tr>
          </table>

          <h4 class="font-bold text-sm">4.1.2 特殊变体说明</h4>
          <p class="text-sm">当 beau/vieux/nouveau 修饰以 <strong>元音或哑音 h</strong> 开头的阳性单数名词时，需变为 <strong>bel/vieil/nouvel</strong>，避免元音连读，例如：<br><em>un bel arbre</em>（一棵美丽的树，arbre 元音开头）<br><em>un vieil homme</em>（一位老人，homme 哑音 h 开头）<br><em>un nouvel ami</em>（一个新朋友，ami 元音开头）</p>

          <h3>4.2 形容词的位置 (La Place des Adjectifs)</h3>
          <p class="text-sm">法语形容词的位置分 “ <strong>名词后</strong> ”（多数情况）和 “ <strong>名词前</strong> ”（少数情况），部分形容词位置不同含义不同。</p>
          
          <h4 class="font-bold text-sm">4.2.1 名词后（多数品质形容词）</h4>
          <p class="text-sm">表事物的性质、特征，例如：<br><em>un croissant chaud</em>（一个热羊角面包，chaud 表 “热的”，修饰 croissant）<br><em>un ami français</em>（一个法国朋友，français 表 “法国的”，修饰 ami）</p>
          
          <h4 class="font-bold text-sm">4.2.2 名词前（少数单 / 双音节形容词）</h4>
          <p class="text-sm">常见形容词：grand（大的）、petit（小的）、bon（好的）、mauvais（坏的）、jeune（年轻的）、vieux（年老的）、beau（美丽的）、joli（漂亮的）、gros（胖的）、nouveau（新的）、pauvre（可怜的 / 贫穷的）。<br>口诀：大小好坏年老少，美漂胖新可怜包。<br>示例：<br><em>un petit arbre</em>（一棵小树，petit 位于名词前）<br><em>une grande chambre</em>（一个大房间，grande 位于名词前）<br><em>un beau cadeau</em>（一件漂亮的礼物，beau 位于名词前）</p>

          <h4 class="font-bold text-sm">4.2.3 位置不同含义不同的形容词</h4>
          <p class="text-sm">部分形容词在名词前后含义有差异，需特别注意：</p>
          <table class="w-full text-sm border-collapse mb-3 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">形容词</th><th class="p-2 border">名词前含义</th><th class="p-2 border">名词后含义</th><th class="p-2 border">示例</th></tr>
             <tr><td class="p-2 border">cher</td><td class="p-2 border">亲爱的</td><td class="p-2 border">昂贵的</td><td class="p-2 border">un cher ami (亲爱的朋友)<br>une montre chère (昂贵的手表)</td></tr>
             <tr><td class="p-2 border">grand</td><td class="p-2 border">伟大的</td><td class="p-2 border">身材高大的</td><td class="p-2 border">un grand homme (伟人)<br>un homme grand (身材高大的男人)</td></tr>
             <tr><td class="p-2 border">pauvre</td><td class="p-2 border">可怜的</td><td class="p-2 border">贫穷的</td><td class="p-2 border">une pauvre famille (可怜的家庭)<br>une famille pauvre (贫穷的家庭)</td></tr>
          </table>

          <h3>4.3 形容词补语 (Les Compléments d'Adjectif)</h3>
          <p class="text-sm">部分形容词需通过介词 <strong>à</strong> 或 <strong>de</strong> 引出补语（补语可为名词或动词不定式），补充说明形容词的对象或内容。</p>
          
          <h4 class="font-bold text-sm">4.3.1 需用 à 引出补语的形容词</h4>
          <p class="text-sm">常见形容词：prêt à（准备好的）、difficile à（难以…… 的）、facile à（容易…… 的）、habile à（擅长…… 的）等。<br>示例：<br><em>Elle est prête à partir.</em>（她准备出发，à 引出不定式 partir）<br><em>Ce livre est difficile à comprendre.</em>（这本书难懂，à 引出不定式 comprendre）<br><em>Il est habile à jouer du piano.</em>（他擅长弹钢琴，à 引出名词短语 jouer du piano）</p>

          <h4 class="font-bold text-sm">4.3.2 需用 de 引出补语的形容词</h4>
          <p class="text-sm">常见形容词：content de（满意的）、curieux de（好奇的）、fier de（自豪的）、peur de（害怕的）、triste de（悲伤的）等。<br>示例：<br><em>Elle est contente de son travail.</em>（她对工作很满意，de 引出名词 son travail）<br><em>Je suis curieux de tout ce qui se passe en Chine.</em>（我对中国发生的一切都很好奇，de 引出从句 tout ce qui se passe en Chine）<br><em>Il est fier de ses enfants.</em>（他为他的孩子们感到自豪，de 引出名词 ses enfants）</p>

          <h3>4.4 形容词的比较级与最高级 (Les Degrés de Comparaison des Adjectifs)</h3>
          <p class="text-sm">比较级用于 <strong>两者 / 多者之间的比较</strong> ，最高级用于 <strong>三者及以上的最高 / 最低程度</strong> 。</p>
          
          <h4 class="font-bold text-sm">4.4.1 比较级的构成与用法</h4>
          <p class="text-sm">比较级分三种程度，核心结构为 “程度副词 + 形容词 + que + 比较对象”：</p>
          <table class="w-full text-sm border-collapse mb-2 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">比较程度</th><th class="p-2 border">构成规则</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">➕</td><td class="p-2 border">plus + 形容词 + que</td><td class="p-2 border"><em>La France est plus grande que l’Espagne.</em>（法国比西班牙大）</td></tr>
              <tr><td class="p-2 border">＝</td><td class="p-2 border">aussi + 形容词 + que</td><td class="p-2 border"><em>Julien est aussi intelligent que Pierre.</em>（于连和皮埃尔一样聪明）</td></tr>
              <tr><td class="p-2 border">➖</td><td class="p-2 border">moins + 形容词 + que</td><td class="p-2 border"><em>Le Luxembourg est moins grand que la France.</em>（卢森堡比法国小）</td></tr>
            </tbody>
          </table>
          <p class="text-sm">注意事项：<br>比较对象为代词时，需用 <strong>重读人称代词</strong> ，例如：<em>Yves est plus intelligent que moi.</em>（伊夫比我聪明，moi 为重读代词）。<br>比较对象可省略（上下文明确时），例如：<em>Ce fleuve est plus long.</em>（这条河更长，省略 “than that one”）。</p>

          <h4 class="font-bold text-sm">4.4.2 不规则比较级</h4>
          <p class="text-sm">少数形容词的比较级形式特殊，需单独记忆：</p>
          <table class="w-full text-sm border-collapse mb-3 text-center bg-white">
            <tr class="bg-slate-100"><th class="p-2 border">原级</th><th class="p-2 border">比较级形式（较高程度）</th><th class="p-2 border">含义</th></tr>
            <tr><td class="p-2 border">bon/bonne</td><td class="p-2 border">meilleur/meilleure</td><td class="p-2 border">更好的</td></tr>
            <tr><td class="p-2 border">mauvais/mauvaise</td><td class="p-2 border">pire 或 plus mauvais/mauvaise</td><td class="p-2 border">更坏的</td></tr>
            <tr><td class="p-2 border">petit/petite</td><td class="p-2 border">moindre 或 plus petit/petite</td><td class="p-2 border">更小的 / 更少的</td></tr>
          </table>
          <p class="text-sm">示例：<br><em>Votre maison est meilleure que ma maison.</em>（您的房子比我的好）<br><em>L’hiver à Moscou est pire qu’à Paris.</em>（莫斯科的冬天比巴黎糟）<br><em>Cette voiture roule avec une vitesse moindre.</em>（这辆车行驶得较慢）</p>

          <h4 class="font-bold text-sm">4.4.3 最高级的构成与用法</h4>
          <p class="text-sm">最高级结构为 “定冠词 + 程度副词 + 形容词 + de + 比较范围”：</p>
          <table class="w-full text-sm border-collapse mb-2 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">最高程度</th><th class="p-2 border">构成规则</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">最高程度</td><td class="p-2 border">le/la/les plus + 形容词 + de</td><td class="p-2 border"><em>Le Pacifique est le plus grand océan du monde.</em>（太平洋是世界上最大的海洋）</td></tr>
              <tr><td class="p-2 border">最低程度</td><td class="p-2 border">le/la/les moins + 形容词 + de</td><td class="p-2 border"><em>Paul est le moins grand de notre classe.</em>（保罗是我们班最矮的）</td></tr>
            </tbody>
          </table>
          <p class="text-sm">注意事项：<br>形容词位置与最高级的搭配：<br>形容词位于名词前：le/la/les plus + 形容词 + 名词 + de…，例如：<em>Paris est la plus grande ville de France.</em>（巴黎是法国最大的城市）。<br>形容词位于名词后：名词 + le/la/les plus + 形容词 + de…，例如：<em>La Loire est le fleuve le plus long de France.</em>（卢瓦尔河是法国最长的河流）。<br>不规则形容词的最高级：在比较级前加定冠词，例如：<br><em>Sophie est la meilleure élève de notre classe.</em>（索菲是我们班最好的学生，meilleure 前加 la）<br><em>C’est la pire chose de toutes.</em>（这是所有事情中最糟的，pire 前加 la）<br><em>Il est malade, et le moindre bruit peut le déranger.</em>（他生病了，哪怕最小的声音也会打扰他，moindre 前加 le）</p>

          <h3>4.5 副词 tout (L'Adverbe Tout)</h3>
          <p class="text-sm">副词 tout 表 “ <strong>非常、很、完全地</strong> ”，需根据所修饰形容词的首字母（元音 / 辅音、哑音 h / 嘘音 h）变化性、数。</p>
          <h4 class="font-bold text-sm">4.5.1 变化规则</h4>
          <p class="text-sm">修饰以 <strong>辅音或嘘音 h</strong> 开头的阴性形容词时，tout 需变性、数（toute/toutes），例如：<br><em>Ne la laissez pas toute seule.</em>（不要把她单独留下，seule 为辅音开头阴性形容词，tout 变 toute）<br><em>J’aime les voitures toutes neuves.</em>（我喜欢崭新的汽车，neuves 为辅音开头阴性复数形容词，tout 变 toutes）。<br>修饰以 <strong>元音或哑音 h</strong> 开头的形容词时，tout 不变（无论阴阳性、单复数），例如：<br><em>Elle est tout heureuse.</em>（她非常高兴，heureuse 为元音开头阴性形容词，tout 不变）<br><em>Il habite tout près de chez moi.</em>（他住得离我家很近，près 为元音开头形容词，tout 不变）。</p>

          <h3>4.6 副词的比较级与最高级 (Les Degrés de Comparaison des Adverbes)</h3>
          <p class="text-sm">副词的比较级 / 最高级结构与形容词类似，但副词无性别变化，最高级始终用定冠词 le。</p>
          
          <h4 class="font-bold text-sm">4.6.1 比较级的构成与用法</h4>
          <p class="text-sm">结构： <strong>plus/aussi/moins + 副词 + que + 比较对象</strong> 。<br>示例：<br><em>Le train sans conducteur roulera plus vite que le TGV.</em>（无人驾驶列车将跑得比高速火车快）<br><em>Elle parle aussi vite que le professeur.</em>（她说得和老师一样快）<br><em>Je me lève moins tôt que mes parents.</em>（我起得比父母晚）<br>注意事项：<br>比较对象为代词时，用 <strong>重读人称代词</strong> ，例如：<em>Il mange plus lentement que moi.</em>（他吃得比我慢）。<br>比较对象可省略，例如：<em>Paul court vite, Michel court plus vite.</em>（保罗跑得快，米歇尔跑得更快）。</p>

          <h4 class="font-bold text-sm">4.6.2 不规则副词比较级</h4>
          <p class="text-sm">部分常用副词的比较级形式特殊，需记忆：</p>
          <table class="w-full text-sm border-collapse mb-3 text-center bg-white">
            <tr class="bg-slate-100"><th class="p-1 border">原级</th><th class="p-1 border">较高比较级</th><th class="p-1 border">同等比较级</th><th class="p-1 border">较低比较级</th><th class="p-1 border">例句及翻译</th></tr>
            <tr><td class="p-1 border">bien</td><td class="p-1 border">mieux</td><td class="p-1 border">aussi bien</td><td class="p-1 border">moins bien</td><td class="p-1 border"><em>Le TGV fonctionne mieux que le train normal.</em> (高速火车运转得比普通火车好)</td></tr>
            <tr><td class="p-1 border">mal</td><td class="p-1 border">pis/plus mal</td><td class="p-1 border">aussi mal</td><td class="p-1 border"></td><td class="p-1 border"><em>Il travaille pis qu’avant.</em> (他比以前干得差)</td></tr>
            <tr><td class="p-1 border">beaucoup</td><td class="p-1 border">plus</td><td class="p-1 border">autant</td><td class="p-1 border"></td><td class="p-1 border"><em>Je dépense beaucoup, mais elle dépense plus.</em> (我花得多，但她花得更多)</td></tr>
            <tr><td class="p-1 border">peu</td><td class="p-1 border">moins</td><td class="p-1 border">aussi peu</td><td class="p-1 border"></td><td class="p-1 border"><em>Elle se lève le moins tôt de tous mes amis.</em> (她是我所有朋友中起得最晚的)</td></tr>
          </table>

          <h4 class="font-bold text-sm">4.6.3 最高级的构成与用法</h4>
          <p class="text-sm">结构： <strong>le plus/moins + 副词 + de + 比较范围</strong> （冠词始终用 le）。<br>示例：<br><em>Elle court le plus vite de notre classe.</em>（她是我们班跑得最快的）<br><em>Il court le moins vite de tous mes copains.</em>（他在我的伙伴中跑得最慢的）<br>比较范围明确时可省略：<em>Quel moyen de transport va le plus vite ?</em>（哪种交通工具跑得最快？）</p>
        `
      }
    ]
  },
  {
    id: "part2",
    title: "第二部分：动词变位与语态",
    desc: "Conjugaison et Voix des Verbes",
    chapters: [
      {
        id: "chap5",
        title: "第五章：动词基础与现在时",
        content: `
          <h3>5.1 动词的分类 (La Classification des Verbes)</h3>
          <p class="text-sm mb-2">法语动词按词尾和变位规则分为三组，其中前两组为规则动词，第三组为不规则动词。</p>
          <table class="w-full text-sm border-collapse mb-4 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">组别</th><th class="p-2 border">词尾特征</th><th class="p-2 border">变位规则</th><th class="p-2 border">示例（不定式）</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">第一组</td><td class="p-2 border">以 -er 结尾（aller 除外）</td><td class="p-2 border">去掉 -er，加 -e, -es, -e, -ons, -ez, -ent</td><td class="p-2 border">présenter（介绍）、parler（说）</td></tr>
              <tr><td class="p-2 border">第二组</td><td class="p-2 border">以 -ir 结尾，现在分词以 -issant 结尾</td><td class="p-2 border">去掉 -ir，加 -is, -is, -it, -issons, -issez, -issent</td><td class="p-2 border">finir（结束）、choisir（选择）</td></tr>
              <tr><td class="p-2 border">第三组</td><td class="p-2 border">词尾多样（-ir, -re, -oir 等）</td><td class="p-2 border">单独记忆；也有一定规律可循</td><td class="p-2 border">être（是）、avoir（有）、faire（做）、voir（看）</td></tr>
            </tbody>
          </table>

          <h3>5.2 及物与不及物动词 (Verbes Transitifs et Intransitifs)</h3>
          <p class="text-sm mb-2">根据是否能带宾语，动词分为及物动词和不及物动词，部分动词可兼类。</p>
          <table class="w-full text-sm border-collapse mb-4 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">动词类型</th><th class="p-2 border">定义与特征</th><th class="p-2 border">示例句子及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">直接及物动词</td><td class="p-2 border">能带 <strong>直接宾语</strong> （无需介词引导），宾语可直接回答 “谁”“什么”</td><td class="p-2 border"><em>Nous faisons des exercices.</em>（我们做练习，des exercices 为直接宾语）</td></tr>
              <tr><td class="p-2 border">间接及物动词</td><td class="p-2 border">需借助 <strong>介词</strong> （多为 à）引出宾语，宾语不可直接回答 “谁”“什么”</td><td class="p-2 border"><em>Marie pense à ses parents.</em>（玛丽想念她父母，à ses parents 为间接宾语）</td></tr>
              <tr><td class="p-2 border">不及物动词</td><td class="p-2 border">不带宾语，动作不作用于其他对象</td><td class="p-2 border"><em>Nous allons à l’école.</em>（我们去上学，无宾语）</td></tr>
              <tr><td class="p-2 border">兼类动词</td><td class="p-2 border">既可作及物动词，也可作不及物动词，含义随用法变化</td><td class="p-2 border">Habiter：<em>J’habite Paris.</em>（及物，我住巴黎）<br><em>J’habite dans un appartement.</em>（不及物，我住在一套公寓里）</td></tr>
            </tbody>
          </table>

          <h3>5.3 直陈式现在时 (Le Présent de l'Indicatif)</h3>
          <p class="text-sm mb-2">直陈式现在时是最基础的时态，用于表示 “当前动作”“客观事实” 或 “习惯性动作”。</p>
          
          <h4 class="font-bold text-sm">5.3.1 用法场景</h4>
          <ul class="list-disc pl-5 text-sm space-y-1 mb-3">
             <li><strong>说话时正在发生的动作或存在的状态</strong>，例如：<em>On va au cinéma.</em>（我们正在去电影院）。</li>
             <li><strong>客观事实或普遍真理</strong>，例如：<em>L’union fait la force.</em>（团结就是力量）。</li>
             <li><strong>习惯性、重复性动作</strong>，例如：<em>Je vais au travail tous les jours.</em>（我每天去上班）。</li>
          </ul>

          <h4 class="font-bold text-sm">5.3.2 变位示例</h4>
          <p class="text-sm font-bold mt-2">第一组动词（以 présenter 为例）：</p>
          <table class="w-full text-sm border-collapse mb-2 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-1 border">人称</th><th class="p-1 border">变位形式</th><th class="p-1 border">发音提示</th></tr>
             <tr><td class="p-1 border">je</td><td class="p-1 border">présente</td><td class="p-1 border">[pʁezɑ̃t]</td></tr>
             <tr><td class="p-1 border">tu</td><td class="p-1 border">présentes</td><td class="p-1 border">[pʁezɑ̃ts]</td></tr>
             <tr><td class="p-1 border">il/elle</td><td class="p-1 border">présente</td><td class="p-1 border">[pʁezɑ̃t]</td></tr>
             <tr><td class="p-1 border">nous</td><td class="p-1 border">présentons</td><td class="p-1 border">[pʁezɑ̃tɔ̃]</td></tr>
             <tr><td class="p-1 border">vous</td><td class="p-1 border">présentez</td><td class="p-1 border">[pʁezɑ̃te]</td></tr>
             <tr><td class="p-1 border">ils/elles</td><td class="p-1 border">présentent</td><td class="p-1 border">[pʁezɑ̃t]（-ent 不发音）</td></tr>
          </table>
          <p class="text-sm"><strong>注意</strong>：部分第一组动词因读音需要，词干会发生变化：<br>以 <strong>-cer</strong> 结尾的动词，由于读音关系，第一人称复数变位需将 c 改成 ç ： placer→plaçons<br>以 <strong>-ger</strong> 结尾的动词，由于读音关系，第一人称复数变位需将 g 改成 ge ： manger→mangeons<br>以 <strong>-oyer</strong> 或 <strong>-uyer</strong> 结尾的动词，在单数所有人称以及复数第三人称的变位中， y 需要改成 i ： appuyer→appuie<br>以 <strong>-ayer</strong> 结尾的动词，变位时可改成 i，也可保留 y：payer→paie 或 paye<br>以 <strong>-e*er, -é*er</strong> 结尾的动词（此处*代表一个辅音字母或是辅音群）在单数所有人称以及复数第三人称的变位中，e 或 é 要变成 è：peser→pèse</p>

          <p class="text-sm font-bold mt-2">第二组动词（以 finir 为例）：</p>
          <table class="w-full text-sm border-collapse mb-2 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-1 border">人称</th><th class="p-1 border">变位形式</th></tr>
             <tr><td class="p-1 border">je</td><td class="p-1 border">finis</td></tr>
             <tr><td class="p-1 border">tu</td><td class="p-1 border">finis</td></tr>
             <tr><td class="p-1 border">il/elle</td><td class="p-1 border">finit</td></tr>
             <tr><td class="p-1 border">nous</td><td class="p-1 border">finissons</td></tr>
             <tr><td class="p-1 border">vous</td><td class="p-1 border">finissez</td></tr>
             <tr><td class="p-1 border">ils/elles</td><td class="p-1 border">finissent</td></tr>
          </table>

          <p class="text-sm font-bold mt-2">第三组不规则动词（常见基础动词）：</p>
          <table class="w-full text-sm border-collapse mb-4 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-1 border">动词</th><th class="p-1 border">je</th><th class="p-1 border">tu</th><th class="p-1 border">il/elle</th><th class="p-1 border">nous</th><th class="p-1 border">vous</th><th class="p-1 border">ils/elles</th></tr>
             <tr><td class="p-1 border">être</td><td class="p-1 border">suis</td><td class="p-1 border">es</td><td class="p-1 border">est</td><td class="p-1 border">sommes</td><td class="p-1 border">êtes</td><td class="p-1 border">sont</td></tr>
             <tr><td class="p-1 border">avoir</td><td class="p-1 border">ai</td><td class="p-1 border">as</td><td class="p-1 border">a</td><td class="p-1 border">avons</td><td class="p-1 border">avez</td><td class="p-1 border">ont</td></tr>
             <tr><td class="p-1 border">faire</td><td class="p-1 border">fais</td><td class="p-1 border">fais</td><td class="p-1 border">fait</td><td class="p-1 border">faisons</td><td class="p-1 border">faites</td><td class="p-1 border">font</td></tr>
             <tr><td class="p-1 border">aller</td><td class="p-1 border">vais</td><td class="p-1 border">vas</td><td class="p-1 border">va</td><td class="p-1 border">allons</td><td class="p-1 border">allez</td><td class="p-1 border">vont</td></tr>
             <tr><td class="p-1 border">voir</td><td class="p-1 border">vois</td><td class="p-1 border">vois</td><td class="p-1 border">voit</td><td class="p-1 border">voyons</td><td class="p-1 border">voyez</td><td class="p-1 border">voient</td></tr>
          </table>

          <h3>5.4 代词式动词 (Les Verbes Pronomiaux)</h3>
          <p class="text-sm mb-2">代词式动词与自反代词（me, te, se, nous, vous, se）连用，动词的人称、数需与主语一致，可表自反、相互、被动等意义。</p>
          
          <h4 class="font-bold text-sm">5.4.1 自反代词形式</h4>
          <table class="w-full text-sm border-collapse mb-3 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">主语人称</th><th class="p-2 border">自反代词（单数）</th><th class="p-2 border">自反代词（复数）</th></tr>
             <tr><td class="p-2 border">je</td><td class="p-2 border">me (m’)</td><td class="p-2 border">nous</td></tr>
             <tr><td class="p-2 border">tu</td><td class="p-2 border">te (t’)</td><td class="p-2 border">vous</td></tr>
             <tr><td class="p-2 border">il/elle</td><td class="p-2 border">se (s’)</td><td class="p-2 border">ils/elles</td></tr>
          </table>

          <h4 class="font-bold text-sm">5.4.2 变位示例（以 se lever 为例，直陈式现在时）</h4>
          <table class="w-full text-sm border-collapse mb-3 text-center bg-white">
             <tr class="bg-slate-100"><th class="p-2 border">人称</th><th class="p-2 border">肯定句</th><th class="p-2 border">否定句</th><th class="p-2 border">疑问句</th></tr>
             <tr><td class="p-2 border">je</td><td class="p-2 border">je me lève</td><td class="p-2 border">je ne me lève pas</td><td class="p-2 border">Est-ce que je me lève ?</td></tr>
             <tr><td class="p-2 border">tu</td><td class="p-2 border">tu te lèves</td><td class="p-2 border">tu ne te lèves pas</td><td class="p-2 border">Te lèves-tu ?</td></tr>
             <tr><td class="p-2 border">il/elle</td><td class="p-2 border">il se lève</td><td class="p-2 border">il ne se lève pas</td><td class="p-2 border">Se lève-t-il ?</td></tr>
             <tr><td class="p-2 border">nous</td><td class="p-2 border">nous nous levons</td><td class="p-2 border">nous ne nous levons pas</td><td class="p-2 border">Nous levons-nous ?</td></tr>
             <tr><td class="p-2 border">vous</td><td class="p-2 border">vous vous levez</td><td class="p-2 border">vous ne vous levez pas</td><td class="p-2 border">Vous levez-vous ?</td></tr>
             <tr><td class="p-2 border">ils/elles</td><td class="p-2 border">ils se lèvent</td><td class="p-2 border">ils ne se lèvent pas</td><td class="p-2 border">Se lèvent-ils ?</td></tr>
          </table>

          <h4 class="font-bold text-sm">5.4.3 核心意义与示例</h4>
          <p class="text-sm"><strong>自反意义</strong> ：动作作用于主语自身（自反代词作直接宾语），例如：<em>Ma mère se lève très tôt.</em>（我母亲起得很早，se 代替 ma mère）。<br><strong>相互意义</strong> ：动作在多个主语之间相互作用（主语为复数），例如：<em>Valérie et Pascal se rencontrent dans la rue.</em>（瓦莱莉和帕斯卡在街上相遇，se 表 “相互”）。</p>

          <h3>5.5 无人称句型 (Les Phrases Impersonnelles)</h3>
          <p class="text-sm mb-2">无人称句的主语为 <strong>il</strong> （形式主语，无实际意义），用于表达天气、时间、存在、义务等抽象概念，动词用第三人称单数。</p>
          <h4 class="font-bold text-sm">5.5.1 常见用法场景</h4>
          <p class="text-sm">表达 <strong>天气</strong> ：<br><em>Il fait beau/mauvais.</em>（天气好 / 坏）<br><em>Il pleut.</em>（下雨）<br><em>Il neige.</em>（下雪）<br>表达 <strong>时间</strong> ：<br><em>Il est midi.</em>（中午 12 点）<br><em>Il est sept heures.</em>（7 点）<br>表达 <strong>存在</strong> （il y a 句型）：<br><em>Il y a un film ce soir.</em>（今晚有一场电影）<br><em>Il y a beaucoup de livres dans la bibliothèque.</em>（图书馆里有很多书）<br>表达 <strong>义务</strong> （il faut 句型）：<br><em>Il faut bien travailler.</em>（必须好好工作）<br><em>Il faut aller à l’école.</em>（得去上学）</p>
        `
      },
      {
        id: "chap6",
        title: "第六章：过去时态",
        content: `
          <h3>6.1 复合过去时 (Le Passé Composé)</h3>
          <p class="text-sm mb-2">复合过去时表示 “ <strong>已经完成的过去动作</strong> ” 或 “过去发生且与现在相关的动作”，可译为 “已经、曾经、过、了”。构成： <strong>助动词 avoir/être 的直陈式现在时 + 过去分词</strong> 。</p>
          
          <h4 class="font-bold text-sm">6.1.1 过去分词的构成 (Formation du Participe Passé)</h4>
          <p class="text-sm mb-1">过去分词的构成随动词组别变化，第三组动词为不规则形式，需记忆。</p>
          <table class="w-full text-sm border-collapse mb-2 text-left bg-white">
             <thead class="bg-slate-100"><tr><th class="p-2 border">动词组别</th><th class="p-2 border">构成规则</th><th class="p-2 border">示例</th></tr></thead>
             <tbody>
               <tr><td class="p-2 border">第一组</td><td class="p-2 border">去掉 -er，加 -é</td><td class="p-2 border">aimer → aimé；parler → parlé；présenter → présenté</td></tr>
               <tr><td class="p-2 border">第二组</td><td class="p-2 border">去掉 -ir，加 -i</td><td class="p-2 border">finir → fini；choisir → choisi；réussir → réussi</td></tr>
               <tr><td class="p-2 border">第三组</td><td class="p-2 border">不规则形式，单独记忆</td><td class="p-2 border">见下表</td></tr>
             </tbody>
          </table>
          <div class="text-sm mb-4">
            <strong>常见第三组动词过去分词表格：</strong>
            <div class="grid grid-cols-2 gap-4 mt-1">
              <ul class="list-disc pl-5">
                <li>être → été</li><li>avoir → eu</li><li>apprendre → appris</li><li>attendre → attendu</li><li>boire → bu</li><li>connaître → connu</li><li>devoir → dû</li><li>dire → dit</li><li>dormir → dormi</li><li>écrire → écrit</li><li>faire → fait</li><li>lire → lu</li>
              </ul>
              <ul class="list-disc pl-5">
                <li>mettre → mis</li><li>mourir → mort</li><li>naître → né</li><li>partir → parti</li><li>pleuvoir → plu</li><li>pouvoir → pu</li><li>prendre → pris</li><li>savoir → su</li><li>sourire → souri</li><li>vivre → vécu</li><li>voir → vu</li><li>vouloir → voulu</li>
              </ul>
            </div>
          </div>

          <h4 class="font-bold text-sm">6.1.2 以 avoir 为助动词 (Avec l'Auxiliaire Avoir)</h4>
          <p class="text-sm mb-2"><strong>多数及物动词</strong> 的复合过去时用 avoir 作助动词，否定句中 ne 位于助动词前，pas 位于过去分词后；疑问句中助动词与主语倒装。</p>
          <p class="text-sm mb-2"><strong>6.1.2.1 变位示例（以 demander 为例）</strong><br>肯定句：<em>je ai demandé, tu as demandé, il a demandé, nous avons demandé, vous avez demandé, ils ont demandé</em><br>否定句：<em>je n’ai pas demandé, tu n’as pas demandé, il n’a pas demandé, nous n’avons pas demandé, vous n’avez pas demandé, ils n’ont pas demandé</em><br>倒装疑问句：<em>Ai-je demandé ?, As-tu demandé ?, A-t-il demandé ?, Avons-nous demandé ?, Avez-vous demandé ?, Ont-ils demandé ?</em></p>
          <p class="text-sm mb-2"><strong>6.1.2.2 过去分词配合规则</strong><br>当过去分词前有 <strong>前置的直接宾语</strong> （名词或代词）时，过去分词需与该宾语在性、数上保持一致，例如：<br><em>J’aime cette montre; je <strong>l’</strong>ai acheté<strong>e</strong> hier.</em>（我喜欢这块手表，我昨天买的它，la montre 为阴性单数，过去分词 acheté 加 -e 变为 achetée）<br><em>Ces revues sont intéressantes; je <strong>les</strong> ai lu<strong>es</strong>.</em>（这些杂志很有趣，我读过了，les revues 为阴性复数，过去分词 lu 加 -es 变为 lues）<br><em>Combien de revues avez-vous acheté<strong>es</strong> ?</em>（您买了多少本杂志？revues 为阴性复数，过去分词 acheté 加 -es 变为 achetées）</p>
          <p class="text-sm mb-3"><strong>6.1.2.3 副词位置</strong><br>副词 bien, déjà, beaucoup, encore 等通常位于 <strong>助动词和过去分词之间</strong> ，例如：<br><em>Il a beaucoup mangé.</em>（他吃了很多）<br><em>J’ai déjà fini mon travail.</em>（我已经完成了工作）</p>

          <h4 class="font-bold text-sm">6.1.3 以 être 为助动词 (Avec l'Auxiliaire Être)</h4>
          <p class="text-sm mb-2"><strong>少数表示位置或状态变动的不及物动词</strong> 用 être 作助动词，常见动词有：naître, mourir, monter, descendre, tomber, arriver, rester, partir, entrer, devenir, sortir, venir, passer, aller, revenir, rentrer, retourner</p>
          <p class="text-sm mb-2"><strong>6.1.3.1 变位示例（以 aller 为例）</strong><br>je suis allé(e)<br>tu es allé(e)<br>il est allé / elle est allée<br>nous sommes allés(es)<br>vous êtes allé(e)(s)(es)<br>ils sont allés / elles sont allées</p>
          <p class="text-sm mb-3"><strong>6.1.3.2 过去分词配合规则</strong><br>过去分词必须与 <strong>主语</strong> 在性、数上保持一致（主语的性别决定过去分词的性别，主语的数决定过去分词的数），例如：<br><em>Charles est venu.</em>（夏尔来了，Charles 为阳性单数，过去分词 venu 不变）<br><em>Martine est arrivée à l’heure.</em>（玛蒂娜准时到了，Martine 为阴性单数，过去分词 arrivé 加 -e 变为 arrivée）<br><em>Ces deux jeunes filles sont parties.</em>（这两个年轻女孩走了，elles 为阴性复数，过去分词 parti 加 -es 变为 parties）</p>

          <h4 class="font-bold text-sm">6.1.4 代词式动词的复合过去时 (Passé Composé des Verbes Pronomiaux)</h4>
          <p class="text-sm mb-2"><strong>所有代词式动词</strong> 的复合过去时均用 être 作助动词，过去分词的配合规则根据自反代词的功能而定：</p>
          <p class="text-sm mb-2"><strong>6.1.4.1 变位示例（以 se lever 为例）</strong><br>je me suis levé(e)<br>tu t’es levé(e)<br>il s’est levé / elle s’est levée<br>nous nous sommes levés(es)<br>vous vous êtes levé(e)(s)(es)<br>ils se sont levés / elles se sont levées</p>
          <p class="text-sm mb-2"><strong>6.1.4.2 过去分词配合规则</strong><br><strong>自反代词作 直接宾语</strong> ：过去分词与主语在性、数上保持一致，例如：<br><em>Nous nous sommes rencontrés dans la rue.</em>（我们在街上相遇，nous 为复数，过去分词 rencontré 加 -s 变为 rencontrés）<br><em>Elle s’est lavée.</em>（她洗了澡，elle 为阴性单数，过去分词 lavé 加 -e 变为 lavée）。<br><strong>自反代词作 间接宾语</strong> ：过去分词不变，例如：<br><em>Véronique s’est lavé les mains.</em>（韦罗妮克洗了手，se 为间接宾语，指代 “韦罗妮克”，过去分词 lavé 不变）<br><em>Nous nous sommes parlé longtemps.</em>（我们聊了很久，se 表 “相互间接宾语”，过去分词 parlé 不变）。</p>

          <h3>6.2 最近过去时 (Le Passé Récent)</h3>
          <h4 class="font-bold text-sm">6.2.1 构成</h4>
          <p class="text-sm mb-2">由 <strong>venir（直陈式现在时） + de + 动词原形</strong> 构成，核心表 “刚刚发生的动作”。</p>
          <h4 class="font-bold text-sm">6.2.2 用法与示例</h4>
          <p class="text-sm">肯定句：<em>Je viens de finir mon travail.</em>（我刚刚完成工作）<br>否定句：<em>Je ne viens pas de finir mon travail.</em>（我还没完成工作）<br>疑问句：<em>As-tu vient de téléphoner à ton père?</em>（你刚给你父亲打电话了吗？） <strong>注意</strong> ：venir 的变位需与主语一致，例如：<em>Il vient de partir.</em>（他刚离开）、<em>Nous venons de manger.</em>（我们刚吃过饭）。</p>

          <h3>6.3 未完成过去时 (L'Impératif)</h3>
          <h4 class="font-bold text-sm">6.3.1 构成</h4>
          <p class="text-sm mb-2"><strong>规则动词</strong>：取直陈式现在时 <strong>第一人称复数（nous）</strong> 词形，去掉词尾 -ons，再加词尾 <strong>-ais, -ais, -ait, -ions, -iez, -aient</strong> 。示例（以 parler 为例）：<br>nous parlons → 去掉 -ons → parl- → 变位：je parlais, tu parlais, il parlait, nous parlions, vous parliez, ils parlaient。<br><strong>不规则动词</strong>（以 être 为例）：<br>特殊变位：j’étais, tu étais, il était, nous étions, vous étiez, ils étaient（无固定词干规则，需单独记忆）。</p>
          <h4 class="font-bold text-sm">6.3.2 用法与示例</h4>
          <p class="text-sm">描述 <strong>过去的状态或背景</strong> （常与复合过去时配合，作 “背景铺垫”）：<br><em>Hier, il faisait beau ; je suis allé me promener.</em>（昨天天气很好，我去散步了，il faisait beau 表背景）。<br>表示 <strong>过去一段时间的习惯性或重复动作</strong> （常与 pendant, tous les jours 等时间状语连用）：<br><em>Pendant les vacances, je me levais à six heures, je travaillais jusqu’à midi.</em>（假期里，我六点起床，工作到中午，表习惯性动作）。<br>与复合过去时连用：未完成过去时表 “持续背景”，复合过去时表 “一次性动作”：<br><em>Quand je suis entré, il regardait la télévision.</em>（我进来的时候，他正在看电视，regardait 表持续动作，suis entré 表一次性动作）。</p>

          <h3>6.4 愈过去时 (Le Plus-que-parfait)</h3>
          <h4 class="font-bold text-sm">6.4.1 构成</h4>
          <p class="text-sm mb-2">由 <strong>助动词 avoir/être 的未完成过去时 + 过去分词</strong> 构成，核心表 “过去某一动作之前已完成的动作”（“过去的过去”）。</p>
          <h4 class="font-bold text-sm">6.4.2 助动词选择规则</h4>
          <p class="text-sm mb-2">及物动词：用 avoir，例如：<em>j’avais fini</em>（我已经完成了）、<em>tu avais mangé</em>（你已经吃了）。<br>不及物动词（表位置 / 状态变动，如 aller, partir, arriver）：用 être，例如：<em>je m’étais couché</em>（我已经睡了）、<em>elle était arrivée</em>（她已经到了）。</p>
          <h4 class="font-bold text-sm">6.4.3 用法与示例</h4>
          <p class="text-sm">常与复合过去时连用，通过 quand, après que, parce que 等连词衔接 “先发生的动作” 与 “后发生的动作”：<br><em>Je suis sorti après que la pluie avait cessé.</em>（雨停了以后我才出去，avait cessé 先发生，suis sorti 后发生）<br><em>Quand il m’a téléphoné, je m’étais déjà couché.</em>（他给我打电话的时候，我已经睡了，m’étais couché 先发生，m’a téléphoné 后发生）<br><em>Paul a trouvé un travail, parce qu’il avait obtenu un diplôme.</em>（保罗找到了工作，因为他已经拿到了文凭，avait obtenu 先发生，a trouvé 后发生）。</p>
        `
      },
      {
        id: "chap7",
        title: "第七章：将来时态与条件式",
        content: `
          <h3>7.1 最近将来时 (Le Futur Proche)</h3>
          <h4 class="font-bold text-sm">7.1.1 构成</h4>
          <p class="text-sm mb-2">由 <strong>aller（直陈式现在时） + 动词原形</strong> 构成，表 “即将发生的动作”，语气比简单将来时更口语化、更紧迫。</p>
          <h4 class="font-bold text-sm">7.1.2 用法与示例</h4>
          <p class="text-sm">肯定句：<em>Nous allons visiter Notre-Dame.</em>（我们将参观巴黎圣母院）<br>否定句：<em>Je n’ai pas envie de sortir ; je ne vais pas regarder le film.</em>（我不想出去，我不打算看那部电影）<br>疑问句：<em>Allez-vous participer à la réunion demain?</em>（您明天要参加会议吗？） <strong>注意</strong> ：aller 的变位需与主语一致，例如：<em>Il va partir.</em>（他要走了）、<em>Elles vont diner ensemble.</em>（她们要一起吃晚饭）。</p>

          <h3>7.2 简单将来时 (Le Futur Simple)</h3>
          <h4 class="font-bold text-sm">7.2.1 构成</h4>
          <p class="text-sm mb-2"><strong>规则动词</strong>：<br>第一、二组动词：直接在 <strong>不定式</strong> 后加词尾 <strong>-ai, -as, -a, -ons, -ez, -ont</strong> ，例如：<br>parler（不定式）→ je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, ils parleront。<br>finir（不定式）→ je finirai, tu finiras, il finira, nous finirons, vous finirez, ils finiront。<br>第三组动词（以 -re 结尾）：先去掉不定式词尾 -e，再加上述词尾，例如：<br>écrire（不定式去 e → écrit-）→ je écrirai, tu écriras...<br>faire（不定式去 e → fair-）→ je ferai, tu feras...<br><strong>不规则动词（常见词根）</strong>：<br>être → ser-（je serai, tu seras...）<br>avoir → aur-（j’aurai, tu auras...）<br>aller → ir-（j’irai, tu iras...）<br>voir → verr-（je verrai, tu verras...）<br>savoir → saur-（je saurai, tu sauras...）<br>发音相关变化：部分动词为保持发音，词干会调整，例如：acheter → j’achèterai（词干 e 变 è）、prévoir → je prévoirai（词干 oi 不变）。</p>
          <h4 class="font-bold text-sm">7.2.2 用法与示例</h4>
          <p class="text-sm">表 “将来将要发生的动作或状态”，可搭配 demain, dans un mois, l’an prochain 等时间状语：<br><em>La vie sera plus facile avec le développement de l’industrie.</em>（随着工业的发展，生活将会更便利）<br><em>Nous irons en vacances dans deux semaines.</em>（两周后我们要去度假）<br><em>Il fera froid demain matin.</em>（明天早上会很冷）。</p>

          <h3>7.3 先将来时 (Le Futur Antérieur)</h3>
          <h4 class="font-bold text-sm">7.3.1 构成</h4>
          <p class="text-sm mb-2">由 <strong>助动词 avoir/être 的简单将来时 + 过去分词</strong> 构成，表 “某一将来动作发生之前已完成的动作”（“将来的过去”）。</p>
          <h4 class="font-bold text-sm">7.3.2 助动词选择规则</h4>
          <p class="text-sm mb-2">与复合过去时一致：及物动词用 avoir，不及物动词（表位置 / 状态变动）用 être，且过去分词需与主语（être 作助动词时）或直接宾语（avoir 作助动词时）配合。</p>
          <h4 class="font-bold text-sm">7.3.3 用法与示例</h4>
          <p class="text-sm">常与简单将来时连用，通过 quand, lorsque, dès que 等连词衔接 “先完成的将来动作” 与 “后发生的将来动作”：<br><em>Il viendra me voir quand il aura fini son travail.</em>（他完成工作后会来看我，aura fini 先发生，viendra 后发生）<br><em>Dès que tu seras arrivé à Paris, tu me téléphoneras.</em>（你一到巴黎就给我打电话，seras arrivé 先发生，téléphoneras 后发生）<br>独立句（表将来某时刻前完成）：<em>J’aurai fini ma lettre dans deux minutes.</em>（两分钟后我就能写完这封信）。</p>

          <h3>7.4 条件式现在时 (Le Conditionnel Présent)</h3>
          <h4 class="font-bold text-sm">7.4.1 构成</h4>
          <p class="text-sm mb-2">用 <strong>简单将来时词根 + 未完成过去时词尾（-ais, -ais, -ait, -ions, -iez, -aient）</strong> 构成，词形与 “过去将来时” 完全相同，需通过语境区分。</p>
          <h4 class="font-bold text-sm">7.4.2 用法与示例</h4>
          <p class="text-sm">表示 <strong>礼貌、委婉的请求或愿望</strong> （口语中常用，比直陈式更客气）：<br><em>Je voudrais un café, s’il vous plaît.</em>（请给我一杯咖啡，voudrais 是 vouloir 的条件式）<br><em>Pourriez-vous me le rendre demain?</em>（您能明天把它还给我吗？pourriez 是 pouvoir 的条件式）。<br>表示 <strong>对现在或将来的推测、假设</strong> （“可能会……”）：<br><em>Dans ce cas-là, les ouvriers organiseraient une grève.</em>（如果是这样的话，工人们可能会罢工）。<br>构成 <strong>虚拟条件句</strong> （表 “与现实相反或难以实现的假设”）：<br>从句用 “未完成过去时”，主句用 “条件式现在时”，例如：<br><em>S’il venait, nous dînions ensemble.</em>（如果他来的话，我们就一起吃晚饭 —— 假设他大概率不来）<br><em>Si Éric était malade, je participerais au match à sa place.</em>（如果埃里克生病的话，我就替他参加比赛 —— 假设他没生病）。 <strong>对比</strong> ：若条件 “可能实现”，从句用 “直陈式现在时”，主句用 “简单将来时”，例如：<em>S’il fait beau, nous ferons un voyage.</em>（如果天气好，我们就去旅行）。</p>

          <h3>7.5 过去将来时 (Le Futur dans le Passé)</h3>
          <h4 class="font-bold text-sm">7.5.1 构成</h4>
          <p class="text-sm mb-2">词形与 “条件式现在时” 完全相同（简单将来时词根 + 未完成过去时词尾），但语义不同。</p>
          <h4 class="font-bold text-sm">7.5.2 用法与示例</h4>
          <p class="text-sm">表 “从过去某一时刻看，将要发生的动作”，通常用于 <strong>主句谓语为过去时（如复合过去时、未完成过去时）的复合句</strong> 中：<br><em>Il disait toujours qu’il chercherait un emploi en ville.</em>（他以前总说要在城里找份工作，disait 是过去时，chercherait 表 “过去看来将要找工作”）<br><em>Il m’a dit qu’il partirait le lendemain.</em>（他告诉我他第二天要走，m’a dit 是复合过去时，partirait 表 “过去看来第二天要走”）。</p>
        `
      },
      {
        id: "chap8",
        title: "第八章：动词的语态与非人称形式",
        content: `
          <h3>8.1 命令式 (L'Impératif)</h3>
          <p class="text-sm mb-2">命令式用于表达 <strong>命令、请求、建议或愿望</strong> ，仅用于 <strong>第二人称单数（tu）、第一人称复数（nous）、第二人称复数（vous）</strong> ，无主语（主语需通过语境判断）。</p>
          
          <h4 class="font-bold text-sm">8.1.1 构成 (Formation)</h4>
          <p class="text-sm mb-1">去掉直陈式现在时的主语，保留动词变位核心部分，具体规则如下：</p>
          <table class="w-full text-sm border-collapse mb-2 text-center bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">动词组别</th><th class="p-2 border">人称</th><th class="p-2 border">直陈式现在时</th><th class="p-2 border">命令式肯定句</th><th class="p-2 border">命令式否定句</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">第一组（parler）</td><td class="p-2 border">tu</td><td class="p-2 border">tu parles</td><td class="p-2 border">parle</td><td class="p-2 border">ne parle pas</td></tr>
              <tr><td class="p-2 border"></td><td class="p-2 border">nous</td><td class="p-2 border">nous parlons</td><td class="p-2 border">parlons</td><td class="p-2 border">ne parlons pas</td></tr>
              <tr><td class="p-2 border"></td><td class="p-2 border">vous</td><td class="p-2 border">vous parlez</td><td class="p-2 border">parlez</td><td class="p-2 border">ne parlez pas</td></tr>
              <tr><td class="p-2 border">第二组（finir）</td><td class="p-2 border">tu</td><td class="p-2 border">tu finis</td><td class="p-2 border">finis</td><td class="p-2 border">ne finis pas</td></tr>
              <tr><td class="p-2 border"></td><td class="p-2 border">nous</td><td class="p-2 border">nous finissons</td><td class="p-2 border">finissons</td><td class="p-2 border">ne finissons pas</td></tr>
              <tr><td class="p-2 border"></td><td class="p-2 border">vous</td><td class="p-2 border">vous finissez</td><td class="p-2 border">finissez</td><td class="p-2 border">ne finissez pas</td></tr>
            </tbody>
          </table>
          <p class="text-sm"><strong>8.1.1.1 特殊命令式形式</strong><br>部分常用动词的命令式为不规则形式，需单独记忆：<br>être：sois（tu）、soyons（nous）、soyez（vous）<br>avoir：aie（tu）、ayons（nous）、ayez（vous）<br>savoir：sache（tu）、sachons（nous）、sachez（vous）<br>vouloir：veuille（tu）、veuillons（nous）、veuillez（vous）<br><strong>8.1.1.2 发音相关变化</strong><br>第一组动词（包括 aller）的 <strong>第二人称单数（tu）命令式</strong> ：通常去掉直陈式词尾的 -s，例如：parler → parle、travailler → travaille、aller → va。<br>例外：当动词后接副代词 en 或 y 时，需保留 -s，避免元音连读，例如：<em>Vas-y !</em>（去吧！）、<em>Prends-en !</em>（拿一些！）。</p>

          <h4 class="font-bold text-sm">8.1.2 宾语在命令式中的位置 (Place des Pronoms à l'Impératif)</h4>
          <p class="text-sm mb-2"><strong>8.1.2.1 肯定命令式</strong><br>代词宾语（直接宾语、间接宾语、副代词 y/en）置于动词 <strong>后面</strong> ，用连字符连接，且 me/te 需变为重读形式 moi/toi：<br>直接宾语代词：<em>Excusez-moi !</em>（原谅我！）、<em>Prends-le !</em>（拿上它！）<br>间接宾语代词：<em>Donnez-lui ce livre !</em>（把这本书给他 / 她！）<br>副代词：<em>Vas-y !</em>（去吧！）、<em>Achetez-m’en deux !</em>（给我买两个！）<br><strong>8.1.2.2 否定命令式</strong><br>代词宾语置于动词 <strong>前面</strong> ，且 ne 位于最前，pas 位于动词后：<br><em>Ne me regarde pas ainsi !</em>（别这样看着我！）<br><em>Ne les donne pas à Marie !</em>（别把它们给玛丽！）<br><em>Ne vous y asseyez pas !</em>（别坐在那儿！）</p>

          <h4 class="font-bold text-sm">8.1.3 代词式动词的命令式 (Impératif des Verbes Pronomiaux)</h4>
          <p class="text-sm mb-2">代词式动词的命令式需保留自反代词，位置规则与普通动词类似，但肯定式中自反代词用 <strong>重读形式</strong> ：</p>
          <table class="w-full text-sm border-collapse mb-2 text-center bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">句式类型</th><th class="p-2 border">示例（以 se lever 为例）</th><th class="p-2 border">翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">肯定句</td><td class="p-2 border">Lève-toi !</td><td class="p-2 border">起床！（你）</td></tr>
              <tr><td class="p-2 border"></td><td class="p-2 border">Levons-nous !</td><td class="p-2 border">我们起床吧！</td></tr>
              <tr><td class="p-2 border"></td><td class="p-2 border">Levez-vous !</td><td class="p-2 border">请起床！（您 / 你们）</td></tr>
              <tr><td class="p-2 border">否定句</td><td class="p-2 border">Ne te lève pas !</td><td class="p-2 border">别起床！（你）</td></tr>
              <tr><td class="p-2 border"></td><td class="p-2 border">Ne nous levons pas !</td><td class="p-2 border">我们别起床！</td></tr>
              <tr><td class="p-2 border"></td><td class="p-2 border">Ne vous levez pas !</td><td class="p-2 border">请别起床！（您 / 你们）</td></tr>
            </tbody>
          </table>

          <h3>8.2 不定式 (L'Infinitif)</h3>
          <p class="text-sm mb-2">不定式是动词的 “原形”，不带人称和时态变化，可在句中作主语、表语、宾语等成分。</p>
          <h4 class="font-bold text-sm">8.2.1 功能 (Fonctions de l'Infinitif)</h4>
          <p class="text-sm">作 <strong>主语</strong> ：通常用 il 作形式主语，或直接置于句首，例如：<br><em>Tuer des animaux pour le plaisir est une mauvaise action.</em>（为了取乐而杀动物是不好的行为）<br><em>Parler ne suffit pas, il faut pratiquer.</em>（说不够，还需要练习）。<br>作 <strong>表语</strong> ：用于系动词 être 后，表 “身份、性质或动作”，例如：<br><em>Vouloir, c’est pouvoir.</em>（有志者事竟成）<br><em>Vivre, c’est lutter.</em>（生活就是奋斗）。<br>作 <strong>宾语</strong> ：置于及物动词（如 aimer, vouloir, commencer, demander）后，例如：<br><em>J’aime faire du sport.</em>（我喜欢运动）<br><em>Elle commence à chanter.</em>（她开始唱歌）<br><em>Il me demande de venir.</em>（他让我来）。<br>作 <strong>状语或补语</strong> ：<br>作状语：<em>Il est parti sans dire un mot.</em>（他没说一句话就走了，sans 后接不定式）<br>作补语：<em>Il est en train de lire.</em>（他正在读书，en train de 后接不定式）。</p>
          <h4 class="font-bold text-sm">8.2.2 不定式的时态 (Les Temps de l'Infinitif)</h4>
          <p class="text-sm">不定式有两种时态，用于区分 “与主要动词的时间关系”：<br><strong>不定式现在时</strong> ：表示与主要动词 “同时发生” 的动作，例如：<br><em>Je veux lire.</em>（我想读书，lire 与 veux 同时）<br><em>Je l’entends chanter.</em>（我听见他唱歌，chanter 与 entends 同时）。<br><strong>不定式过去时</strong> ：由 “不定式 avoir/être + 过去分词” 构成，表示 “先于主要动词发生” 的动作，例如：<br><em>Je vous remercie d’avoir fait cela.</em>（感谢您做了这件事，avoir fait 先于 remercie）<br><em>Après avoir obtenu le bac, il est parti faire un voyage.</em>（拿到高中毕业证后，他去旅行了，avoir obtenu 先于 est parti）。</p>

          <h3>8.3 被动语态 (La Voix Passive)</h3>
          <p class="text-sm mb-2">被动语态用于强调 “动作的承受者”，而非 “动作的执行者”，核心结构为 “助动词 être + 直接及物动词的过去分词”。</p>
          <h4 class="font-bold text-sm">8.3.1 构成与示例</h4>
          <p class="text-sm">基本结构：<em>La lettre est écrite par Marie.</em>（这封信是玛丽写的，La lettre 是动作承受者，par Marie 表执行者）<br>时态变化：被动语态的时态由助动词 être 的时态决定，例如：</p>
          <table class="w-full text-sm border-collapse mb-2 text-center bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">时态</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">现在时</td><td class="p-2 border"><em>La voiture est réparée.</em>, 车在修着</td></tr>
              <tr><td class="p-2 border">复合过去时</td><td class="p-2 border"><em>La voiture a été réparée.</em>, 车已经修好了</td></tr>
              <tr><td class="p-2 border">将来时</td><td class="p-2 border"><em>La voiture sera réparée demain.</em>, 车明天会被修好</td></tr>
            </tbody>
          </table>
          <h4 class="font-bold text-sm">8.3.2 施动者补语 (Le Complément d'Agent)</h4>
          <p class="text-sm">由介词 <strong>par</strong> 引出 “动作的执行者”（人或物发出的具体动作），例如：<br><em>Le petit déjeuner est préparé par ma mère.</em>（早餐是我妈妈准备的）<br><em>La porte est ouverte par le vent.</em>（门被风吹开了）。<br>由介词 <strong>de</strong> 引出 “动作的执行者”（表感情或状态时），例如：<br><em>Ce professeur est aimé de tous les élèves.</em>（这位老师受到所有学生的爱戴）<br><em>Cette ville est connue de beaucoup de gens.</em>（这座城市被很多人熟知）。<br>施动者可省略（无需强调或未知时）：<em>La porte est fermée.</em>（门关着）、<em>Les livres sont vendus.</em>（书卖出去了）。</p>
          <h4 class="font-bold text-sm">8.3.3 过去分词配合规则</h4>
          <p class="text-sm">被动语态中，过去分词需与 <strong>主语（动作承受者）</strong> 在性、数上保持一致，例如：<br><em>La voiture est réparée par cet ouvrier.</em>（车被这个工人修好了，voiture 为阴性单数，réparé 加 -e 变为 réparée）<br><em>Ces revues ont été vendues.</em>（这些杂志被卖出去了，revues 为阴性复数，vendue 加 -s 变为 vendues）。</p>

          <h3>8.4 代词式动词的被动意义和绝对意义 (Verbes Pronomiaux à Sens Passif ou Absolu)</h3>
          <p class="text-sm mb-2">代词式动词除 “自反意义”“相互意义” 外，还可表 “被动意义” 或 “绝对意义”，此时自反代词 se 无实际指代，仅为语法标记。</p>
          <h4 class="font-bold text-sm">8.4.1 被动意义</h4>
          <p class="text-sm">表 “事物的属性或被动状态”，相当于被动语态，但更简洁，主语通常为物，例如：<br><em>Ce vélo se vend très vite.</em>（这种自行车卖得很快，相当于 Ce vélo est vendu très vite）<br><em>Ça ne se dit pas en français.</em>（法语中不能这样说，相当于 On ne dit pas ça en français）<br><em>Ces fruits se conservent bien.</em>（这些水果很容易保存，相当于 Ces fruits sont conservés bien）。</p>
          <h4 class="font-bold text-sm">8.4.2 绝对意义</h4>
          <p class="text-sm">某些代词式动词的 se 仅为固定搭配，无 “自反 / 相互 / 被动” 含义，需整体记忆（常与固定介词搭配），例如：<br><em>se souvenir de</em>（记得）：<em>Je me souviens toujours de ce jour-là.</em>（我永远记得那一天）<br><em>s’occuper de</em>（照料）：<em>Elle s’occupe des malades.</em>（她照料病人）<br><em>s’en aller</em>（离开）：<em>Il s’en est allé tôt ce matin.</em>（他今天早上很早就走了）<br><em>s’évanouir</em>（昏倒）：<em>Elle s’est évanouie à cause de la chaleur.</em>（她因为热而昏倒了）。</p>
          <h4 class="font-bold text-sm">8.4.3 复合时态中的配合规则</h4>
          <p class="text-sm">这类动词的复合过去时仍用 être 作助动词，过去分词需与主语在性、数上保持一致，例如：<br><em>Ces fleurs se sont vendues au marché.</em>（这些花在市场上卖了，fleurs 为阴性复数，vendue 加 -s 变为 vendues）<br><em>Elle s’est évanouie dans la rue.</em>（她在街上昏倒了，elle 为阴性单数，évanoui 加 -e 变为 évanouie）。</p>
        `
      }
    ]
  },
  {
    id: "part3",
    title: "第三部分：句法结构与连接",
    desc: "Syntaxe et Liaison des Phrases",
    chapters: [
      {
        id: "chap9",
        title: "第九章：句子结构与否定",
        content: `
          <h3>9.1 句子成分 (Les Composants de la Phrase)</h3>
          <p class="text-sm mb-2">一个完整的法语句子通常包含以下核心成分，各成分通过语法关系衔接：</p>
          <table class="w-full text-sm border-collapse mb-4 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">成分类型</th><th class="p-2 border">定义说明</th><th class="p-2 border">示例句子及成分标注</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">主语</td><td class="p-2 border">动作的执行者或状态的主体</td><td class="p-2 border"><em>Marie</em> est canadienne.（玛丽是加拿大人，Marie 为主语）</td></tr>
              <tr><td class="p-2 border">谓语（动词）</td><td class="p-2 border">表示主语的动作或状态</td><td class="p-2 border">Isabelle <em>va</em> à l’école.（伊莎贝尔去上学，va 为谓语）<br>Son nom <em>est</em> Luc.（他叫吕克，est 为谓语）</td></tr>
              <tr><td class="p-2 border">表语</td><td class="p-2 border">用于系动词后，说明主语的性质、身份</td><td class="p-2 border">Philippe est <em>français</em>.（菲利普是法国人，français 为表语）</td></tr>
              <tr><td class="p-2 border">直接宾语</td><td class="p-2 border">动作直接作用的对象（无需介词）</td><td class="p-2 border">Fanny a <em>une sœur</em>.（法妮有一个姐妹，une sœur 为直接宾语）</td></tr>
              <tr><td class="p-2 border">间接宾语</td><td class="p-2 border">动作间接作用的对象（需介词 à 引导）</td><td class="p-2 border">Je présente Éric <em>à Simon</em>.（我把埃里克介绍给西蒙，à Simon 为间接宾语）</td></tr>
              <tr><td class="p-2 border">状语</td><td class="p-2 border">修饰动词、形容词或副词，表时间、地点、方式等</td><td class="p-2 border">Il va au concert <em>avec Fanny</em>.（他和法妮去听音乐会，avec Fanny 为方式状语）</td></tr>
            </tbody>
          </table>

          <h3>9.2 否定句 (La Négation)</h3>
          <p class="text-sm mb-2">法语否定句的核心结构是 “否定词包围谓语动词”，最常用的是否定结构 <strong>ne…pas</strong> ，此外还有 ne…plus, ne…jamais 等扩展结构。</p>
          <h4 class="font-bold text-sm">9.2.1 基础否定结构：ne…pas</h4>
          <p class="text-sm">构成：ne 置于谓语动词 <strong>前面</strong> ，pas 置于谓语动词 <strong>后面</strong> ，例如：<br><em>Je ne suis pas Claire.</em>（我不是克莱尔）<br><em>Il ne mange pas de pain.</em>（他不吃面包）。<br>省音规则：当动词以 <strong>元音或哑音 h</strong> 开头时，ne 缩合为 n’，例如：<br><em>Martin n’est pas français.</em>（马丁不是法国人）<br><em>Elle n’a pas de voiture.</em>（她没有车）。<br>口语省略：日常口语中常省略 ne，仅保留 pas，例如：<em>C’est pas grave.</em>（没关系）、<em>Je veux pas aller.</em>（我不想去）。</p>

          <h4 class="font-bold text-sm">9.2.2 其他常见否定结构</h4>
          <table class="w-full text-sm border-collapse mb-2 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">否定形式</th><th class="p-2 border">意义</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">ne…pas</td><td class="p-2 border">一般否定（“不……”）</td><td class="p-2 border"><em>Claire n’aime pas faire des courses.</em>（克莱尔不喜欢购物）</td></tr>
              <tr><td class="p-2 border">ne…plus</td><td class="p-2 border">“不再……”</td><td class="p-2 border"><em>Mon père ne travaille plus; il a 70 ans.</em>（我父亲不再工作；他 70 岁了）</td></tr>
              <tr><td class="p-2 border">ne…jamais</td><td class="p-2 border">“从来不 / 绝不……”</td><td class="p-2 border"><em>Notre professeur n’est jamais en retard.</em>（我们老师从不迟到）</td></tr>
              <tr><td class="p-2 border">ne…rien</td><td class="p-2 border">“什么也不……”</td><td class="p-2 border"><em>Sylvie ne fait rien le dimanche.</em>（西尔维周日什么也不做）</td></tr>
            </tbody>
          </table>
        `
      },
      {
        id: "chap10",
        title: "第十章：疑问与强调",
        content: `
          <h3>10.1 疑问句 (Les Phrases Interrogatives)</h3>
          <p class="text-sm mb-2">法语疑问句有四种常见形式，根据正式程度和语境选择使用。</p>
          <h4 class="font-bold text-sm">10.1.1 一般疑问句（无疑问词）</h4>
          <ul class="list-disc pl-5 text-sm space-y-1">
            <li>陈述句语序 + 升调：最口语化，适用于日常对话，例如：<em>Vous êtes professeur ?</em>（您是老师吗？）</li>
            <li>Est-ce que 开头 + 陈述句语序：适用于所有场景，语气中性，例如：<em>Est-ce que vous êtes professeur ?</em>（您是老师吗？）</li>
            <li>主谓倒装 + 连字符：较正式，主语为代词时使用，例如：<em>Est-il ingénieur ?</em>（他是工程师吗？）</li>
            <li>名词主语 + 动词 + 代词：主语为名词时使用，避免名词与动词倒装的生硬感，例如：<em>Votre frère est-il ingénieur ?</em>（您的兄弟是工程师吗？）</li>
          </ul>

          <h4 class="font-bold text-sm">10.1.2 特殊疑问句（有疑问词）</h4>
          <p class="text-sm">疑问词（qui, que, où, comment, quand 等）置于句首，后续语序为 “疑问句语序” 或 “陈述句语序（加 Est-ce que）”：</p>
          <table class="w-full text-sm border-collapse mb-2 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">疑问词</th><th class="p-2 border">含义</th><th class="p-2 border">示例句子及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">qui</td><td class="p-2 border">谁</td><td class="p-2 border"><em>Qui est votre professeur ?</em>（谁是您的老师？）<br><em>Qui est-ce ?</em>（这是谁？）</td></tr>
              <tr><td class="p-2 border">que / qu’</td><td class="p-2 border">什么</td><td class="p-2 border"><em>Que faites-vous ?</em>（您在做什么？）<br><em>Qu’est-ce que vous mangez ?</em>（您在吃什么？）</td></tr>
              <tr><td class="p-2 border">où</td><td class="p-2 border">哪里</td><td class="p-2 border"><em>Où est-elle ?</em>（她在哪里？）<br><em>Où est-ce que vous habitez ?</em>（您住在哪里？）</td></tr>
              <tr><td class="p-2 border">comment</td><td class="p-2 border">怎样</td><td class="p-2 border"><em>Comment allez-vous ?</em>（您好吗？）<br><em>Comment vous appelez-vous ?</em>（您叫什么名字？）</td></tr>
              <tr><td class="p-2 border">quand</td><td class="p-2 border">什么时候</td><td class="p-2 border"><em>Quand va-t-elle à l’école ?</em>（她什么时候去上学？）</td></tr>
            </tbody>
          </table>

          <h4 class="font-bold text-sm">10.1.3 回答规则</h4>
          <p class="text-sm">肯定回答：用 oui，例如：— <em>Êtes-vous français ?</em> — <em>Oui, je suis français.</em>（— 您是法国人吗？— 是的，我是法国人）。<br>否定回答：用 non，例如：— <em>Avez-vous un livre ?</em> — <em>Non, je n’ai pas de livre.</em>（— 您有一本书吗？— 没有，我没有书）。<br>否定疑问句的肯定回答：用 si（而非 oui），例如：— <em>Vous n’êtes pas professeurs ?</em> — <em>Si, nous sommes professeurs.</em>（— 您不是老师吗？— 不，我们是老师）。</p>

          <h3>10.2 强调句式 (Les Structures Emphatiques: C'est...qui/que)</h3>
          <p class="text-sm mb-2">通过 “c’est + 被强调成分 + qui/que + 剩余部分” 结构，突出句子中的主语、宾语、状语等成分，增强语气。</p>
          <h4 class="font-bold text-sm">10.2.1 核心规则</h4>
          <p class="text-sm"><strong>c’est…qui</strong> ：用于强调 <strong>主语</strong> （人或物），qui 后的动词需与 “真实主语” 在性、数上保持一致。<br><strong>c’est…que</strong> ：用于强调 <strong>除主语外的其他成分</strong> （宾语、状语等），que 本身无变化，后续语序为陈述句语序。</p>
          <h4 class="font-bold text-sm">10.2.2 示例句子</h4>
          <p class="text-sm">强调主语：<br><em>C’est vous qui avez raison.</em>（是你们有理，vous 是主语，用 qui，动词 avez 与 vous 一致）<br><em>C’est ce livre qui m’intéresse.</em>（是这本书让我感兴趣，ce livre 是主语，用 qui，动词 intéresse 与 ce livre 一致）。<br>强调宾语：<br><em>C’est le professeur Wang que je veux voir.</em>（我想见的是王教授，le professeur Wang 是直接宾语，用 que）<br><em>C’est ce cadeau que j’ai offert à Marie.</em>（我给玛丽的是这个礼物，ce cadeau 是直接宾语，用 que）。<br>强调状语：<br><em>C’est dans ce bureau que mon père travaille.</em>（我父亲是在这间办公室工作，dans ce bureau 是地点状语，用 que）<br><em>C’est hier que j’ai rencontré Paul.</em>（我是昨天遇见保罗的，hier 是时间状语，用 que）。</p>
          <h4 class="font-bold text-sm">10.2.3 注意事项</h4>
          <p class="text-sm">被强调成分是代词时，需用 <strong>重读人称代词</strong> ，例如：<em>C’est moi qui ai fait ça.</em>（是我做了这件事，moi 为重读代词）。<br>qui 后的动词需与 “真实主语” 一致，而非 c’est（c’est 始终为单数），例如：<em>C’est nous qui ne sommes jamais en retard.</em>（是我们从不迟到，动词 sommes 与 nous 一致）。</p>

          <h3>10.3 强调结构 (Les Structures Emphatiques: Ce qui/Ce que...c'est...)</h3>
          <p class="text-sm mb-2">通过 “ce qui/ce que + 从句 + c’est + 被强调成分” 结构，突出句子中的主语或直接宾语，尤其适用于强调 “动作或从句内容”。</p>
          <h4 class="font-bold text-sm">10.3.1 核心规则</h4>
          <p class="text-sm"><strong>ce qui…c’est…</strong> ：强调 <strong>主语</strong> （可指代人、物或动作），ce qui 引导主语从句。<br><strong>ce que…c’est…</strong> ：强调 <strong>直接宾语</strong> （可指代人、物或动作），ce que 引导宾语从句。</p>
          <h4 class="font-bold text-sm">10.3.2 示例句子</h4>
          <p class="text-sm">强调主语：<br><em>Ce qui est important pour les jeunes, c’est de faire souvent du sport.</em>（对年轻人来说重要的是经常运动，ce qui 指代 “重要的事”，强调 “做运动”）<br><em>Ce qui me plaît, c’est la musique française.</em>（让我喜欢的是法国音乐，ce qui 指代 “让我喜欢的事物”）。<br>强调直接宾语：<br><em>Ce que la mère espère le plus, c’est le mariage de son fils.</em>（母亲最希望的是儿子结婚，ce que 指代 “母亲希望的事”）<br><em>Ce que j’aime, c’est le café noir.</em>（我喜欢的是黑咖啡，ce que 指代 “我喜欢的东西”）。</p>
          <h4 class="font-bold text-sm">10.3.3 注意事项</h4>
          <p class="text-sm">若被强调成分为复数，c’est 需变为 ce sont，例如：<em>Ce que je veux lire, ce sont des livres sur l’Union européenne.</em>（我想读的是关于欧盟的书，des livres 为复数，用 ce sont）。<br>强调动作时，c’est 后常用 “de + 动词不定式”，例如：<em>Ce qui est important pour nous, c’est de développer l’économie.</em>（对我们来说重要的是发展经济，de développer 表动作）。<br>可接从句作被强调成分，例如：<em>Ce que j’espère le plus, c’est que on pourra utiliser notre bibliothèque.</em>（我最希望的是我们能使用图书馆，que 引导从句）。</p>
        `
      },
      {
        id: "chap11",
        title: "第十一章：句子的连接方式",
        content: `
          <h3>11.1 简单句与复合句 (Phrases Simples et Complexes)</h3>
          <p class="text-sm mb-2">根据句子结构，法语句子分为简单句、平列句、并列句和主从复合句。</p>
          <h4 class="font-bold text-sm">11.1.1 简单句</h4>
          <p class="text-sm">仅含一个主语和一个谓语，结构完整，例如：<em>Je vais au cinéma.</em>（我去看电影）、<em>Marie est française.</em>（玛丽是法国人）。</p>
          <h4 class="font-bold text-sm">11.1.2 平列句</h4>
          <p class="text-sm">由两个或多个简单句组成，无连词连接，仅用逗号或分号分隔，语境上存在逻辑关系（并列、转折等），例如：<em>Il fait beau, le soleil brille.</em>（天气很好，阳光明媚）、<em>Je ne like pas le café, je préfère le thé.</em>（我不喜欢咖啡，我更喜欢茶）。</p>
          <h4 class="font-bold text-sm">11.1.3 并列句</h4>
          <p class="text-sm">由连词（et, ou, mais, car, donc 等）连接两个或多个独立分句，各分句地位平等，例如：<br><em>J’ai mal aux pieds et je ne veux pas sortir.</em>（我脚疼，不想出去，et 表并列）<br><em>Tu peux choisir le café ou le thé.</em>（你可以选咖啡或茶，ou 表选择）<br><em>Il est riche mais il n’est pas heureux.</em>（他很有钱但不幸福，mais 表转折）<br><em>Je reste à la maison car il pleut.</em>（我待在家里，因为下雨了，car 表原因）<br><em>Il a étudié dur, donc il a réussi.</em>（他学习很努力，所以成功了，donc 表结果）。</p>
          <h4 class="font-bold text-sm">11.1.4 主从复合句</h4>
          <p class="text-sm">由 “主句（分句）” 和 “从句（依赖主句的分句）” 组成，从句需由连词或关系代词引导，常见类型：<br><strong>宾语从句</strong>：由连词 que 引导，作主句动词的宾语，例如：<em>J’espère que tout va bien.</em>（我希望一切都好）。<br><strong>状语从句</strong>：由连词 si（如果）、quand（当…… 时）、parce que（因为）等引导，表条件、时间、原因等，例如：<br><em>Si tu viens, nous dînons ensemble.</em>（如果你来了，我们就一起吃晚饭，si 表条件）<br><em>Quand je suis jeune, j’aimais jouer au football.</em>（我年轻时喜欢踢足球，quand 表时间）<br><em>Je ne suis pas venu parce que j’étais malade.</em>（我没来是因为生病了，parce que 表原因）。<br><strong>关系从句</strong>：由关系代词 que, qui 等引导，修饰主句中的先行词，例如：<em>Nous avons rencontré un technicien qui parle trois langues étrangères.</em>（我们遇到了一位会说三种外语的技术员，qui 引导从句修饰 technicien）。</p>

          <h3>11.2 连词 comme (La Conjonction Comme)</h3>
          <p class="text-sm mb-2">comme 既可作连词，也可作副词，用法多样，需根据语境判断。</p>
          <table class="w-full text-sm border-collapse mb-2 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">词性与意义</th><th class="p-2 border">用法说明</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">连词（作为 / 当作）</td><td class="p-2 border">表 “职业、身份或用途”</td><td class="p-2 border"><em>Il travaille comme ingénieur.</em>（他以工程师身份工作）</td></tr>
              <tr><td class="p-2 border">连词（像 / 如同 / 例如）</td><td class="p-2 border">表 “比较或举例”</td><td class="p-2 border"><em>C’est clair comme le jour.</em>（这再清楚不过了）<br><em>Un grand pays comme la Chine doit développer plus vite son économie.</em>（像中国这样的大国应该更快地发展经济）</td></tr>
              <tr><td class="p-2 border">连词（因为 / 既然）</td><td class="p-2 border">表 “原因”，语气比 parce que 轻</td><td class="p-2 border"><em>Comme il pleut, nous restons à la maison.</em>（因为下雨，我们留在家）</td></tr>
              <tr><td class="p-2 border">连词（当…… 时候）</td><td class="p-2 border">表 “时间”，相当于 quand（口语化）</td><td class="p-2 border"><em>Il a frappé à la porte comme j’allais partir.</em>（当我刚要出门时他敲了门）</td></tr>
              <tr><td class="p-2 border">副词（多么！）</td><td class="p-2 border">表 “感叹”，修饰形容词或副词</td><td class="p-2 border"><em>Comme je suis content de vous revoir !</em>（见到您我多么高兴啊！）</td></tr>
            </tbody>
          </table>

          <h3>11.3 连词 si (La Conjonction Si)</h3>
          <p class="text-sm mb-2">si 是法语中最常用的连词之一，可表条件、建议、疑虑、原因等，需结合语境区分含义。</p>
          <h4 class="font-bold text-sm">11.3.1 核心用法与示例</h4>
          <p class="text-sm">表 “<strong>条件</strong>”（“如果 / 假如”）：<br>现实条件（可能实现）：<em>Si il fait beau, nous travaillerons aux champs.</em>（如果天气好，我们就去田里干活，从句现在时，主句将来时）<br>非现实条件（与事实相反）：<em>Si il faisait beau, nous travaillerions aux champs.</em>（如果天气好的话，我们就去田里干活了，从句未完成过去时，主句条件式现在时）。<br>表 “<strong>建议</strong>”（“如果…… 怎么样？”）：<br><em>Si nous allions à la campagne pendant les vacances ?</em>（假期我们去乡下怎么样？用未完成过去时表委婉建议）。<br>表 “<strong>疑虑</strong>”（“如果…… 怎么办？”）：<br><em>Si l’on ne nous laisse pas sortir ?</em>（如果不让我们出去怎么办？）；<em>Si mon père ne le veut pas ?</em>（如果我父亲不愿意怎么办？）。<br>表 “<strong>原因</strong>”（“之所以…… 是因为……”）：<br><em>Si je veux poursuivre mes études en France, c’est parce que j’aime le français.</em>（我之所以想在法国继续学习，是因为我喜欢法语）。<br>表 “<strong>是否</strong>”（用于间接疑问句）：<br><em>Je ne sais pas si cela est vrai.</em>（我不知道这是否是真的）。<br>表 “<strong>肯定回答</strong>”（用于否定疑问句）：<br><em>Ta fille n’est pas là ? — Si, elle est là.</em>（你女儿不在这儿吗？— 不，她在这儿）。<br>作 “<strong>加强副词</strong>”（“如此 / 那么”）：<br><em>Je n’ai jamais vu un pays si beau et si riche !</em>（我从未见过如此美丽富饶的国家！）。</p>

          <h3>11.4 条件句总结 (Résumé des Phrases Conditionnelles)</h3>
          <p class="text-sm mb-2">条件句由连词 si 引出从句（条件部分），主句根据 “条件实现的可能性” 选择不同时态，核心分为三类：</p>
          <table class="w-full text-sm border-collapse mb-2 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">条件类型</th><th class="p-2 border">从句时态</th><th class="p-2 border">主句时态</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">现实条件（可能实现）</td><td class="p-2 border">直陈式现在时</td><td class="p-2 border">简单将来时 / 直陈式现在时 / 命令式</td><td class="p-2 border"><em>Si tu es libre ce soir, viens chez moi.</em>（如果你今晚有空，来我家吧）</td></tr>
              <tr><td class="p-2 border">非现实条件（与事实相反或难以实现）</td><td class="p-2 border">未完成过去时</td><td class="p-2 border">条件式现在时</td><td class="p-2 border"><em>Si j’étais riche, je ferais le tour du monde.</em>（如果我有钱，我会环游世界）</td></tr>
              <tr><td class="p-2 border">过去非现实条件（过去未实现）</td><td class="p-2 border">愈过去时</td><td class="p-2 border">条件式过去时</td><td class="p-2 border"><em>Si j’avais eu temps, j’aurais vu ce film.</em>（若我当时有时间，我就看那部电影了）</td></tr>
            </tbody>
          </table>
        `
      },
      {
        id: "chap12",
        title: "第十二章：间接引语与时态一致",
        content: `
          <h3>12.1 间接疑问句 (L'Interrogation Indirecte)</h3>
          <p class="text-sm mb-2">间接疑问句用于 “转述他人的疑问”，语序为 <strong>陈述句语序</strong> （无倒装），句末用句号，而非问号。</p>
          <h4 class="font-bold text-sm">12.1.1 核心规则与示例</h4>
          <p class="text-sm">转述 “<strong>一般疑问句</strong>”（无疑问词）：用连词 si 引出从句，例如：<br><em>Paul dit : « Marie est-elle partie ? » → Paul me demande si Marie est partie.</em><br>保罗说：“玛丽走了吗？” → 保罗问我玛丽是否走了。<br>转述 “<strong>特殊疑问句</strong>”（有疑问词）：保留疑问词，后续用陈述句语序，例如：<br><em>Tu dis : « À qui tu envoies cette lettre ? » → Dites-moi à qui vous envoyez cette lettre.</em><br>你说：“你把这封信寄给谁？” → 告诉我您把这封信寄给谁。<br><em>Il demande : « Quelles fleurs vous aimez ? » → Je ne sais pas quelles fleurs vous aimez.</em><br>他问：“您喜欢哪些花？” → 我不知道您喜欢哪些花。<br><strong>特殊变化</strong>：直接引语中的 qu’est-ce qui/qu’est-ce que，在间接引语中需变为 ce qui/ce que，例如：<br><em>Il dit : « Qu’est-ce qui s’est passé ? » → Il ne sait pas ce qui s’est passé.</em><br>他说：“发生了什么事？” → 他不知道发生了什么事。<br><em>Elle demande : « Qu’est-ce que vous voulez ? » → Il nous demande ce que nous voulons.</em><br>她问：“您想要什么？” → 她问我们想要什么。</p>

          <h3>12.2 间接引语 (Le Discours Indirect)</h3>
          <p class="text-sm mb-2">间接引语用于 “转述他人的陈述句”，由连词 que 引导从句，且需根据主句动词的时态调整从句的 “时间状语” 和 “动词时态”（时态一致规则）。</p>
          <h4 class="font-bold text-sm">12.2.1 时间状语变化 (Changements des Indicateurs de Temps)</h4>
          <p class="text-sm mb-2">直接引语中的时间状语（如 aujourd’hui, demain）需根据 “转述时的时间” 调整为间接引语的对应表达：</p>
          <table class="w-full text-sm border-collapse mb-2 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">直接引语中的时间状语</th><th class="p-2 border">间接引语中的时间状语</th><th class="p-2 border">含义变化</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">maintenant</td><td class="p-2 border">alors</td><td class="p-2 border">现在 → 当时</td></tr>
              <tr><td class="p-2 border">en ce moment</td><td class="p-2 border">à ce moment-là</td><td class="p-2 border">此刻 → 那时</td></tr>
              <tr><td class="p-2 border">ce soir</td><td class="p-2 border">ce soir-là</td><td class="p-2 border">今晚 → 那天晚上</td></tr>
              <tr><td class="p-2 border">aujourd’hui</td><td class="p-2 border">ce jour-là / le jour même</td><td class="p-2 border">今天 → 那天 / 当天</td></tr>
              <tr><td class="p-2 border">demain</td><td class="p-2 border">le lendemain</td><td class="p-2 border">明天 → 第二天</td></tr>
              <tr><td class="p-2 border">hier</td><td class="p-2 border">la veille</td><td class="p-2 border">昨天 → 前一天</td></tr>
              <tr><td class="p-2 border">il y a deux jours</td><td class="p-2 border">deux jours plus tôt</td><td class="p-2 border">两天前 → 两天前（以转述时间为基准）</td></tr>
              <tr><td class="p-2 border">dans deux jours</td><td class="p-2 border">deux jours plus tard</td><td class="p-2 border">两天后 → 两天后（以转述时间为基准）</td></tr>
            </tbody>
          </table>
          <p class="text-sm"><strong>12.2.1.1 示例句子</strong><br><em>Elle m’a dit : « J’ai fini mon travail hier. » → Elle m’a dit qu’elle avait fini son travail la veille.</em><br>她告诉我：“我昨天完成了工作。” → 她告诉我她前一天完成了工作（hier 变为 la veille）。<br><em>Le professeur nous a dit : « Vous aurez des examens dans dix jours. » → Le professeur nous a dit que nous aurions des examens dix jours plus tard.</em><br>老师告诉我们：“你们十天后有考试。” → 老师告诉我们十天后有考试（dans dix jours 变为 dix jours plus tard）。</p>

          <h4 class="font-bold text-sm">12.2.2 时态变化 (La Concordance des Temps)</h4>
          <p class="text-sm mb-2">时态一致规则的核心： <strong>主句动词为过去时</strong>（如复合过去时、未完成过去时）时，从句动词需变为相应的过去时态 ；若主句动词为现在时，从句可自由使用现在时、将来时或过去时。</p>
          <p class="text-sm mb-2"><strong>12.2.2.1 时态对应关系表</strong></p>
          <table class="w-full text-sm border-collapse mb-2 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">直接引语中的时态</th><th class="p-2 border">间接引语中的时态（主句为过去时）</th><th class="p-2 border">含义变化</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">Present</td><td class="p-2 border">Imparfait</td><td class="p-2 border">现在做 → 当时做</td></tr>
              <tr><td class="p-2 border">Imparfait</td><td class="p-2 border">Imparfait</td><td class="p-2 border">当时在做 → 当时在做</td></tr>
              <tr><td class="p-2 border">passé compose</td><td class="p-2 border">plus-que-parfait</td><td class="p-2 border">已经做了 → （当时）已经做了</td></tr>
              <tr><td class="p-2 border">futur simple</td><td class="p-2 border">futur dans le passé</td><td class="p-2 border">将要做 → （当时）将要做</td></tr>
            </tbody>
          </table>
          <p class="text-sm"><strong>12.2.2.2 示例句子</strong><br><em>Michel nous a demandé : « Quand partirez-vous pour la France ? » → Michel nous a demandé quand nous partirions pour la France.</em><br>米歇尔问我们：“你们什么时候去法国？” → 米歇尔问我们什么时候去法国（partirez 变为 partirions（过去将来时））。<br><em>Sophie nous a dit : « Je suis très contente de vous voir. » → Sophie nous a dit qu’elle était très contente de nous voir.</em><br>索菲告诉我们：“我见到你们很高兴。” → 索菲告诉我们她见到我们很高兴（suis 变为 était（未完成过去时））。</p>
        `
      }
    ]
  },
  {
    id: "part4",
    title: "第四部分：介词、时间与数字",
    desc: "Les Prépositions, le Temps et les Nombres",
    chapters: [
      {
        id: "chap13",
        title: "第十三章：介词 (Les Prépositions)",
        content: `
          <h3>13.1 介词 à 的用法 (L'Usage de la Préposition À)</h3>
          <p class="text-sm mb-2">à 是用法最广泛的介词之一，核心表 “方向、地点、时间、所属、方式” 等：</p>
          <table class="w-full text-sm border-collapse mb-4 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">用法类型</th><th class="p-2 border">说明</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">地点 / 方向</td><td class="p-2 border">表 “在某地” 或 “去某地”</td><td class="p-2 border"><em>Nous faisons un voyage à Moscou.</em>（我们在莫斯科旅游）<br><em>Je vais à l’école.</em>（我去上学）</td></tr>
              <tr><td class="p-2 border">时间</td><td class="p-2 border">表 “在某一具体时刻”</td><td class="p-2 border"><em>Nous nous couchons à minuit.</em>（我们午夜才睡）<br><em>Le cours commence à huit heures.</em>（课八点开始）</td></tr>
              <tr><td class="p-2 border">归属 / 所属</td><td class="p-2 border">表 “属于某人”</td><td class="p-2 border"><em>Elle a une voiture à elle seule.</em>（她有一辆属于自己的车）<br><em>Ce livre n’est pas à moi.</em>（这本书不是我的）</td></tr>
              <tr><td class="p-2 border">来源</td><td class="p-2 border">表 “从某人 / 某物手中获取”</td><td class="p-2 border"><em>Notre armée a enlevé la ville aux mains des ennemis.</em>（我们的军队把城市从敌人手中夺回）</td></tr>
              <tr><td class="p-2 border">方式或工具</td><td class="p-2 border">表 “以某种方式 / 工具做某事”</td><td class="p-2 border"><em>Après le repas, ce vieux monsieur se promène à pas lents.</em>（饭后，这位老先生慢慢散步）<br><em>Il écrit à la plume.</em>（他用羽毛笔写字）</td></tr>
              <tr><td class="p-2 border">特点</td><td class="p-2 border">表 “具有某种特征”</td><td class="p-2 border"><em>Tu connais ce jeune homme à moustache ?</em>（你认识这个长小胡子的年轻人吗？）<br><em>C’est une table à quatre pieds.</em>（这是一张四脚桌子）</td></tr>
              <tr><td class="p-2 border">引出补语 / 间接宾语</td><td class="p-2 border">表 “动作的对象或补充说明”</td><td class="p-2 border"><em>Nous sommes fidèles à notre patrie.</em>（我们忠于祖国）<br><em>L’enfant a apporté des fleurs à l’institutrice.</em>（孩子给老师带来了花）</td></tr>
            </tbody>
          </table>

          <h3>13.2 介词 de 的用法 (L'Usage de la Préposition De)</h3>
          <p class="text-sm mb-2">de 常表 “来源、所属、材料、原因、数量” 等，也是构成否定句（替换不定冠词 / 部分冠词）的重要介词：</p>
          <table class="w-full text-sm border-collapse mb-4 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">用法类型</th><th class="p-2 border">说明</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">来源 / 出发点</td><td class="p-2 border">表 “来自某地 / 某人”</td><td class="p-2 border"><em>Il vient de Paris.</em>（他来自巴黎）<br><em>Ce cadeau est de mon frère.</em>（这个礼物来自我兄弟）</td></tr>
              <tr><td class="p-2 border">所属</td><td class="p-2 border">表 “…… 的”（名词所有格）</td><td class="p-2 border"><em>C’est une œuvre de Victor Hugo.</em>（这是维克多・雨果的作品）<br><em>Le nom de ce garçon est Paul.</em>（这个男孩的名字是保罗）</td></tr>
              <tr><td class="p-2 border">材料</td><td class="p-2 border">表 “由某种材料制成”（可见原材料）</td><td class="p-2 border"><em>C’est un bateau de bois.</em>（这是一艘木船）<br><em>Cette table est de marbre.</em>（这张桌子是大理石做的）</td></tr>
              <tr><td class="p-2 border">方式 / 工具</td><td class="p-2 border">表 “用某种方式做某事”</td><td class="p-2 border"><em>Elle lui fait signe de la tête.</em>（她点头向他示意）<br><em>Il marche de pied.</em>（他步行去）</td></tr>
              <tr><td class="p-2 border">原因</td><td class="p-2 border">表 “由于某种原因”</td><td class="p-2 border"><em>Elle est morte de faim.</em>（她饿死了）<br><em>Il est malade de stress.</em>（他因为压力大而生病）</td></tr>
              <tr><td class="p-2 border">数量</td><td class="p-2 border">表 “数量或幅度”</td><td class="p-2 border"><em>Nous avançons de vingt pas.</em>（我们前进了二十步）<br><em>Le prix a baissé de dix euros.</em>（价格下降了十欧元）</td></tr>
              <tr><td class="p-2 border">引出间接宾语或补语</td><td class="p-2 border">表 “动作的对象或补充说明”</td><td class="p-2 border"><em>Elle nous parle de son voyage.</em>（她给我们讲她的旅行）<br><em>Ils sont contents de leur vie à Beijing.</em>（他们对在北京的生活很满意）</td></tr>
              <tr><td class="p-2 border">引导不定式动词</td><td class="p-2 border">用于固定结构（如 c’est de + 不定式）</td><td class="p-2 border"><em>Ce qui est important, c’est de parler souvent le français.</em>（重要的是常说法语）</td></tr>
            </tbody>
          </table>

          <h3>13.3 其他常见介词 (Autres Prépositions Courantes: Pour, Par, En)</h3>
          <h4 class="font-bold text-sm">13.3.1 介词 pour</h4>
          <p class="text-sm mb-2">pour 主要表 “目的地、目的、对象、持续时间” 等：</p>
          <table class="w-full text-sm border-collapse mb-3 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">用法类型</th><th class="p-2 border">说明</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">目的地或方向</td><td class="p-2 border">表 “去某地”（强调 “目的”，区别于 à）</td><td class="p-2 border"><em>Nous partons pour la France.</em>（我们出发去法国）<br><em>Il va pour le bureau.</em>（他去办公室）</td></tr>
              <tr><td class="p-2 border">持续时间</td><td class="p-2 border">表 “持续一段时间”</td><td class="p-2 border"><em>Nous sommes dans ce village pour toutes les vacances.</em>（我们整个假期都待在这个村子里）</td></tr>
              <tr><td class="p-2 border">目的 / 用途</td><td class="p-2 border">表 “为了做某事 / 用于某物”</td><td class="p-2 border"><em>Il faut manger pour vivre.</em>（为了生存必须吃饭）<br><em>Ce stylo est pour écrire.</em>（这支笔是用来写字的）</td></tr>
              <tr><td class="p-2 border">对象</td><td class="p-2 border">表 “给某人 / 针对某人”</td><td class="p-2 border"><em>Ce sont des parfums pour dames.</em>（这些是女士香水）<br><em>Ce livre est pour toi.</em>（这本书是给你的）</td></tr>
              <tr><td class="p-2 border">对…… 来说</td><td class="p-2 border">表 “对某人而言”</td><td class="p-2 border"><em>Ce livre est trop difficile pour nous.</em>（这本书对我们来说太难了）<br><em>Le voyage est fatiguant pour elle.</em>（这次旅行对她来说很累）</td></tr>
              <tr><td class="p-2 border">价格</td><td class="p-2 border">表 “以某种价格购买”</td><td class="p-2 border"><em>Elle a acheté cette robe pour deux cents yuans.</em>（她花两百元买了这条裙子）</td></tr>
            </tbody>
          </table>

          <h4 class="font-bold text-sm">13.3.2 介词 par</h4>
          <p class="text-sm mb-2">par 主要表 “施动者、方式、经过的地点” 等：</p>
          <table class="w-full text-sm border-collapse mb-3 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">用法类型</th><th class="p-2 border">说明</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">引出施动者</td><td class="p-2 border">用于被动语态，表 “被某人”</td><td class="p-2 border"><em>La machine est réparée par l’ouvrier.</em>（机器被工人修好了）</td></tr>
              <tr><td class="p-2 border">经过的地点</td><td class="p-2 border">表 “经过某地”</td><td class="p-2 border"><em>Il est passé par Paris pour aller au Maroc.</em>（他经过巴黎去摩洛哥）</td></tr>
              <tr><td class="p-2 border">天气或状态</td><td class="p-2 border">表 “在某种天气 / 状态下”</td><td class="p-2 border"><em>Où vas-tu par ce mauvais temps?</em>（这么坏的天气你要去哪儿？）</td></tr>
              <tr><td class="p-2 border">顺序 / 方式</td><td class="p-2 border">表 “按照某种顺序 / 方式”</td><td class="p-2 border"><em>Nous commençons par la page 19; on a fini la soirée par un film.</em>（我们从第 19 页开始；晚会以一部电影结束）</td></tr>
            </tbody>
          </table>

          <h4 class="font-bold text-sm">13.3.3 介词 en</h4>
          <p class="text-sm mb-2">en 主要表 “状态、地点、时间、方式、材料” 等，用法灵活且高频：</p>
          <table class="w-full text-sm border-collapse mb-2 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">用法类型</th><th class="p-2 border">说明</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">状态 / 营业</td><td class="p-2 border">表 “处于某种状态 / 营业中”</td><td class="p-2 border"><em>La poste est en service.</em>（邮局在营业）<br><em>Ce restaurant est en fermeture.</em>（这家餐厅正在关门）</td></tr>
              <tr><td class="p-2 border">地点</td><td class="p-2 border">表 “在某国 / 某洲”（无需加冠词，区别于 à）</td><td class="p-2 border"><em>Ces jeunes Français font leurs études en Chine.</em>（这些法国年轻人在中国学习）<br><em>Il travaille en Afrique.</em>（他在非洲工作）</td></tr>
              <tr><td class="p-2 border">时间 / 季节</td><td class="p-2 border">表 “在某季节 / 时间段内”</td><td class="p-2 border"><em>Il fait chaud en été.</em>（夏天天气热）<br><em>En hiver, nous allons skier.</em>（冬天我们去滑雪）</td></tr>
              <tr><td class="p-2 border">方式 / 语言</td><td class="p-2 border">表 “用某种语言 / 方式”</td><td class="p-2 border"><em>Je vais écrire cette lettre en français.</em>（我要用法语写这封信）<br><em>Il répond en souriant.</em>（他微笑着回答）</td></tr>
              <tr><td class="p-2 border">材料 / 颜色</td><td class="p-2 border">表 “由某种材料制成 / 某种颜色”（不可见原材料或表属性）</td><td class="p-2 border"><em>Les pantalons en coton se vendent beaucoup.</em>（棉质裤子卖得很好）<br><em>Sa télévision en noir et blanc est très ancienne.</em>（他的黑白电视很旧了）</td></tr>
            </tbody>
          </table>

          <h3>13.4 国家、洲名与介词 (Prépositions avec les Noms de Pays et Continents)</h3>
          <p class="text-sm mb-2">国家和洲名是专有名词，有固定阴阳性，搭配介词 à/en/de 时需根据其性数变化，核心规则如下：</p>
          <table class="w-full text-sm border-collapse mb-2 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">类别</th><th class="p-2 border">阴阳性 / 数特征</th><th class="p-2 border">介词搭配</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">阳性国家</td><td class="p-2 border">多以辅音开头（例外：Iran 等元音开头）</td><td class="p-2 border">à + le = <strong>au</strong></td><td class="p-2 border"><em>Je vais au Cambodge, au Canada, au Japon.</em>（我去柬埔寨、加拿大、日本）<br><em>Je vais en Iran.</em>（我去伊朗，元音开头阳性国名用 en）</td></tr>
              <tr><td class="p-2 border">阴性国家 / 洲</td><td class="p-2 border">多以元音或哑音 h 开头</td><td class="p-2 border"><strong>en</strong></td><td class="p-2 border"><em>Je vais en Allemagne, en Belgique, en Afrique.</em>（我去德国、比利时、非洲）</td></tr>
              <tr><td class="p-2 border">复数国家</td><td class="p-2 border">词尾多为 -s（如 États-Unis）</td><td class="p-2 border">à + les = <strong>aux</strong></td><td class="p-2 border"><em>Je vais aux États-Unis, aux Philippines, aux Pays-Bas.</em>（我去美国、菲律宾、荷兰）</td></tr>
              <tr><td class="p-2 border">特殊例外国家</td><td class="p-2 border">无固定阴阳性，直接用 à</td><td class="p-2 border"><strong>à</strong></td><td class="p-2 border"><em>Je vais à Singapour.</em>（我去新加坡）</td></tr>
            </tbody>
          </table>
          <h4 class="font-bold text-sm">13.4.1 “来自某地” 的表达</h4>
          <p class="text-sm">表示 “从某国 / 某地来” 时，用 <strong>de/d’ + 国名 / 地名</strong> ，需结合定冠词缩合：<br>阳性国家：de + le = du，例如：<em>Il vient du Canada.</em>（他来自加拿大）<br>阴性国家 / 洲：de + 国名（无冠词），例如：<em>Elle vient de France.</em>（她来自法国）；<em>Il vient d’Algérie.</em>（他来自阿尔及利亚，元音开头用 d’）<br>复数国家：de + les = des，例如：<em>Ils viennent des États-Unis.</em>（他们来自美国）</p>
        `
      },
      {
        id: "chap14",
        title: "第十四章：数字、时间与日期",
        content: `
          <h3>14.1 序数词 (Les Adjectifs Numéraux Ordinaux)</h3>
          <p class="text-sm mb-2">序数词表示 “顺序”（第一、第二、第三等），多数由基数词变形而来，少数不规则，需与所修饰名词的性数一致。</p>
          <h4 class="font-bold text-sm">14.1.1 构成规则</h4>
          <p class="text-sm"><strong>规则变形</strong> ：<br>基数词加后缀 <strong>-ième</strong> ，例如：trois → troisième（第三）、six → sixième（第六）。<br>以 <strong>-e</strong> 结尾的基数词，先去 e 再加 -ième，例如：deux → deuxième（第二）、quatre → quatrième（第四）。<br><strong>不规则变形</strong> （需单独记忆）：<br>un/une → premier/première（第一）<br>deux → deuxième 或 second/seconde（第二）<br>cinq → cinquième（第五）、neuf → neuvième（第九）</p>
          <h4 class="font-bold text-sm">14.1.2 性数一致规则</h4>
          <p class="text-sm">仅 <strong>premier/première</strong> 和 <strong>second/seconde</strong> 有阴阳性变化，例如：<em>le premier jour</em>（第一天，阳性）、<em>la première fois</em>（第一次，阴性）。<br>其他序数词（如 troisième、quatrième）无阴阳性差异，仅复数加 -s，例如：<em>les troisième mois</em>（第三个月，复数）、<em>les cinquième semaines</em>（第五周，复数）。</p>
          <h4 class="font-bold text-sm">14.1.3 用法示例</h4>
          <p class="text-sm"><em>les cinq premiers textes</em>（前五篇课文，“前五” 需用 “基数词 + premier” 结构，premier 用复数）<br><em>la deuxième année</em>（第二年）<br><em>le neuvième jour du mois</em>（这个月的第九天）</p>

          <h3>14.2 表示钟点 (L'Expression de l'Heure)</h3>
          <p class="text-sm mb-2">法语中表示时间常用 <strong>无人称句型 Il est…</strong> ，无需主语，动词 être 始终用第三人称单数，核心结构如下：</p>
          <table class="w-full text-sm border-collapse mb-3 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">时间类型</th><th class="p-2 border">构成规则</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">整点</td><td class="p-2 border">Il est + 数字 + heures（复数，midi/minuit 除外）</td><td class="p-2 border"><em>Il est six heures.</em>（六点）；<em>Il est midi.</em>（中午 12 点）；<em>Il est minuit.</em>（午夜 12 点）</td></tr>
              <tr><td class="p-2 border">… 点… 分</td><td class="p-2 border">Il est + 小时 + heures + 分钟</td><td class="p-2 border"><em>Il est six heures dix.</em>（六点十分）；<em>Il est cinq heures trente.</em>（五点三十分）</td></tr>
              <tr><td class="p-2 border">… 点一刻</td><td class="p-2 border">Il est + 小时 + heures + et quart</td><td class="p-2 border"><em>Il est trois heures et quart.</em>（三点一刻）</td></tr>
              <tr><td class="p-2 border">… 点半</td><td class="p-2 border">Il est + 小时 + heures + et demie（midi/minuit 后用 demi）</td><td class="p-2 border"><em>Il est dix heures et demie.</em>（十点半）；<em>Il est midi et demi.</em>（十二点半）</td></tr>
              <tr><td class="p-2 border">差… 分</td><td class="p-2 border">Il est + （小时 + 1） + heures + moins + 分钟</td><td class="p-2 border"><em>Il est sept heures moins dix.</em>（差十分七点，即六点五十）；<em>Il est huit heures moins vingt.</em>（差二十分钟八点，即七点四十）</td></tr>
              <tr><td class="p-2 border">差一刻</td><td class="p-2 border">Il est + （小时 + 1） + heures + moins le quart</td><td class="p-2 border"><em>Il est onze heures moins le quart.</em>（差一刻十一点，即十点四十五）</td></tr>
            </tbody>
          </table>
          <h4 class="font-bold text-sm">14.2.1 注意事项</h4>
          <p class="text-sm"><strong>demi 的性数变化</strong> ：<br>位于名词前时，无性数变化，例如：<em>une demi-heure</em>（半小时）、<em>deux demi-journées</em>（两个半天）。<br>位于名词后时，需与名词的性一致，例如：<em>cinq heures et demie</em>（五点半，heures 为阴性，用 demie）；<em>un jour et demi</em>（一天半，jour 为阳性，用 demi）。<br><strong>24 小时制用法</strong> ：火车站、机场等公共场合常用 24 小时制，不使用 “半”“刻” 等口语化表达，例如：<em>Il est quinze heures trente.</em>（15 点 30 分，而非 “下午三点半”）。</p>

          <h3>14.3 年、季、月、日期、星期的表达方式</h3>
          <p class="text-sm mb-2">不同时间维度的提问与回答有固定句型，核心需注意介词搭配（en/au 等）。</p>
          <table class="w-full text-sm border-collapse mb-3 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">时间类别</th><th class="p-2 border">常用问句</th><th class="p-2 border">陈述句（回答）及介词搭配</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">年</td><td class="p-2 border">En quelle année sommes-nous?</td><td class="p-2 border">Nous sommes en + 年份</td><td class="p-2 border"><em>Nous sommes en 2020.</em>（现在是 2020 年）</td></tr>
              <tr><td class="p-2 border">季</td><td class="p-2 border">En quelle saison sommes-nous?</td><td class="p-2 border">Nous sommes en + 季节</td><td class="p-2 border"><em>Nous sommes en été.</em>（现在是夏季）</td></tr>
              <tr><td class="p-2 border">月</td><td class="p-2 border">En quel mois sommes-nous? / Quel mois sommes-nous?</td><td class="p-2 border">Nous sommes en + 月份<br>Nous sommes au mois de + 月份</td><td class="p-2 border"><em>Nous sommes en janvier.</em>（现在是一月）；<em>Nous sommes au mois de février.</em>（现在是二月）</td></tr>
              <tr><td class="p-2 border">日期</td><td class="p-2 border">Quelle est la date d’aujourd’hui?</td><td class="p-2 border">Aujourd’hui, c’est le + 数字 + 月份</td><td class="p-2 border"><em>Aujourd’hui, c’est le 11 novembre.</em>（今天是 11 月 11 日）</td></tr>
              <tr><td class="p-2 border">星期</td><td class="p-2 border">Quel jour sommes-nous aujourd’hui?</td><td class="p-2 border">Aujourd’hui, nous sommes + 星期</td><td class="p-2 border"><em>Aujourd’hui, nous sommes vendredi.</em>（今天是星期五）</td></tr>
            </tbody>
          </table>
          <h4 class="font-bold text-sm">14.3.1 星期的特殊用法</h4>
          <p class="text-sm">在星期前加定冠词 <strong>le</strong> ，表示 “习惯性、每个星期”，例如：<br><em>Je vais au cinéma le lundi.</em>（我每个星期一去看电影）<br><em>Nous avons cours le mercredi.</em>（我们每个星期三有课）</p>

          <h3>14.4 时间短语 (Les Expressions de Temps)</h3>
          <p class="text-sm mb-2">这些短语用于表达 “时间先后、持续时长” 等关系，是日常交流中描述时间的核心工具。</p>
          <table class="w-full text-sm border-collapse mb-2 text-left bg-white">
            <thead class="bg-slate-100"><tr><th class="p-2 border">时间短语</th><th class="p-2 border">核心含义</th><th class="p-2 border">用法规则</th><th class="p-2 border">例句及翻译</th></tr></thead>
            <tbody>
              <tr><td class="p-2 border">avant</td><td class="p-2 border">“在…… 之前”</td><td class="p-2 border">后接时间点（名词 / 从句）</td><td class="p-2 border"><em>Le magasin n’est jamais ouvert avant sept heures.</em>（商店七点前从不营业）<br><em>Je me couche avant qu’il ne vienne.</em>（他来之前我就睡了）</td></tr>
              <tr><td class="p-2 border">après</td><td class="p-2 border">“在…… 之后”</td><td class="p-2 border">后接时间点（名词 / 从句）</td><td class="p-2 border"><em>Le café n’est plus en service après onze heures.</em>（咖啡馆十一点后不再营业）<br><em>Je sortirai après avoir fini mon travail.</em>（我完成工作后会出去）</td></tr>
              <tr><td class="p-2 border">depuis</td><td class="p-2 border">“自…… 以来”（持续到现在）</td><td class="p-2 border">后接过去时间点，主句用现在时</td><td class="p-2 border"><em>Nous apprenons le français depuis deux ans.</em>（我们学法语已经两年了）<br><em>Il habite ici depuis 2018.</em>（他自 2018 年起就住在这里）</td></tr>
              <tr><td class="p-2 border">dans</td><td class="p-2 border">“…… 之后”（指将来时间）</td><td class="p-2 border">后接时间段，主句用将来时或最近将来时</td><td class="p-2 border"><em>Dans deux mois, nous passerons les examens.</em>（两个月后我们要考试）<br><em>Je reviendrai dans une heure.</em>（我一小时后回来）</td></tr>
              <tr><td class="p-2 border">il y a</td><td class="p-2 border">“…… 以前”（指过去时间）</td><td class="p-2 border">后接时间段，主句用复合过去时</td><td class="p-2 border"><em>J’ai acheté cet appartement il y a trois ans.</em>（我三年前买了这套公寓）<br><em>Il est parti il y a une heure.</em>（他一小时前走了）</td></tr>
              <tr><td class="p-2 border">Ça fait…que</td><td class="p-2 border">“已经…… 时间了”（强调持续时长）</td><td class="p-2 border">Ça fait + 时间段 + que + 主句（现在时）</td><td class="p-2 border"><em>Ça fait deux ans que nous vivons à Beijing.</em>（我们在北京住了两年了）<br><em>Ça fait un mois que je ne l’ai pas vu.</em>（我已经一个月没见到他了）</td></tr>
            </tbody>
          </table>
        `
      }
    ]
  }
];
// 挂载到全局 window 对象，确保主文件能看见

console.log("数据文件加载成功！");