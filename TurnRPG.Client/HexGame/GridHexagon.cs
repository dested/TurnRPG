using System.Html.Media.Graphics;
using TurnRPG.Client.Utils;

namespace TurnRPG.Client.HexGame
{
    public class GridHexagon
    {
        public int X;
        public int Y;
        public Hexagon Hexagon;

        public void DrawHex(CanvasRenderingContext2D context)
        {

            if (!Hexagon.Enabled) return;


            context.Save();
            context.Translate(0, -Hexagon.Height * GridHexagonConstants.DepthHeight);
            DrawingUtilities.DrawShape(context, GridHexagonConstants.HexagonTopPolygon);
            context.FillStyle = Hexagon.Color;
            context.StrokeStyle = Hexagon.Color;
            context.Stroke();

            context.Fill();
            context.Restore();
        }

        public void DrawDepth(CanvasRenderingContext2D context)
        {


            if (!Hexagon.Enabled) return;

            var myDepthHeight = (Hexagon.Height + 1) * GridHexagonConstants.DepthHeight;

            context.Save();

            context.Translate(0, -Hexagon.Height * GridHexagonConstants.DepthHeight);

            context.Save();
            DrawingUtilities.DrawShape(context, GridHexagonConstants.HexagonDepthLeftPolygon(myDepthHeight));
            context.FillStyle = DrawingUtilities.ColorLuminance(Hexagon.Color, -.3);
            context.StrokeStyle = DrawingUtilities.ColorLuminance(Hexagon.Color, -.3);
            context.Stroke();
            context.Fill();
            context.Restore();



            context.Save();
            DrawingUtilities.DrawShape(context, GridHexagonConstants.HexagonDepthBottomPolygon(myDepthHeight));
            context.FillStyle = DrawingUtilities.ColorLuminance(Hexagon.Color, -.4);
            context.StrokeStyle = DrawingUtilities.ColorLuminance(Hexagon.Color, -.4);
            context.Stroke();
            context.Fill();
            context.Restore();




            context.Save();
            DrawingUtilities.DrawShape(context, GridHexagonConstants.HexagonDepthRightPolygon(myDepthHeight));
            context.FillStyle = DrawingUtilities.ColorLuminance(Hexagon.Color, -.5);
            context.StrokeStyle = DrawingUtilities.ColorLuminance(Hexagon.Color, -.5);
            context.Stroke();
            context.Fill();
            context.Restore();

            context.Restore();

        }

        public void Draw(CanvasRenderingContext2D context)
        {

            DrawDepth(context);
            DrawHex(context);

        }

        public void Click()
        {
            if (Hexagon.Enabled)
            {
                Hexagon.Height += 0.5;
            }
            else
            {
                Hexagon.Enabled = true;
            }
        }
    }
}