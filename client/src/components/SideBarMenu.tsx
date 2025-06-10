"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function  SideBarMenu() {

    const [isOpen, setIsOpen] = useState<boolean>(false)



    return (
        <div className={`transition-all duration-100 ${isOpen ? "w-64" : "w-14"} h-full bg-[#101011] p-4`}>
          <div>
            {isOpen ? (
              <X size={32} className="cursor-pointer" onClick={() => setIsOpen(false)}/>
            ) : (
              <Menu size={25} className="cursor-pointer" onClick={() => setIsOpen(true)}/>
            )}
          </div>
    
          {/* Sidebar content only if open */}
          {isOpen && (
            <nav className="mt-6">
              <p className="mb-2">Link 1</p>
              <p className="mb-2">Link 2</p>
            </nav>
          )}
        </div>
      )
}