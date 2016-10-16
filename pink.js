<script type="text/javascript">
var day;
function clockTW()
  {
      var i = new Date("1970-1-1 00:00:00");
      var startDate = new Date();
      var fix = startDate.getTimezoneOffset();
      i.setTime(startDate.getTime() + ((fix+8*60) * 60 * 1000));
      $("#clTW").text("台灣時間 "+ i.toLocaleString());
      setTimeout("clockTW()",1000);
      day = getDate();
  } 
clockTW();
function JPTablePrint()
{
    var quest =[
        {
            "image":"joijjojijoijojoijojoij",
        },
        {
            "image":"onooomomo",
        },
        {
            "image":"<img src='https://dl.dropboxusercontent.com/u/15604170/pinkpika_website/rtdblog/quest_icon/D/b/4.jpg'>",
        }
    ];
  var jpTable ="<table>";
  for(var i = 0 ; i < quest.length && i <= day - 17 ; i++){
    jpTable += ("<tr><td style='width:25%; marge:auto;'>" + quest[i].image + "</tr>" );
  }
  jpTable += ("</table>");
  document.getElementById("music").innerHTML = jpTable;
}
JPTablePrint();
</script>