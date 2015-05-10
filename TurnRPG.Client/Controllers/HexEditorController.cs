using System.Collections.Generic;
using System.Html;
using TurnRPG.Client.HexGame;
using TurnRPG.Client.Scope.Controller;
using TurnRPG.Client.Services;
using TurnRPG.Client.Utils;

namespace TurnRPG.Client.Controllers
{
    internal class HexEditorController : IController
    {
        public const string Name = "HexEditorController";
        public const string View = "HexEditor";
        private readonly HexEditorScope scope;

        public HexEditorController(HexEditorScope scope)
        {
            this.scope = scope;
            this.scope.Visible = true;
            this.scope.Model = new HexEditorScopeModel();
            this.scope.Callback = new HexEditorScopeCallback();
            this.scope.Callback.WindowClosed = () => { };
            //            this.scope.Callback.LoadLevel += loadLevelFn;

            this.scope.Model.Width = GridHexagonConstants.Width;
            this.scope.Model.DepthHeightSkew = GridHexagonConstants.DepthHeightSkew;
            this.scope.Model.HeightSkew = GridHexagonConstants.HeightSkew;
            this.scope.Watch("model.width", () =>
            {
                GridHexagonConstants.Width = this.scope.Model.Width;
            });

            this.scope.Watch("model.depthHeightSkew", () =>
            {
                GridHexagonConstants.DepthHeightSkew = this.scope.Model.DepthHeightSkew;
            });

            this.scope.Watch("model.heightSkew", () =>
            {
                GridHexagonConstants.HeightSkew = this.scope.Model.HeightSkew;
            });


        }
        /*
                private void loadLevelFn(LevelModel arg)
                {
                }
                 */

    }
}