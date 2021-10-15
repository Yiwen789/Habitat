const tasks = [
  {
    id: "1",
    title: "Wake Up Early",
    completedTimes: 10,
    participants: [{id: "p1", name: "Anna"}, {id: "p2", name: "Ben"}],
    image: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    title: "Exercise",
    completedTimes: 20,
    participants: [{id: "p1", name: "Anna"}, {id: "p2", name: "Ben"}, {id: "p3", name: "Cathy"}, {id: "p4", name: "David"}, {id: "p5", name: "Emma"}],
    image: "https://source.unsplash.com/random",
  },
  {
    id: 3,
    title: "Read",
    completedTimes: 15,
    participants: [{id: "p1", name: "Anna"}],
    image: "https://source.unsplash.com/random",
  },
]

export function getTasks() {
  return tasks;
}

export function getTask(id) {
  return tasks.find(t => t.id === id);
}

//add
export function addTask(task) {
  let taskTemp = task.find(t => t.id === task.id) || {};
  taskTemp.title = task.title;
  taskTemp.completedTimes = task.completedTimes;
  taskTemp.participants = task.participants?task.participants: {};
  taskTemp.participants = task.image?task.image: "https://source.unsplash.com/random";

  if (!taskTemp.id) {
    taskTemp.id = tasks.length() + 1;
    tasks.push(taskTemp);
  }
  return taskTemp;
}

//delete
