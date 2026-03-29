import React from 'react'
import { Icon } from './Icon'
import { Button } from './Button'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const AIResponseBlock = ({ message }: { message: string }) => {
    return (
        <div className="md:col-span-12">
            <div className="border-l-4 border-tertiary bg-surface-variant/40 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-start gap-4">
                    <Icon name="auto_awesome" className="text-tertiary mt-0.5" size="lg" fill />
                    <div className="flex-1">
                        <p className="text-xs uppercase tracking-widest text-tertiary mb-2 font-medium">AI Response Block</p>
                        <Markdown remarkPlugins={[remarkGfm]}>
                            {message}
                        </Markdown>
                        <div className="mt-4 flex gap-2">
                            <Button variant="secondary" size="sm" leadingIcon="content_copy">Copy</Button>
                            <Button variant="tertiary" size="sm" leadingIcon="thumb_up">Helpful</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AIResponseBlock