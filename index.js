const TelegramApi = require('node-telegram-bot-api')
const token = '5674163350:AAHMp8eQKPFmE6YaScR5r96gVhrb4-8CACU'
const bot = new TelegramApi(token, { polling: true })



const { gameOptions, again, startGame } = require('./options')

const chats = {}









bot.setMyCommands([
    { command: '/start', description: 'Начало' },
    { command: '/info', description: 'Информация' },
    { command: '/game', description: 'Игра угадай цифру' }
])






const start = () => {

    bot.on('message', async msg => {

        const chatId = msg.chat.id
        const text = msg.text

        console.log(msg)


        if (text === '/start') {
            await bot.sendMessage(chatId, `Добро пожаловать`)
            return bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp')
        }



        if (text === '/info') {
            const fname = msg.from.first_name
            const lname = msg.from.last_name
            return bot.sendMessage(chatId, `
    Твое имя:  ${fname}
    Фамилия: ${lname}
            `)
        }



        if (text === '/game') {
            return startGame(chatId)
        }

        if (text.toUpperCase() === 'КАЙФ') {
            await bot.sendMessage(chatId, `🏆`)

            return bot.sendMessage(chatId, `Красавчик мынча кучтуусун`)
        }

        return bot.sendMessage(chatId, `Ты отправил: ${text}`)

    })








    bot.on('callback_query', async msg => {
        const data = msg.data
        const chatId = msg.message.chat.id

        if (data == '/again') {
            return startGame(chatId)
        } else if (data == chats[chatId]) {
            return await bot.sendMessage(chatId, `Ты угадал! ${data}
Хотите сыграть еще раз?`, again)
        } else {
            await bot.sendMessage(chatId, `${data} - Не правильно выбери другой...`)
        }

    })



}

start()






