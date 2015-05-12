using System.Html.Media.Graphics;
using TurnRPG.Client.Utils;

namespace TurnRPG.Client.HexGame
{
    public class GridHexagon
    {
        public int X;
        public int Y;
        public int Z;
        public Hexagon Hexagon;
     

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