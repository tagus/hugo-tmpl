import React, { useEffect, useState } from 'react';

function App() {
	const [time, setTime] = useState(instant());

	useEffect(() => {
		const updater = setInterval(() => {
			setTime(instant());
		}, 1000);
		return () => clearInterval(updater);
	});

	return (
		<div className="react-app p-l">
			<h3>👋 from react at {time}</h3>
		</div>
	);
}

function instant() {
	const now = new Date();
	return now.toLocaleTimeString();
}

export default App;
