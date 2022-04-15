/* global changetype */
import { Address, BigInt, Bytes, ethereum } from '@graphprotocol/graph-ts';
import { AmbassadorAdded, AmbassadorRemoved, EntityAccountReplaced, EntityAdded, EntityRemoved } from '../../generated/Ambassadors/Ambassadors';
import { newMockEvent } from 'matchstick-as/assembly/defaults';


export function createEntityAddedEvent(entity: string): EntityAdded {
    const entityAddedEvent = changetype<EntityAdded>(newMockEvent());

    entityAddedEvent.parameters = [];
    const addressParam = new ethereum.EventParam('entity', ethereum.Value.fromAddress(Address.fromString(entity)));

    entityAddedEvent.parameters.push(addressParam);

    return entityAddedEvent;
}

export function createEntityRemovedEvent(entity: string): EntityRemoved {
    const entityRemovedEvent = changetype<EntityRemoved>(newMockEvent());

    entityRemovedEvent.parameters = [];
    const addressParam = new ethereum.EventParam('entity', ethereum.Value.fromAddress(Address.fromString(entity)));

    entityRemovedEvent.parameters.push(addressParam);

    return entityRemovedEvent;
}

export function createEntityAccountReplacedEvent(entityIndex: i32, oldAccount: string, newAccount: string): EntityAccountReplaced {
    const entityAccountReplacedEvent = changetype<EntityAccountReplaced>(newMockEvent());

    entityAccountReplacedEvent.parameters = [];
    const entityIndexParam = new ethereum.EventParam('entityIndex', ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(entityIndex)));
    const oldAccountParam = new ethereum.EventParam('oldAccount', ethereum.Value.fromAddress(Address.fromString(oldAccount)));
    const newAccountParam = new ethereum.EventParam('newAccount', ethereum.Value.fromAddress(Address.fromString(newAccount)));

    entityAccountReplacedEvent.parameters.push(entityIndexParam);
    entityAccountReplacedEvent.parameters.push(oldAccountParam);
    entityAccountReplacedEvent.parameters.push(newAccountParam);

    return entityAccountReplacedEvent;
}

export function createAmbassadorAddedEvent(ambassador: string, entity: string): AmbassadorAdded {
    const ambassadorAddedEvent = changetype<AmbassadorAdded>(newMockEvent());

    ambassadorAddedEvent.parameters = [];
    const ambassadorParam = new ethereum.EventParam('ambassador', ethereum.Value.fromAddress(Address.fromString(ambassador)));
    const entityParam = new ethereum.EventParam('entity', ethereum.Value.fromAddress(Address.fromString(entity)));

    ambassadorAddedEvent.parameters.push(ambassadorParam);
    ambassadorAddedEvent.parameters.push(entityParam);

    return ambassadorAddedEvent;
}

export function createAmbassadorRemovedEvent(ambassador: string, entity: string): AmbassadorRemoved {
    const ambassadorRemovedEvent = changetype<AmbassadorRemoved>(newMockEvent());

    ambassadorRemovedEvent.parameters = [];
    const ambassadorParam = new ethereum.EventParam('ambassador', ethereum.Value.fromAddress(Address.fromString(ambassador)));
    const entityParam = new ethereum.EventParam('entity', ethereum.Value.fromAddress(Address.fromString(entity)));

    ambassadorRemovedEvent.parameters.push(ambassadorParam);
    ambassadorRemovedEvent.parameters.push(entityParam);

    return ambassadorRemovedEvent;
}