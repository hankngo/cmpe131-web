let playerName = '';

export function joinGame() {
    playerName = document.getElementById('playerName').value;
    if (playerName.trim() !== '') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('game').style.display = 'block';
    }
}

export function getPlayerName() {
    return playerName;
}
