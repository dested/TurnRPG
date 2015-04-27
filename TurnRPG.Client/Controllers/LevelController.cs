using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Html;
using System.Html.Media.Graphics;
using System.Text.RegularExpressions;
using TurnRPG.Client.Scope.Controller;
using TurnRPG.Client.Services;
using TurnRPG.Client.Utils;

namespace TurnRPG.Client.Controllers
{

    internal class LevelController
    {
        public const string Name = "LevelController";
        public const string View = "Level";
        private readonly LevelScope scope;
        public CanvasRenderingContext2D Context;
        public CanvasElement Canvas;

        double width;
        double height;
        double blockHeight;
        public Hexagon[,] grid;


        public LevelController(LevelScope scope)
        {
            this.scope = scope;
            this.scope.Model = new LevelScopeModel();
            this.scope.Callback = new LevelScopeCallback();

            width = 260;
            height = (Math.Sqrt(3) / 2 * width)*.55;
            blockHeight = height / 3;


            init();
            Window.SetInterval(drawBoard, 1000 / 60);
        }

        private ImageElement image;

        private void init()
        {
            image = new ImageElement();
            image.Src = "/images/sheepHex.png";

            Canvas = (CanvasElement)Document.GetElementById("levelCanvas");
            Canvas.Width = Document.Body.ClientWidth;
            Canvas.Height = Document.Body.ClientHeight;

            Context = (CanvasRenderingContext2D)Canvas.GetContext(CanvasContextId.Render2D);


            grid = new Hexagon[10, 10];
            for (var y = 0; y < 10; y++)
            {
                for (var x = 0; x < 10; x++)
                {
                    var randomColor = "#" + ((int)Math.Floor(Math.Random() * (8388607) + 8388607)).ToString(16);
                    grid[y, x] = new Hexagon()
                    {
                        Color = Help.GetRandomColor(),
                        Enabled = Math.Random() * 100 > 40,
                        Height = 0
                    };
                    if (Math.Random() * 100 < 10)
                    {
                        grid[y, x].Height = 1;
                    }
                    if (Math.Random() * 100 < 5)
                    {
                        grid[y, x].Height = 2;
                    }
                }

            }

        }

        public static double transformHeight(int y, double height)
        {
            return height;
        }

        public class Hexagon
        {
            public string Color;
            public bool Enabled;
            public double Height;
        }

        private void drawBoard()
        {
            Canvas.Width = Canvas.Width;
            Context.Save();

            
            var gridHexagons = gridToGridHexagons(grid);


            var hexs=gridHexagons.OrderBy(m => m.Y*1000 + (m.X%2)*-200 + m.Hexagon.Height);


            Context.Translate(200, 200);
            foreach (var gridHexagon in hexs)
            {
                drawHexagon(gridHexagon);
            } 

            Context.Restore();
        }

        private void drawHexagon(GridHexagon gridHexagon)
        {
            Context.Save();

            var x = (width*3/4)*gridHexagon.X;
            
            var myHeight = transformHeight(gridHexagon.Y,height);

            var y = gridHexagon.Y*height + ((gridHexagon.X % 2 == 1) ? -myHeight / 2 : 0);
            Context.LineWidth = 3;
            Context.Translate(x, y);
            drawBlockHeight(Context, gridHexagon);
            drawHex(Context, gridHexagon);


            Context.Restore();
        }


        public void drawHex(CanvasRenderingContext2D context, GridHexagon gh)
        {

            var hexagon = gh.Hexagon;

            if (!hexagon.Enabled) return;

            var myHeight = transformHeight(gh.Y, height);


            context.Save();
            context.BeginPath();
            context.Translate(0, -hexagon.Height * blockHeight);
        
            context.MoveTo(0, 0);
            context.Translate(width / 4, -myHeight / 2);
            context.LineTo(0, 0);
            context.Translate(width / 2, 0);
            context.LineTo(0, 0);
            context.Translate(width / 4, myHeight / 2);
            context.LineTo(0, 0);
            context.Translate(-width / 4, myHeight / 2);
            context.LineTo(0, 0);
            context.Translate(-width / 2, 0);
            context.LineTo(0, 0);
            context.Translate(-width / 4, -myHeight / 2);
            context.LineTo(0, 0);


//            context.Stroke();
//            context.Clip();
//            context.DrawImage(image, 0, -myHeight / 2);

            context.FillStyle = hexagon.Color;
         
            context.Fill();
            context.Restore();


        }

