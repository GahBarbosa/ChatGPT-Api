'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useChat } from 'ai/react'

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat()

    return (
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Chat Bot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <ScrollArea className="h-[600px] w-full space-y-4 pr-4">
                    { messages.map( message => {
                        return( 
                            <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
                                { message.role === 'user' && (
                                    <Avatar>
                                        <AvatarFallback>GB</AvatarFallback>
                                        <AvatarImage src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" />
                                    </Avatar>
                                )}
                                { message.role === 'assistant' && (
                                    <Avatar>
                                        <AvatarFallback>CB</AvatarFallback>
                                        <AvatarImage src="https://cdn-icons-png.flaticon.com/512/4712/4712139.png" />
                                    </Avatar>
                                )}
                                <p className="leading-relaxed">
                                    <span className="block font-bold text-slate-800">
                                        { message.role == 'user' ? 'Usuario:' : 'Bot:' }
                                    </span>
                                    { message.content }
                                </p>
                            </div>
                        )
                    })}
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                <Input placeholder="Como posso ajudar?" value={input} onChange={handleInputChange}/>
                    <Button type="submit">Enviar</Button>
                </form>
            </CardFooter>
        </Card>
    )
}
