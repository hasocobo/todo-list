import Task from './task';
import Project from './project';
import { showProjects, showTasks } from './screen';

const projects = [];


const newProject = function(projectName) {
    const _project = Project(projectName);
    projects.push(_project);
    return _project;
}

const project1 = newProject("Proje 1");
project1.addTask(Task("Kitap oku", "Her gün kitap oku", "", 2));
project1.addTask(Task("Ders çalış", "js çalış", "", 1));
project1.addTask(Task("Dil öğren", "Her gün dil öğren", "", 2));

const project2 = newProject("Okul");
project2.addTask(Task("Oyun oyna", "Günde 1 saat oyun oynayabilirsin.", "", 1));

const project3 = newProject("zm");
project3.addTask(Task())
const project4 = newProject("pm");

showProjects(projects);
//showTasks(project1.getTasks());
//showTasks(project2.getTasks());
