const fs = require('fs');
const timestampsFilePath = './command_timestamps.json';

function splitMessage(text, maxLength = 2000) {
    if (text.length <= maxLength) {
        return [text];
    }

    const messageParts = [];
    let currentPart = '';
    
    const lines = text.split('\n');

    for (const line of lines) {
        if (currentPart.length + line.length + 1 > maxLength) {
            messageParts.push(currentPart);
            currentPart = '';
        }

        currentPart += (currentPart.length > 0 ? '\n' : '') + line;
    }

    if (currentPart.length > 0) {
        messageParts.push(currentPart);
    }

    return messageParts
}

function readTimestamps() {
    try {
        if (fs.existsSync(timestampsFilePath)) {
            const data = fs.readFileSync(timestampsFilePath, 'utf8');
            if (data) {
            return JSON.parse(data);
            }
        }
    } catch (error) {
        console.error("Error reading timestamps file:", error);
    }
    return {};
}

function writeTimestamps(data) {
    try {
        const jsonString = JSON.stringify(data, null, 2);
        fs.writeFileSync(timestampsFilePath, jsonString);
    } catch (error) {
        console.error("Error writing to the timestamp file:", error);
    }
}

function detectKeyType(apiKey) {
    if (!apiKey) return "missing";

    if (apiKey.startsWith("AIza")) {
        return "ai-studio";
    }

    if (apiKey.includes("BEGIN PRIVATE KEY")) {
        return "service-account";
    }
}

function getFileType(file) {
    if (!file) return "unknown";

    const mime = file.contentType?.toLowerCase() || "";
    const name = file.name?.toLowerCase() || "";

    if (mime.startsWith("image/") || /\.(jpg|jpeg|png|gif|webp)$/i.test(name)) return "image";
    if (mime.startsWith("video/") || /\.(mp4|mov|avi|mkv|webm)$/i.test(name)) return "video";
    if (mime.startsWith("audio/") || /\.(mp3|wav|flac|m4a|ogg)$/i.test(name)) return "audio";
    if (mime.startsWith("application/pdf") || /\.(pdf|txt|docx?|csv|json|xml)$/i.test(name)) return "document";

    return "unknown";
}

module.exports = {
    splitMessage,
    readTimestamps,
    writeTimestamps,
    detectKeyType,
    getFileType
};