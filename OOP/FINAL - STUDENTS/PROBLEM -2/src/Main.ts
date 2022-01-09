import { Category } from "./category";
import { SChool } from "./School";
import { Score } from "./Score";
import { Student } from "./Student";
import { Topic } from "./Topic";

// Write here you tests
//create School
let pnc = new SChool('PNC', 'TropeangChhuk');

///create Student
let student1 = new Student('So', 'Sana');
let student2 = new Student('N', 'Nimout');
let student3 = new Student('P', 'Sophors');

//create Topic
let topic1 = new Topic(Category.HTML,204 );
let topic2 = new Topic(Category.JAVA, 2016);
let topic3 = new Topic(Category.OOP, 2020);
let topic4 = new Topic(Category.VUEJS, 2003);
let topic5 = new Topic(Category.ANDROID, 2021);

//Create score
let javaScore = new Score(70);
let phpScore = new Score(80);
let htmlScore = new Score(100);


pnc.addTopic(topic1);
pnc.addTopic(topic2);
pnc.addTopic(topic3);
pnc.addTopic(topic4);
pnc.addTopic(topic5);

console.log(pnc);
