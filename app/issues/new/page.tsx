'use client'
import React from 'react'
import {Button, TextArea, TextField} from '@radix-ui/themes';

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder='Title'>
            <TextField.Slot/>
        </TextField.Root>
        <TextArea placeholder='Please explain your issue here...'/>
        <Button>Submit</Button>
    </div>
  )
}

export default NewIssuePage