# Cloudflare REST API wrapper for D1
cloudflare REST API wrapper for D1 database.

## Installation
```bash
# via npm
npm i cloudflare-d1-wrapper
# via jsr (use npm)
npx jsr add @alpha9n/cloudflare-d1-wrapper
```

## Example
```typescript
import D1Wrapper from 'cloudflare-d1-wrapper';

const API_KEY = 'YOUR_API_KEY';

const wrapper = new D1Wrapper(API_KEY);

const databaseMeta = wrapper.getDatabase('YOUR_ACCOUNT_ID', 'YOUR_DATABASE_ID');
```

## License
[MIT License](https://choosealicense.com/licenses/mit/)

## Features
- [ ] [Get database list](https://developers.cloudflare.com/api/operations/cloudflare-d1-list-databases)
- [x] [Create database](https://developers.cloudflare.com/api/operations/cloudflare-d1-create-database)
- [ ] [Delete database](https://developers.cloudflare.com/api/operations/cloudflare-d1-delete-database)
- [x] [Get database](https://developers.cloudflare.com/api/operations/cloudflare-d1-get-database)
- [x] [Query database](https://developers.cloudflare.com/api/operations/cloudflare-d1-query-database)
- [ ] [Raw database query](https://developers.cloudflare.com/api/operations/cloudflare-d1-raw-database-query)
