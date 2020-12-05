function Watermark(input, event) {
    if (event.type == "focus") {
        input.setAttribute("rel", input.getAttribute("placeholder"));
        input.removeAttribute("placeholder");
    }
    if (event.type == "blur") {
        input.setAttribute("placeholder", input.getAttribute("rel"));
        input.removeAttribute("rel");
    }
}