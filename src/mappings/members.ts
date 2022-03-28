import { MemberAdded, MemberRemoved } from "../../generated/SubDAO/SubDAO";
import { SubDAOMemberEntity } from "../../generated/schema";

export function handleMemberAdded(event: MemberAdded): void {
    const id = `${event.params.member.toHex()}`;
    let member = SubDAOMemberEntity.load(id);

    if (!member) {
        member = new SubDAOMemberEntity(id);
    }
    member.since = event.block.timestamp.toI32();
    member.until = 0;
    member.status = 0;
    member.votes = 0;
    member.save();
}
export function handleMemberRemoved(event: MemberRemoved): void {
    const id = `${event.params.member.toHex()}`;
    const member = SubDAOMemberEntity.load(id);

    if (member) {
        member.until = event.block.timestamp.toI32();
        member.status = 1;
        member.save();
    }
}