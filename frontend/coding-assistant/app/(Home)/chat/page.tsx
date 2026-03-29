'use client'
import React, { useState } from 'react'
import { Input } from '@/components/Input'
import ButtonIcon from '@/components/ButtonIcon'
import { sendMessage } from '@/services/chatService'
import ChatSection from '@/components/ChatSection'

interface chatMessage {
    role: 'user' | 'assistant';
    message: string;
}
const ChatPage = () => {
    const [message, setMessage] = useState<chatMessage[]>([]);
    const [isThinking, setIsThinking] = useState<boolean>(false);
    const [chatInput, setChatInput] = useState<string>('');
    const handleSendMessage = async (message: string) => {
        try {
            console.log("sending message");
            setIsThinking(true);
            setMessage((prev) => [...prev, { role: 'user', message }]);

            const response = await sendMessage(message);
            console.log("resp from api", response);
            setIsThinking(false);
            setMessage((prev) => [...prev, { role: 'assistant', message: response.response }]);
        } catch (error) {
            setIsThinking(false);
            console.error('Error sending message:', error);
        }
    }

    return (
        // Full-height flex column — no overflow on this container
        <div className="flex flex-col h-screen bg-color-surface">

            {/* ── Top bar (fixed height) ── */}
            <div className='flex items-center justify-end px-8 gap-2 border-b border-outline-variant/30 h-[72px] shrink-0'>
                <div className='w-auto'>
                    <Input className='rounded-full' placeholder='Search for prompts' icon='search' />
                </div>
                <div className='flex gap-2'>
                    <ButtonIcon icon='notifications' label='Notifications' size='sm' variant='tertiary' className='p-2' />
                </div>
            </div>

            {/* ── Messages area (scrollable, grows to fill remaining space) ── */}
            <div className='flex-1 overflow-y-auto flex flex-col overflow-x-hidden items-center justify-center px-16'>
                <ChatSection messages={message} isThinking={isThinking} />
            </div>

            {/* ── Input bar (shrinks to fit, always at bottom) ── */}
            <div className='shrink-0 px-16 py-4 border-t border-outline-variant/30'>
                <div className='relative w-full'>
                    <Input
                        placeholder='Ask me anything'
                        className='w-full pr-12'
                        onChange={(e) => setChatInput(e.target.value)}
                        value={chatInput}
                    />
                    <div className='absolute right-2 top-1/2 -translate-y-1/2'>
                        <ButtonIcon icon='send' label='Send' size='sm' variant='primary' className='p-2' onClick={() => handleSendMessage(chatInput)} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChatPage