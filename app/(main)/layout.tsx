import React from "react";

export default async function RootLayout({children}: {
	children: React.ReactNode
}) {
	return (
		<html lang={'en'} className={'h-full overflow-hidden'}>
			<body className={'flex min-h-full w-full overflow-hidden'}>
				{children}
			</body>
		</html>
	);
}