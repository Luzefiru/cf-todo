import { NextResponse } from 'next/server';
import { mockTasks } from '@/app/lib/data';

export const runtime = 'edge';

export async function GET() {
  return NextResponse.json(mockTasks);
}
