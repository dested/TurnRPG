using System.Diagnostics;
using System.Html;
using System.Html.Media.Graphics;
using TurnRPG.Client.HexGame;
using TurnRPG.Client.Scope.Controller;

namespace TurnRPG.Client.Controllers
{
    internal class LevelController
    {
        public const string Name = "LevelController";
        public const string View = "Level";
        private readonly LevelScope scope;
        public CanvasRenderingContext2D Context;
        public CanvasElement Canvas;


        public static HexBoard HexBoard;

        public LevelController(LevelScope scope)
        {
            this.scope = scope;
            this.scope.Model = new LevelScopeModel();
            this.scope.Callback = new LevelScopeCallback();

            HexBoard = new HexBoard();

            Init();
            

            Window.SetInterval(Draw, 1000 / 60);
        }

        private void Draw()
        {
            Canvas.Width = Canvas.Width;
            HexBoard.DrawBoard(Context);
        }


        private void Init()
        { 

            Canvas = (CanvasElement)Document.GetElementById("levelCanvas");
            Canvas.Width = Document.Body.ClientWidth;
            Canvas.Height = Document.Body.ClientHeight;

            Context = (CanvasRenderingContext2D)Canvas.GetContext(CanvasContextId.Render2D);
            Canvas.OnClick = (e) =>
            {
                var x = (int)((dynamic)e).offsetX;
                var y = (int)((dynamic)e).offsetY;
                HexBoard.ClickBoard(x, y);
            };
            HexBoard.Init();

        }




    }
}
