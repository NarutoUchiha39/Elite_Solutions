const elements = document.querySelectorAll('.cards')
const hiddenElements =  new IntersectionObserver((entries)=>{
    console.log(entries)
    entries.forEach(
        entries=>{
            entries.target.classList.toggle("show",entries.isIntersecting)
        },
        {
            threshold:0.5,
        }
    )
})

elements.forEach(
    (entries)=>{
        hiddenElements.observe(entries)
    }
)
