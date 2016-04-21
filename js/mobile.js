var mobile = function (mobile) {
  
  mobile.shuffle = function(array) {
  if (array == null) return;
  var i = array.length, j, temp;
  if (i == 0) return array;
  while(--i) {
     j = Math.floor(Math.random()*(i+1));
     temp=array[i];
     array[i]=array[j];
     array[j]=temp;
  }
  return array;
  }

    mobile.swipe = function(obj) {
        console.log(obj);
        var distance = 10;
        var time = 100; // ms
        var mouseX;
        var mouseY;

        obj.addEventListener("mousedown", function(e) {
            console.log(e.clientX);
            var startX = e.clientX;
            var startY = e.clientY;

            // The OLD way of creating a function and removing it:
                //obj.addEventListener("click", doit);
                //function doit (e) {}
                //obj.removeEventListener("click" doit);

            // The NEW way of creating a function and removing it:
                //var a = obj.addEventListener("click", function(e) {});
                //obj.removeEventListener("click", a);

            var moveEvent = document.addEventListener("mousemove", getMouse);
            function getMouse(e) {
                mouseX = e.clientX; // constant position during the time when we swiping
                mouseY = e.clientY; // constant position during the time when we swiping
                console.log(mouseX); // after a certain time we should stop seeing this message, if not - our removeEventListener doesn't work properly
            };

            // we collect this eventListener("mousemove", ...) in a variable
            // because later we'll have to remove it and add another eventListener!
            var swipeTimeout = setTimeout(function() {
                // the thing at the beginning is startX
                // the thing at the end is startY
                var differenceX = mouseX - startX;
                var differenceY = mouseY - startY;
                document.removeEventListener("mousemove", getMouse);
                    console.log(differenceX, differenceY);

                var swipeX = 0;
                var swipeY = 0;
                if (Math.abs(differenceX) > Math.abs(differenceY)) {

                    if (differenceX <- distance) {
                        swipeX = -1;
                    }
                    if (differenceX > distance) {
                        swipeX = 1;
                    }
                } else {

                    if (differenceY <- distance) {
                        swipeX = -1;
                    }
                    if (differenceY > distance) {
                        swipeX = 1;
                    }
                }

                //now we want to despatch Event
                var e = new Event("swipe");
                e.swipeX = swipeX; // previously we determine the information for "swipeX", therefore we store it "in e.swipeX"
                e.swipeY = swipeY;
                obj.dispatchEvent(e);


            }, time);
        })
    }
    return mobile;

}(mobile || {})
