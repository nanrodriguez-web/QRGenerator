import QRCodeCanvas from "qrcode.react";

export default function QRCodeImage({ text }) {
	const handleDownload = () => {
		// Get the canvas
		const canvas = document.querySelector("canvas");

		// Convert the canvas to an image
		const image = canvas.toDataURL("image/png");

		// Create a temporary link element
		const link = document.createElement("a");

		// Set the link href to the image data
		link.href = image;

		// Set the link download to "qrcode.png"
		link.download = `${text}.png`;

		// Trigger the download
		link.click();

		// Clean up
		link.remove();
	};

	return (
		<div className='flex flex-col gap-10'>
			<QRCodeCanvas
				value={text}
				level='H'
				size={256}
				height={400}
				width={400}
			/>

			<button
				onClick={handleDownload}
				className='p-5 border-2 bg-white text-black text-xl font-bold'>
				Download
			</button>
		</div>
	);
}
