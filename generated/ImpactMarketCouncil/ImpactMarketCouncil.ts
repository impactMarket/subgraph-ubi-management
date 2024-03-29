// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class MemberAdded extends ethereum.Event {
  get params(): MemberAdded__Params {
    return new MemberAdded__Params(this);
  }
}

export class MemberAdded__Params {
  _event: MemberAdded;

  constructor(event: MemberAdded) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MemberRemoved extends ethereum.Event {
  get params(): MemberRemoved__Params {
    return new MemberRemoved__Params(this);
  }
}

export class MemberRemoved__Params {
  _event: MemberRemoved;

  constructor(event: MemberRemoved) {
    this._event = event;
  }

  get member(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class NewImplementation extends ethereum.Event {
  get params(): NewImplementation__Params {
    return new NewImplementation__Params(this);
  }
}

export class NewImplementation__Params {
  _event: NewImplementation;

  constructor(event: NewImplementation) {
    this._event = event;
  }

  get oldImplementation(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newImplementation(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProposalCanceled extends ethereum.Event {
  get params(): ProposalCanceled__Params {
    return new ProposalCanceled__Params(this);
  }
}

export class ProposalCanceled__Params {
  _event: ProposalCanceled;

  constructor(event: ProposalCanceled) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ProposalCreated extends ethereum.Event {
  get params(): ProposalCreated__Params {
    return new ProposalCreated__Params(this);
  }
}

export class ProposalCreated__Params {
  _event: ProposalCreated;

  constructor(event: ProposalCreated) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get proposer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get signatures(): Array<string> {
    return this._event.parameters[2].value.toStringArray();
  }

  get calldatas(): Array<Bytes> {
    return this._event.parameters[3].value.toBytesArray();
  }

  get endBlock(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get description(): string {
    return this._event.parameters[5].value.toString();
  }
}

export class ProposalCreated1 extends ethereum.Event {
  get params(): ProposalCreated1__Params {
    return new ProposalCreated1__Params(this);
  }
}

export class ProposalCreated1__Params {
  _event: ProposalCreated1;

  constructor(event: ProposalCreated1) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get proposer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get targets(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get signatures(): Array<string> {
    return this._event.parameters[3].value.toStringArray();
  }

  get calldatas(): Array<Bytes> {
    return this._event.parameters[4].value.toBytesArray();
  }

  get endBlock(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get description(): string {
    return this._event.parameters[6].value.toString();
  }
}

export class ProposalExecuted extends ethereum.Event {
  get params(): ProposalExecuted__Params {
    return new ProposalExecuted__Params(this);
  }
}

export class ProposalExecuted__Params {
  _event: ProposalExecuted;

  constructor(event: ProposalExecuted) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class QuorumVotesSet extends ethereum.Event {
  get params(): QuorumVotesSet__Params {
    return new QuorumVotesSet__Params(this);
  }
}

export class QuorumVotesSet__Params {
  _event: QuorumVotesSet;

  constructor(event: QuorumVotesSet) {
    this._event = event;
  }

  get oldQuorumVotes(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newQuorumVotes(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TransferERC20 extends ethereum.Event {
  get params(): TransferERC20__Params {
    return new TransferERC20__Params(this);
  }
}

export class TransferERC20__Params {
  _event: TransferERC20;

  constructor(event: TransferERC20) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class VoteCast extends ethereum.Event {
  get params(): VoteCast__Params {
    return new VoteCast__Params(this);
  }
}

export class VoteCast__Params {
  _event: VoteCast;

  constructor(event: VoteCast) {
    this._event = event;
  }

  get voter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proposalId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get support(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get votes(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get reason(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class ImpactMarketCouncil__getActionsResult {
  value0: Array<string>;
  value1: Array<Bytes>;

  constructor(value0: Array<string>, value1: Array<Bytes>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromStringArray(this.value0));
    map.set("value1", ethereum.Value.fromBytesArray(this.value1));
    return map;
  }

  getSignatures(): Array<string> {
    return this.value0;
  }

  getCalldatas(): Array<Bytes> {
    return this.value1;
  }
}

export class ImpactMarketCouncil__getReceiptResultValue0Struct extends ethereum.Tuple {
  get hasVoted(): boolean {
    return this[0].toBoolean();
  }

  get support(): i32 {
    return this[1].toI32();
  }

  get votes(): BigInt {
    return this[2].toBigInt();
  }
}

export class ImpactMarketCouncil__proposalReceiptsResult {
  value0: boolean;
  value1: i32;
  value2: BigInt;

  constructor(value0: boolean, value1: i32, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getHasVoted(): boolean {
    return this.value0;
  }

  getSupport(): i32 {
    return this.value1;
  }

  getVotes(): BigInt {
    return this.value2;
  }
}

export class ImpactMarketCouncil__proposalsResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: boolean;
  value7: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: boolean,
    value7: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromBoolean(this.value7));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getProposer(): Address {
    return this.value1;
  }

  getEndBlock(): BigInt {
    return this.value2;
  }

  getForVotes(): BigInt {
    return this.value3;
  }

  getAgainstVotes(): BigInt {
    return this.value4;
  }

  getAbstainVotes(): BigInt {
    return this.value5;
  }

  getCanceled(): boolean {
    return this.value6;
  }

  getExecuted(): boolean {
    return this.value7;
  }
}

export class ImpactMarketCouncil extends ethereum.SmartContract {
  static bind(address: Address): ImpactMarketCouncil {
    return new ImpactMarketCouncil("ImpactMarketCouncil", address);
  }

  MAX_VOTING_PERIOD(): BigInt {
    let result = super.call(
      "MAX_VOTING_PERIOD",
      "MAX_VOTING_PERIOD():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_MAX_VOTING_PERIOD(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MAX_VOTING_PERIOD",
      "MAX_VOTING_PERIOD():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PROPOSAL_MAX_OPERATIONS(): BigInt {
    let result = super.call(
      "PROPOSAL_MAX_OPERATIONS",
      "PROPOSAL_MAX_OPERATIONS():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PROPOSAL_MAX_OPERATIONS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PROPOSAL_MAX_OPERATIONS",
      "PROPOSAL_MAX_OPERATIONS():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  communityAdmin(): Address {
    let result = super.call("communityAdmin", "communityAdmin():(address)", []);

    return result[0].toAddress();
  }

  try_communityAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "communityAdmin",
      "communityAdmin():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  communityProxyAdmin(): Address {
    let result = super.call(
      "communityProxyAdmin",
      "communityProxyAdmin():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_communityProxyAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "communityProxyAdmin",
      "communityProxyAdmin():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getActions(_proposalId: BigInt): ImpactMarketCouncil__getActionsResult {
    let result = super.call(
      "getActions",
      "getActions(uint256):(string[],bytes[])",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)]
    );

    return new ImpactMarketCouncil__getActionsResult(
      result[0].toStringArray(),
      result[1].toBytesArray()
    );
  }

  try_getActions(
    _proposalId: BigInt
  ): ethereum.CallResult<ImpactMarketCouncil__getActionsResult> {
    let result = super.tryCall(
      "getActions",
      "getActions(uint256):(string[],bytes[])",
      [ethereum.Value.fromUnsignedBigInt(_proposalId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ImpactMarketCouncil__getActionsResult(
        value[0].toStringArray(),
        value[1].toBytesArray()
      )
    );
  }

  getReceipt(
    _proposalId: BigInt,
    _voter: Address
  ): ImpactMarketCouncil__getReceiptResultValue0Struct {
    let result = super.call(
      "getReceipt",
      "getReceipt(uint256,address):((bool,uint8,uint96))",
      [
        ethereum.Value.fromUnsignedBigInt(_proposalId),
        ethereum.Value.fromAddress(_voter)
      ]
    );

    return changetype<ImpactMarketCouncil__getReceiptResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getReceipt(
    _proposalId: BigInt,
    _voter: Address
  ): ethereum.CallResult<ImpactMarketCouncil__getReceiptResultValue0Struct> {
    let result = super.tryCall(
      "getReceipt",
      "getReceipt(uint256,address):((bool,uint8,uint96))",
      [
        ethereum.Value.fromUnsignedBigInt(_proposalId),
        ethereum.Value.fromAddress(_voter)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ImpactMarketCouncil__getReceiptResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  latestProposalIds(param0: Address): BigInt {
    let result = super.call(
      "latestProposalIds",
      "latestProposalIds(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_latestProposalIds(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "latestProposalIds",
      "latestProposalIds(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  members(param0: Address): boolean {
    let result = super.call("members", "members(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_members(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("members", "members(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proposalCalldatas(param0: BigInt, param1: BigInt): Bytes {
    let result = super.call(
      "proposalCalldatas",
      "proposalCalldatas(uint256,uint256):(bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBytes();
  }

  try_proposalCalldatas(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "proposalCalldatas",
      "proposalCalldatas(uint256,uint256):(bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  proposalCount(): BigInt {
    let result = super.call("proposalCount", "proposalCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_proposalCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "proposalCount",
      "proposalCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposalReceipts(
    param0: BigInt,
    param1: Address
  ): ImpactMarketCouncil__proposalReceiptsResult {
    let result = super.call(
      "proposalReceipts",
      "proposalReceipts(uint256,address):(bool,uint8,uint96)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );

    return new ImpactMarketCouncil__proposalReceiptsResult(
      result[0].toBoolean(),
      result[1].toI32(),
      result[2].toBigInt()
    );
  }

  try_proposalReceipts(
    param0: BigInt,
    param1: Address
  ): ethereum.CallResult<ImpactMarketCouncil__proposalReceiptsResult> {
    let result = super.tryCall(
      "proposalReceipts",
      "proposalReceipts(uint256,address):(bool,uint8,uint96)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ImpactMarketCouncil__proposalReceiptsResult(
        value[0].toBoolean(),
        value[1].toI32(),
        value[2].toBigInt()
      )
    );
  }

  proposalSignatures(param0: BigInt, param1: BigInt): string {
    let result = super.call(
      "proposalSignatures",
      "proposalSignatures(uint256,uint256):(string)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toString();
  }

  try_proposalSignatures(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<string> {
    let result = super.tryCall(
      "proposalSignatures",
      "proposalSignatures(uint256,uint256):(string)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  proposals(param0: BigInt): ImpactMarketCouncil__proposalsResult {
    let result = super.call(
      "proposals",
      "proposals(uint256):(uint256,address,uint256,uint256,uint256,uint256,bool,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ImpactMarketCouncil__proposalsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBoolean(),
      result[7].toBoolean()
    );
  }

  try_proposals(
    param0: BigInt
  ): ethereum.CallResult<ImpactMarketCouncil__proposalsResult> {
    let result = super.tryCall(
      "proposals",
      "proposals(uint256):(uint256,address,uint256,uint256,uint256,uint256,bool,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ImpactMarketCouncil__proposalsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBoolean(),
        value[7].toBoolean()
      )
    );
  }

  propose(
    _signatures: Array<string>,
    _calldatas: Array<Bytes>,
    _description: string
  ): BigInt {
    let result = super.call(
      "propose",
      "propose(string[],bytes[],string):(uint256)",
      [
        ethereum.Value.fromStringArray(_signatures),
        ethereum.Value.fromBytesArray(_calldatas),
        ethereum.Value.fromString(_description)
      ]
    );

    return result[0].toBigInt();
  }

  try_propose(
    _signatures: Array<string>,
    _calldatas: Array<Bytes>,
    _description: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "propose",
      "propose(string[],bytes[],string):(uint256)",
      [
        ethereum.Value.fromStringArray(_signatures),
        ethereum.Value.fromBytesArray(_calldatas),
        ethereum.Value.fromString(_description)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  quorumVotes(): BigInt {
    let result = super.call("quorumVotes", "quorumVotes():(uint256)", []);

    return result[0].toBigInt();
  }

  try_quorumVotes(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("quorumVotes", "quorumVotes():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  state(_proposalId: BigInt): i32 {
    let result = super.call("state", "state(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(_proposalId)
    ]);

    return result[0].toI32();
  }

  try_state(_proposalId: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall("state", "state(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(_proposalId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }
}

export class AddMemberCall extends ethereum.Call {
  get inputs(): AddMemberCall__Inputs {
    return new AddMemberCall__Inputs(this);
  }

  get outputs(): AddMemberCall__Outputs {
    return new AddMemberCall__Outputs(this);
  }
}

export class AddMemberCall__Inputs {
  _call: AddMemberCall;

  constructor(call: AddMemberCall) {
    this._call = call;
  }

  get _member(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddMemberCall__Outputs {
  _call: AddMemberCall;

  constructor(call: AddMemberCall) {
    this._call = call;
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class CastVoteCall extends ethereum.Call {
  get inputs(): CastVoteCall__Inputs {
    return new CastVoteCall__Inputs(this);
  }

  get outputs(): CastVoteCall__Outputs {
    return new CastVoteCall__Outputs(this);
  }
}

export class CastVoteCall__Inputs {
  _call: CastVoteCall;

  constructor(call: CastVoteCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _support(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class CastVoteCall__Outputs {
  _call: CastVoteCall;

  constructor(call: CastVoteCall) {
    this._call = call;
  }
}

export class ExecuteCall extends ethereum.Call {
  get inputs(): ExecuteCall__Inputs {
    return new ExecuteCall__Inputs(this);
  }

  get outputs(): ExecuteCall__Outputs {
    return new ExecuteCall__Outputs(this);
  }
}

export class ExecuteCall__Inputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get _proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExecuteCall__Outputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _quorumVotes(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _communityAdmin(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _members(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class ProposeCall extends ethereum.Call {
  get inputs(): ProposeCall__Inputs {
    return new ProposeCall__Inputs(this);
  }

  get outputs(): ProposeCall__Outputs {
    return new ProposeCall__Outputs(this);
  }
}

export class ProposeCall__Inputs {
  _call: ProposeCall;

  constructor(call: ProposeCall) {
    this._call = call;
  }

  get _signatures(): Array<string> {
    return this._call.inputValues[0].value.toStringArray();
  }

  get _calldatas(): Array<Bytes> {
    return this._call.inputValues[1].value.toBytesArray();
  }

  get _description(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ProposeCall__Outputs {
  _call: ProposeCall;

  constructor(call: ProposeCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RemoveMemberCall extends ethereum.Call {
  get inputs(): RemoveMemberCall__Inputs {
    return new RemoveMemberCall__Inputs(this);
  }

  get outputs(): RemoveMemberCall__Outputs {
    return new RemoveMemberCall__Outputs(this);
  }
}

export class RemoveMemberCall__Inputs {
  _call: RemoveMemberCall;

  constructor(call: RemoveMemberCall) {
    this._call = call;
  }

  get _member(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveMemberCall__Outputs {
  _call: RemoveMemberCall;

  constructor(call: RemoveMemberCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetQuorumVotesCall extends ethereum.Call {
  get inputs(): SetQuorumVotesCall__Inputs {
    return new SetQuorumVotesCall__Inputs(this);
  }

  get outputs(): SetQuorumVotesCall__Outputs {
    return new SetQuorumVotesCall__Outputs(this);
  }
}

export class SetQuorumVotesCall__Inputs {
  _call: SetQuorumVotesCall;

  constructor(call: SetQuorumVotesCall) {
    this._call = call;
  }

  get _newQuorumVotes(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetQuorumVotesCall__Outputs {
  _call: SetQuorumVotesCall;

  constructor(call: SetQuorumVotesCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
