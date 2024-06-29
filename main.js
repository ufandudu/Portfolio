function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if (!$(email).val()) {
        alert("Email e diisi k(ak")
    } else if (!$(subject).val()) {
        alert("Subjek e kok raono mbak")
    } else if (!$(message).val()) {
        alert("Message nya jan lupa sayangg")
    } else {
        alert("well done sayang, Trrimakasi silakn melanjutkan")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}