define(
    'client.walkway.gameModel',
    [
        'common.walkway.gameModel'
    ],
    function (GameModel) {
        function ClientGameModel(boardWidth, boardHeight, canvasWidth, canvasHeight) {
            this.$super(boardWidth, boardHeight);
            this.elementId = 'walkwayGameBoard';
            this.clickManager = undefined;
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
        }


        return ClientGameModel.extend(GameModel);
    }
);