import { NextResponse } from 'next/server';
import { mockTasks } from '@/app/lib/data';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(mockTasks);
}
