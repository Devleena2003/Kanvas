'use client'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import queryString from 'query-string'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDebounceValue } from 'usehooks-ts'
function SearchInput() {
    const router = useRouter();
    const [value, setValue] = useState("");
    const [debounceValue] = useDebounceValue(value, 500)
    const  handleCharge=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    useEffect(() => {
        const url = queryString.stringifyUrl({
            url: "/",
            query: {
                search:debounceValue,
            },
        }, { skipEmptyString: true, skipNull: true })
        router.push(url)
    },[debounceValue,router])
  return (
    <div className='w-full relative'>
          <Search className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4'/>
          <Input className='w-full max-w-[516px] pl-9' placeholder='Search Boards'
              onChange={handleCharge}
          value={value}/>
    </div>
  )
}

export default SearchInput
