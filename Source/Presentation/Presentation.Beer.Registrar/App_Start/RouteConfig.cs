using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Presentation.Beer.Registrar
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.Clear();
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("Static/");
            routes.IgnoreRoute("StaticViews/");
            routes.IgnoreRoute("node_modules/");
            routes.MapRoute(
                name: "DefaultApi",
                url: "Api/{controller}/{action}/{id}",
                defaults: new { controller = "Api", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Html5UrlsOverride",
                url: "{*.}",
                defaults: new { controller = "Home", action = "Index" }
            );
        }
    }
}
