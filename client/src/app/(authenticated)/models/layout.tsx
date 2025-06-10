import Header from '@/components/authenticated/Navbar_OLD';
import SideBarMenu from '@/components/SideBarMenu';

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

	return (
		<div className="flex h-full bg-[#19191d]">
			<SideBarMenu></SideBarMenu>
			<div className="flex flex-col w-full h-full">
				{/* <Header></Header> */}
				{children}
			</div>
		</div>
	);
}
