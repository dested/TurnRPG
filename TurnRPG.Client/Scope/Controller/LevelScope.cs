using System;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using TurnRPG.Client;
using TurnRPG.Client.Utils;

namespace TurnRPG.Client.Scope.Controller
{

    public class LevelScope:BaseScope
    {
        [IntrinsicProperty]
        public LevelScopeModel Model { get; set; }
        [IntrinsicProperty]
        public LevelScopeCallback Callback { get; set; }
    }

    [Serializable]
    public class LevelScopeCallback
    {
    }
    [Serializable]
    public class LevelScopeModel
    {
    }
}

[Serializable]
public class LevelModel
{ 
}