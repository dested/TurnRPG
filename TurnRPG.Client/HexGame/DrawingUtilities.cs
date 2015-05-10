using System;
using System.Collections.Generic;
using System.Html.Media.Graphics;
using System.Text.RegularExpressions;
using TurnRPG.Client.Utils;

namespace TurnRPG.Client.HexGame
{
    public static class DrawingUtilities
    {
        public static void DrawCircle(CanvasRenderingContext2D context)
        {
            context.BeginPath();
            context.Arc(0, 0, 5, 0, 2 * Math.PI, false);
            context.FillStyle = "black";
            context.Fill();
            context.LineWidth = 5;
            context.Stroke();
        }


        public static void DrawShape(CanvasRenderingContext2D context, IEnumerable<Point> points)
        {

            context.BeginPath();
            foreach (var point in points)
            {
                context.LineTo((int)(point.X), (int)(point.Y));
            }

        }


        public static string ColorLuminance(string hex, double lum)
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

        public static bool PointInPolygon(double pointX, double pointY, Point[] polygon)
        {
            bool isInside = false;
            for (int i = 0, j = polygon.Length - 1; i < polygon.Length; j = i++)
            {
                if (((polygon[i].Y > pointY) != (polygon[j].Y > pointY)) &&
                (pointX < (polygon[j].X - polygon[i].X) * (pointY - polygon[i].Y) / (polygon[j].Y - polygon[i].Y) + polygon[i].X))
                {
                    isInside = !isInside;
                }
            }
            return isInside;

        }
    }
}