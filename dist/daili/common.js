var code;$(document).ready(function(){createCode();})
function createCode(){code="";var codeLength=4;var checkCode=document.getElementById("code_yz_12");var random=new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');for(var i=0;i<codeLength;i++){var index=Math.floor(Math.random()*36);code+=random[index];}
checkCode.value=code;document.getElementById("code_yz_12").value=code;}
function copyText()
{var Url2=document.getElementById("qy_str1");Url2.select();document.execCommand("Copy");alert("宸插鍒跺ソ锛屽彲璐寸矘銆�");}
function tijiao(){var qorderid=$("#qorderid").val();var ordernumber=$("#ordernumber").val();var imgcode=$("#imgcode").val();if(""==ordernumber){layer.alert("璇峰～鍐欐偍闇€瑕佺粦瀹氱殑浼氬憳璐﹀彿!");return false;}
if(""==imgcode){layer.alert("璇峰～鍐欓獙璇佺爜!");return false;}
if($("#imgcode").val().toUpperCase()!=$("#code_yz_12").val()){layer.alert("璇锋纭～鍐欓獙璇佺爜!");try{$$("imgcode").value="";$$("code_yz_12").click();$$("imgcode").focus();}catch(e){}
return false;}
$.ajax({url:'daili.ashx?ac=bangding',dataType:'json',cache:false,type:'POST',data:{ordernumber:ordernumber,qorderid:qorderid},success:function(obj){switch(obj.stat){case '0':layer.alert('鏈粦瀹�');break;case '1':layer.alert('缁戝畾鎴愬姛');break;case '2':alert('缁戝畾澶辫触,璇锋鏌ヤ細鍛樿处鍙锋槸鍚︽纭�');break;case '3':alert('璧勬枡鎻愪氦鎴愬姛,姝ｅ湪瀹℃牳');break;default:break}},error:function(XMLHttpRequest,textStatus,errorThrown){var x=1}})}
function queryBtn2(){$(".con1").hide();$(".con2").show();}
function queryBtn(){var _bonuscode=$("#querycode").val();if(_bonuscode==""){layer.alert("浠ｇ悊璐﹀彿涓嶈兘涓虹┖!");return false;}
queryPage(1);}
function showRemark(msg){layer.alert(msg);}
var pagesize=1;function queryPage(page){$.ajax({url:'daili.ashx?ac=daili',dataType:'json',cache:false,data:{querycode:$("#querycode").val()},type:'GET',success:function(obj){if(obj.count!=0){var sHtml1="";var x="";var ordernumber="";var deal=obj.deal;var status=obj.status;var is_edit=0;if(status==2){showRemark("浠ｇ悊璐﹀彿瀹℃牳澶辫触,鍘熷洜:"+obj.remark);return;}
if(deal==0){if(obj.ordernumber==""||obj.ordernumber=="null"||obj.ordernumber==null){ordernumber="璇风粦瀹氫細鍛樿处鍙�&nbsp;&nbsp;<a href='javascript:queryBtn2()' ><font color='green'>缁戝畾</font></a>";is_edit=1;}else{ordernumber=obj.ordernumber+"&nbsp;&nbsp;<font color='greed'>姝ｅ湪缁戝畾涓�...</font>";}}else if(deal==1){ordernumber=obj.ordernumber+"&nbsp;&nbsp;<font color='greed'>缁戝畾鎴愬姛</font>";}else if(deal==2){ordernumber=obj.ordernumber+"&nbsp;&nbsp;<font color='red'>缁戝畾澶辫触,璇锋鏌ヤ細鍛樿处鍙锋槸鍚︽纭�</font>&nbsp;&nbsp;<a href='javascript:queryBtn2()' ><font color='green'>閲嶆柊缁戝畾</font></a>";is_edit=1;}
$("#qorderid").val(obj.id);$("#qaccount").text(obj.account);$("#qordernumber").html(ordernumber);$("#qstatus").text(status==1?"瀹℃牳閫氳繃":"瀹℃牳澶辫触");$("#qstarttime").text(obj.starttime);$("#qy_str1").val(obj.y_str1);$(".con2").hide();$(".con1").show();layer.open({type:1,zIndex:100,title:false,area:['744px'],skin:'layui-layer-nobg',shade:0.7,closeBtn:true,shadeClose:true,content:$('#querycon')});}else{showRemark("浠ｇ悊璐﹀彿涓嶅瓨鍦�,璇峰厛娉ㄥ唽浠ｇ悊璐﹀彿!");}},error:function(XMLHttpRequest,textStatus,errorThrown){var x=1;}})
function Paging(pageNum,pageSize,totalCount,skipCount,fuctionName,currentStyleName,currentUseLink,preText,nextText,firstText,lastText){var returnValue="";var begin=1;var end=1;var totalpage=Math.floor(totalCount/pageSize);if(totalCount%pageSize>0){totalpage++;}
if(preText==null){firstText="prev";}
if(nextText==null){nextText="next";}
begin=pageNum-skipCount;end=pageNum+skipCount;if(begin<=0){end=end-begin+1;begin=1;}
if(end>totalpage){end=totalpage;}
for(count=begin;count<=end;count++){if(currentUseLink){if(count==pageNum){returnValue+="<a class=\""+currentStyleName+"\" href=\"javascript:void(0);\" onclick=\""+fuctionName+"("+count.toString()+");\">"+count.toString()+"</a> ";}else{returnValue+="<a href=\"javascript:void(0);\" onclick=\""+fuctionName+"("+count.toString()+");\">"+count.toString()+"</a> ";}}else{if(count==pageNum){returnValue+="<a href=\"javascript:void(0);\"   class=\""+currentStyleName+"\">"+count.toString()+"</a> ";}else{returnValue+="<a href=\"javascript:void(0);\" onclick=\""+fuctionName+"("+count.toString()+");\">"+count.toString()+"</a> ";}}}
if(pageNum-skipCount>1){returnValue=" ... "+returnValue;}
if(pageNum+skipCount<totalpage){returnValue=returnValue+" ... ";}
if(pageNum>1){returnValue="<a href=\"javascript:void(0);\" onclick=\""+fuctionName+"("+(pageNum-1).toString()+");\"> "+preText+"</a> "+returnValue;}
if(pageNum<totalpage){returnValue=returnValue+" <a href=\"javascript:void(0);\" onclick=\""+fuctionName+"("+(pageNum+1).toString()+");\">"+nextText+"</a>";}
if(firstText!=null){if(pageNum>1){returnValue="<a href=\"javascript:void(0);\" onclick=\""+fuctionName+"(1);\">"+firstText+"</a> "+returnValue;}}
if(lastText!=null){if(pageNum<totalpage){returnValue=returnValue+" "+" <a href=\"javascript:void(0);\" onclick=\""+fuctionName+"("+totalpage.toString()+");\">"+lastText+"</a>";}}
return returnValue;}}