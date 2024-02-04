import { NextResponse } from 'next/server';
import { mockTasks } from '@/app/lib/data';
import { notFound } from 'next/navigation';

export const runtime = 'edge';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const fetchedTask = mockTasks.find((t) => t.id === Number(params.id));

  if (fetchedTask === undefined) {
    notFound();
  }

  return NextResponse.json({ task: fetchedTask });
}
