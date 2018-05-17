// import { builtinModules } from "module";

//click to add chat and clear field
const chatDisplay = ()=>{
$(document).ready(function(){
    $("#myButton").click(function() {
        let message= $("textarea").val();
         let old=$("#content").html()
        $("#content").html(old + "<p>" +message +"</p>");
        $("textarea").val("");

    })
})
//press enter to add chat and clear field
$("#input").keypress(function(e) {
    if(e.which === 13) {
        let message= $("textarea").val();
        let old=$("#content").html()
       $("#content").html(old + "<p>" +message +"</p>")
       $("#input").val("");
  }
});
}

module.exports=chatDisplay;