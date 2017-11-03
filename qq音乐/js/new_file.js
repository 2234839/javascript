window.onload=function (){
right_zhu=document.getElementById("right").innerHTML;	document.getElementById("right").innerHTML="";
right_bendi=document.getElementById("bendi").innerHTML;	document.getElementById("bendi").innerHTML="";
right_mv=document.getElementById("MV").innerHTML;		document.getElementById("MV").innerHTML="";
right_个性电台=document.getElementById("个性电台").innerHTML;document.getElementById("个性电台").innerHTML="";
jiemian(right_zhu)
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


