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
            return this.Json(new SubmitterViewModel() {Beers = new List<BeerEntryViewModel>() {new BeerEntryViewModel()} }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult Another()
        {
            return this.Json(new {}, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public ActionResult SubmitEntry(SubmitterViewModel model)
        {
            SubmitEntryResultViewModel resultModel = new SubmitEntryResultViewModel();

            if (!ModelState.IsValid)
            {
                resultModel.Error = true;
                resultModel.ErrorMessages = ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage).ToList();
                return this.Json(resultModel);
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
                try
                {
                    submitterRepo.Save(submitterToSave);
                }
                catch (Exception e)
                {
                    resultModel.Error = true;
                    resultModel.ErrorMessages = new List<string>()
                    {
                        string.Format("Couldnt save your entry. {0}", e.Message)
                    };
                    return this.Json(resultModel);
                }
            }

            resultModel.Submitter = Mapper.Map<SubmitterViewModel>(submitterToSave);

            return this.Json(resultModel);
        }
    }
}