window.onload = () => {

    const addOptions = async() => {
        let response = await fetch('https://ptsibackend.herokuapp.com/sitioContexto');
        let results = await response.json()

        var txtRelGeral = `<`
        var txtUnRelevo = `<`
        var txtLocImpl = `<`

        for (let i of results) {
            txtRelGeral += `option>${i.relevo_geral}</option>`
            txtUnRelevo += `option>${i.unidade_relevo}</option>`
            txtLocImpl += `option>${i.local_implantacao}</option>`
        }

        var relevo_geral = document.getElementById("relevo_geral").innerHTML = txtRelGeral;
        var un_relevo = document.getElementById("un_relevo").innerHTML = txtUnRelevo;
        var local_implantacao = document.getElementById("local_implantacao").innerHTML = txtLocImpl;
    }

    addOptions();
}
