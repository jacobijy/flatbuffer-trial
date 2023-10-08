// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { EvoData } from './evo-data.js';
import { GenderData } from './gender-data.js';
import { Hatch } from './hatch.js';
import { Move } from './move.js';
import { SpeciesInfo } from './species-info.js';
import { StatInfo } from './stat-info.js';
import { ZukanData } from './zukan-data.js';


export class PersonalData {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):PersonalData {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsPersonalData(bb:flatbuffers.ByteBuffer, obj?:PersonalData):PersonalData {
  return (obj || new PersonalData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsPersonalData(bb:flatbuffers.ByteBuffer, obj?:PersonalData):PersonalData {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new PersonalData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

species(obj?:SpeciesInfo):SpeciesInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new SpeciesInfo()).__init(this.bb_pos + offset, this.bb!) : null;
}

isPresent():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

dex(obj?:ZukanData):ZukanData|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? (obj || new ZukanData()).__init(this.bb_pos + offset, this.bb!) : null;
}

type1():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

type2():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

ability1():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

ability2():number {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

ability3():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

growth():number {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

rate():number {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

gender(obj?:GenderData):GenderData|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? (obj || new GenderData()).__init(this.bb_pos + offset, this.bb!) : null;
}

group1():number {
  const offset = this.bb!.__offset(this.bb_pos, 26);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

group2():number {
  const offset = this.bb!.__offset(this.bb_pos, 28);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

hatch(obj?:Hatch):Hatch|null {
  const offset = this.bb!.__offset(this.bb_pos, 30);
  return offset ? (obj || new Hatch()).__init(this.bb_pos + offset, this.bb!) : null;
}

hatchSteps():number {
  const offset = this.bb!.__offset(this.bb_pos, 32);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

baseFriendship():number {
  const offset = this.bb!.__offset(this.bb_pos, 34);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

baseExp():number {
  const offset = this.bb!.__offset(this.bb_pos, 36);
  return offset ? this.bb!.readUint16(this.bb_pos + offset) : 0;
}

evoStage():number {
  const offset = this.bb!.__offset(this.bb_pos, 38);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

unkFlag():number {
  const offset = this.bb!.__offset(this.bb_pos, 40);
  return offset ? this.bb!.readUint8(this.bb_pos + offset) : 0;
}

yieldInfo(obj?:StatInfo):StatInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 42);
  return offset ? (obj || new StatInfo()).__init(this.bb_pos + offset, this.bb!) : null;
}

stats(obj?:StatInfo):StatInfo|null {
  const offset = this.bb!.__offset(this.bb_pos, 44);
  return offset ? (obj || new StatInfo()).__init(this.bb_pos + offset, this.bb!) : null;
}

evoTable(obj?:EvoData):EvoData|null {
  const offset = this.bb!.__offset(this.bb_pos, 46);
  return offset ? (obj || new EvoData()).__init(this.bb_pos + offset, this.bb!) : null;
}

technicalMachines(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? this.bb!.readUint16(this.bb!.__vector(this.bb_pos + offset) + index * 2) : 0;
}

technicalMachinesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

technicalMachinesArray():Uint16Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 48);
  return offset ? new Uint16Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

eggMoves(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 50);
  return offset ? this.bb!.readUint16(this.bb!.__vector(this.bb_pos + offset) + index * 2) : 0;
}

eggMovesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 50);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

eggMovesArray():Uint16Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 50);
  return offset ? new Uint16Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

reminderMoves(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 52);
  return offset ? this.bb!.readUint16(this.bb!.__vector(this.bb_pos + offset) + index * 2) : 0;
}

reminderMovesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 52);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

reminderMovesArray():Uint16Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 52);
  return offset ? new Uint16Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

learnset(index: number, obj?:Move):Move|null {
  const offset = this.bb!.__offset(this.bb_pos, 54);
  return offset ? (obj || new Move()).__init(this.bb!.__vector(this.bb_pos + offset) + index * 4, this.bb!) : null;
}

learnsetLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 54);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startPersonalData(builder:flatbuffers.Builder) {
  builder.startObject(26);
}

static addSpecies(builder:flatbuffers.Builder, speciesOffset:flatbuffers.Offset) {
  builder.addFieldStruct(0, speciesOffset, 0);
}

static addIsPresent(builder:flatbuffers.Builder, isPresent:boolean) {
  builder.addFieldInt8(1, +isPresent, +false);
}

static addDex(builder:flatbuffers.Builder, dexOffset:flatbuffers.Offset) {
  builder.addFieldStruct(2, dexOffset, 0);
}

