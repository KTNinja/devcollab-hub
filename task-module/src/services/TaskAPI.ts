export async function fetchTasks() {
  return Promise.resolve([
    { id: 1, title: "Initial Task", completed: false }
  ]);
}
