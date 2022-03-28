import { Address, Bytes, store } from "@graphprotocol/graph-ts";
import { AmbassadorAccountReplaced, AmbassadorAdded, AmbassadorRemoved, AmbassadorReplaced, AmbassadorToCommunityUpdated, AmbassadorTransfered, CommunityRemoved, EntityAccountReplaced, EntityAdded, EntityRemoved } from "../../generated/Ambassadors/Ambassadors";
import { AmbassadorEntity, AmbassadorsEntityEntity } from "../../generated/schema";

export function handleEntityAdded(event: EntityAdded): void {
    const id = `${event.params.entity.toHex()}`;
    let entity = AmbassadorsEntityEntity.load(id);

    if (!entity) {
        entity = new AmbassadorsEntityEntity(id);
    }
    entity.status = 0;
    entity.ambassadors = [];
    entity.save();
}

export function handleEntityRemoved(event: EntityRemoved): void {
    const id = `${event.params.entity.toHex()}`;
    const entity = AmbassadorsEntityEntity.load(id)!;

    entity.ambassadors = [];
    entity.status = 1;
    entity.save();
}

export function handleEntityAccountReplaced(event: EntityAccountReplaced): void {
    const oldId = `${event.params.oldAccount.toHex()}`;
    const newId = `${event.params.newAccount.toHex()}`;
    const oldEntity = AmbassadorsEntityEntity.load(oldId)!;
    const newEntity = new AmbassadorsEntityEntity(newId);

    newEntity.status = oldEntity.status;
    newEntity.ambassadors = oldEntity.ambassadors;
    newEntity.save();

    store.remove('AmbassadorsEntityEntity', oldId);
}

export function handleAmbassadorAdded(event: AmbassadorAdded): void {
    const id = `${event.params.ambassador.toHex()}`;
    let ambassador = AmbassadorEntity.load(id);

    if (!ambassador) {
        ambassador = new AmbassadorEntity(id);
    }
    ambassador.since = event.block.timestamp.toI32();
    ambassador.until = 0;
    ambassador.status = 0;
    ambassador.communities = [];
    ambassador.save();
}

export function handleAmbassadorRemoved(event: AmbassadorRemoved): void {
    const id = `${event.params.ambassador.toHex()}`;
    const ambassador = AmbassadorEntity.load(id);

    if (ambassador) {
        ambassador.status = 1;
        ambassador.save();
    }
}

export function handleAmbassadorAccountReplaced(event: AmbassadorAccountReplaced): void {
    const entityId = `${event.params.entityAccount.toHex()}`;
    const oldId = `${event.params.oldAccount.toHex()}`;
    const newId = `${event.params.newAccount.toHex()}`;
    const oldAmbassador = AmbassadorEntity.load(oldId)!;
    const newAmbassador = new AmbassadorEntity(newId);
    const entity = AmbassadorsEntityEntity.load(entityId)!;

    let entityAmbassadors = entity.ambassadors;

    entityAmbassadors = entityAmbassadors.filter((ambassador: string) => Address.fromString(ambassador).notEqual(event.params.oldAccount));
    entityAmbassadors.push(newId);
    entity.ambassadors = entityAmbassadors;

    newAmbassador.since = oldAmbassador.since;
    newAmbassador.until = oldAmbassador.until;
    newAmbassador.status = oldAmbassador.status;
    newAmbassador.communities = oldAmbassador.communities;
    newAmbassador.save();

    store.remove('AmbassadorEntity', oldId);
}

export function handleAmbassadorReplaced(event: AmbassadorReplaced): void {
    const idOld = `${event.params.oldAmbassador.toHex()}`;
    const idNew = `${event.params.newAmbassador.toHex()}`;
    const ambassadorOld = AmbassadorEntity.load(idOld)!;
    const ambassadorNew = AmbassadorEntity.load(idNew)!;

    ambassadorNew.communities = ambassadorOld.communities;
    ambassadorNew.save();
}

export function handleAmbassadorTransfered(event: AmbassadorTransfered): void {
    const oldEntity = AmbassadorsEntityEntity.load(event.params.oldEntity.toHex())!;
    const newEntity = AmbassadorsEntityEntity.load(event.params.newEntity.toHex())!;

    let oldEntityAmbassadors = oldEntity.ambassadors;

    oldEntityAmbassadors = oldEntityAmbassadors.filter((ambassador: string) => Address.fromString(ambassador).notEqual(event.params.ambassador));
    oldEntity.ambassadors = oldEntityAmbassadors;

    const newEntityAmbassadors = newEntity.ambassadors;

    newEntityAmbassadors.push(event.params.ambassador.toHex());
    newEntity.ambassadors = newEntityAmbassadors;

    oldEntity.save();
    newEntity.save();
}

export function handleAmbassadorToCommunityUpdated(event: AmbassadorToCommunityUpdated): void {
    if (
        event.params.fromAmbassador.equals(
            Address.fromString('0x0000000000000000000000000000000000000000')
        )
    ) {
        const fromId = `${event.params.fromAmbassador.toHex()}`;
        const fromAmbassador = AmbassadorEntity.load(fromId)!;
        let communitiesFrom = fromAmbassador.communities;

        communitiesFrom = communitiesFrom.filter((community: Bytes) => community.notEqual(event.params.community));
        fromAmbassador.communities = communitiesFrom;
        fromAmbassador.save();
    }
    const toId = `${event.params.toAmbassador.toHex()}`;
    const toAmbassador = AmbassadorEntity.load(toId)!;

    const communitiesTo = toAmbassador.communities;

    communitiesTo.push(event.params.community);
    toAmbassador.communities = communitiesTo;

    toAmbassador.save();
}

export function handleCommunityRemoved(event: CommunityRemoved): void {
    const id = `${event.params.ambassador.toHex()}`;
    const ambassador = AmbassadorEntity.load(id)!;

    let communitiesFrom = ambassador.communities;

    communitiesFrom = communitiesFrom.filter((community: Bytes) => community.notEqual(event.params.community));
    ambassador.communities = communitiesFrom;

    ambassador.save();
}