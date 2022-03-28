import {
    ProposalCanceled,
    ProposalCreated,
    ProposalExecuted,
    VoteCast
} from '../../generated/SubDAO/SubDAO';
import { ProposalEntity, SubDAOMemberEntity } from '../../generated/schema';

export function handleProposalCreated(event: ProposalCreated): void {
    const id = `${event.params.id.toString()}`;
    let proposal = ProposalEntity.load(id);

    if (!proposal) {
        proposal = new ProposalEntity(id);
    }
    proposal.proposer = event.params.proposer;
    proposal.signatures = event.params.signatures;
    proposal.calldatas = event.params.calldatas;
    proposal.endBlock = event.params.endBlock.toI32();
    proposal.description = event.params.description;
    proposal.status = 0;
    proposal.votedBy = [];
    proposal.votesAgainst = 0;
    proposal.votesFor = 0;
    proposal.votesAbstain = 0;
    proposal.save();
}

export function handleProposalExecuted(event: ProposalExecuted): void {
    const proposal = ProposalEntity.load(event.params.id.toString());

    if (proposal) {
        proposal.status = 1;
        proposal.save();
    }
}

export function handleProposalCanceled(event: ProposalCanceled): void {
    const proposal = ProposalEntity.load(event.params.id.toString());

    if (proposal) {
        proposal.status = 2;
        proposal.save();
    }
}

export function handleVoteCast(event: VoteCast): void {
    const proposal = ProposalEntity.load(event.params.proposalId.toString());
    const member = SubDAOMemberEntity.load(event.params.voter.toHex());

    if (proposal) {
        const votedBy = proposal.votedBy;

        votedBy.push(event.params.voter);
        proposal.votedBy = votedBy;
        switch(event.params.support) {
            case 0:
                proposal.votesAgainst ++;
                break;
            case 1:
                proposal.votesFor ++;
                break;
            case 2:
                proposal.votesAbstain ++;
                break;
        }
        proposal.save();
    }

    if (member) {
        member.votes ++;
        member.save();
    }
}

