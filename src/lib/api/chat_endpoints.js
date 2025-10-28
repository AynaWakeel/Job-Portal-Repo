import { deleteData, getData, postData, putData } from "../methods";

export const Chat_Endpoints = {

    post_chat: async(body)=> await postData("/api/chats", body),
    get_all_chats: async()=> await getData(`/api/chats`),
    get_chat_info_by_userId: async(userId)=> await getData(`/api/chats/user/${userId}`),
    get_messages_by_chatId: async(chatId)=> await getData(`/api/messages/${chatId}`),
    put_messages_read_by_id: async(chatId)=> await putData(`/api/chats/${chatId}/mark-as-read`),
    put_block_by_id: async(body)=> await putData(`/api/chats/block-unblock`, body),
    delete_by_id: async(chatId)=> await deleteData(`/api/chats/${chatId}`),
    delete_msg_by_id: async(chatId)=> await deleteData(`/api/messages/deleteAllMessages/${chatId}`),
    get_unread_chats: async()=>await getData("/api/messages/messages/allUnreadMessages"),
}