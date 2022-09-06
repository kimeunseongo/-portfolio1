/*타이핑 효과*/

$(function(){

	const content = "Success is the sum of small efforts – repeated day in and day out.  ";
	const text = document.querySelector(".title");
	let i = 0;

	function typing(){
		if (i < content.length) {
		let txt = content.charAt(i);
		text.innerHTML += txt;
		i++;
		}
	}
	setInterval(typing, 100)



});