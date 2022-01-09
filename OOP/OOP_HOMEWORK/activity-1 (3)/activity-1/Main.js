"use strict";
exports.__esModule = true;
var House_1 = require("./House");
var Tree_1 = require("./Tree");
// Create 1 house
var houseRonan = new House_1.House(1, "ronan");
// Create 2 trees
var treeBig = new Tree_1.Tree(10);
var treeSmall = new Tree_1.Tree(3);
houseRonan.tree.push(treeBig, treeSmall);
// TODO  :
//  1- update the class to allow the house to have "many" tree
// 2- Add the 2 trees to the houseRonan
