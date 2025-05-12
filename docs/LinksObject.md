# LinksObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first** | **string** | The first (or only) page of results matching the query. | [optional] [default to undefined]
**next** | **string** | If more results exist than specified by \&#39;size\&#39;, this link returns the next page of \&#39;size\&#39; results. | [optional] [default to undefined]
**previous** | **string** | If the results are more than one page, this link returns the previous page of \&#39;size\&#39; results. | [optional] [default to undefined]
**last** | **string** | If more results exist than specified by \&#39;size\&#39;, this link return the last page of result. | [optional] [default to undefined]

## Example

```typescript
import { LinksObject } from 'bandwidth-sdk';

const instance: LinksObject = {
    first,
    next,
    previous,
    last,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
