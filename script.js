/* 
6 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function diagOpen(elemid) {
    $('#dialogue').dialog({
        autoOpen: false
    });

    //var one = document.getElementById(elemid).innerHTML;
    document.getElementById("pid2").innerHTML = '<object type="text/html" data="htmls/'+elemid+'.html" ></object>';  //+elemid+ is appended to the .html file since elemid contains the id of each element. 
    $('#dialogue').dialog('open');
    return false;
}


