import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request, context: any) {
    try {
        let response = await prisma.projects.findMany();

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

export async function POST(req: Request, context: any) {
    try {
        const body = await req.json();

        let response = await prisma.projects.create({ data: body as any });

        if (response.id !== null) {
            return NextResponse.json({ status: 200, id: response.id, message: "Created if succefully" })
        } else {
            return NextResponse.json({ status: 400, message: "Error to create a new project" })
        }
    } catch (err) {
        return NextResponse.json({
            status: 500,
            error: err,
            message: "Internal error"
        })
    }
}

export async function PUT(req: Request, context: any) {
    try {
        let { id } = context.params as any;

        let response = await prisma.studentsOnProject.create({
             data: req.body as any
        });

        if (response.id !== null) {
            return NextResponse.json({ status: 200, id: response.id, message: "Update if succefully" });
        } else {
            return NextResponse.json({ status: 400, message: "Error to update the project" });
        }
    } catch (err) {
        return NextResponse.json({
            status: 500,
            error: err,
            message: "Internal error"
        })
    }
}