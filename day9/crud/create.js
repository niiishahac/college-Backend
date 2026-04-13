import dbConnect from "../index.js"
const insertMany = async() => {
    try {
        const db = await dbConnect();
        const userLoginCollection = db.collection("login");
        const user = [{
                name: "abc2",
                email: "abc2@gmail.com",
                password: "12145678"
            },
            {
                name: "abc3",
                email: "abc3@gmail.com",
                password: "12145678"
            },
            {
                name: "abc4",
                email: "abc4@gmail.com",
                password: "12145678"
            }
        ]
        const users = await userLoginCollection.insertMany(user);
        console.log("Users has been inserted successfully", users.insertedIds);
    } catch (error) {
        console.log("Insertion Error", error.message);
    }
}
insertMany();

const insertOne = async() => {
    try {
        const db = await dbConnect();
        const userLoginCollection = db.collection("login");
        const user = await userLoginCollection
            .insertOne({ name: "abc", email: "abc@gmail.com", password: "12345", gender: "F" });
        console.log("User is created successfully: ", user.insertedId);
    } catch (error) {
        console.log("Insertion Error", error.message);
    }
}
insertOne();
const updateOneUser = async() => {
    try {
        const db = await dbConnect();
        const userLoginCollection = db.collection("login");

        const result = await userLoginCollection.updateOne({ email: "abc@gmail.com" }, // filter
            { $set: { password: "99999" } } // update
        );

        console.log("Updated One:", result.modifiedCount);
    } catch (error) {
        console.log("Update Error", error.message);
    }
};

updateOneUser();
const updateManyUsers = async() => {
    try {
        const db = await dbConnect();
        const userLoginCollection = db.collection("login");

        const result = await userLoginCollection.updateMany({ password: "12145678" }, // filter
            { $set: { password: "00000" } } // update
        );

        console.log("Updated Many:", result.modifiedCount);
    } catch (error) {
        console.log("Update Error", error.message);
    }
};

updateManyUsers();
const deleteOneUser = async() => {
    try {
        const db = await dbConnect();
        const userLoginCollection = db.collection("login");

        const result = await userLoginCollection.deleteOne({ email: "abc@gmail.com" } // filter
        );

        console.log("Deleted One:", result.deletedCount);
    } catch (error) {
        console.log("Delete Error", error.message);
    }
};

deleteOneUser();