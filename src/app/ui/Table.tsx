'use client';

import TableRow from './TableRow';
import { newBrowserClient } from '@/app/lib/supabase';
import { useState, useEffect } from 'react';

export default function Table() {
  const [tasks, setTasks] = useState<Task[] | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const supabase = newBrowserClient();
      const { data: tasks } = await supabase.from('tasks').select();
      setTasks(tasks as Task[]);
    };
    fetchTasks();
  }, []);

  if (tasks === null) {
    return <div>Loading...</div>;
  }

  if (tasks?.length === 0) {
    return (
      <div className="w-full overflow-x-auto rounded-lg">
        No tasks yet. Create one first!
      </div>
    );
  }

  return (
    <>
      <div className="w-full overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full text-sm bg-white divide-y-2 divide-gray-200 table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-start">
                Title
              </th>
              <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap text-start">
                Description
              </th>
              <th className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                Status
              </th>
              <th className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                Due Date
              </th>
              <th className="px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {tasks
              .sort((a, b) => {
                if (a.due_date > b.due_date) {
                  return 1;
                }

                if (a.due_date < b.due_date) {
                  return -1;
                }

                return 0;
              })
              .map((t) => (
                <TableRow {...t} key={t.id} />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
