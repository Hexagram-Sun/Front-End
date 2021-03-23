$("#submit").on("click", function(){
    if ($(".tasksBoard ul").children().length == 0) {
        var tmpid_count = 0;
        $(".tasksBoard").show();
    }
    else var tmpid_count = parseInt($(".tasksBoard ul li:last-child button").attr("id").substring(5));
    var tmpid = "clear" + (tmpid_count + 1);
    var tmpcheckid = "check" + (tmpid_count + 1);
    $(".tasksBoard ul").append(`<li>
        <button class="delete" id="`+tmpid+`">×</button>
        <input type="checkbox" id="`+tmpcheckid+`" />
        <span>` + $("input[name=\"task\"]").val() + `</span>
    </li>`);
    $("#" + tmpid).on("click", function(){
        $(this).parent().remove();
        if ($(".tasksBoard ul").children().length == 0) $(".tasksBoard").hide();
    })
    $("#" + tmpcheckid).on("click", function(){
        if ($(this).is(":checked")) $(this).next().css("color", "red");
        else $(this).next().css("color", "black");
    })
    $("input[name=\"task\"]").val("");
});

$("#clear").on("click", function(){
    var tasks = $(".tasksBoard ul").children();
    for (var i = 0; i < tasks.length; i++) {
        task = $(tasks[i]);
        if (task.find("*[type=\"checkbox\"]").is(":checked")) task.remove();
    }
    if ($(".tasksBoard ul").children().length == 0) $(".tasksBoard").hide();
});
