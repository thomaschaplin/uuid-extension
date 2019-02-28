function randomUUID() {
    document.getElementById('uuid').value = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

function copyText() {
    document.getElementById('uuid').select()
    document.execCommand('copy')
}

document.getElementById('generate').addEventListener('click', randomUUID)
document.getElementById('copy').addEventListener('click', copyText)

randomUUID()