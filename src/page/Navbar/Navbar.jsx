import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import {
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import Sidebar from './Sidebar'

const Navbar = () => {
  return (
    <div
      className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky 
                    top-0 left-0 right-0 flex justify-between items-center "
    >
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-11 w-11"
            >
              <DragHandleHorizontalIcon className="h-13 w-13" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-72 border-r-0 flex flex-col justify-center"
            side="left"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://cdn.pixabay.com/photo/2022/02/22/22/19/btcore-snail-7029697_1280.png" />
                  </Avatar>
                  <div>
                    <span className="font-bold text-orange-700">Nong2k5</span>
                    <span>Tread</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer">Nong Treading</p>
        <div className="p-0 ml-9">
          <Button variant="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon />
            <span>Search</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
