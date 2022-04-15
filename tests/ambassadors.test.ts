import { assert, clearStore, test } from 'matchstick-as/assembly/index';

import { ambassadorAddress, entityAddress } from './utils/constants';
import { createAmbassadorAddedEvent, createAmbassadorRemovedEvent, createEntityAddedEvent, createEntityRemovedEvent } from './utils/ambassadors';
import {
    handleAmbassadorAdded,
    handleAmbassadorRemoved,
    handleEntityAdded,
    handleEntityRemoved
} from '../src/mappings/ambassadors';

export { handleEntityAdded, handleEntityRemoved, handleAmbassadorAdded, handleAmbassadorRemoved };

test('should create entity', () => {
    clearStore();

    const entityAdded = createEntityAddedEvent(entityAddress[0]);

    handleEntityAdded(entityAdded);

    assert.fieldEquals('AmbassadorsEntityEntity', entityAddress[0], 'status', '0');
});

test('should remove entity', () => {
    clearStore();

    const entityAdded = createEntityAddedEvent(entityAddress[0]);

    handleEntityAdded(entityAdded);

    const entityRemoved = createEntityRemovedEvent(entityAddress[0]);

    handleEntityRemoved(entityRemoved);

    assert.fieldEquals('AmbassadorsEntityEntity', entityAddress[0], 'status', '1');
});

// TODO: replace entity account

test('should add ambassador', () => {
    clearStore();

    const entityAdded = createEntityAddedEvent(entityAddress[0]);

    handleEntityAdded(entityAdded);

    const ambassadorAdded = createAmbassadorAddedEvent(ambassadorAddress[0], entityAddress[0]);

    handleAmbassadorAdded(ambassadorAdded);

    assert.fieldEquals('AmbassadorsEntityEntity', entityAddress[0], 'status', '0');
    assert.fieldEquals('AmbassadorEntity', ambassadorAddress[0], 'status', '0');
});

test('should remove ambassador', () => {
    clearStore();

    const entityAdded = createEntityAddedEvent(entityAddress[0]);

    handleEntityAdded(entityAdded);

    const ambassadorAdded = createAmbassadorAddedEvent(ambassadorAddress[0], entityAddress[0]);

    handleAmbassadorAdded(ambassadorAdded);

    const ambassadorRemoved = createAmbassadorRemovedEvent(ambassadorAddress[0], entityAddress[0]);

    handleAmbassadorRemoved(ambassadorRemoved);

    assert.fieldEquals('AmbassadorsEntityEntity', entityAddress[0], 'status', '0');
    assert.fieldEquals('AmbassadorEntity', ambassadorAddress[0], 'status', '1');
});

// TODO: ambassador replaced

// TODO: ambassador account replaced

// TODO: ambassador transfered

// TODO: ambassador to community updated

// TODO: community removed