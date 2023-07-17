import { client } from '@/app/libs/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const req = await request.json();
    const blog_datas = await client.get({
        endpoint: 'blogs',
        queries: {q: req.val}
    });
    return new Response(JSON.stringify(blog_datas));
}