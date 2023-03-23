// theme for body
function switchTheme(){
    const theme = document.getElementById('theme').value;
    document.getElementsByTagName("meta")[3].content=theme;
}

//define elemenet
const btn = document.getElementById("search-btn")
const result = document.getElementById('result')
const sound = document.getElementById('sound')

//btn click
btn.addEventListener('click',()=>{
    let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    let inpWord = document.getElementById('inp-word').value
    fetch(`${url}${inpWord}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        result.innerHTML=`
        <div class="word">
            <h3>${inpWord}</h3>

        </div>
        <div class="detail">
            <p>${data[0].meanings[0].partOfSpeech} ${data[0].phonetic}</p>
        </div>
        <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
            <br>
            ${data[0].meanings[0].definitions[1].definition}
        </p>
        <p class="word-example">
            ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;
        // sound.setAttribute("src",`https:${data[0].phonetics[0].audio}`)
    })
    .catch(()=>{
        result.innerHTML=`<h3 class="error">Couldn't Find The Word</h3>`
    })
})

function copyConten(){
    var copyText = document.getElementById("def-Mean");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
// function playsound(){
//     sound.play();
// }