        private static void drawCircle(CanvasRenderingContext2D context)
        {
            context.BeginPath();
            context.Arc(0, 0, 5, 0, 2*Math.PI, false);
            context.FillStyle = "black";
            context.Fill();
            context.LineWidth = 5;
            context.Stroke();
        }


        public void drawBlockHeight(CanvasRenderingContext2D context, GridHexagon gh)
        {

            var hexagon = gh.Hexagon;

            if (!hexagon.Enabled) return;

            context.Save();

            context.Translate(0, -hexagon.Height * blockHeight);

            var myBlockHeight = (hexagon.Height + 1) * blockHeight;
            var myHeight = transformHeight(gh.Y, height);

            context.Save();
            context.BeginPath();

            context.MoveTo(0, 0);
            context.Translate(0, myBlockHeight);
            context.LineTo(0, 0);

            context.Translate(width / 4, myHeight / 2);
            context.LineTo(0, 0);

            context.Translate(0, -myBlockHeight);
            context.LineTo(0, 0);

            context.Translate(-width / 4, -myHeight / 2);
            context.LineTo(0, 0);
//            context.Stroke();
            context.FillStyle = ColorLuminance(hexagon.Color, -.3);
            context.Fill();
            context.Restore();


            context.Save();
            context.BeginPath();
            context.Translate(width / 4, myHeight / 2);

            context.MoveTo(0, 0);
            context.Translate(0, myBlockHeight);

            context.LineTo(0, 0);

            context.Translate(width / 2, 0);
            context.LineTo(0, 0);

            context.Translate(0, -myBlockHeight);
            context.LineTo(0, 0);

            context.Translate(-width / 2, 0);
            context.LineTo(0, 0);
//            context.Stroke();
            context.FillStyle = ColorLuminance(hexagon.Color, -.4);
            context.Fill();
            context.Restore();


            context.Save();
            context.BeginPath();
            context.Translate(width * 3 / 4, myHeight / 2);

            context.MoveTo(0, 0);
            context.Translate(0, myBlockHeight);

            context.LineTo(0, 0);

            context.Translate(width / 4, -myHeight / 2);
            context.LineTo(0, 0);

            context.Translate(0, -myBlockHeight);
            context.LineTo(0, 0);

            context.Translate(-width / 4, myHeight / 2);
            context.LineTo(0, 0);
//            context.Stroke();
            context.FillStyle = ColorLuminance(hexagon.Color, -.5);
            context.Fill();
            context.Restore();


            context.Restore();


        }


        public string ColorLuminance(string hex, double lum)
        {

            // validate hex string
            hex = hex.Replace(new Regex("[^0-9a-f]", "gi"), "");

            // convert to decimal and change luminosity
            var rgb = "#";
            for (var i = 0; i < 3; i++)
            {
                var c = int.Parse(hex.Substr(i * 2, 2), 16);
                var cs = ((int)(Math.Round(Math.Min(Math.Max(0, c + (c * lum)), 255)))).ToString(16);
                rgb += ("00" + cs).Substr(cs.Length);
            }

            return rgb;
        }

        private static List<GridHexagon> gridToGridHexagons(Hexagon[,] hexagons)
        {
            List<GridHexagon> gridHexagons = new List<GridHexagon>();

            for (var y = 0; y < hexagons.GetLength(0); y++)
            {
                for (var x = 0; x < hexagons.GetLength(1); x++)
                {
                    gridHexagons.Add(new GridHexagon() { X = x, Y = y, Hexagon = hexagons[y, x] });
                }
            }

            return gridHexagons;
        }

        public class GridHexagon
        {
            public int X;
            public int Y;
            public Hexagon Hexagon;
        }

    }
}
