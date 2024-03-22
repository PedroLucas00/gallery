import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function GET(req: Request, context: any) {
    try {
        let { id } = context.params as any;

        let response = await prisma.projects.findUnique({
            where: {
                id: id
            }
        });

        
        if (response!.id !== null) {
            console.log(response);
            return NextResponse.json({data: response});
        } else {
            console.log(response);
            return NextResponse.json({ message: "Project not found" });
        }
    } catch (err) {
        console.log(err)
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

        let response = await prisma.projects.update({
            where: {
                id: id
            }, data: req.body as any
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