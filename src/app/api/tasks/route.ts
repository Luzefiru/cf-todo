export const runtime = 'edge';

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_TASKS_API_BASE_URL}`);
  const tasks = res.json();

  return Response.json(tasks);
}
