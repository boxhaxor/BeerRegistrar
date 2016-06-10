using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Presentation.Beer.Registrar.Startup))]
namespace Presentation.Beer.Registrar
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
