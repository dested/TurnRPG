using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Html.Media.Graphics;
using TurnRPG.Client.Utils;

namespace TurnRPG.Client.HexGame
{
    public class HexBoard
    {
        public List<GridHexagon> HexList=new List<GridHexagon>();

        public void Init()
        {
        }

        public Point xyToHex(int clickX, int clickY)
        {
            var size = GridHexagonConstants.Width/2;

            var q = clickX * 2.0 / 3.0 / size;
            var r = (-clickX / 3.0 + Math.Sqrt(3.0) / 3.0 * (clickY / GridHexagonConstants.HeightSkew)) / (size);

            var x = q;
            var y = -q - r;
            var z = r;

            var rx = Math.Round(x);
            var ry = Math.Round(y);
            var rz = Math.Round(z);


            var x_diff = Math.Abs(rx - x);
            var y_diff = Math.Abs(ry - y);
            var z_diff = Math.Abs(rz - z);


            if (x_diff > y_diff && x_diff > z_diff)
                rx = -ry - rz;
            else
                if (y_diff > z_diff)
                    ry = -rx - rz;
                else
                    rz = -rx - ry;

            x = rx;
            y = rz + (rx + (rx % 2))/2;

            return new Point(x,y);
        }
        public void ClickBoard(int clickX, int clickY)
        {
            GridHexagon lastClick = null;

            var ff = xyToHex(clickX, clickY);

            foreach (var gridHexagon in HexList)
            {
                var x = (GridHexagonConstants.Width * 3 / 4) * gridHexagon.X;
                var z = gridHexagon.Z * GridHexagonConstants.Height + ((gridHexagon.X % 2 == 1) ? -GridHexagonConstants.Height / 2 : 0);

                z -= gridHexagon.Hexagon.Height * GridHexagonConstants.DepthHeight;

                z += gridHexagon.Y*GridHexagonConstants.DepthHeight;

                if (DrawingUtilities.PointInPolygon(clickX - x, clickY - z, GridHexagonConstants.HexagonTopPolygon))
                {
                    lastClick = gridHexagon;
                }
                if (DrawingUtilities.PointInPolygon(clickX - x, clickY - z, GridHexagonConstants.HexagonDepthLeftPolygon((gridHexagon.Hexagon.Height + 1) * GridHexagonConstants.DepthHeight)))
                {
                    lastClick = gridHexagon;
                }
                if (DrawingUtilities.PointInPolygon(clickX - x, clickY - z, GridHexagonConstants.HexagonDepthBottomPolygon((gridHexagon.Hexagon.Height + 1) * GridHexagonConstants.DepthHeight)))
                {
                    lastClick = gridHexagon;
                }
                if (DrawingUtilities.PointInPolygon(clickX - x, clickY - z, GridHexagonConstants.HexagonDepthRightPolygon((gridHexagon.Hexagon.Height + 1) * GridHexagonConstants.DepthHeight)))
                {
                    lastClick = gridHexagon;
                }
            }

            if (lastClick != null)
            {
                lastClick.Click();
                ReorderHexList();
            }
            else
            {
                AddHexagon(new GridHexagon()
                {
                    X=(int) ff.X,
                    Y = 0,
                    Z=(int) ff.Y,
                    Hexagon = new Hexagon()
                    {
                        HexColor = new HexagonColor("#FF0000"),
                        Enabled = true,
                        Height = 0
                    }
                });
            }
        }

        private void AddHexagon(GridHexagon hexagon)
        {
            HexList.Add(hexagon);
            ReorderHexList();
        }


        private void ReorderHexList()
        {
            HexList = HexList.OrderBy(m => (m.Z-m.Y) * 1000 + (m.X % 2) * -200 + m.Hexagon.Height);
        }


        public void DrawBoard(CanvasRenderingContext2D context)
        {
            context.Save();
            context.LineWidth = 1;
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
            var z = gridHexagon.Z * GridHexagonConstants.Height + ((gridHexagon.X % 2 == 1) ? -GridHexagonConstants.Height / 2 : 0);

            z += -(gridHexagon.Hexagon.Height)*GridHexagonConstants.DepthHeight;

            z += gridHexagon.Y*GridHexagonConstants.DepthHeight;

            context.Translate(x, z);
            gridHexagon.Hexagon.Draw(context);


            context.Restore();
        }





    }
}