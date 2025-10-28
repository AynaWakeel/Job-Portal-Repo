import React from 'react'
import { Chat_Endpoints } from '../../lib/api/chat_endpoints'
import { showError, showSuccess } from '../toasters'


export const useChat = () => {

    const create_chat_room = async (body) => {

        const response = await Chat_Endpoints.post_chat(body)
         const { success, message } = response
        if (success) {
            showSuccess(message);
            return response

        } else {
            showError(message);
            return null
        }

    }

     const block_user_by_id = async ({ blockedUserId, type }) => {

        const response = await Chat_Endpoints.put_block_by_id({ blockedUserId, type })
        const { success, message } = response
        if (success) {
            showSuccess(message);
            return response

        } else {
            showError(message);
            return null
        }

    }

    const delete_chat = async (chatId) => {

        const response = await Chat_Endpoints.delete_by_id(chatId)
          const { success, message } = response
        if (success) {
            showSuccess(message);
            return response

        } else {
            showError(message);
            return null
        }

    }

     const clear_chat = async (chatId) => {

        const response = await Chat_Endpoints.delete_msg_by_id(chatId)
          const { success, message } = response
        if (success) {
            showSuccess(message);
            return response

        } else {
            showError(message);
            return null
        }

    }

    const read_message = async (chatId) => {

        const response = await Chat_Endpoints.put_messages_read_by_id(chatId)
         const { success, message } = response
        if (success) {
            showSuccess(message);
            return response

        } else {
            showError(message);
            return null
        }

    }

    return { create_chat_room , block_user_by_id , delete_chat , read_message , clear_chat}
}
