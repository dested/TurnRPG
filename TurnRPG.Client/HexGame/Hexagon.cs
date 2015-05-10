using TurnRPG.Client.Utils;

namespace TurnRPG.Client.HexGame
{
    public class Hexagon
    {
        public HexagonColor HexColor;
        public bool Enabled;
        public double Height;
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