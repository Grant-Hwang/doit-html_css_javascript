var heading = document.querySelector('#heading');
    heading.onclick = function() {
      heading.style.color = "red";
    }

alert("안녕하세요")

var reply = confirm("정말 바꾸겠습니까?");

var name = prompt("이름을 입력하세요", "아무개");

document.write("<h1>어서오세요</h1>");
document.write("<b><big>" + name + "</big></b>님, 환영합니다.");
console.log(name + "님, 환영합니다.")
