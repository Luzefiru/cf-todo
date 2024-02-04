'use server';

import { createClient } from '@/app/lib/supabase';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function fetchTaskById(id: number) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: task, error } = await supabase
    .from('tasks')
    .select()
    .eq('id', id);

  if (error) {
    throw error;
  }

  return task[0];
}

export async function createTask(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const rawFormData = Object.fromEntries(formData.entries());
  const newTaskData = {
    title: rawFormData.title,
    description: rawFormData.description,
    completed: rawFormData.status === 'true',
    due_date: rawFormData.due_date,
  };

  const { error } = await supabase.from('tasks').insert(newTaskData);

  if (error) {
    console.error('Error creating task:', error.message);
    throw error;
  }

  redirect('/');
}

export async function updateTask(id: number, formData: FormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const rawFormData = Object.fromEntries(formData.entries());
  const newTaskData = {
    id,
    title: rawFormData.title,
    description: rawFormData.description,
    completed: rawFormData.status === 'true',
    due_date: rawFormData.due_date,
  };

  const { error } = await supabase
    .from('tasks')
    .update(newTaskData)
    .eq('id', id);

  if (error) {
    console.error('Error updating task:', error.message);
    throw error;
  }

  redirect('/');
}

export async function deleteTask(id: number) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.from('tasks').delete().eq('id', id);

  if (error) {
    console.error('Error deleting task:', error.message);
    throw error;
  }

  redirect('/');
}
