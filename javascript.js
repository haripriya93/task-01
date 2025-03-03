function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.icon');

    if (content.style.display === "block") {
        content.style.display = "none";
        icon.textContent = "➕"; // Change icon to plus
    } else {
        content.style.display = "block";
        icon.textContent = "➖"; // Change icon to minus
    }
}