using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AutoMapper;
using Domain.Beer;
using Presentation.Beer.Registrar.Models.Api;
using Provider.Beer;

namespace Presentation.Beer.Registrar.Controllers
{
    public class ApiController : Controller
    {
        // GET: Api
        public ActionResult Index()
        {
            return this.Json(new {}, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public ActionResult SubmitEntry(SubmitterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return this.Json(new {Error= true, ErrorMessages= ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage).ToList()});
            }

            var submitterRepo = new SubmitterRepository();

            Submitter submitterToSave;

            if (model.SubmitterId != 0)
            {
                //Since we want to merge the new info into the connect entity so we can update not insert
                submitterToSave = submitterRepo.GetById(model.SubmitterId);
                submitterToSave = Mapper.Map<SubmitterViewModel, Submitter>(model, submitterToSave);
            }
            else
            {
                submitterToSave = Mapper.Map<Submitter>(model);
            }

            if (submitterToSave != null)
            {
                
            }


            return this.Json(new {});
        }
    }
}