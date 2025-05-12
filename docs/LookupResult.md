# LookupResult

Carrier information results for the specified telephone number.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Response_Code** | **number** | Our vendor\&#39;s response code. | [optional] [default to undefined]
**Message** | **string** | Message associated with the response code. | [optional] [default to undefined]
**E_164_Format** | **string** | The telephone number in E.164 format. | [optional] [default to undefined]
**Formatted** | **string** | The formatted version of the telephone number. | [optional] [default to undefined]
**Country** | **string** | The country of the telephone number. | [optional] [default to undefined]
**Line_Type** | **string** | The line type of the telephone number. | [optional] [default to undefined]
**Line_Provider** | **string** | The messaging service provider of the telephone number. | [optional] [default to undefined]
**Mobile_Country_Code** | **string** | The first half of the Home Network Identity (HNI). | [optional] [default to undefined]
**Mobile_Network_Code** | **string** | The second half of the HNI. | [optional] [default to undefined]

## Example

```typescript
import { LookupResult } from 'bandwidth-sdk';

const instance: LookupResult = {
    Response_Code,
    Message,
    E_164_Format,
    Formatted,
    Country,
    Line_Type,
    Line_Provider,
    Mobile_Country_Code,
    Mobile_Network_Code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
