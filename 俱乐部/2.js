var id;
$(document).ready(function(){
    $(".tabTitleUnHovered,.tabTitleHovered").hover(function(){
        id=$(this).attr("id");
    });

})

function tabPageControlHover(n)

{
    for (var i = 0; i < tabTitles.cells.length; i++)
    {
        tabTitles.cells[i].className = "tabTitleUnHovered";
    }
    tabTitles.cells[n].className = "tabTitleHovered";
}

function tabPageControlClick(n)

{
    var j=0;
    for (var i = 0; i < tabPagesContainer.tBodies.length; i++)
    {
        tabPagesContainer.tBodies[i].className = "tabPageUnSelected";
        while(j<1){
            var left1=500*(Number(id)-1);
            $(".slider").animate({left:left1},300);
            j++;
        }
    }
    tabPagesContainer.tBodies[n].className = "tabPageSelected";
}
function tabPageControlOut(n)

{
    for (var i = 0; i < tabTitles.cells.length; i++)
    {
        tabTitles.cells[i].className = "tabTitleUnHovered";
    }
    tabTitles.cells[n].className = "tabTitleUnHovered";
}
