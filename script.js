const player = (name, token) => {
    const getName = () => name;
    const getToken = () => token;

    return {
        getName,
        getToken,
    }
}

const gameboard = (() => {
    let board = ['', '', '', '', '', '', '', '', '',];

    const addToken = (index, token) => {
        board[index] = token;
    }

    const getBoard = () => board.slice()

    return {
        addToken,
        getBoard,
    }
})();

const gameController = (() => {
    const player1 = player('Konrad', 'x');
    const player2 = player('Michal', 'o');
    const combOfWin = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    let activePlayer = player1;

    const switchActivePlayer = () => {
        activePlayer = activePlayer === player1 ? player2 : player1;
    }

    const checkWin = () => {
        const board = gameboard.getBoard();
        return combOfWin.some((row) => {
            const [a, b, c] = row;
            if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                console.log(true);
                return true;
            }
            return false;
        });
    }

    const playRound = (index) => {
        gameboard.addToken(index, activePlayer.getToken());

        if (checkWin()) {
            console.log(`${activePlayer.getName()} win!`)
        } else {
            switchActivePlayer()
        }
    }

    return {
        playRound,
    }
})();
