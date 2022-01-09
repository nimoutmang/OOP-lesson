"use strict";
exports.__esModule = true;
var category_1 = require("./category");
var School_1 = require("./School");
var Score_1 = require("./Score");
var Student_1 = require("./Student");
var Topic_1 = require("./Topic");
// Write here you tests
//create School
var pnc = new School_1.SChool('PNC', 'TropeangChhuk');
///create Student
var student1 = new Student_1.Student('So', 'Sana');
var student2 = new Student_1.Student('N', 'Nimout');
var student3 = new Student_1.Student('P', 'Sophors');
//create Topic
var topic1 = new Topic_1.Topic(category_1.Category.HTML, 204);
var topic2 = new Topic_1.Topic(category_1.Category.JAVA, 2016);
var topic3 = new Topic_1.Topic(category_1.Category.OOP, 2020);
var topic4 = new Topic_1.Topic(category_1.Category.VUEJS, 2003);
var topic5 = new Topic_1.Topic(category_1.Category.ANDROID, 2021);
//Create score
var javaScore = new Score_1.Score(70);
var phpScore = new Score_1.Score(80);
var htmlScore = new Score_1.Score(100);
pnc.addTopic(topic1);
pnc.addTopic(topic2);
pnc.addTopic(topic3);
pnc.addTopic(topic4);
pnc.addTopic(topic5);
console.log(pnc);
