const { Console } = require('console');
const readline = require('readline'); //require readline
const fs = require('fs'); //require file system
const async = require('async');

//membuat folder data apabila tidak ada
const dirPath = './data';
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

//membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath,'[]','utf-8')
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const validator = require('validator'); //require validator


const question = (questions, feedback) => {
    return new Promise((resolve, reject) => {
        rl.question(questions, (answer) => {
            resolve(answer)
        })
    })
}

const main = async () => {
    const name = await question('What is your name? ','Your name : ')

    const email = await question('What is your email? ','Your email : ')

    //validator email
    if (validator.isEmail(email) == false) {
        console.log("Your email is incorrect")
        rl.close();
        return(false)
    }
    //validator email
    
    const number = await question('What is your phone number? ','Your phone number : ')

    //validator no.hp
    if (validator.isMobilePhone(number,'id-ID') == false) {
        console.log("Your phone number is incorrect")
        rl.close();
        return(false)
    }
    //validator no.hp


    //OUTPUT
    console.log(`\nName : ${name}`)
    console.log(`Email : ${email}`)
    console.log(`Phone number : ${number}`)
    console.log ('\nTerima kasih sudah memasukkan data!');
    
    //memasukan data ke contacts.json
    const contact = {name,email,number};
    const file = fs.readFileSync('data/contacts.json','utf-8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
    //memasukan data ke contacts.json

    rl.close();
}

main()



/*
//pertanyaan
rl.question('What is your name? ', (name) => {
    rl.question('What is your email? ', (email) =>{
        rl.question('What is your phone number? ', (number) =>{
        //pertanyaan

            //memasukan data ke contacts.json
            const contact = {name,email,number};
            const file = fs.readFileSync('data/contacts.json','utf-8');
            const contacts = JSON.parse(file);
            contacts.push(contact);
            fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
            console.log ('\nTerima kasih sudah memasukkan data!');
            //memasukan data ke contacts.json

            console.log(`\nName : ${name}`)

            //validator email
            if (validator.isEmail(email) == false) {
                console.log("Your email is incorrect")
            }
            else {
                console.log(`Email : ${email}`);
            }

            //validator no. hp
            if (validator.isMobilePhone(number,'id-ID') == false) {
                console.log("Your phone number is incorrect")
            }
            else {
                console.log(`Phone number : ${number}`)
            }

            rl.close();
        })
    })
})*/