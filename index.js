const TelegramApi = require('node-telegram-bot-api')
const token = '5663843077:AAEOSX8Y9kGGxWJxKevo3ctUMVFP7sgkSWY'

const bot = new TelegramApi(token, { polling: true })




const { gameOptions, again } = require('./options')
const sequelize = require('./db.js')
const UserModel = require('./query.js')




const chats = {}


const startGame = async (chatId) => {
    await bot.sendMessage(chatId, `Сейчас я загадаю цифру от 0 до 9, а ты угадай`)
    const randomNum = Math.floor(Math.random() * 10)
    chats[chatId] = randomNum
    await bot.sendMessage(chatId, `Если что правильный ответ ${chats[chatId]}`, gameOptions)
}






bot.setMyCommands([
    { command: '/start', description: 'Начало' },
    { command: '/info', description: 'Информация' },
    { command: '/game', description: 'Игра угадай цифру' },
    { command: '/reset', description: 'Обнулить счетчик' }
])






const start = async () => {


    try {
        await sequelize.authenticate()
        await sequelize.sync()

    } catch (error) {
        console.log('Подключение сломалось', error);
    }











    bot.on('message', async msg => {
        const chatId = msg.chat.id
        const text = msg.text ? msg.text.replace('@YomaM01_bot', '') : false
        const fromId = msg.from.id
        const img = msg.photo ? msg.photo[0].file_id : false
        console.log('AA');



        try {
            if (text) {
                const user = await UserModel.findOne({ chatId })
                if (text === '/start') {
                    if (!user) {

                        await UserModel.create({ chatId })
                    }

                    await bot.sendMessage(chatId, `Добро пожаловать`)
                    return bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp')
                }



                if (text === '/info') {
                    const fname = msg.from.first_name
                    const lname = msg.from.last_name

                    const user = await UserModel.findOne({ chatId })

                    return bot.sendMessage(chatId, `
            Твое имя:  ${fname} ${lname ? lname : ''}
В игре у тебя правильных ответов: ${user.right}
Не правильных: ${user.wrong}`)
                }



                if (text === '/game') {
                    return startGame(chatId)
                }

                if (text === '/reset') {

                    user.right = 0
                    user.wrong = 0
                    await user.save()
                    return bot.sendMessage(chatId, `Счетчик обнулился`)

                }



                if (text.toUpperCase() === 'КАЙФ') {
                    await bot.sendMessage(chatId, `🏆`)
                    return bot.sendMessage(chatId, `Красавчик мынча кучтуусун`)
                }

                if (msg.chat.type === 'group') {
                    return bot.sendMessage(fromId, `Ты отправил: ${text} `)
                }

                return bot.sendMessage(chatId, `Ты отправил: ${text} `)
            }

            if (img) {

                return bot.sendPhoto(chatId, img)
            }


        } catch (e) {
            return bot.sendMessage(chatId, `Что - то пошло не так`)
        }



        console.log(msg)

        console.log(bot.setMyCommands);





    })








    bot.on('callback_query', async msg => {
        const data = msg.data
        const chatId = msg.message.chat.id

        if (data == '/again') {
            return startGame(chatId)
        }

        const user = await UserModel.findOne({ chatId })

        if (data == chats[chatId]) {

            user.right += 1
            await bot.sendMessage(chatId, `Ты угадал! ${data}
Хотите сыграть еще раз ? `, again)
        } else {

            user.wrong += 1
            await bot.sendMessage(chatId, `${data} - Не правильно выбери другой...`)
        }
        await user.save()
    })



}

start()






