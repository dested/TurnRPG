using System;
using System.Html;
using jQueryApi;

namespace TurnRPG.Client.Utils
{
    public static class Help
    {
        public static string[] colors = {"#FF0000", "#00FF00",  "#880088", "#888800", "#008888"};

        public static string getColor(string _start, string _end, int _percent)
        {
            if (_start == null) _start = "#FFFFFF";
            var hex2Dec = new Func<string, int>((_hex) => { return ( int.Parse(_hex, 16) ); });
            var dec2Hex = new Func<int, string>((_dec) => { return ( _dec < 16 ? "0" : "" ) + _dec.ToString(16); });

            _start = _start.Substring(1, 7);
            _end = _end.Substring(1, 7);

            var r1 = hex2Dec(_start.Substring(0, 2));
            var g1 = hex2Dec(_start.Substring(2, 2));
            var b1 = hex2Dec(_start.Substring(4, 2));

            var r2 = hex2Dec(_end.Substring(0, 2));
            var g2 = hex2Dec(_end.Substring(2, 2));
            var b2 = hex2Dec(_end.Substring(4, 2));

            var pc = _percent / 100.0;

            var r = (int) Math.Floor(r1 + ( pc * ( r2 - r1 ) ) + .5);
            var g = (int) Math.Floor(g1 + ( pc * ( g2 - g1 ) ) + .5);
            var b = (int) Math.Floor(b1 + ( pc * ( b2 - b1 ) ) + .5);

            return ( "#" + dec2Hex(r) + dec2Hex(g) + dec2Hex(b) );
        }

        public static Pointer GetCursorPosition(Event ev)
        {
            if (ev.Me().originalEvent && ev.Me().originalEvent.targetTouches && ev.Me().originalEvent.targetTouches.length > 0) ev = ev.Me().originalEvent.targetTouches[0];
            return new Pointer(0, 0, ev.Me().wheelDelta ? ev.Me().wheelDelta / 40 : ev.Me().detail ? -ev.Me().detail : 0, ev.Me().button== 2);
        }

        public static string GetRandomColor()
        {
            return colors[(int) ( Math.Random() * ( colors.Length ) )];
        }

        public static void Log(object _cont)
        {
            var console = jQuery.Select("#txtConsole");

            var text = console.GetValue();

            console.Value(text + _cont + "\n");

            console.ScrollTop(
                    console[0].ScrollHeight - console.GetHeight()
                    );
        }
    }
}