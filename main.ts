import * as flatbuffers from 'flatbuffers';
import * as fs from 'fs';
import { PersonalTable } from './personal.js';

let data = new Uint8Array(fs.readFileSync('personal_array.bin'));
let buf = new flatbuffers.ByteBuffer(data);
let personal_array = PersonalTable.getRootAsPersonalTable(buf);
let length = personal_array.entriesLength()
let personal = personal_array.entries(100)
console.log('')