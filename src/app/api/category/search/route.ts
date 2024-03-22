import { NextResponse } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function GET(req: Request, context: any) {
    try {
        let { id } = context.params as any;

        let response = await prisma.category.findMany({
            where: {
                id: id
            }
        });

        if (response !== null) {
            return NextResponse.json(response);
        } else {
            return NextResponse.json({ message: "Category not found" });
        }
    } catch (err) {
        return NextResponse.json({
            status: 500,
            error: err,
            message: "Internal error"
        })
    }
}