'use client'

import {Button, TextField} from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder='Title'>
            <TextField.Slot/>
        </TextField.Root>
        <SimpleMDE placeholder='Please explain your issue here...'/>
        <Button>Submit</Button>
    </div>
  )
}

export default NewIssuePage