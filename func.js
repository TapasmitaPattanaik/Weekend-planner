$(document).ready(function () {
    // Add a new task when pressing Enter in the input field
    $('input[type="text"]').keypress(function (event) {
        if (event.which === 13) {
            var todoText = $(this).val();
            $(this).val("");
            $('ul').append('<li>' + todoText + '<span><i class="fa fa-trash"></i></span></li>');
        }
    });

    // Delete a task when clicking the delete icon
    $('ul').on('click', 'span', function (event) {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
        });
        event.stopPropagation();
    });

    // Mark a task as done/undone when clicking the task itself
    $('ul').on('click', 'li', function () {
        $(this).toggleClass('done');
    });

    // Add a new note input field
    $('#rowAdder').click(function () {
        var newRowAdd = '<div class="input-group m-3">' +
            '<div class="input-group-prepend">' +
            '<button class="btn btn-danger DeleteRow" type="button">' +
            '<i class="bi bi-trash"></i> Delete</button>' +
            '</div>' +
            '<input type="text" class="form-control m-input">' +
            '</div>';

        $('#newinput').append(newRowAdd);
    });

    // Delete a note input field
    $("body").on("click", ".DeleteRow", function () {
        $(this).closest(".input-group").remove();
    });
});
