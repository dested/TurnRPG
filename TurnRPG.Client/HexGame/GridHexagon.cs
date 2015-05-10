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

            context.FillStyle = Hexagon.HexColor.Color;
            context.StrokeStyle = Hexagon.HexColor.Color;
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

            DrawingUtilities.DrawShape(context, GridHexagonConstants.HexagonDepthLeftPolygon(myDepthHeight));
            context.FillStyle = Hexagon.HexColor.Dark1;
            context.StrokeStyle = Hexagon.HexColor.Dark1;
            context.Stroke();
            context.Fill( );



            DrawingUtilities.DrawShape(context, GridHexagonConstants.HexagonDepthBottomPolygon(myDepthHeight));
            context.FillStyle = Hexagon.HexColor.Dark2;
            context.StrokeStyle = Hexagon.HexColor.Dark2;
            context.Stroke();
            context.Fill();




            DrawingUtilities.DrawShape(context, GridHexagonConstants.HexagonDepthRightPolygon(myDepthHeight));
            context.FillStyle = Hexagon.HexColor.Dark3;
            context.StrokeStyle = Hexagon.HexColor.Dark3;
            context.Stroke();
            context.Fill();

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