/*웹페이지 */

$(function(){


	/*첫번째 웹페이지 */
	$(".webpage01").mouseenter(function(){

		$(".webpage01 img").stop().animate({marginTop:-885},2000);

	}).mouseleave(function(){

		$(".webpage01 img").stop().animate({marginTop:0},3000);
	});


	/*두번째 웹페이지 */
	$(".webpage02").mouseenter(function(){

		$(".webpage02 img").stop().animate({marginTop:-2390},3000);

	}).mouseleave(function(){

		$(".webpage02 img").stop().animate({marginTop:0},3000);
	});


	/*세번째 웹페이지 */
	$(".webpage03").mouseenter(function(){

		$(".webpage03 img").stop().animate({marginTop:-1720},3000);

	}).mouseleave(function(){

		$(".webpage03 img").stop().animate({marginTop:0},3000);
	});


	/*네번째 웹페이지 */
	$(".webpage04").mouseenter(function(){

		$(".webpage04 img").stop().animate({marginTop:-2450},4000);

	}).mouseleave(function(){

		$(".webpage04 img").stop().animate({marginTop:0},4000);
	});




});