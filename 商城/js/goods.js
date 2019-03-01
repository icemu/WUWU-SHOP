// JavaScript Document
 function change (id_) {
        var div = document.getElementById(id_);
        div.style.border="blue 1px solid";
        var divs = document.getElementsByTagName("div");
        for(var i=0;i<divs.length;i++){
            var div_ = divs[i];
            if(id_!=div_.id){
                div_.style.border="blue 0px solid";
            }
        }
    }
	/*改变所购商品的数量*/
function changeNum(numId,flag){/*numId表示对应商品数量的文本框ID，flag表示是增加还是减少商品数量*/
	var numId=document.getElementById(numId);
	if(flag=="minus"){/*减少商品数量*/
		if(numId.value<=1){
			alert("宝贝数量必须是大于0");
			return false;
			}
		else{
			numId.value=parseInt(numId.value)-1;
			productCount();
			}
		}
	else{/*flag为add，增加商品数量*/
		numId.value=parseInt(numId.value)+1;
		productCount();
		}
	}