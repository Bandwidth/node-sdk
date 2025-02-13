//@ts-nocheck
import { TollFreeVerificationApi } from '../../../api';
import { Configuration } from '../../../configuration';
import { CallbackTypeEnum, TfvStatusEnum, WebhookSubscriptionTypeEnum } from '../../../models';

describe('TollFreeVerificationApi', () => {
    const config = new Configuration({
        username: BW_USERNAME,
        password: BW_PASSWORD,
        basePath: 'http://127.0.0.1:4010'
    });
    const tfvApi = new TollFreeVerificationApi(config);

    const webhookSubscriptionRequestSchema = {
        basicAuthentication: {
            username: 'username',
            password: 'password'
        },
        callbackUrl: 'https://example.com',
        sharedSecretKey: 'shared-secret-key'
    };

    describe('createWebhookSubscription', () => {
        test('should create a webhook subscription', async () => {
            const { status, data } = await tfvApi.createWebhookSubscription(BW_ACCOUNT_ID, webhookSubscriptionRequestSchema);

            expect(status).toEqual(201);
            expect(data.id).toBeString();
            expect(data.accountId).toHaveLength(7);
            expect(data.callbackUrl).toStartWith('http');
            expect(data.type).toBeOneOf(Object.values(WebhookSubscriptionTypeEnum));
            expect(data.basicAuthentication!.username).toBeString();
            expect(data.basicAuthentication!.password).toBeString();
            expect(data.createdDate).toBeDateString();
            expect(data.modifiedDate).toBeDateString();
        });
    });

    describe('deleteWebhookSubscription', () => {
        test('should delete a webhook subscription', async () => {
            const { status } = await tfvApi.deleteWebhookSubscription(BW_ACCOUNT_ID, 'test-id-1234');

            expect(status).toEqual(204);
        });
    });

    describe('getTollFreeVerificationStatus', () => {
        test('should get toll-free verification status', async () => {
            const { status, data } = await tfvApi.getTollFreeVerificationStatus(BW_ACCOUNT_ID, '+18005551234');

            expect(status).toEqual(200);
            expect(data.phoneNumber).toBeString();
            expect(data.status).toBeOneOf(Object.values(TfvStatusEnum));
            expect(data.internalTicketNumber).toBeString();
            expect(data.declineReasonDescription).toBeString();
            expect(data.resubmitAllowed).toBeBoolean();
            expect(data.createdDateTime).toBeDateString();
            expect(data.modifiedDateTime).toBeDateString();
        });
    });

    describe('listTollFreeUseCases', () => {
        test('should list toll-free use cases', async () => {
            const { status, data } = await tfvApi.listTollFreeUseCases();

            expect(status).toEqual(200);
            expect(data).toBeInstanceOf(Array);
        });
    });

    describe('listWebhookSubscriptions', () => {
        test('should list webhook subscriptions', async () => {
            const { status, data } = await tfvApi.listWebhookSubscriptions(BW_ACCOUNT_ID);

            expect(status).toEqual(200);
            expect(data).toHaveProperty('links');
            expect(data.links!.first).toBeString();
            expect(data.links!.next).toBeString();
            expect(data.links!.previous).toBeString();
            expect(data.links!.last).toBeString();
            expect(data.errors).toBeInstanceOf(Array);
            expect(data.errors[0]!.code).toBeNumber();
            expect(data.errors[0]!.description).toBeString();
            expect(data.errors[0]!.telephoneNumbers).toBeInstanceOf(Array);
            expect(data.errors[0]!.telephoneNumbers[0].telephoneNumber).toBeString();
            expect(data.data).toBeInstanceOf(Array);
            expect(data.data[0]!.id).toBeString();
            expect(data.data[0]!.accountId).toBeString();
            expect(data.data[0]!.callbackUrl).toBeString();
            expect(data.data[0]!.type).toBeOneOf(Object.values(WebhookSubscriptionTypeEnum));
            expect(data.data[0]!.basicAuthentication.username).toBeString();
            expect(data.data[0]!.basicAuthentication.password).toBeString();
            expect(data.data[0]!.createdDate).toBeDateString();
            expect(data.data[0]!.modifiedDate).toBeDateString();
        });
    });

    describe('requestTollFreeVerification', () => {
        test('should request toll-free verification', async () => {
            const verificationRequest = {
                businessAddress: {
                    name: 'name',
                    addr1: 'addr1',
                    addr2: 'addr2',
                    city: 'city',
                    state: 'state',
                    zip: 'zip',
                    url: 'https://example.com'
                },
                businessContact: {
                    firstName: 'first-name',
                    lastName: 'last-name',
                    email: 'email@email.com',
                    phoneNumber: '+19195551234'
                },
                messageVolume: 12,
                phoneNumbers: ['+18005551234'],
                useCase: 'useCase',
                useCaseSummary: 'useCaseSummary',
                productionMessageContent: 'productionMessageContent',
                optInWorkflow: {
                    description: 'description',
                    imageUrls: ['https://example.com']
                },
                additionalInformation: 'additionalInformation',
                isvReseller: 'isvReseller'
            };
            const { status } = await tfvApi.requestTollFreeVerification(BW_ACCOUNT_ID, verificationRequest);

            expect(status).toEqual(202);
        });
    });

    describe('updateTollFreeVerificationRequest', () => {
        test('should update toll-free verification request', async () => {
            const tfvSubmissionWrapper = {
                submission: undefined
            };
            const { status } = await tfvApi.updateTollFreeVerificationRequest(BW_ACCOUNT_ID, '+18005551234', tfvSubmissionWrapper);
            expect(status).toEqual(202);
        });
    });

    describe('updateWebhookSubscription', () => {
        test('should update webhook subscription', async () => {
            const { status, data } = await tfvApi.updateWebhookSubscription(BW_ACCOUNT_ID, 'test-id-1234', webhookSubscriptionRequestSchema);
        
            expect(status).toEqual(200);
            expect(data.id).toBeString();
            expect(data.accountId).toHaveLength(7);
            expect(data.callbackUrl).toStartWith('http');
            expect(data.type).toBeOneOf(Object.values(WebhookSubscriptionTypeEnum));
            expect(data.basicAuthentication!.username).toBeString();
            expect(data.basicAuthentication!.password).toBeString();
            expect(data.createdDate).toBeDateString();
            expect(data.modifiedDate).toBeDateString();
        });
    });
});
