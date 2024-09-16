document.querySelectorAll('.tag').forEach(tag => {
    const tagName = tag.tagName.toLowerCase()
    tag.style.borderColor = '#616161'

    if(!tag.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagName;
        tag.insertBefore(label, tag.childNodes[0])
    }
})