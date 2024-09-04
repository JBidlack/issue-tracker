import {z} from'zod';

// Create a validation schema for the data being passed into the DB
export const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1),
});