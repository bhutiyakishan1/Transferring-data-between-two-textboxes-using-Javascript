/**
 * Created by Kishan on 6/13/2017.
 */

var x,y,z;

var intervall;



    function goRight() {

        clearInterval(this.intervall);
        intervall=setInterval(function () {
            x = document.getElementById("n1").value;
            y = document.getElementById("n2").value;


            for (var i = 0; i < x.length; x++) {

                y = y + x.charAt(0);
                x = x.substr(1);

                document.getElementById("n1").value = x;
                document.getElementById("n2").value = y;

            }


        }, 1000);


    }


    function goLeft() {

        clearInterval(this.intervall);
        intervall=setInterval(function () {
            x = document.getElementById("n2").value;
            y = document.getElementById("n1").value;


            for (var i = 0; i < x.length; x++) {


                y = x.charAt(x.length-1)+y;
                x = x.slice(0,-1);


                document.getElementById("n2").value = x;
                document.getElementById("n1").value = y;
            }




        }, 1000);

        }

    function stopThere() {
        clearInterval(this.intervall);
    }