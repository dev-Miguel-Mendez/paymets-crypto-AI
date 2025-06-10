'use client';

import { signIn } from '@/lib/users';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
	const [feedback, setFeedback] = useState<{success: boolean; msg: string;} | null>(null);

	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget as HTMLFormElement);

		const email = formData.get('email');
		const password = formData.get('password');

		if (!email || !password) {
			setFeedback({
				success: false,
				msg: 'All fields are required',
			});
			return;
		}

		const response = await signIn(formData);

		if (!response.success) {
			setFeedback(response);
			return;
		}

		setFeedback({ success: true, msg: 'Success' });

		router.push('/');
	};

	return (
		<form className="space-y-4 p-4 max-w-sm" onSubmit={handleSubmit}>
			<h2 className="text-xl font-bold">Login</h2>
			<input
        name="email"
				type="email"
				placeholder="Email"
				className="w-full px-4 py-2 border rounded"
			/>
			<input
        name="password"
				type="password"
				placeholder="Password"
				className="w-full px-4 py-2 border rounded"
			/>
      <p className={`${feedback?.success ? 'text-green-500' : 'text-red-500'} text-center`}>
    			{feedback?.msg}
			</p>
			<button
				type="submit"
				className="w-full bg-orange-600 text-white py-2 rounded hover:cursor-pointer hover:bg-orange-500"
			>
				Login
			</button>
			<p className="text-center">
				Don't have an account?{' '}
				<Link
					href="/signup"
					className="text-blue-500 underline hover:text-blue-400"
				>
					Sign up here
				</Link>
			</p>
		</form>
	);
}
