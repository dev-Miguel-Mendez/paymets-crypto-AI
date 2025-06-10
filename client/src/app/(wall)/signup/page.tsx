'use client';

import { signUp } from '@/lib/users';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function SignUp() {

    const [feedback, setFeedback] = useState<{success: boolean, msg: string} | null>(null)

	const router = useRouter()

    const handleSubmit = async (e: React.FormEvent)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)

		//*UI validation ----------------------------------------------------
        const username = (formData.get('username'))
        const email = (formData.get('email'))
        const password = (formData.get('password'))
        const confirmPassword = (formData.get('confirmPassword'))
        if(!username || !email || !password || !confirmPassword){
            setFeedback({success: false, msg:'All fields are required'})
            return
        }
		if(password !== confirmPassword){
			setFeedback({success: false, msg:'Passwords do not match'})
			return
		}
		//*UI validation ----------------------------------------------------

        const response = await signUp(formData)

		if(!response.success){
			
			setFeedback(response)
			return
		}

		setFeedback({success: true, msg: 'User created successfully'})

		router.push('/')
    }

	return (
		<form className="space-y-4 p-4 max-w-sm" onSubmit={handleSubmit}>
			<h2 className="text-xl font-bold">Sign Up</h2>
			<input
                name="username"
				type="text"
				placeholder="Username"
				className="w-full px-4 py-2 border rounded border-gray-600"
                value={'noEditName'}
			/>
			
			<input
                name="email"
				type="email"
				placeholder="Email"
				className="w-full px-4 py-2 border rounded border-gray-600"
                value={'noEditEmail@gmail'}
			/>
			<input
                name="password"
				type="password"
				placeholder="Password"
				className="w-full px-4 py-2 border rounded border-gray-600"
                value={'123'}
			/>
			<input
                name="confirmPassword"
				type="password"
				placeholder="Confirm Password"
				className="w-full px-4 py-2 border rounded border-gray-600"
                value={'123'}
			/>
            <p className={`${feedback?.success ? 'text-green-500' : 'text-red-500'} text-center`}>
    			{feedback?.msg}
			</p>
			<button
				type="submit"
				className="w-full bg-orange-600 text-white py-2 rounded hover:cursor-pointer hover:bg-orange-500"
			>
				{' '}
				Sign Up{' '}
			</button>
			<p className="text-center">
				Already have an account?{' '}
				<Link href="/signin" className="text-blue-500 underline hover:text-blue-400">
					Sing in here
				</Link>
			</p>
		</form>
	);
}
