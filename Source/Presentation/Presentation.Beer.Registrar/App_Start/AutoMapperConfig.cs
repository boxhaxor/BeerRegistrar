using AutoMapper;
using Domain.Beer;
using Owin;
using Presentation.Beer.Registrar.Models.Api;

namespace Presentation.Beer.Registrar
{
    public partial class Startup
    {
        public void ConfigureAutomapper(IAppBuilder app)
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Submitter, SubmitterViewModel>();
                cfg.CreateMap<SubmitterViewModel, Submitter>();

                cfg.CreateMap<BeerEntry, BeerEntryViewModel>();
                cfg.CreateMap<BeerEntryViewModel, BeerEntry>();
            });
        }
    }
}