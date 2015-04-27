using System;
using System.Html;
using System.Runtime.CompilerServices;
using CommonWebLibraries;
using jQueryApi;
using TurnRPG.Client.Controllers;
using TurnRPG.Client.Directives;
using TurnRPG.Client.Filters;
using TurnRPG.Client.Scope.Controller;
using TurnRPG.Client.Services;
using TurnRPG.Client.Utils;
using ng;

namespace TurnRPG.Client
{
    public static class BuildAngular
    {
        private const string ScopeName = "$scope";
        private const string RootScopeName = "$rootScope";
        private const string CompileName = "$compile";
        private const string Http = "$http";
        private const string TemplateCache = "$templateCache";
        static BuildAngular()
        {
            jQuery.OnDocumentReady(Setup);
        }

        public static void Setup()
        {


            var stats = new XStats();
            Document.Body.AppendChild(stats.Element);


            var module = angular.Module("TurnRPG", new string[] {"ui.utils", "ui.bootstrap"})
                .Config(new object[] {"$httpProvider", new Action<dynamic>(buildHttpProvider)})
                .Controller(LevelController.Name, new object[] { ScopeName, new Func<LevelScope, object>((scope) => new LevelController(scope)) })
                .Service(CreateUIService.Name, new object[] { CompileName, RootScopeName, new Func<CompileService, IRootScopeService, object>((compileService, rootScopeService) => new CreateUIService(compileService, rootScopeService)) })
                .Directive(FancyListDirective.Name, new object[] { new Func<object>(() => new FancyListDirective()) })
                .Directive(FancyListIndexDirective.Name, new object[] {new Func<object>(() => new FancyListIndexDirective())})
                .Directive(FancyHorizontalListDirective.Name, new object[] {new Func<object>(() => new FancyHorizontalListDirective())})
                .Directive(FancyHorizontalListIndexDirective.Name, new object[] {new Func<object>(() => new FancyHorizontalListIndexDirective())})
                .Directive(DraggableDirective.Name, new object[] {new Func<object>(() => new DraggableDirective())})
                .Directive(FloatingWindowDirective.Name, new object[] {new Func<object>(() => new FloatingWindowDirective())})
                .Directive(ForNextDirective.Name, new object[] {new Func<object>(() => new ForNextDirective())})
                .Filter(RoundFilter.Name, new object[] {new Func<Func<object, object>>(() => new RoundFilter().Filter)})
                .Filter(SwitchFilter.Name, new object[] {new Func<Func<bool, object, object, object>>(() => new SwitchFilter().Filter)})
                .Run(new object[]
                     {
                         Http, TemplateCache, CreateUIService.Name, new Action<IHttpService, ITemplateCacheService, CreateUIService>(
                                                                        (http, templateCache, createUIService) =>
                                                                        {
                                                                            buildCache(http, templateCache);
                                                                            createUIService.Create(LevelController.View);
                                                                        })
                     });


            //            MinimizeController.Register(module);

            angular.Bootstrap(Window.Document, "TurnRPG");
        }

        private static void buildCache(IHttpService http, ITemplateCacheService templateCache)
        {
            string[] uis =
            {
            };
            for (int index = 0; index < uis.Length; index++)
            {
                var ui = string.Format("{1}partials/UIs/{0}.html", uis[index], Constants.ContentAddress);
                http.Get(ui, null).Success(a => templateCache.Put(ui, a));
            }
        }


        private static void buildHttpProvider(dynamic httpProvider)
        {
            httpProvider.defaults.useXDomain = true;
            Delete(httpProvider.defaults.headers.common["X-Requested-With"]);
        }

        [InlineCode("delete {o};")]
        private static void Delete(object o)
        {
        }
    }
}