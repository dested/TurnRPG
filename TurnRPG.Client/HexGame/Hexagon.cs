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
                topPath.LineTo((int)(point.X), (int)(point.Y));
            }

            leftDepthPath = new Path2D();
            foreach (var point in GridHexagonConstants.HexagonDepthLeftPolygon(depthHeight))
            {
                leftDepthPath.LineTo((int)(point.X), (int)(point.Y));
            }

            bottomDepthPath = new Path2D();
            foreach (var point in GridHexagonConstants.HexagonDepthBottomPolygon(depthHeight))
            {
                bottomDepthPath.LineTo((int)(point.X), (int)(point.Y));
            }

            rightDepthPath = new Path2D();
            foreach (var point in GridHexagonConstants.HexagonDepthRightPolygon(depthHeight))
            {
                rightDepthPath.LineTo((int)(point.X), (int)(point.Y));
            }

        }



        public void DrawLeftDepth(CanvasRenderingContext2D context)
        {

            context.FillStyle = HexColor.Dark1;
            context.StrokeStyle = HexColor.Dark1;
            context.Stroke(leftDepthPath);
            context.Fill(leftDepthPath);
        }
        public void DrawBottomDepth(CanvasRenderingContext2D context)
        {

            context.FillStyle = HexColor.Dark2;
            context.StrokeStyle = HexColor.Dark2;
            context.Stroke(bottomDepthPath);
            context.Fill(bottomDepthPath);
        }
        public void DrawRightDepth(CanvasRenderingContext2D context)
        {

            context.FillStyle = HexColor.Dark3;
            context.StrokeStyle = HexColor.Dark3;
            context.Stroke(rightDepthPath);
            context.Fill(rightDepthPath);
        }

        public void DrawTop(CanvasRenderingContext2D context)
        {



            context.FillStyle = HexColor.Color;
            context.StrokeStyle = HexColor.Color;
            context.Stroke(topPath);
            context.Fill(topPath);



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