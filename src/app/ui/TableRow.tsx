export default function TableRow({
  title,
  description,
  completed,
  due_date,
}: Omit<Task, 'id'>) {
  return (
    <tr>
      <td className="px-4 py-2 font-medium text-gray-900 truncate whitespace-nowrap max-w-[14ch]">
        {title}
      </td>
      <td className="px-4 py-2 text-gray-700 truncate whitespace-nowrap max-w-[32ch]">
        {description}
      </td>
      <td className="px-4 py-2 text-center text-gray-700 whitespace-nowrap">
        {completed ? 'Completed' : 'Pending'}
      </td>
      <td className="px-4 py-2 text-center text-gray-700 whitespace-nowrap">
        {new Date(due_date).toISOString().split('T')[0].replaceAll('-', '/')}
      </td>
      <td className="px-4 py-2 text-center whitespace-nowrap">
        <a
          href="#"
          className="inline-block px-4 py-2 text-xs font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
        >
          View
        </a>
      </td>
    </tr>
  );
}
