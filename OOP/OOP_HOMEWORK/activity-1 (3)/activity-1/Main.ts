import { House } from "./House";
import { Tree } from "./Tree";

// Create 1 house
let houseRonan = new House(1, "ronan");

// Create 2 trees
let treeBig = new Tree(10);
let treeSmall = new Tree(3);

houseRonan.tree.push(treeBig, treeSmall)

// TODO  :
//  1- update the class to allow the house to have "many" tree

// 2- Add the 2 trees to the houseRonan
