# Credits
Unless otherwise stated, data in these files are derived from Dr. Apu Kapadia's [statistical analysis](https://cs.indiana.edu/~kapadia/nofoldem/index.html). Used with permission.

# data set processing
The original data was copy/pasted directly from HTML to a javascript file, then search/replace was done to convert each row of data to JSON format

## search and replace: 
* regex is `/^(\d*)\s([AKQJT2-9s]*)\s(\d{1,2}\.\d{2}\s+)(\d{1,2}\.\d{2}\s+)(\d{1,2}\.\d{2}\s*)/`
* replace string is `"{pair:'$2', wins: '$3', ties: '$4'},"`

The result is: 
  ```js
  const arry = [
    { pair: 'AA', wins: '84.97	 ', ties: '0.57	' },
    { pair: 'KK', wins: '82.10	 ', ties: '0.58	' },
    ...
  ```
## conversion to input format
The jsheatmap constructor takes heading and rows arguments.  The typescript for this is:
```ts
type labeledValuesType = [string, number[]]

class Sterno {
  constructor(headings: string[], rows: Array<labeledValuesType>) {...
```

If the headings are 
`const headings = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']`

Then the rows would be (2 player winning odds shown):
```js
[
  "A", [84.97, 63.49, 62.57, ...],
  "K", [63.49, 82.10, 59.58, ...],
  ...,
  "2", [52.24, 47.73, 44.56, ...]
]
```

Where top left cell is for AA (84.97 odds of winning), 2nd row, 1st cell is KA (63.49), and so on. Data is duplicated (e.g., 2nd cell, first row === 2 row, first cell) which is okay because it aids visualization.

###
Unpaired hole cards can be suited or unsuited. Suited cards have slightly better odds of winning. My intention is to split unpaired cells into two spans: one for unsuited and the other for suited. Options will be provided to view either/both in the visualization.