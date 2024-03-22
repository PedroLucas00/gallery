import prisma from '../../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request, context: any) {
    try {
        let { id } = context.params as any;

        let response = await prisma.student.findUnique({
            where: {
                id: id
            }
        });

        if (response !== null) {
            return NextResponse.json(response);
        } else {
            return NextResponse.json({ message: "Student not found" });
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
        
        let response = await prisma.student.update({
            where: {
                id: id
            }, data: req.body as any
        });

        if (response.id !== null) {
            return NextResponse.json({ status: 200, id: response.id, message: "Update if succefully" });
        } else {
            return NextResponse.json({ status: 400, message: "Error to update the student" });
        }
    } catch (err) {
        return NextResponse.json({
            status: 500,
            error: err,
            message: "Internal error"
        })
    }
}