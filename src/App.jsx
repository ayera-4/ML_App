function App() {
	return (
		<div className="min-h-screen flex flex-col text-white">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center mt-20">

				<h1 className="text-3xl md:text-5xl lg:text-7xl uppercase font-black mb-8">SealNet Platform</h1>

				<p className="text-base md:text-lg lg:text-2xl mb-8">A place for researchers to monitor movement of Seals all year round!</p>

				<form 
					action="#" 
					method="post" 
					id="revue-form"
					name="revue-form"
					target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Your userId..."
							type="email"
							name="member[email]"
							id="member_email"
							className="text-2xl placeholder:text-gray-300 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-30 focus:bg-opacity-20 duration-150 rounded-full outline-none mb-4 md:mb-0"
						/>
					</div>
					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Your password..."
							type="password"
							name="member[password]"
							id="member_password"
							className="text-2xl placeholder:text-gray-300 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-30 focus:bg-opacity-20 duration-150 rounded-full outline-none mb-4 md:mb-0"
						/>
					</div>
					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							type="submit"
							value="Login"
							name="member[Login]"
							id="member_submit"
							className="bg-primary rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/>
					</div>

					<div className="opacity-75 italic">
						By subscribing, you agree with SealNet's <a target="_blank" href="#" className="hover:opacity-80 duration-150">Terms of Data Sharing</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
					</div>

				</form>
			</main>

			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<p className="mb-4 md:mb-0 md:text-xl">Built by myuo</p>

					<div className="flex -mx-6">
						<a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
					</div>
				</div>
			</footer>
		</div>	
	)
}

export default App
