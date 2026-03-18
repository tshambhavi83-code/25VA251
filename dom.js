        function show() {
            let name=document.getElementById("myName").value;
            document.getElementById("display").innerHTML=name;
            alert(name);
        }

        //dom on 11th march
        //colorChange on dbl click

        function colorChange() {
            document. getElementById('text').style.color="red";
        }

        //colorchange on mouseover
        //get the element by its id 
        const myElement = document.getElementById("text");

        //add event listener for mouseover
        myElement.addEventListener("mouseover" , function() {
            //change the color using the style property
            myElement.style.color = "blue";
        });
