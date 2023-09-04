let text = "25";
$("i.fa-heart").click(changeClass);

function changeClass() {
    if($(this).hasClass('fa-thin')){
        $(this).removeClass("fa-thin").addClass("fa-solid");
        document.$("this+ span").innerText = 25;
    }
    else if($("i.fa-heart").hasClass('fa-solid')){
        $(this).removeClass("fa-solid").addClass("fa-thin");
        document.getElementById("icon").innerText = 24;
    }

    
}
// document.getElementById("icon").innerText = text;

