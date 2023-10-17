import { NestableVerb } from '../NestableVerb';
import { PhoneNumber } from './PhoneNumber';
import { SipUri } from './SipUri';

type NumberEntities = Array<PhoneNumber | SipUri>;

interface TransferAttributes {
    transferCallerId?: string;
    callTimeout?: number;
    transferCompleteUrl?: string;
    transferCompleteMethod?: string;
    transferCompleteFallbackUrl?: string;
    transferCompleteFallbackMethod?: string;
    username?: string;
    password?: string;
    fallbackUsername?: string;
    fallbackPassword?: string;
    tag?: string;
    diversionTreatment?: string;
    diversionReason?: string;
}

/**
 * @export
 * @class Transfer
 * @extends {NestableVerb}
 * Represents a Transfer verb
 */
export class Transfer extends NestableVerb {
    attributes: TransferAttributes;

    /**
     * Creates an instance of Transfer
     * @param {TransferAttributes} attributes The attributes to add to the element
     * @param {NumberEntities} transferTo The number entities to transfer to
     */
    constructor(attributes?: TransferAttributes, transferTo?: NumberEntities) {
        super('Transfer', undefined, attributes, transferTo);
    }

    /**
     * Add a number entity to the transfer
     * @param {NumberEntities} recipient The number entity or entities to add
     */
    addTransferRecipient(recipient: PhoneNumber | SipUri | NumberEntities): void {
        this.nestedVerbs = this.nestedVerbs.concat(recipient);
    }
}
