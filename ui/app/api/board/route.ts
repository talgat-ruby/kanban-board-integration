import { NextResponse } from 'next/server';

const boards = [
    "Platform Launch",
    "Marketing Plan",
    "Roadmap"
]

export async function GET(request: Request) {
    return NextResponse.json(boards)
}
