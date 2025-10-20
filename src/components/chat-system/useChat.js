import React from 'react'
import { Chat_Endpoints } from '../../lib/api/chat_endpoints'


export const useChat = () => {

    const create_chat_room = async (body) => {

        const response = await Chat_Endpoints.post_chat(body)
        const { message } = response
        if (response) {
            console.log(message);
            return response
        } else {
            console.log(message)
            return null
        }

    }

    const read_message = async (msgId) => {

        const response = await Chat_Endpoints.put_messages_read_by_id(msgId)
        const { message } = response
        if (response) {
            console.log(message);
            return response
        } else {
            console.log(message)
            return null
        }

    }

    return { create_chat_room , read_message }
}
