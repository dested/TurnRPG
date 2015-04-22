define(
    'common.walkway.gameModel',
    [
    ],
    function () {
        function GameModel(boardWidth, boardHeight) {
            this.boardWidth = boardWidth;
            this.boardHeight = boardHeight;
        }

        return GameModel.extend(Object);
    }
);