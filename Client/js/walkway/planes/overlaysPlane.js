define(
    'client.walkway.planes.overlaysPlane',
    [
        'utils.canvasUtils',
        'utils.assetLoader'
    ],
    function (canvasUtils, assetLoader) {
        function OverlaysPlane(gameBoard) {
            this.plane = undefined; //canvas plane
            this.gameBoard = gameBoard;

        }

        OverlaysPlane.prototype.init = function () {
            this.plane = canvasUtils.createCanvas(this.gameBoard.gameModel.canvasWidth, this.gameBoard.gameModel.canvasHeight);

            this.pullBoxOverlay = assetLoader.getAsset('walkway.red');
            this.pullBoxOverlayPosition = {x: 351, y: 0};
        };


        OverlaysPlane.prototype.tick = function () {

        };

        OverlaysPlane.prototype.render = function () {
            this.plane.clear();
            var context = this.plane.context;

            renderPullBox.call(this, context);
        };


        function renderPullBox(context) {


            context.save();
            context.translate(this.pullBoxOverlayPosition.x, this.pullBoxOverlayPosition.y);
            context.translate(-this.pullBoxOverlay.width / 2, 0);
            context.drawImage(this.pullBoxOverlay.image, 0, 0);
            context.restore();

        }


        return OverlaysPlane;
    }
);