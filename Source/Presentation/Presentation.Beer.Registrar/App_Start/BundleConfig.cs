using System.Web;
using System.Web.Optimization;

namespace Presentation.Beer.Registrar
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new StyleBundle("~/Content/css").Include(
            //          "~/Content/bootstrap.css",
            //          "~/Content/site.css"));
            bundles.Add(new ScriptBundle("~/bundles/bootstrap")
                .Include("~/node_modules/jquery/dist/jquery.min.js")
                .Include("~/node_modules/components-bootstrap/js/bootstrap.min.js")
                .Include("~/node_modules/components-bootstrap/js/transition.js")
                .Include("~/node_modules/components-bootstrap/js/collapse.js")
                .Include("~/node_modules/components-bootstrap/js/modal.js")
                .Include("~/node_modules/components-bootstrap/js/dropdown.js")
                );
            bundles.Add(new ScriptBundle("~/bundles/styles").Include(
                      "~/Scripts/Styles/style.js"));


        }
    }
}
