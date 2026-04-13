import {
  Avatar,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoLanguage } from "react-icons/io5"
import { Check, Globe } from "lucide-react"

export function LanguageDropdown() {
const currentLanguage: string = "English";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative group rounded-full w-10 h-10 transition-all duration-300 hover:ring-4 hover:ring-blue-100"
        >
          <Avatar className="border-[#4185F4] border-[1.5px] bg-white flex items-center justify-center transition-transform group-hover:scale-105">
            <IoLanguage className="text-[#4185F4] size-5 transition-colors group-hover:text-blue-600" />
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-48 rounded-2xl p-2 shadow-[0_10px_40px_-10px_rgba(65,133,244,0.2)] border-slate-100/50 bg-white/95 backdrop-blur-md"
      >
        <div className="px-3 py-2 mb-1">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <Globe size={12} /> Select Language
          </p>
        </div>
        
        <DropdownMenuSeparator className="bg-slate-50" />

        <DropdownMenuGroup className="space-y-1">
          <DropdownMenuItem className="flex items-center justify-between rounded-xl cursor-pointer py-3 px-4 focus:bg-blue-50 focus:text-[#4185F4] transition-all duration-200 group">
            <span className="font-semibold text-slate-600 group-focus:text-[#4185F4]">Bangla</span>
            {currentLanguage === "Bangla" && (
              <div className="bg-blue-100 p-1 rounded-full">
                <Check className="size-3 text-[#4185F4]" strokeWidth={3} />
              </div>
            )}
          </DropdownMenuItem>
          
          <DropdownMenuItem className="flex items-center justify-between rounded-xl cursor-pointer py-3 px-4 focus:bg-blue-50 focus:text-[#4185F4] transition-all duration-200 group">
            <span className="font-semibold text-slate-600 group-focus:text-[#4185F4]">English</span>
            {currentLanguage === "English" && (
              <div className="bg-[#4185F4] p-1 rounded-full">
                <Check className="size-3 text-white" strokeWidth={3} />
              </div>
            )}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}