import { readFile } from "../utils/readAndwrite.js";
import { writeFile } from "../utils/readAndwrite.js";

const userRegister = async(userDetails) => {
    const { name, email, password, gender } = userDetails;
    if (!name || !email || !password || !gender) {
        console.log("Please provide all the required details");
        return;
    }

    const users = await readFile(FILE);
    if (users.length == 0) {
        register();

    }
    const existinguser = users.filter(user => user.email == email);
    if (existinguser.length === 0) {
        console.log("User already registered");
        return;
    }

    register();
}