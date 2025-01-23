// [요구사항]
// 아래의 HTML 요소에서 id가 "myText"인 요소의 텍스트를 "Hello, DOM!"로 변경하세요.

// [HTML]
/*
<div id="container">
    <p id="myText">Replace this text.</p>
</div>
*/

// [코드]
// 여기에 코드를 작성하세요.
function changeDoc() {
const data = document.getElementById("myText");
console.log(data);
}

changeDoc();
// [테스트]
// 웹 페이지에서 "myText" 요소의 텍스트가 "Hello, DOM!"으로 바뀌었는지 확인하세요.