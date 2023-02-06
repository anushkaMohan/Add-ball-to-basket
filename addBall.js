$(function(){
    var count=0;
    $("button").on("click",function(){
        $("#box").append('<span class="ball"></span>');
        var color=['red', 'blue', 'yellow', 'lightgrey','darkorchid', 'black', 'orange', 'deeppink','green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick' , 'crimson']
        const colNum=Math.floor((Math.random()*color.length)+0);
        const ballColor=color[colNum];
        var spans=$("span");
        const sp=spans.eq(count);
        count=count+1;
        sp.css({

                "background-color":ballColor
            });
        

    }) 
})
