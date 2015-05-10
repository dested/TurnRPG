using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using TurnRPG.Client.Scope.Directive;

namespace TurnRPG.Client.Scope.Controller
{
    public class HexEditorScope : FloatingWindowBaseScope
    {
        [IntrinsicProperty]
        public HexEditorScopeModel Model { get; set; }
        [IntrinsicProperty]
        public HexEditorScopeCallback Callback { get; set; }
    }

    [Serializable]
    public class HexEditorScopeCallback
    {
        public Action WindowClosed { get; set; }
    }
    [Serializable]
    public class HexEditorScopeModel
    {
        public double Width { get; set; }
        public double HeightSkew { get; set; }
        public double DepthHeightSkew { get; set; }

    }
}