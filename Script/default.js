var x=1;
function xx(){
	if(x==1){
		 document.getElementById("menu1").style.visibility = "visible";
		 x=0;
		}
	else if(x==0){
		 document.getElementById("menu1").style.visibility = "hidden";
		 x=1;
		}

		}
var z=1;
function vv(){
	if(z==1){
		 document.getElementById("ggg").style.visibility = "visible";
		 z=0;
		}
	else if(z==0){
		 document.getElementById("ggg").style.visibility = "hidden";
		 z=1;
		}

}

function cc(x){
	switch(x){
		case 1: document.getElementById('idIframe').src = "../Data/27-11-2019/Catalog.txt"; 
				resizeIframe(this);
				break;
		case 2: document.getElementById('idIframe').src = "../Data/27-11-2019/Catalog.css";
				resizeIframe(this);
				break;
		case 3: document.getElementById('idIframe').src = "../Data/27-11-2019/Lesson.txt";
				resizeIframe(this);
				break;
		case 4: document.getElementById('idIframe').src = "../Data/Linux/Linux Semester II.txt";
				resizeIframe(this);
				break;
		case 5: document.getElementById('idIframe').src = "../Data/Linux/Samba file server.pdf";
				resizeIframe(this);
				break;
		case 6: document.getElementById('idIframe').src = "../Data/OOAD/28-11-2019/Decoration.txt";
				resizeIframe(this);
				break;
		case 7: document.getElementById('idIframe').src = "../Data/OOAD/28-11-2019/Form1.txt";
				resizeIframe(this);
				break;
		case 8: document.getElementById('idIframe').src = "../Data/OOAD/28-11-2019/OOAD 28-11-2019.pdf";
				resizeIframe(this);
				break;
	}

}

function resizeIframe(obj) {    
    var body = document.getElementById('idIframe').contentWindow.document.querySelector('body');
    body.style.fontSize = '20px';
    body.style.color = "#fff";
    body.style.backgroundColor = "#777a6c";
    body.style.border = "gray";
    body.style.fontFamily = "Kh Ang FreeHand";
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}
