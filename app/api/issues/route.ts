import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { useState } from "react";
import { createIssueSchema } from '@/app/validationSchemas';

//route.ts serves as an API routing system. All folder/file locations are required and follow these naming conventions


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