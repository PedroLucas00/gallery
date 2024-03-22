import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextResponse) {
    try {
        let response = await prisma.category.findMany();

        if (response.length !== 0) {
            return NextResponse.json(response)
        } else {
            return NextResponse.json({ status: 400, message: "There's no data" })
        }

    } catch (err) {
        return NextResponse.json({
            status: 500,
            error: err,
            message: "Internal error"
        })
    }
}

export async function POST(req: NextApiRequest, res: NextResponse) {
    try {
        let response = await prisma.category.create({ data: req.body });

        if (response.id !== null) {
            return NextResponse.json({ status: 200, id: response.id, message: "Created if succefully" })
        } else {
            return NextResponse.json({ status: 400, message: "Error to create a new category" })
        }
    } catch (err) {
        return NextResponse.json({
            status: 500,
            error: err,
            message: "Internal error"
        })
    }
}