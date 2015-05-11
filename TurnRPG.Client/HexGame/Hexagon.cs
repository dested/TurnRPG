using System.Html.Media.Graphics;
using TurnRPG.Client.Utils;

namespace TurnRPG.Client.HexGame
{
    public class Hexagon
    {

        public HexagonColor HexColor;
        public bool Enabled;

        public double Height
        {
            get { return height; }
            set
            {
                height = value;
                BuildPaths();
            }
        }


        private double height;
        private Path2D topPath;
        private Path2D leftDepthPath;
        private Path2D bottomDepthPath;
        private Path2D rightDepthPath;
        private double depthHeight
        {
            get
            {
                return (height + 1) * GridHexagonConstants.DepthHeight;
            }
        }


        public void BuildPaths()
        {

            topPath = new Path2D();
            foreach (var point in GridHexagonConstants.HexagonTopPolygon)
            {
                topPath.LineTo((point.X), (point.Y));
            }

            leftDepthPath = new Path2D();
            foreach (var point in GridHexagonConstants.HexagonDepthLeftPolygon(depthHeight))
            {
                leftDepthPath.LineTo((point.X), (point.Y));
            }

            bottomDepthPath = new Path2D();
            foreach (var point in GridHexagonConstants.HexagonDepthBottomPolygon(depthHeight))
            {
                bottomDepthPath.LineTo((point.X), (point.Y));
            }

            rightDepthPath = new Path2D();
            foreach (var point in GridHexagonConstants.HexagonDepthRightPolygon(depthHeight))
            {
                rightDepthPath.LineTo((point.X), (point.Y));
            }
        }


        public void DrawLeftDepth(CanvasRenderingContext2D context)
        {
            context.StrokeStyle = HexColor.Dark1;
            context.Stroke(leftDepthPath);
            context.FillStyle = HexColor.Dark1;
            context.Fill(leftDepthPath);
        }
        public void DrawBottomDepth(CanvasRenderingContext2D context)
        {
            context.StrokeStyle = HexColor.Dark2;
            context.Stroke(bottomDepthPath);
            context.FillStyle = HexColor.Dark2;
            context.Fill(bottomDepthPath);
        }
        public void DrawRightDepth(CanvasRenderingContext2D context)
        {
            context.StrokeStyle = HexColor.Dark3;
            context.Stroke(rightDepthPath);
            context.FillStyle = HexColor.Dark3;
            context.Fill(rightDepthPath);
        }

        public void DrawTop(CanvasRenderingContext2D context)
        {
                context.SetLineDash(new double[] {9});
            context.StrokeStyle = "black";
            context.Stroke(topPath);
            if (Enabled)
            {
                context.FillStyle = HexColor.Color;
                context.Fill(topPath);
            }
        }

        public void Draw(CanvasRenderingContext2D context)
        {

             

            context.Save();
            context.Translate(0, -(Height) * GridHexagonConstants.DepthHeight);
                DrawLeftDepth(context);
                DrawBottomDepth(context);
                DrawRightDepth(context);
            DrawTop(context);

            context.Restore();


        }
    }
    public class HexagonColor
    {
        public string Color;
        public string Dark1;
        public string Dark2;
        public string Dark3;

        public HexagonColor(string color)
        {
            Color = color;
            Dark1 = DrawingUtilities.ColorLuminance(color, -.3);
            Dark2 = DrawingUtilities.ColorLuminance(color, -.4);
            Dark3 = DrawingUtilities.ColorLuminance(color, -.5);


        }
    }

}