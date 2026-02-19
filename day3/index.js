import fs from "fs/promises";

try {
    // Write file
    await fs.writeFile("test.txt", "Hello");
    console.log("File written!");

    // Read file
    const data = await fs.readFile("test.txt", "utf-8");
    console.log("File content:", data);

    // Remove directory
    await fs.rm("myFolder", { recursive: true });
    console.log("Directory removed!");

} catch (error) {
    console.log("Error:", error.message);
}