Converts any string/number to time string in HH:MM:SS format. 
Super slim size only 984 bytes (4 KB) 😎

Read more in my blog [alekspetrov.com](https://alekspetrov.com)

### Why it is exist?
I work a lot on admin panels or dashboards means tons of inputs. HTML `<input type="time">` still has the [AM/PM bug in FireFox](https://stackoverflow.com/questions/13523060/html5-time-inputs-shows-12-hours) and bad UX.
To fix this and improve UX I started to search something like [Notion's](https://notion.so) time input, but found nothing good.
I created a tiny solution that covers the edge cases like.    

### Install
`npm install time-input -S`
or
`yarn add time-input`

### Usage

```javascript
import toHHMMSS from 'time-input'

const time = "12"

toHHMMSS(time) // Returns 12:00:00
```

### Cases
Script removes non digital symbols and returns a time format for any string or number.
If a time string is not correct script returns default 00:00:00.  

Examples 
``` 
"12abc" -> "12:00:00"   
"25" -> "00:00:00"  
"24:59" -> "24:59:00"  
"24:60" -> "24:00:00"  
"00:00:01" -> "00:00:01"
"[12]" -> "00:00:00" and warn in console that format incorect

You've got the idea.
```

### How to remove seconds?
Since it's just a string and always returns hh:mm:ss format slice last 3 symbols.

```javascript
import toHHMMSS from 'time-input'

const time = "12"

toHHMMSS(time).slice(0, -3) // Returns 12:00
```

### Params
Second argument is a divider for time by default it is ':'

```javascript
import toHHMMSS from 'time-input'

const time = "12"

toHHMMSS(time, '/') // Returns 12/00/00
```

Found the script useful? Invest in my coffee ☕️ I'll try to create more useful stuff. Don't forget to add a star ⭐️. 
Thanks, you are awesome ✌️!

Any collaboration ideas? Send me an email [hello@alekspetrov.com](mailto:hello@alekspetrov.com)

### TODO
[x] JS script
[x] Make seconds optional
[ ] Vue component
[ ] React component
[ ] Svelte component
