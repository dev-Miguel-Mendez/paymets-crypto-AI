'use client';

import { logOut } from '@/lib/users';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function NavbarOLD() {
	const [open, setOpen] = useState(false);
	const profileRef = useRef<HTMLDivElement>(null); //* Automatically refers to the div  on render.
    const router = useRouter()

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            //$ "e.target" is the exact DOM element you clicked on (e.g., <body>, <img>, <div>, etc.)
            //$ .contains() is a native DOM method.
            //$ It checks whether the clicked element is inside the profileRef div (including children).
            if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        //$ Cleaning up the listener when the component unmounts:
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    //? TODO: passs this to context.
    const logUserOut = async()=>{
    
        const success = await logOut()

        if(success){
            router.push('/signin')
            return
        }

    }


	return (
		<div className="w-full h-12 bg-[#131313]  flex ">
			<div className=" w-full justify-around flex items-center">
				<div>option 1</div>
				<div>Might place search bar here</div>
				<div>option 3</div>
			</div>
			<div
				className="w-[15%] h-full  flex items-center justify-center gap-2 "
				ref={profileRef}
				onClick={() => setOpen(!open)}
			>
				<div className="w-9 h-9 rounded-full overflow-hidden hover:cursor-pointer">
					<img
						src="/comet.jpg"
						alt="profile"
						className="w-full h-full object-cover"
					/>
				</div>
				<p className='hover:cursor-pointer'> Dwati</p>
                {open && (
                    <div className="absolute top-10 right-5 mt-2 bg-[#363535] text-white shadow-lg rounded p-2 z-50 hover:cursor-pointer w-35">
                        <div className="px-4 py-2 hover:bg-gray-600">Profile</div>
                        <div className="px-4 py-2 hover:bg-gray-600">Settings</div>
                        <div className="px-4 py-2 hover:bg-gray-600" onClick={logUserOut}>Logout</div>
                    </div>
                )}
			</div>
		</div>
	);
}
