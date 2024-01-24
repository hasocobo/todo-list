import Task from './task';
import Project from './project';


const project1 = Project();
project1.addTask(Task("Kitap oku", "Her gün kitap oku", "", 2));
project1.addTask(Task("Ders çalış", "js çalış", "", 1));
project1.addTask(Task("Dil öğren", "Her gün dil öğren", "", 2));

project1.log();

