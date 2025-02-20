# Dummy

Performant and lightweight dummy data generation.

## Installation

To start using the library, install it in your project:

```bash
npm install dummy
```

After that, you can import `dummy` and use its data generation functions from anywhere in your app.

```jsx
import { dummy } from 'dummy';

// ...

var randomId = dummy.string.uuid(); // d02e9296-7063-450c-9dfc-9edd73076c8d
var randomUsername = dummy.number.float(); // 14.21
var randomRegisteredAt = dummy.date.past(); // 2021-05-07T01:30:54.348Z
```

## Documentation

You can find out more about the API and implementation soon.
