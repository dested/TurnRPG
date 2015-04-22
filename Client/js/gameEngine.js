define(
    'client.gameEngine',
    [
        'common.extender',
        'utils.assetLoader',
        'client.walkway.gameBoard',
        'client.utils.stats',
        'client.utils.shims'
    ],
    function (_extender, assetLoader, GameBoard, stats, _shims) {


        function startGame() {
            document.getElementById('loading').parentNode.removeChild(document.getElementById('loading'));

            var boardWidth = 430;
            var boardHeight = 557;//todo: to object

            var gameBoard = new GameBoard(boardWidth, boardHeight * 2, boardWidth, boardHeight);
             gameBoard.init();

            setInterval(function () {
                gameBoard.tick();
            }, 1000 / 60);

            var draw = function () {
                window.requestAnimationFrame(draw);
                stats.begin();
                gameBoard.render();
                stats.end();
            };
            window.requestAnimationFrame(draw);

        }


        assetLoader.pushAsset('walkway.red', 'images/walkway-red.png');

        assetLoader.loadAssets(startGame);

    });
