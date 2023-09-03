$("i.fa-heart").click(changeClass);

function changeClass() {
    if($(this).hasClass('fa-thin')){
        $(this).removeClass("fa-thin").addClass("fa-solid");
    }
    else if($("i.fa-heart").hasClass('fa-solid')){
        $(this).removeClass("fa-solid").addClass("fa-thin");
    }

    
}

