window.onload=function (){
right_zhu=document.getElementById("right").innerHTML;
right_bendi=document.getElementById("bendi").innerHTML;
right_mv=document.getElementById("MV").innerHTML;

	setInterval(lunbo,2500);//设置轮播
	
	setInterval(jindu,1000);//刷新下面进度条
	
	gedan_xuange(gedan[gedan_j]);//默认播放歌曲
	
	var tuwen=new Tuwen();
	tuwen.get("tuwen");
	
	tuwen.url("img/shoubo.png");//基于 index.html 来定位路径
	tuwen.soufang();
	tuwen.font("sssssssssssssss","bbbbbbbbbbbbbbbbbbbbb");
	tuwen.charu("right");
	
}


