import "./globals.scss"

export const metadata = {
	title: "#UnHackathon 2023",
	description: "Submission by Cameron A., Ali K.",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
