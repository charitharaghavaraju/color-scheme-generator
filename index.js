const colorPicker = document.getElementById("color-picker")
const mode = document.getElementById("mode")
const getSchemeBtn = document.getElementById("get-scheme")
const palette = document.getElementById("palette")

getSchemeBtn.addEventListener('click', () => {
    
    palette.innerHTML = ""
    
    const hex = colorPicker.value.slice(1)

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode.value}&count=5`)
        .then(res => res.json())
        .then(data => {
            
            data.colors.forEach(color => {
                
                palette.innerHTML += `
                        <div class="color-column">
                            <div 
                                class="color-block"
                                style="background:${color.hex.value}">
                            </div>
                            <p class="hex-value">${color.hex.value}</p>
                        </div>
                `
            })
            
            palette.addEventListener("click", (e) => {
                if (e.target.classList.contains("hex-value")) {
                    navigator.clipboard.writeText(e.target.textContent)
                }
            })
            
        })
})

