import { useState, useRef, useEffect } from 'react'
import { Send, RefreshCw, User } from 'lucide-react'

type Message = {
    id: string
    content: string
    role: 'user' | 'assistant'
    timestamp: Date
}

const defaultMessages: Message[] = [
    {
        id: '1',
        content: 'Hello! I\'m your KidneyScan AI assistant. How can I help you with kidney cancer detection and information today?',
        role: 'assistant',
        timestamp: new Date()
    }
]

// System prompt for the AI to provide kidney cancer focused responses
const SYSTEM_PROMPT = `You are KidneyScan AI Assistant, a specialized medical AI focused on kidney cancer detection, prevention, and information. Your role is to:

1. Provide accurate, helpful information about kidney cancer symptoms, risk factors, treatments, and prevention
2. Explain kidney cancer detection methods and screening procedures
3. Offer emotional support and guidance for patients and families
4. Direct users to seek professional medical advice when appropriate
5. Stay focused on kidney health and related topics

Key guidelines:
- Always emphasize that you provide information, not medical diagnosis
- Encourage users to consult healthcare professionals for personal medical advice
- Be empathetic and supportive
- Provide evidence-based information
- If asked about unrelated topics, gently redirect to kidney health

Keep responses informative but accessible, avoiding overly technical language unless requested.`

const ChatBot = () => {
    const [messages, setMessages] = useState<Message[]>(defaultMessages)
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    
    // Scroll to bottom whenever messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])
    
    const callOpenAI = async (userMessage: string, conversationHistory: Message[]) => {
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY
        
        if (!apiKey) {
            throw new Error('OpenAI API key not found. Please check your .env file.')
        }
        
        // Prepare conversation history for OpenAI
        const messages = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...conversationHistory.slice(-10).map(msg => ({
                role: msg.role,
                content: msg.content
            })),
            { role: 'user', content: userMessage }
        ]
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: messages,
                max_tokens: 500,
                temperature: 0.7,
                presence_penalty: 0.1,
                frequency_penalty: 0.1
            })
        })
        
        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.error?.message || 'Failed to get response from OpenAI')
        }
        
        const data = await response.json()
        return data.choices[0].message.content
    }
    
    const handleSendMessage = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        
        if (!inputValue.trim()) return
        
        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputValue,
            role: 'user',
            timestamp: new Date()
        }
        
        setMessages(prev => [...prev, userMessage])
        const currentInput = inputValue
        setInputValue('')
        setIsLoading(true)
        
        try {
            // Call OpenAI API
            const aiResponse = await callOpenAI(currentInput, messages)
            
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                content: aiResponse,
                role: 'assistant',
                timestamp: new Date()
            }
            
            setMessages(prev => [...prev, botResponse])
        } catch (error) {
            console.error('Error calling OpenAI:', error)
            
            // Fallback response if API fails
            const errorResponse: Message = {
                id: (Date.now() + 1).toString(),
                content: `I apologize, but I'm having trouble connecting to my knowledge base right now. However, I can still provide some general guidance about kidney cancer:

For symptoms: Look out for blood in urine, persistent back/side pain, unexplained weight loss, fatigue, and fever.

For prevention: Maintain a healthy weight, avoid smoking, stay hydrated, and get regular check-ups.

Please consult with a healthcare professional for personalized medical advice. Is there a specific aspect of kidney health you'd like to know more about?`,
                role: 'assistant',
                timestamp: new Date()
            }
            
            setMessages(prev => [...prev, errorResponse])
        } finally {
            setIsLoading(false)
        }
    }
    
    const handleReset = () => {
        setMessages(defaultMessages)
    }
    
    return (
        <section className="mx-auto mt-24 max-w-7xl px-5">
            <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center">
                <div>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25">
                        <span className="brightness-[1.7]">Virtual Assistant</span>
                    </span>
                    <h1 className="mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl">
                        <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                            KidneyScan AI Assistant
                        </span>
                    </h1>
                </div>
                <p className="text-lg text-muted-foreground">
                    Ask questions about kidney cancer, detection methods, or get help interpreting your results.
                </p>
                
                <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col">
                    <div className="flex h-[500px] flex-col rounded-t-lg border border-b-0 border-primary/20 bg-background/50">
                        <div className="flex-1 overflow-y-auto p-4">
                            {messages.map(message => (
                                <div 
                                    key={message.id} 
                                    className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div 
                                        className={`max-w-[80%] rounded-lg p-3 ${
                                            message.role === 'user' 
                                                ? 'bg-primary text-white' 
                                                : 'bg-muted text-foreground'
                                        }`}
                                    >
                                        {message.role === 'assistant' && (
                                            <div className="mb-1 flex items-center">
                                                <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                                                    <span className="text-xs font-semibold text-primary">AI</span>
                                                </div>
                                                <span className="text-xs opacity-70">KidneyScan Assistant</span>
                                            </div>
                                        )}
                                        
                                        {message.role === 'user' && (
                                            <div className="mb-1 flex items-center justify-end">
                                                <span className="text-xs opacity-70">You</span>
                                                <div className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                                                    <User className="h-3 w-3" />
                                                </div>
                                            </div>
                                        )}
                                        
                                        <div className={`text-sm ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                                            {message.content.split('\n').map((line, index) => (
                                                <p key={index} className={index > 0 ? 'mt-2' : ''}>
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            {isLoading && (
                                <div className="mb-4 flex justify-start">
                                    <div className="max-w-[80%] rounded-lg bg-muted p-4 text-foreground">
                                        <div className="flex items-center">
                                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                            <p className="text-sm">KidneyScan Assistant is thinking...</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                    
                    <div 
                        onSubmit={handleSendMessage}
                        className="flex rounded-b-lg border border-primary/20 bg-background/50 p-2"
                    >
                        <input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Type your question about kidney cancer..."
                            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 flex-1 px-3 py-2 text-sm outline-none"
                            disabled={isLoading}
                        />
                        <button 
                            onClick={handleSendMessage} 
                            disabled={isLoading || !inputValue.trim()}
                            className="ml-2 h-10 w-10 rounded-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-center">
                        <button 
                            onClick={handleReset}
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Reset conversation
                        </button>
                    </div>
                </div>
                
                <div className="mt-6 text-xs text-muted-foreground max-w-lg mx-auto">
                    <p>
                        ⚠️ This AI assistant provides general information only and is not a substitute for professional medical advice. 
                        Always consult with healthcare professionals for medical concerns.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ChatBot