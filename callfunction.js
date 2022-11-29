const call = require ('./app') //import

//membuat fungsi main
const main = async () => {
    const name = await call.question('What is your name? ')
    const email = await call.question('What is your email? ')
    const number = await call.question('What is your phone number? ')

    call.savedata(name,email,number)
}

main();