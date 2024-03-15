import {createLogin} from "./data/login"
async function test() {
    console.log(await createLogin('username', 'password'))
}

test()