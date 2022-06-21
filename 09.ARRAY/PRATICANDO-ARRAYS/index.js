const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]
// spaceship é o callback
let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    // Retornar cada [1] elemento de cada array(pelo .filter) > 9
    return spaceship[1] > 9
    // .map para retornar só a posição 0 do array (nome)
}).map(spaceship => {
    return spaceship[0]
})
// encontrar plataformas com engate pendente (posição 2 de cada array) / FindIndex retornará o índice e não a posição, como o find faz.
let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})
// Criando nova variável highlightedSpaceships que receberá a função hitchedSpaceships.map(spaceship => retornando nomes em caixa alta através da função .toUpperCase.
let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})
// JOIN vai unir elementos e separar por , 
let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataform com processo de engate: " + (ongoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

alert(message)