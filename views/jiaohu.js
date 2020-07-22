
	function c_jiaohu(msg,icons,type=1) {
		if(type==1) {
			layer.msg(msg,{icon:icons})
		}else if(type==2) {
			layer.closeAll();
			layer.load(0,{time:2000})
		}
	}
