# add-thirdparty-library-react-hooks 

Custom hooks to add third party lybrary in react application. This situation may come when we need to add some external JavaScript libraries like jQuery or some chat library.

For react we need to add some logic to ligacy code to control the multiple instances adding in HTML and also we may need to use same logic inside other component with different libraries.

## How to use
```javascript
import useAddLibrary from '../components/AddLibrary';

const [scriptLoaded] = useAddLibrary('https://code.jquery.com/jquery-3.6.0.min.js', 'jQuery');
\\adding jquery and passing jQuery object to check if already added.
```

I have added a full description and usability in [this article](https://www.linkedin.com/pulse/react-custom-hook-add-external-javascript-library-nabaraj-saha/?trackingId=jUPaIK1SQdWJIRJgwpPwPw%3D%3D)

_Always there is a possibility of enhancement._