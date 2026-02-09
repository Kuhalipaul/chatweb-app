'use client';

import { useState } from 'react';

type Message = {
	text: string;
	sender: 'left' | 'right';
};
export default function Home() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [leftMsg, setLeftMsg] = useState('');
	const [rightMsg, setRightMsg] = useState('');

	const sendMessage = (sender: 'left' | 'right') => {
		const text = sender === 'left' ? leftMsg : rightMsg;
		if (!text?.trim()) return;
		setMessages((prev) => [...prev, { text, sender }]);
		sender === 'left' ? setLeftMsg('') : setRightMsg('');
	};

	return (
		<div className="flex h-screen bg-gray-100">
			{/* LEFT USER */}
			<div className="w-1/2 border-r flex flex-col">
				<div className="flex items-center justify-center h-16">
					<h1 className="text-2xl font-bold">User 1</h1>
				</div>
				<div className="flex-1 p-4 space-y-2 overflow-y-auto">
					{messages.map((msg, id) => (
						<div
							key={id}
							className={`max-w-xs p-3 rounded-lg ${
								msg.sender === 'left' ? 'bg-green-500 text-white self-end ml-auto' : 'bg-white'
							}`}
						>
							{msg.text}
						</div>
					))}
				</div>
				<div className="bg-white p-4 flex gap-2">
					<input
						placeholder="Write message"
						className="flex-1 border rounded-full px-4 py-2"
						type="text"
						value={leftMsg}
						onChange={(event) => setLeftMsg(event.target.value)}
					/>
					<button onClick={() => sendMessage('left')}>Send</button>
				</div>
			</div>
			{/* RIGHT USER */}
			<div className="w-1/2 border-l flex flex-col">
				<div className="flex items-center justify-center h-16">
					<h1 className="text-2xl font-bold">User 2</h1>
				</div>
				<div className="flex-1 p-4 space-y-2 overflow-y-auto">
					{messages.map((msg, id) => (
						<div
							key={id}
							className={`max-w-xs p-3 rounded-lg ${
								msg.sender === 'right' ? 'bg-green-500 text-white self-end ml-auto' : 'bg-white'
							}`}
						>
							{msg.text}
						</div>
					))}
				</div>
				<div className="bg-white p-4 flex gap-2">
					<input
						placeholder="Write message"
						className="flex-1 border rounded-full px-4 py-2"
						type="text"
						value={rightMsg}
						onChange={(event) => setRightMsg(event.target.value)}
					/>
					<button onClick={() => sendMessage('right')}>Send</button>
				</div>
			</div>
		</div>
	);
}
