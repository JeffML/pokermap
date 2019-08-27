# Credits
Unless otherwise stated, data in these files are derived from Dr. Apu Kapadia's [statistical analysis](https://cs.indiana.edu/~kapadia/nofoldem/index.html). Used with permission.

### search and replace: 
* regex is `/^(\d*)\s([AKQJT2-9s]*)\s(\d{1,2}\.\d{2}\s+)(\d{1,2}\.\d{2}\s+)(\d{1,2}\.\d{2}\s*)/`
* replace string is `"{pair:'$2', wins: '$3', ties: '$4'},"`