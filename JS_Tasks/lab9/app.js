document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('container');
    var square = document.getElementById('square');

    var squarePosition = {
        top: 0,
        left: 0
    };

    function updateSquarePosition() {
        square.style.top = squarePosition.top + 'px';
        square.style.left = squarePosition.left + 'px';
    }

    document.addEventListener('keydown', function (event) {
        var step = 10;

        switch (event.key) {
            case 'ArrowUp':
                squarePosition.top = Math.max(squarePosition.top - step, 0);
                break;
            case 'ArrowDown':
                squarePosition.top = Math.min(squarePosition.top + step, container.clientHeight - square.clientHeight);
                break;
            case 'ArrowLeft':
                squarePosition.left = Math.max(squarePosition.left - step, 0);
                break;
            case 'ArrowRight':
                squarePosition.left = Math.min(squarePosition.left + step, container.clientWidth - square.clientWidth);
                break;
        }

        updateSquarePosition();
    });
});

function appendHtmlToObject(obj) {
    if (obj && obj.element && obj.html) {
        var element = document.getElementById(obj.element);

        if (element) {
            element.innerHTML += obj.html;
        } else {
            console.error("Element with ID '" + obj.element + "' not found.");
        }
    } else {
        console.error("Invalid object or missing properties.");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var myObject = {
        element: 'targetElement',
        html: '<p>This is appended HTML!</p>'
    };

    appendHtmlToObject(myObject);
});