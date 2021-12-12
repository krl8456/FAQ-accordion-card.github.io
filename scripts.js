
function showAnswer(element) {
    const components = document.querySelectorAll(".paragraph");
    let paragraphAnswers = [];
    let paragraphTitles = [];
    let paragraphImages = [];
    const answer = element.querySelector(".answer");
    const title = element.querySelector(".title");
    const image = element.querySelector(".arrow");
    
    for (let index = 0; index < components.length; index++) { //looking for elements that are clicked
        paragraphAnswers[index] = components[index].querySelector(".answer"); //and hiding them while clicking on on
        paragraphTitles[index] = components[index].querySelector(".title"); //other element
        paragraphImages[index] = components[index].querySelector(".arrow");
        if(paragraphAnswers[index].style.display === "block" && paragraphAnswers[index] != answer) {
            resetStyle(paragraphAnswers[index], paragraphImages[index], paragraphTitles[index]);
        }
    }
    if(answer.style.display === "block") { //doing the same thing but for element which was clicked
        resetStyle(answer, image, title);
    }
    else {
        setStyle(answer, image, title);
    }
    
    
}
function setStyle(answer, image, title) {
    answer.style.display = "block";
    image.style.transform = "rotate(180deg)";
    title.style.fontFamily = "KumbhSans-Bold";
}

function resetStyle(answer, image, title) {
    answer.style.display = "none";
    image.style.transform = "";
    title.style.fontFamily = "KumbhSans-Regular";
}