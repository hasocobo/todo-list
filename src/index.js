import Task from './task';
import { Project, Projects } from './project.js';
import { showProjects, showTasks } from './screen';

const project1 = Projects.newProject('Proje 1');
project1.addTask(Task('Kitap oku', 'Her gün kitap oku', '', 2));
project1.addTask(Task('Ders çalış', 'js çalış', '', 1));
project1.addTask(Task('Dil öğren', 'Her gün dil öğren', '', 2));

const project2 = Projects.newProject('Okul');
project2.addTask(Task('Oyun oyna', 'Günde 1 saat oyun oynayabilirsin.', '', 1));

showProjects(Projects);
// showTasks(project1.getTasks());
// showTasks(project2.getTasks());

project1.addTask(Task('Yürüyüşe çık', 'Her gün yürüyüşe çık', '', 2));

showTasks(project1);
