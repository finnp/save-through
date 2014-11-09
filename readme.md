# save-through

Through stream with the side effect of saving piped through data to disk.
Install with `npm install save-through`

```js
var save = require('save-through')

source
  .pipe(save('file.csv'))
  .pipe(target)
```
Saves the stream to `file.csv`


It includes a CLI, which can be installed by passing in the optional `-g` flag.

```
source | save-through file.csv | target
```
