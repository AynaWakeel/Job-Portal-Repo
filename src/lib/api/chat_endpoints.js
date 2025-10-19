import { deleteData, getData, postData, putData } from "../methods";

export const Chat_Endpoints = {

    post_messages: async(body)=> await postData("/api/messages", body),
    get_all_chats: async(userId)=> await getData(`/api/chats/${userId}`),
    get_messages_by_chatId: async(chatId)=> await getData(`/api/messages/${chatId}`),
    put_messages_read_by_id: async(msgId)=> await putData(`/api/messages/read/${msgId}`),
    put_block_by_id: async(userId)=> await putData(`/api/chats/${userId}`),
    delete_by_id: async(userId)=> await deleteData(`/api/chats/${userId}`),
}