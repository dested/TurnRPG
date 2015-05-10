using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using TurnRPG.Client.Utils;

namespace TurnRPG.Client.HexGame
{
    public static class GridHexagonConstants
    {
        static GridHexagonConstants()
        {
            Width = 260;
            HeightSkew = .55;
            DepthHeightSkew = .40;
            /*
                        Width = 130;
                        HeightSkew = 1;
                        DepthHeightSkew = 0;*/
        }

        [IntrinsicProperty]
        public static double HeightSkew { get; set; }

        [IntrinsicProperty]
        public static double DepthHeightSkew { get; set; }

        [IntrinsicProperty]
        public static double Width { get; set; }

        public static double Height
        {
            get { return (Math.Sqrt(3)/2*Width)*HeightSkew; }
        }

        public static double DepthHeight
        {
            get { return Height*DepthHeightSkew; }
        }

        public static Point[] HexagonTopPolygon
        {
            get
            {
                return new[]
                {
                    new Point(-Width/2, 0),
                    new Point(-Width/4, -Height/2),
                    new Point(Width/4, -Height/2),
                    new Point(Width/2, 0),
                    new Point(Width/4, Height/2),
                    new Point(-Width/4, Height/2),
                };
            }
        }

        public static Point[] HexagonDepthLeftPolygon(double depthHeight)
        {
            return new[]
            {
                new Point(-Width/2, 0),
                new Point(-Width/4, Height/2),
                new Point(-Width/4, Height/2 + depthHeight),
                new Point(-Width/2, depthHeight),
            };
        }

        public static Point[] HexagonDepthBottomPolygon(double depthHeight)
        {
            return new[]
            {
                new Point(-Width/4, Height/2),
                new Point(Width/4, Height/2),
                new Point(Width/4, Height/2 + depthHeight),
                new Point(-Width/4, Height/2 + depthHeight),
            };
        }

        public static Point[] HexagonDepthRightPolygon(double depthHeight)
        {
            return new[]
            {
                new Point(Width/4, Height/2),
                new Point(Width/2, 0),
                new Point(Width/2, depthHeight),
                new Point(Width/4, depthHeight + Height/2),
            };
        }
    }
}