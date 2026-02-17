// src/routes/api/update/+server.js
import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export async function POST({ request }) {
    const { id, name } = await request.json();
    
    // JSON-Datei lesen
    const filePath = path.resolve('src/routes/test.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    // Wert ändern
    for (let item of data.personen) {
        if (item.id === id) {
            item.name = name;
        }
    }
    
    // JSON-Datei überschreiben
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    
    return json({ success: true });
}