define(
    'client.walkway.gameBoard',
    [
        'utils.assetLoader',
        'utils.canvasUtils',
        'utils.clickManager',
        'common.walkway.gameBoard',
        'client.walkway.gameModel',

        'client.walkway.planes.overlaysPlane'
    ],
    function (assetLoader, canvasUtils, ClickManager, //
              GameBoard, GameModel,
              OverlaysPlane) {


        function ClientGameBoard(boardWidth, boardHeight, canvasWidth, canvasHeight) {

            this.gameModel = new GameModel(boardWidth, boardHeight, canvasWidth, canvasHeight);

            this.overlaysPlane = new OverlaysPlane(this);
            this.gameModel.clickManager = new ClickManager(this);
        }

        ClientGameBoard.prototype.init = function () {
            this.$super();
            var walkwayBoard = document.getElementById(this.gameModel.elementId);

            this.gameModel.clickManager.init();

            this.overlaysPlane.init();

            walkwayBoard.appendChild(this.overlaysPlane.plane.canvas);
            walkwayBoard.appendChild(this.gameModel.clickManager.element);
        };


        ClientGameBoard.prototype.render = function () {
            this.overlaysPlane.plane.canvas.width=this.overlaysPlane.plane.canvas.width;
            this.overlaysPlane.render();
        };

        ClientGameBoard.prototype.tick = function () {
            this.$super();
            this.overlaysPlane.tick();
        };

        return ClientGameBoard.extend(GameBoard);
    });

