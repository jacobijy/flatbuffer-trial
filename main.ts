import * as flatbuffers from 'flatbuffers';
import * as fs from 'fs';
import { TRPFD } from './test/test2.js';
import { TRPFS } from './test/trpfs.js';

let data = new Uint8Array(fs.readFileSync('test/data.trpfd'));
let buf = new flatbuffers.ByteBuffer(data);
// let personal_array = PersonalTable.getRootAsPersonalTable(buf);
// let length = personal_array.entriesLength()
// let personal = personal_array.entries(100)
let trpfd = TRPFD.getRootAsTRPFD(buf)
let trpfdLength = trpfd.fileHashesLength()
let trpfd_e = trpfd.fileHashes(0)
let trpfd_path_len = trpfd.pathsLength()
let trpfd_path = trpfd.paths(0)
let info_len = trpfd.infoLength()
let info = trpfd.info(0)

let data1 = new Uint8Array(fs.readFileSync('test/data.trpfs'));
let buf1 = new flatbuffers.ByteBuffer(data1);
let trpfs = TRPFS.getRootAsTRPFS(buf1); 
let trpfs_length = trpfs.fileOffsetsLength()
let trpfs_offsets = trpfs.fileOffsets(0)
let hashes_length = trpfs.hashesLength()
let hash = trpfs.hashes(0)
console.log('', trpfdLength, trpfd_e)
