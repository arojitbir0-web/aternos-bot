const mineflayer = require('mineflayer')

function startBot() {
  const bot = mineflayer.createBot({
    host: 'ItzMinyMinecrafta.aternos.me',
    port: 16840,
    username: 'AternosBot9',
    version: '1.21.11'
  })

  bot.on('spawn', () => {
    console.log('Bot joined server')

    setInterval(() => {
      bot.look(Math.random() * Math.PI * 2, 0)
      bot.setControlState('forward', true)

      setTimeout(() => {
        bot.setControlState('forward', false)
        bot.swingArm('right')
      }, 1000)
    }, 25000)
  })

  bot.on('end', () => {
    setTimeout(startBot, 5000)
  })
}

startBot()
