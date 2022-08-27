module.exports = {
    gameOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Копка 1', callback_data: '1' }, { text: 'Копка 2', callback_data: '2' }, { text: 'Копка 3', callback_data: '3' }],
                [{ text: 'Копка 4', callback_data: '4' }, { text: 'Копка 5', callback_data: '5' }, { text: 'Копка 6', callback_data: '6' }],
                [{ text: 'Копка 7', callback_data: '7' }, { text: 'Копка 8', callback_data: '8' }, { text: 'Копка 9', callback_data: '9' }],
                [{ text: 'Копка 0', callback_data: '0' }],
            ]
        })
    },


    again: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: 'Сыграть еще раз.', callback_data: '/again' }]
            ]
        })
    },


    startGame: async (chatId) => {
        await bot.sendMessage(chatId, `Сейчас я загадаю цифру от 0 до 9, а ты угадай`)
        const randomNum = Math.floor(Math.random() * 10)
        chats[chatId] = randomNum
        await bot.sendMessage(chatId, `Если что правильный ответ ${chats[chatId]}`, gameOptions)
    }
}


