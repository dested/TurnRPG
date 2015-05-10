using System;
using System.Collections.Generic;
using System.Html.Media.Graphics;
using TurnRPG.Client.Utils;

namespace TurnRPG.Client.HexGame
{
    public class HexBoard
    {
        public GridHexagon[] HexList;
        public Hexagon[,] grid;

        public void Init()
        {

            grid = new Hexagon[10, 10];
            for (var y = 0; y < 10; y++)
            {
                for (var x = 0; x < 10; x++)
                {
                    var hex = new Hexagon()
                    {
                        Color = Help.GetRandomColor(),
                        Enabled = Math.Random() * 100 > 60,
                        Height = 0
                    };
                    if (Math.Random() * 100 < 40)
                    {
                        hex.Height = 1;
                    }
                    if (Math.Random() * 100 < 20)
                    {
                        hex.Height = 2;
                    }
                    if (!hex.Enabled) hex.Height = 0;
//                    grid[y, x].Height = 0;
                        grid[y, x] = hex;
                }
            }


            BuildHexList();
        }

        public void ClickBoard(int clickX, int clickY)
        {
            GridHexagon lastClick = null;
            GridHexagon lastEmptyClick = null;

            foreach (var gridHexagon in HexList)
            {
                var x = (GridHexagonConstants.Width * 3 / 4) * gridHexagon.X;
                var y = gridHexagon.Y * GridHexagonConstants.Height + ((gridHexagon.X % 2 == 1) ? -GridHexagonConstants.Height / 2 : 0);

                y -= gridHexagon.Hexagon.Height * GridHexagonConstants.DepthHeight;

                if (DrawingUtilities.PointInPolygon(clickX - x, clickY - y, GridHexagonConstants.HexagonTopPolygon))
                {
                    if (!gridHexagon.Hexagon.Enabled)
                    {
                        lastEmptyClick = gridHexagon;
                    }
                    else
                    {
                        lastClick = gridHexagon;
                    }
                }
                if (DrawingUtilities.PointInPolygon(clickX - x, clickY - y, GridHexagonConstants.HexagonDepthLeftPolygon((gridHexagon.Hexagon.Height + 1) * GridHexagonConstants.DepthHeight)))
                {
                    if (!gridHexagon.Hexagon.Enabled)
                    {
                        lastEmptyClick = gridHexagon;
                    }
                    else
                    {
                        lastClick = gridHexagon;
                    }
                }
                if (DrawingUtilities.PointInPolygon(clickX - x, clickY - y, GridHexagonConstants.HexagonDepthBottomPolygon((gridHexagon.Hexagon.Height + 1) * GridHexagonConstants.DepthHeight)))
                {
                    if (!gridHexagon.Hexagon.Enabled)
                    {
                        lastEmptyClick = gridHexagon;
                    }
                    else
                    {
                        lastClick = gridHexagon;
                    }
                }
                if (DrawingUtilities.PointInPolygon(clickX - x, clickY - y, GridHexagonConstants.HexagonDepthRightPolygon((gridHexagon.Hexagon.Height + 1) * GridHexagonConstants.DepthHeight)))
                {
                    if (!gridHexagon.Hexagon.Enabled)
                    {
                        lastEmptyClick = gridHexagon;
                    }
                    else
                    {
                        lastClick = gridHexagon;
                    }
                }
            }

            if (lastClick != null)
            {
                lastClick.Click();
            }
            else if (lastEmptyClick != null)
            {
                lastEmptyClick.Click();
            }
        }


        private void BuildHexList()
        {

            var gridHexagons = gridToGridHexagons(grid);

            HexList = gridHexagons.OrderBy(m => m.Y * 1000 + (m.X % 2) * -200 + m.Hexagon.Height);

        }


        public void DrawBoard(CanvasRenderingContext2D context)
        {
            context.Save();


            context.LineWidth = 2;
            context.LineJoin = LineJoin.Round;
            context.LineCap = LineCap.Round;

            foreach (var gridHexagon in HexList)
            {
                drawHexagon(context, gridHexagon);
            }

            context.Restore();
        }

        private void drawHexagon(CanvasRenderingContext2D context, GridHexagon gridHexagon)
        {
            context.Save();

            var x = (GridHexagonConstants.Width * 3 / 4) * gridHexagon.X;
            var y = gridHexagon.Y * GridHexagonConstants.Height + ((gridHexagon.X % 2 == 1) ? -GridHexagonConstants.Height / 2 : 0);

            context.Translate((int)x, (int)y);
            gridHexagon.Draw(context);


            context.Restore();
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




    }
}