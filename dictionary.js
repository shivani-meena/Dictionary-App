const button = document.getElementById("button-search");

const input = document.getElementById("input-text");

const word = document.getElementById("word")

const box = document.getElementById("box")

button.onclick = function () {
    let fetchPromise = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`);
    fetchPromise.then((response) => {
        return response.json();
    }).then((data) => {

        word.innerHTML = "Word - " + input.value;
        box.innerHTML = '';

        data.forEach(function (object) {
            let meanings = object.meanings

            for (let items of meanings) {

                let speechStr = "-" + items.partOfSpeech;
                let wordStr = "<ul>"

                for (let elements of (items.definitions)) {
                    wordStr += `<li>${elements.definition}</li>
                    </br>`
                }

                wordStr += "</ul>"
                box.innerHTML += speechStr + "</br></br>" + wordStr
            }
        });
    });
};



