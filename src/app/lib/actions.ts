'use server';

export async function updateTask(id: number, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const newTaskData = {
    id,
    title: rawFormData.title,
    description: rawFormData.description,
    status: rawFormData.status === 'true',
    due_date: rawFormData.due_date,
  };
  console.log('Handling task update with payload:', newTaskData);
}

export async function deleteTask(id: number) {
  console.log('Deleting task with id:', id);
}
