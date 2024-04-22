function shakeChild(index) {
    var flowChildren = document.querySelectorAll('.flow-child');
    flowChildren.forEach(function(child, idx) {
        if (idx === index) {
            child.classList.add('shaking');
        } else {
            child.classList.remove('shaking');
        }
    });
}

function shakeLoop() {
    var index = 0;
    setInterval(function() {
        shakeChild(index);
        index = (index + 1) % 3;
    }, 3000); // Repeat the animation every 2 seconds
}

shakeLoop();