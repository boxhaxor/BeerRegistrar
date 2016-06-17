using System;
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
                cfg.CreateMap<Submitter, SubmitterViewModel>()
                    .ForMember(dest => dest.id, opts => opts.MapFrom(x => x.SubmitterId))
                    .ForMember(dest => dest.guid, opts => opts.MapFrom(x => x.SubmitterGuid.ToString()))
                    //.ForMember(dest => dest.name, opts => opts.MapFrom(x => x.Name))
                    //.ForMember(dest => dest.email, opts => opts.MapFrom(x => x.Email))
                    .ForMember(dest => dest.phone, opts => opts.MapFrom(x => x.PhoneNumber))
                    //.ForMember(dest => dest.clubName, opts => opts.MapFrom(x => x.ClubName))
                    //.ForMember(dest => dest.ahaNumber, opts => opts.MapFrom(x => x.AhaNumber))
                    //.ForMember(dest => dest.line1, opts => opts.MapFrom(x => x.Line1))
                    //.ForMember(dest => dest.line2, opts => opts.MapFrom(x => x.Line2))
                    //.ForMember(dest => dest.city, opts => opts.MapFrom(x => x.City))
                    //.ForMember(dest => dest.state, opts => opts.MapFrom(x => x.State))
                    .ForMember(dest => dest.zip, opts => opts.MapFrom(x => x.ZipCode));
                cfg.CreateMap<SubmitterViewModel, Submitter>()
                    .ForMember(dest => dest.SubmitterId, opts => opts.MapFrom(x => x.id))
                    .ForMember(dest => dest.PhoneNumber, opts => opts.MapFrom(x => x.phone))
                    .ForMember(dest => dest.ZipCode, opts => opts.MapFrom(x => x.zip));

                cfg.CreateMap<BeerEntry, BeerEntryViewModel>()
                    .ForMember(dest => dest.id, opts => opts.MapFrom(x => x.BeerEntryId))
                    .ForMember(dest => dest.style, opts => opts.MapFrom(x => x.Type));

                cfg.CreateMap<BeerEntryViewModel, BeerEntry>()
                    .ForMember(dest => dest.BeerEntryId, opts => opts.MapFrom(x => x.id))
                    .ForMember(dest => dest.Type, opts => opts.MapFrom(x => x.style));

            });
        }
    }
}