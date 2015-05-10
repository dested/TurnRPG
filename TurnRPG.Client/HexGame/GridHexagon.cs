using System.Html.Media.Graphics;
using TurnRPG.Client.Utils;

namespace TurnRPG.Client.HexGame
{
    public class GridHexagon
    {
        public int X;
        public int Y;
        public Hexagon Hexagon;
         
        public void Draw(CanvasRenderingContext2D context)
        {
            if (!Hexagon.Enabled) return;

            context.Save();
            context.Translate(0, -Hexagon.Height * GridHexagonConstants.DepthHeight);

            Hexagon.DrawLeftDepth(context);
            Hexagon.DrawBottomDepth(context);
            Hexagon.DrawRightDepth(context);

            Hexagon.DrawTop(context);
            
            context.Restore();
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