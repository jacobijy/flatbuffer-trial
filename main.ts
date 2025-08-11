import * as flatbuffers from 'flatbuffers';
import * as fs from 'fs';
import { PersonalTable } from './personal-table.js';
import { TestDataT } from './test/test-data.js';
import { TestTable, TestTableT } from './test/test-table.js';

let data = new Uint8Array(fs.readFileSync('test/personal_array.bin'));
let buf = new flatbuffers.ByteBuffer(data);
let personal_array = PersonalTable.getRootAsPersonalTable(buf);
let personal = personal_array.entries(1)
let spec = personal.species()
let tm = personal.technicalMachinesLength()
let rml = personal.reminderMovesLength();
let rm = personal.reminderMovesArray()
let ls = personal.learnset
spec.speciesIndex();
let length = personal_array.entriesLength()

let data1 = new Uint8Array(fs.readFileSync('test/test4.bin'));
let buf1 = new flatbuffers.ByteBuffer(data1);
let test4 = TestTable.getRootAsTestTable(buf1);
test4.entriesLength()
let t4 = test4.entries(1);
let a =t4.type1();
let b  =t4.test1();
let c = t4.test2();
let d = t4.test3();
let e = d.test4();
let f = d.test5();

let temp = new TestDataT(1, 1, "",  null, [1])
let table = new TestTableT([temp])
let bb = new flatbuffers.Builder()
table.pack(bb)
console.log('', length);
// let trpfd = TRPFD.getRootAsTRPFD(buf)
// let trpfdLength = trpfd.fileHashesLength()
// let trpfd_e = trpfd.fileHashes(0)
// let trpfd_path_len = trpfd.pathsLength()
// let trpfd_path = trpfd.paths(0)
// let info_len = trpfd.infoLength()
// let info = trpfd.info(0)

// let data1 = new Uint8Array(fs.readFileSync('test/data.trpfs'));
// let buf1 = new flatbuffers.ByteBuffer(data1);
// let trpfs = TRPFS.getRootAsTRPFS(buf1); 
// let trpfs_length = trpfs.fileOffsetsLength()
// let trpfs_offsets = trpfs.fileOffsets(0)
// let hashes_length = trpfs.hashesLength()
// let hash = trpfs.hashes(0)
// console.log('', trpfdLength, trpfd_e)
