const thead_model = {
    all: `<tr class="t-row">
                        <td id="name">Nome</td>
                        <td class="subject" colspan="4">Matematica</td>
                        <td class="subject" colspan="4">Portugues</td>
                        <td class="subject" colspan="4">Quimica</td>
                        <td class="subject" colspan="4">Fisica</td>
                        <td class="subject" colspan="4">Biologia</td>
                        <td id="status">Status</td>
                    </tr>
                    <tr class="t-row">
                        <td></td>
                        <td class="first-two-months tm-math">1° Bi</td>
                        <td class="second-two-months tm-math">2° Bi</td>
                        <td class="third-two-months tm-math">3° Bi</td>
                        <td class="fourth-two-months tm-math">4° Bi</td>
                        <td class="first-two-months tm-portuguese">1° Bi</td>
                        <td class="second-two-months tm-portuguese">2° Bi</td>
                        <td class="third-two-months tm-portuguese">3° Bi</td>
                        <td class="fourth-two-months tm-portuguese">4° Bi</td>
                        <td class="first-two-months tm-chemisty">1° Bi</td>
                        <td class="second-two-months tm-chemisty">2° Bi</td>
                        <td class="third-two-months tm-chemisty">3° Bi</td>
                        <td class="fourth-two-months tm-chemisty">4° Bi</td>
                        <td class="first-two-months tm-physics">1° Bi</td>
                        <td class="second-two-months tm-physics">2° Bi</td>
                        <td class="third-two-months tm-physics">3° Bi</td>
                        <td class="fourth-two-months tm-physics">4° Bi</td>
                        <td class="first-two-months tm-biology">1° Bi</td>
                        <td class="second-two-months tm-biology">2° Bi</td>
                        <td class="third-two-months tm-biology">3° Bi</td>
                        <td class="fourth-two-months tm-biology">4° Bi</td>
                    </tr>`,

    math: `<tr class="t-row">
                <td id="name">Nome</td>
                <td class="subject" colspan="4">Matematica</td>
                <td id="status">Status</td>
            </tr>
            <tr class="t-row">
                <td></td>
                <td class="first-two-months tm-math">1° Bi</td>
                <td class="second-two-months tm-math">2° Bi</td>
                <td class="third-two-months tm-math">3° Bi</td>
                <td class="fourth-two-months tm-math">4° Bi</td>
            </tr>`,

    portuguese: `<tr class="t-row">
            <td id="name">Nome</td>
            <td class="subject" colspan="4">Portuguese</td>
            <td id="status">Status</td>
        </tr>
        <tr class="t-row">
            <td></td>
            <td class="first-two-months tm-portuguese">1° Bi</td>
            <td class="second-two-months tm-portuguese">2° Bi</td>
            <td class="third-two-months tm-portuguese">3° Bi</td>
            <td class="fourth-two-months tm-portuguese">4° Bi</td>
        </tr>`,

    chemistry: `<tr class="t-row">
            <td id="name">Nome</td>
            <td class="subject" colspan="4">Chemistry</td>
            <td id="status">Status</td>
        </tr>
        <tr class="t-row">
            <td></td>
            <td class="first-two-months tm-chemisty">1° Bi</td>
            <td class="second-two-months tm-chemisty">2° Bi</td>
            <td class="third-two-months tm-chemisty">3° Bi</td>
            <td class="fourth-two-months tm-chemisty">4° Bi</td>
        </tr>`,

    physics: `<tr class="t-row">
            <td id="name">Nome</td>
            <td class="subject" colspan="4">Physics</td>
            <td id="status">Status</td>
        </tr>
        <tr class="t-row">
            <td></td>
            <td class="first-two-months tm-physics">1° Bi</td>
            <td class="second-two-months tm-physics">2° Bi</td>
            <td class="third-two-months tm-physics">3° Bi</td>
            <td class="fourth-two-months tm-physics">4° Bi</td>
        </tr>`,
    
    biology: `<tr class="t-row">
            <td id="name">Nome</td>
            <td class="subject" colspan="4">Biology</td>
            <td id="status">Status</td>
        </tr>
        <tr class="t-row">
            <td></td>
            <td class="first-two-months tm-biology">1° Bi</td>
            <td class="second-two-months tm-biology">2° Bi</td>
            <td class="third-two-months tm-biology">3° Bi</td>
            <td class="fourth-two-months tm-biology">4° Bi</td>
        </tr>`
}

document.querySelector("#subject-select").addEventListener("change", event => {
    if(event.target.value === "-1") return

    document.querySelectorAll(".t-row").forEach(e => {
        console.log(e)
        e.remove()
    })
    
    document.querySelector("table").insertAdjacentHTML("afterbegin", thead_model[event.target.value])
})