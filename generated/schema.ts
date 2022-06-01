// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ProposalEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("proposer", Value.fromBytes(Bytes.empty()));
    this.set("signatures", Value.fromStringArray(new Array(0)));
    this.set("calldatas", Value.fromBytesArray(new Array(0)));
    this.set("endBlock", Value.fromI32(0));
    this.set("description", Value.fromString(""));
    this.set("status", Value.fromI32(0));
    this.set("votedAgainst", Value.fromBytesArray(new Array(0)));
    this.set("votedFor", Value.fromBytesArray(new Array(0)));
    this.set("votedAbstain", Value.fromBytesArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ProposalEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ProposalEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ProposalEntity", id.toString(), this);
    }
  }

  static load(id: string): ProposalEntity | null {
    return changetype<ProposalEntity | null>(store.get("ProposalEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposer(): Bytes {
    let value = this.get("proposer");
    return value!.toBytes();
  }

  set proposer(value: Bytes) {
    this.set("proposer", Value.fromBytes(value));
  }

  get signatures(): Array<string> {
    let value = this.get("signatures");
    return value!.toStringArray();
  }

  set signatures(value: Array<string>) {
    this.set("signatures", Value.fromStringArray(value));
  }

  get calldatas(): Array<Bytes> {
    let value = this.get("calldatas");
    return value!.toBytesArray();
  }

  set calldatas(value: Array<Bytes>) {
    this.set("calldatas", Value.fromBytesArray(value));
  }

  get endBlock(): i32 {
    let value = this.get("endBlock");
    return value!.toI32();
  }

  set endBlock(value: i32) {
    this.set("endBlock", Value.fromI32(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get status(): i32 {
    let value = this.get("status");
    return value!.toI32();
  }

  set status(value: i32) {
    this.set("status", Value.fromI32(value));
  }

  get votedAgainst(): Array<Bytes> {
    let value = this.get("votedAgainst");
    return value!.toBytesArray();
  }

  set votedAgainst(value: Array<Bytes>) {
    this.set("votedAgainst", Value.fromBytesArray(value));
  }

  get votedFor(): Array<Bytes> {
    let value = this.get("votedFor");
    return value!.toBytesArray();
  }

  set votedFor(value: Array<Bytes>) {
    this.set("votedFor", Value.fromBytesArray(value));
  }

  get votedAbstain(): Array<Bytes> {
    let value = this.get("votedAbstain");
    return value!.toBytesArray();
  }

  set votedAbstain(value: Array<Bytes>) {
    this.set("votedAbstain", Value.fromBytesArray(value));
  }
}

export class ImpactMarketCouncilMemberEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("since", Value.fromI32(0));
    this.set("until", Value.fromI32(0));
    this.set("status", Value.fromI32(0));
    this.set("votes", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save ImpactMarketCouncilMemberEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ImpactMarketCouncilMemberEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ImpactMarketCouncilMemberEntity", id.toString(), this);
    }
  }

  static load(id: string): ImpactMarketCouncilMemberEntity | null {
    return changetype<ImpactMarketCouncilMemberEntity | null>(
      store.get("ImpactMarketCouncilMemberEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get since(): i32 {
    let value = this.get("since");
    return value!.toI32();
  }

  set since(value: i32) {
    this.set("since", Value.fromI32(value));
  }

  get until(): i32 {
    let value = this.get("until");
    return value!.toI32();
  }

  set until(value: i32) {
    this.set("until", Value.fromI32(value));
  }

  get status(): i32 {
    let value = this.get("status");
    return value!.toI32();
  }

  set status(value: i32) {
    this.set("status", Value.fromI32(value));
  }

  get votes(): i32 {
    let value = this.get("votes");
    return value!.toI32();
  }

  set votes(value: i32) {
    this.set("votes", Value.fromI32(value));
  }
}

export class AmbassadorsEntityEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("status", Value.fromI32(0));
    this.set("ambassadors", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AmbassadorsEntityEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AmbassadorsEntityEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AmbassadorsEntityEntity", id.toString(), this);
    }
  }

  static load(id: string): AmbassadorsEntityEntity | null {
    return changetype<AmbassadorsEntityEntity | null>(
      store.get("AmbassadorsEntityEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get status(): i32 {
    let value = this.get("status");
    return value!.toI32();
  }

  set status(value: i32) {
    this.set("status", Value.fromI32(value));
  }

  get ambassadors(): Array<string> {
    let value = this.get("ambassadors");
    return value!.toStringArray();
  }

  set ambassadors(value: Array<string>) {
    this.set("ambassadors", Value.fromStringArray(value));
  }
}

export class AmbassadorEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("since", Value.fromI32(0));
    this.set("until", Value.fromI32(0));
    this.set("status", Value.fromI32(0));
    this.set("communities", Value.fromBytesArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AmbassadorEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AmbassadorEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AmbassadorEntity", id.toString(), this);
    }
  }

  static load(id: string): AmbassadorEntity | null {
    return changetype<AmbassadorEntity | null>(
      store.get("AmbassadorEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get since(): i32 {
    let value = this.get("since");
    return value!.toI32();
  }

  set since(value: i32) {
    this.set("since", Value.fromI32(value));
  }

  get until(): i32 {
    let value = this.get("until");
    return value!.toI32();
  }

  set until(value: i32) {
    this.set("until", Value.fromI32(value));
  }

  get status(): i32 {
    let value = this.get("status");
    return value!.toI32();
  }

  set status(value: i32) {
    this.set("status", Value.fromI32(value));
  }

  get communities(): Array<Bytes> {
    let value = this.get("communities");
    return value!.toBytesArray();
  }

  set communities(value: Array<Bytes>) {
    this.set("communities", Value.fromBytesArray(value));
  }
}
