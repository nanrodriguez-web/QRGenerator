import { useState } from "react";
import "./App.css";
import QRCodeImage from "./components/QRCodeImage";

function App() {
	const [text, setText] = useState("");

	const handleChange = (event) => {
		setText(event.target.value);
	};

	return (
		<div className='flex flex-col gap-10'>
			<h1>QR Code Generator</h1>
			<input
				className='text-4xl p-5'
				type='text'
				value={text}
				onChange={handleChange}
				placeholder='Enter text'
			/>
			{text && (
				<div className='flex justify-center'>
					<QRCodeImage text={text} />
				</div>
			)}
		</div>
	);
}

export default App;
