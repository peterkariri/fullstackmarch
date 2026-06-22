const { Component } = require("react")

let hello=document.getElementById("hello")
let btn=document.querySelector('.button')
//retrieve the html tag hello 

hello.textContent="Goodbye to the morning session"

//changing the text and contnet of tags with js 
/* to change the text and content using js we use three itmes {
    textContent >>CHNAGES THE TEXT OF THE CONTENT ONLY
    innerText>>CHANGES THE TEXT ONLY BUT ALSO DOES INDENTATION
    innerHTML>>CHANGES THE CONTENT,ONDENT AND AS WELL CHANGES THE TAGS ENTIRELY {
        WITH INNERHTML you can ,create elements ,change existing elements 
    }

}
 */

  hello.innerHTML=`
      <div>
        <h1>hello there this is innerHtml</h1>
        <p>welcome to  <i>dom Manipulation</i> </p>

    </div>
`
/* creating elements with js >>to create elements with 
js we use the create element  method where we chain it with the document 
and the tag name that we want to create  

to add a selector in js we use the following 
to a class we use the classList or chain it with className
to is we chainit with id 


let paragraph=document.createElement("div")
*/
let container=document.createElement("div")

container.className="parent"

container.id="parId"

container.innerHTML=`

  <div class="child-one">
        <h1>hello there</h1>
        <p>welcome to  fullstack </p>

    </div>

`

//to add the created components we use the append or append child to the document 


document.body.append(container)

/* DEFINE AN ARRAY OF OBJECTS OF AN ECOMMERCE PLAFORM 
AND ACCESS AND RENDER THEM WITH VANiLLA JS USING THE FOREACH LOOP ,
innerhtml and style them using inline css in the innerhtml Component
 */


