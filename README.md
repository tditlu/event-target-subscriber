# event-target-subscriber

EventTarget subscriber

## Installation

```sh
$ npm install event-target-subscriber
```

## Usage

```js
import { subscribe, unsubscribe } from 'event-target-subscriber';

class App {
  constructor() {
    this.subscriber = subscribe(window, 'click', event => this.onClick(event));
  }

  onClick(event) {
    console.log(event);

    unsubscribe(this.subscriber);
  }
}
```

## License

[MIT](LICENSE)
