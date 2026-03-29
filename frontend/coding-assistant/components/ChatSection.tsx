import React from 'react'
import AIResponseBlock from './AIResponseBlock'

interface chatMessage {
    role: 'user' | 'assistant';
    message: string;
}

interface ChatSectionProps {
    messages: chatMessage[];
    isThinking: boolean;
}
const ChatSection = ({ messages, isThinking }: ChatSectionProps) => {
    return (
        <div className='flex flex-col gap-4 overflow-y-auto overflow-x-hidden'>
            {messages.map((message, index) => (
                <div key={index} className='flex flex-col gap-4'    >
                    {message.role === 'user' ? (
                        <div className='flex justify-end'>
                            <div className='max-w-[80%] bg-surface-variant text-on-surface-variant px-[16px] py-[12px] rounded-2xl rounded-tr-sm'>
                                <p>{message.message}</p>
                            </div>
                        </div>
                    ) : (
                        <AIResponseBlock message={message.message} />
                    )}
                </div>
            ))}
            {isThinking && (
                <div>
                    <p>Assistant is thinking...</p>
                </div>
            )}
        </div>
    )
}

export default ChatSection