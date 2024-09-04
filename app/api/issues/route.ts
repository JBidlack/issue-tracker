import { NextRequest, NextResponse } from "next/server";
import {z} from'zod';
import prisma from "@/prisma/client";

//route.ts serves as an API routing system. All folder/file locations are required and follow these naming conventions

// Create a validation schema for the data being passed into the DB

const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
})

// Create a POST request using the schema to validate the object to be inserted fits the requirements

export async function POST(request: NextRequest){
    const body = await request.json(); 
    const validation = createIssueSchema.safeParse(body);

    //error code if zod returns that the data formatting is wrong
    if(!validation.success){
        return NextResponse.json(validation.error.errors, {status: 400});
    }

    //otherwise a new issue is created and returned as a response
    const newIssue = await prisma.issue.create({
        data:{
            title: body.title,
            description: body.description,
        }
    });

    return NextResponse.json(newIssue, {status: 201});
}