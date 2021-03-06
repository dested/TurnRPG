﻿using System;
using System.Runtime.CompilerServices;
using TurnRPG.Client.Services;

namespace TurnRPG.Client.Scope.Directive
{
    public class FloatingWindowBaseScope : ManagedScope
    {
        [IntrinsicProperty]
        public Action<SwingDirection, bool, Action> SwingAway { get; set; }

        [IntrinsicProperty]
        public Action<Action> SwingBack { get; set; }

        [IntrinsicProperty]
        public Action Minimize { get; set; }

        [IntrinsicProperty]
        public bool Visible { get; set; }

        [IntrinsicProperty]
        public bool Minimized { get; set; }

        [IntrinsicProperty]
        public Action OnClose { get; set; }

        [IntrinsicProperty]
        public Action OnReady { get; set; }

        [IntrinsicProperty]
        public Action DestroyWindow { get; set; }
    }
    public enum SwingDirection
    {
        TopLeft,
        Top,
        TopRight,
        Right,
        BottomRight,
        Bottom,
        BottomLeft,
        Left
    }
}
