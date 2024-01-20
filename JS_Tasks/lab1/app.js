function task_3(text, size) {
    var paragraph = document.getElementById("txt")
    
    paragraph.textContent = text;

    paragraph.style.fontSize = size + "px"

    document.body.appendChild(paragraph)
}

task_3("Hello World", "50")


function task_14(m, n) {
    let result = '';
  
    if (m <= n) {
      for (let i = m; i <= n; i++) {
        result += i + '<br>';
      }
    } else {
      for (let i = m; i >= n; i--) {
        result += i + '<br>';
      }
    }
  
    document.getElementById('numbers').innerHTML = result;
  }

task_14(7, 1);


