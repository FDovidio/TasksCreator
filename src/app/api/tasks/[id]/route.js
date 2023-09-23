import {NextResponse} from 'next/server'
import {prisma} from '@/libs/prisma'



export async function GET (request, {params}){

    const tasks = await prisma.task.findMany({
        where:{
            id: Number(params.id),
        }
    })
    

    return NextResponse.json(tasks)
}

export async function PUT (request, {params}){
    const data = await request.json();
    const taskUpdated = await prisma.task.update({
        where:{
            id: Number(params.id),
        },
        data: data
    })
    return NextResponse.json(taskUpdated)
}

export async function DELETE (request, {params}){
    try {
                const taskDeleted = await prisma.task.delete({
        where:{
            id: Number(params.id),
        }
    })
    
    return NextResponse.json(taskDeleted)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}