import { notFound } from 'next/navigation';
import Link from 'next/link';
import { updateTask } from '@/app/lib/actions';

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(`http://localhost:3000/api/tasks/${params.id}`, {
    cache: 'no-store',
  });

  if (response.status === 404) {
    notFound();
  }

  const { task }: { task: Task } = await response.json();

  return (
    <div className="flex justify-center w-full">
      <div className="flex justify-center w-full px-2 sm:px-4 md:w-3/4">
        <form action={updateTask} className="w-full lg:w-3/4">
          <label
            htmlFor="title"
            className="block p-2 text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            className="w-full p-2 mb-4 text-2xl font-bold text-gray-900 border border-gray-200 rounded-lg shadow-sm sm:text-3xl"
            defaultValue={task.title}
          />

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block p-2 text-sm font-medium text-gray-700"
            >
              Description
            </label>

            <textarea
              id="description"
              className="w-full p-2 align-top border border-gray-200 rounded-lg shadow-sm sm:text-sm"
              rows={4}
              defaultValue={task.description}
            ></textarea>
          </div>

          <div className="flex flex-col justify-center gap-4 mb-8 md:flex-row">
            <div className="grid w-full">
              <label
                htmlFor="status"
                className="block p-2 text-sm font-medium text-gray-700"
              >
                Status
              </label>

              <select
                id="status"
                className="w-full p-2 align-top border border-gray-200 rounded-lg shadow-sm sm:text-sm"
              >
                <option selected disabled>
                  Choose a status
                </option>
                <option value="false" defaultChecked={!task.completed}>
                  Pending
                </option>
                <option value="true" defaultChecked={task.completed}>
                  Completed
                </option>
              </select>
            </div>

            <div className="w-full">
              <label
                htmlFor="due_date"
                className="block p-2 text-sm font-medium text-gray-700"
              >
                Due Date
              </label>

              <input
                id="due_date"
                className="w-full p-2 align-top border border-gray-200 rounded-lg shadow-sm sm:text-sm"
                defaultValue={task.due_date}
                type="date"
              />
            </div>
          </div>
          <div className="flex flex-col justify-end w-full gap-4 md:flex-row">
            <Link
              className="inline-block px-12 py-3 text-sm font-medium text-center text-red-600 transition-all border border-red-600 rounded-lg text-nowrap hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-red-500"
              href="/"
            >
              Cancel
            </Link>
            <button
              className="inline-block px-12 py-3 text-sm font-medium text-white transition-all bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring active:text-indigo-500 text-nowrap"
              type="submit"
            >
              Edit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
