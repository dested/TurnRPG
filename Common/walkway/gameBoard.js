define(
    'common.walkway.gameBoard',
    [
        'common.walkway.gameModel'
    ],
    function (GameModel) {


        function GameBoard(boardWidth, boardHeight) {
            this.gameModel = new GameModel(boardWidth, boardHeight);
        }

        GameBoard.prototype.init = function () {

        };
        GameBoard.prototype.tick = function () {

        };

        return GameBoard.extend(Object);
    });

