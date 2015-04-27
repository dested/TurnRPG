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


        var width = 120;
        var height = Math.sqrt(3) / 2 * width * .45;
        var blockHeight = height/4;
        var grid = [];
        for (var y = 0; y < 10; y++) {
            grid[y] = [];
            for (var x = 0; x < 10; x++) {
                grid[y][x] = {
                    color: '#' + Math.floor(Math.random() * (16777215 - 335443 * 2) + 335443 * 2).toString(16),
                    enabled: Math.random() * 100 > 50,
                    height:Math.random()*10
                };
            }

        }

        function renderPullBox(context) {
            /*
             context.save();
             context.translate(this.pullBoxOverlayPosition.x, this.pullBoxOverlayPosition.y);
             context.translate(-this.pullBoxOverlay.width / 2, 0);
             context.drawImage(this.pullBoxOverlay.image, 0, 0);
             context.restore();
             */


            var gridCoords=gridToCoords(grid);

            context.translate(50, 50);
            context.save();
            for (var y = 0; y < grid.length; y++) {
                context.translate(0, height);


                context.save();
                //context.translate(0, -height / 2);
                for (var x = 0; x < grid[y].length; x++) {
                    var g = grid[y][x];
                    context.translate(width * 3 / 4, (x % 2 == 1) ? -height / 2 : height / 2);
                    if (x % 2 == 1) {
                        drawBlockHeight(context, g);
                    }

                }
                context.restore();

                context.save();
                //context.translate(0, -height / 2);
                for (var x = 0; x < grid[y].length; x++) {
                    var g = grid[y][x];
                    context.translate(width * 3 / 4, (x % 2 == 1) ? -height / 2 : height / 2);
                    if (x % 2 == 0) {
                        drawBlockHeight(context, g);
                    }
                }
                context.restore();


            }
            context.restore();

            context.save();
            for (var y = 0; y < grid.length; y++) {
                context.translate(0, height);

                context.save();
                for (var x = 0; x < grid[y].length; x++) {
                    var g = grid[y][x];
                    context.translate(width * 3 / 4, (x % 2 == 1) ? -height / 2 : height / 2);
                    drawHex(context, g);
                }
                context.restore();
            }
            context.restore();


        }


        function drawHex(context, g) {

            if (!g.enabled)return;

            context.save();
            context.beginPath();

            context.translate(0, -g.height*blockHeight);


            context.moveTo(0, 0);
            context.translate(width / 4, -height / 2);
            context.lineTo(0, 0);
            context.translate(width / 2, 0);
            context.lineTo(0, 0);
            context.translate(width / 4, height / 2);
            context.lineTo(0, 0);
            context.translate(-width / 4, height / 2);
            context.lineTo(0, 0);
            context.translate(-width / 2, 0);
            context.lineTo(0, 0);
            context.translate(-width / 4, -height / 2);
            context.lineTo(0, 0);
            context.stroke();
            context.fillStyle = g.color;
            context.fill();
            context.restore();


        }


        function drawBlockHeight(context, g) {

            if (!g.enabled)return;

            context.save();

            context.translate(0, -g.height*blockHeight);

            var myBlockHeight=(g.height+1)*blockHeight;

            context.save();
            context.beginPath();

            context.moveTo(0, 0);
            context.translate(0, myBlockHeight);
            context.lineTo(0, 0);

            context.translate(width / 4, height / 2);
            context.lineTo(0, 0);

            context.translate(0, -myBlockHeight);
            context.lineTo(0, 0);

            context.translate(-width / 4, -height / 2);
            context.lineTo(0, 0);
            context.stroke();
            context.fillStyle = ColorLuminance(g.color, -.3);
            context.fill();
            context.restore();


            context.save();
            context.beginPath();
            context.translate(width / 4, height / 2);

            context.moveTo(0, 0);
            context.translate(0, myBlockHeight);

            context.lineTo(0, 0);

            context.translate(width / 2, 0);
            context.lineTo(0, 0);

            context.translate(0, -myBlockHeight);
            context.lineTo(0, 0);

            context.translate(-width / 2, 0);
            context.lineTo(0, 0);
            context.stroke();
            context.fillStyle = ColorLuminance(g.color, -.4);
            context.fill();
            context.restore();


            context.save();
            context.beginPath();
            context.translate(width * 3 / 4, height / 2);

            context.moveTo(0, 0);
            context.translate(0, myBlockHeight);

            context.lineTo(0, 0);

            context.translate(width / 4, -height / 2);
            context.lineTo(0, 0);

            context.translate(0, -myBlockHeight);
            context.lineTo(0, 0);

            context.translate(-width / 4, height / 2);
            context.lineTo(0, 0);
            context.stroke();
            context.fillStyle = ColorLuminance(g.color, -.5);
            context.fill();
            context.restore();


            context.restore();


        }

        return OverlaysPlane;
    }
);

function ColorLuminance(hex, lum) {

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }

    return rgb;
}

Math.radians = function (degrees) {
    return degrees * Math.PI / 180;
};
Math.degrees = function (radians) {
    return radians * 180 / Math.PI;
};