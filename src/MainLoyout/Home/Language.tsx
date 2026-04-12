import {
  Avatar,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoLanguage } from "react-icons/io5"

export function LanguageDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className=" place-content-center">
           <IoLanguage  />

            {/* <AvatarFallback>CN</AvatarFallback> */}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent >
        <DropdownMenuGroup>
          <DropdownMenuItem>Bangla</DropdownMenuItem>
          <DropdownMenuItem>English</DropdownMenuItem>
         
        </DropdownMenuGroup>
       
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
