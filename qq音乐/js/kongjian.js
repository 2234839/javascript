gedan=["wukong","ZhuiMengChiZiXin"];
gedan_j=0;//当前播放记录
lnum=[0,1,2]//轮播图片记录
//控件类

//		音频播放控件
function bofang(){
	b1=	   document.getElementById("b1");
	audio1=document.getElementById("audio1");
	if(audio1.paused){
		b1.src="img/zanting.png";
		audio1.play();
	}
	else{
		audio1.pause();
		b1.src="img/bofang.png";
	}
}
function gedan_xuange(id){//歌单   选歌
	audio1=document.getElementById("audio1");
	audio1.src="music/"+id+".mp3";
	eval("lrc_geci=lrc_"+id+";");
	document.getElementById("audio1").play();
}
function qiege(i){//切歌
	gedan_j+=i;
	gedan_xuange(gedan[gedan_j]);
	document.getElementById("audio1").play();
}


function geci_xianshi(){//歌词开关
	if(document.getElementById("geci").style.visibility=="hidden"){
		document.getElementById("ci").style.color ="#31C27C";
		document.getElementById("geci").style.visibility ="visible";
	}
	else{
		document.getElementById("ci").style.color ="#000000";
		document.getElementById("geci").style.visibility ="hidden"}
	
}

function kuaijin(a)//快进
  {
  audio1.currentTime+=a;
  }

function jindu(){//进度条
	var l;
	l=380*(audio1.currentTime/audio1.duration)+"px"
	document.getElementById("jd_l").style.width=l;
	document.getElementById("jd_d").style.marginLeft=l;
	document.getElementById("jd_time").innerHTML=time_fen(~~audio1.currentTime,0)+"/"+time_fen(audio1.duration,0);
	
	var lrc_time=time_fen(~~(audio1.currentTime),0)
	if(lrc_time.length==3){
		lrc_time=lrc_time.replace(/:/,":0");
	}
		
	s1=lrc_geci.indexOf(lrc_time);
	s2=lrc_geci.indexOf("[",s1)-s1-8;
	if(s1!=-1)
		document.getElementById("geci").innerHTML=lrc_geci.substr(s1+8,s2);		
}
function time_fen(a,b){//十进制时间转为60进制
	if(a<60){
		if(a.length=1)
			a="0"+a;
		return b+":"+parseInt(a);
	}
	else{
		a-=60;
		b++;
		return time_fen(a,b);
	}
}


function getMousePos(e){//进度条点击事件
        var e = event || window.event;
        document.getElementById("audio1").currentTime=(e.clientX-348)/380*audio1.duration;
        jindu()
    } 
 
//		图文控件
function Tuwen(){
    this.i=0;
    this.id;
    this.div;
    this.sourceNode;
}
Tuwen.prototype={
    get:function(id){ 
    	sourceNode = document.getElementById(id);
    	this.id=id
    
    var clonedNode = sourceNode.cloneNode(true); // 克隆节点 
		clonedNode.setAttribute("id", id+"-" + this.i);
		this.i++;
		this.sourceNode=clonedNode;
    },
    url:function(url){
    	this.sourceNode.getElementsByTagName("img")[0].src=url;
    	},
    font:function(text1,text2){
    	this.sourceNode.getElementsByTagName("font")[0].innerHTML=text1;
    	this.sourceNode.getElementsByTagName("font")[1].innerHTML=text2;
    },
    soufang:function(){
    	this.sourceNode.style.transform="scale(0.5,0.5)";
    },
    charu:function(id){//插入
		document.getElementById(id).appendChild(this.sourceNode);
	}   
}


//轮播
function lunbo(){
	for (var i=1;i<4;i++) {
		lnum[i-1]=1+(lnum[i-1]+1)%5;
		var src="img/l"+lnum[i-1]+".png"
		var id="l"+i.toString()
		document.getElementById("l"+i).src=src;
	}
}

//  下载列表  

function jiemian(obj_id){
	var right=document.getElementById("right");
	right.innerHTML=obj_id;
}
