$("#addTodo").click(function() {
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val(""); // Clear the input field after adding the todo
});