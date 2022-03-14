const FAQ_GROUPS = [...document.getElementsByClassName("faq-group")]

FAQ_GROUPS.forEach(group => {
  group.addEventListener("click", () => {
    if (group.classList.contains("visible")) {
      group.classList.remove("visible")
    } else {
      if (document.querySelector(".visible")) {
        document.querySelector(".visible").classList.remove("visible")
      }
      group.classList.add("visible")
    }
  })
})