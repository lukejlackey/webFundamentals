function incLike(id) {
    element = document.querySelector(id)
    var likeCnt = parseInt(element.innerText)
    likeCnt ++
    element.innerText = likeCnt
    console.log("New like")
}