document.getElementById('aiGenerator').style.display = 'none';
    document.getElementById('intro').style.visibility = 'visible';

    function generate() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "https://www.omdbapi.com/?t=%22" + document.getElementById('movieTitle').value + "%22&apikey=f53a12f", true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(this.responseText);
                console.log(obj.Plot);
                if (obj.Plot == null) {
                    document.getElementById('movieError').style.visibility = "visible";
                } else {
                    document.getElementById('movieError').style.visibility = "hidden";
                    document.getElementById('load').style.visibility = "visible";

                    document.getElementById('intro').style.display = 'none';
                    document.getElementById('aiGenerator').style.display = 'block';
                    console.log(obj.Plot);
                    document.getElementById('plot').innerText = obj.Plot;
                    document.getElementById('prompt').innerText = "Prompt: '" + obj.Plot + "'"
                    document.getElementById('outputArea').innerText = "Generating story, please wait..."
                    document.getElementById('aiTitle').innerText = "An AI written story about " + obj.Title;
                    generateStory();
                }
            }
        };
    }


    function generateStory() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "https://gpt2-default-dstdu4u23a-uc.a.run.app/?top_k=40&length=100&temperature=1&prefix=" + document.getElementById('plot').value, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('load').style.visibility = "hidden";
                var obj = JSON.parse(this.responseText);
                console.log(obj);
                document.getElementById('outputArea').innerText = obj.text
            }
        };
    }