static addType1(builder:flatbuffers.Builder, type1:number) {
  builder.addFieldInt8(3, type1, 0);
}

static addType2(builder:flatbuffers.Builder, type2:number) {
  builder.addFieldInt8(4, type2, 0);
}

static addAbility1(builder:flatbuffers.Builder, ability1:number) {
  builder.addFieldInt16(5, ability1, 0);
}

static addAbility2(builder:flatbuffers.Builder, ability2:number) {
  builder.addFieldInt16(6, ability2, 0);
}

static addAbility3(builder:flatbuffers.Builder, ability3:number) {
  builder.addFieldInt16(7, ability3, 0);
}

static addGrowth(builder:flatbuffers.Builder, growth:number) {
  builder.addFieldInt8(8, growth, 0);
}

static addRate(builder:flatbuffers.Builder, rate:number) {
  builder.addFieldInt8(9, rate, 0);
}

static addGender(builder:flatbuffers.Builder, genderOffset:flatbuffers.Offset) {
  builder.addFieldStruct(10, genderOffset, 0);
}

static addGroup1(builder:flatbuffers.Builder, group1:number) {
  builder.addFieldInt8(11, group1, 0);
}

static addGroup2(builder:flatbuffers.Builder, group2:number) {
  builder.addFieldInt8(12, group2, 0);
}

static addHatch(builder:flatbuffers.Builder, hatchOffset:flatbuffers.Offset) {
  builder.addFieldStruct(13, hatchOffset, 0);
}

static addHatchSteps(builder:flatbuffers.Builder, hatchSteps:number) {
  builder.addFieldInt8(14, hatchSteps, 0);
}

static addBaseFriendship(builder:flatbuffers.Builder, baseFriendship:number) {
  builder.addFieldInt8(15, baseFriendship, 0);
}

static addBaseExp(builder:flatbuffers.Builder, baseExp:number) {
  builder.addFieldInt16(16, baseExp, 0);
}

static addEvoStage(builder:flatbuffers.Builder, evoStage:number) {
  builder.addFieldInt8(17, evoStage, 0);
}

static addUnkFlag(builder:flatbuffers.Builder, unkFlag:number) {
  builder.addFieldInt8(18, unkFlag, 0);
}

static addYieldInfo(builder:flatbuffers.Builder, yieldInfoOffset:flatbuffers.Offset) {
  builder.addFieldStruct(19, yieldInfoOffset, 0);
}

static addStats(builder:flatbuffers.Builder, statsOffset:flatbuffers.Offset) {
  builder.addFieldStruct(20, statsOffset, 0);
}

static addEvoTable(builder:flatbuffers.Builder, evoTableOffset:flatbuffers.Offset) {
  builder.addFieldStruct(21, evoTableOffset, 0);
}

static addTechnicalMachines(builder:flatbuffers.Builder, technicalMachinesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(22, technicalMachinesOffset, 0);
}

static createTechnicalMachinesVector(builder:flatbuffers.Builder, data:number[]|Uint16Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createTechnicalMachinesVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createTechnicalMachinesVector(builder:flatbuffers.Builder, data:number[]|Uint16Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(2, data.length, 2);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt16(data[i]!);
  }
  return builder.endVector();
}

static startTechnicalMachinesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(2, numElems, 2);
}

static addEggMoves(builder:flatbuffers.Builder, eggMovesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(23, eggMovesOffset, 0);
}

static createEggMovesVector(builder:flatbuffers.Builder, data:number[]|Uint16Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createEggMovesVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createEggMovesVector(builder:flatbuffers.Builder, data:number[]|Uint16Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(2, data.length, 2);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt16(data[i]!);
  }
  return builder.endVector();
}

static startEggMovesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(2, numElems, 2);
}

static addReminderMoves(builder:flatbuffers.Builder, reminderMovesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(24, reminderMovesOffset, 0);
}

static createReminderMovesVector(builder:flatbuffers.Builder, data:number[]|Uint16Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createReminderMovesVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createReminderMovesVector(builder:flatbuffers.Builder, data:number[]|Uint16Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(2, data.length, 2);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt16(data[i]!);
  }
  return builder.endVector();
}

static startReminderMovesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(2, numElems, 2);
}

static addLearnset(builder:flatbuffers.Builder, learnsetOffset:flatbuffers.Offset) {
  builder.addFieldOffset(25, learnsetOffset, 0);
}

static startLearnsetVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 2);
}

static endPersonalData(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

}
