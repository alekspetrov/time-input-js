Converts any string/number to time string in HH:MM:SS format.   
Super slim size only 984 bytes (4 KB) 😎

Read more in my blog [alekspetrov.com](https://alekspetrov.com)    

# Installation
`npm install time-input -S`  
or  
`yarn add time-input`  

# Usage

```javascript
import toHHMMSS from 'time-input'

toHHMMSS("12") // Returns 12:00:00
```

## Convert cases
Script removes non digital symbols and returns a time format for any string or number.  
If a time string is not correct script returns default 00:00:00.  
 
``` 
"12abc" -> "12:00:00"   
"25" -> "00:00:00"  
"24:59" -> "24:59:00"  
"24:60" -> "24:00:00"  
"00:00:01" -> "00:00:01"
"[12]" -> "00:00:00" and warn in console that format incorect
```

# How to remove seconds?
---
Since it's just a string and always returns hh:mm:ss format you can slice last 3 symbols.

```javascript
import toHHMMSS from 'time-input'

toHHMMSS("12").slice(0, -3) // Returns 12:00
```

### Params
Second argument is a divider for time by default it is ':'

```javascript
import toHHMMSS from 'time-input'

toHHMMSS("12", '/') // Returns 12/00/00
```

### TODO
[x] JS script  
[x] Make seconds optional  
[ ] Vue component  
[ ] React component  
[ ] Svelte component
