using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Presentation.Beer.Registrar.Models.Api
{
    public class SubmitterViewModel
    {
        public int? id { get; set; }
        public string guid { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string email { get; set; }
        public string clubName { get; set; }
        public string ahaNumber { get; set; }
        public string phone { get; set; }

        [Required]
        public string line1 { get; set; }
        public string line2 { get; set; }
        [Required]
        public string city { get; set; }
        [Required]
        public string state { get; set; }
        [Required]
        public string zip { get; set; }

        [Required(ErrorMessage = "Must have beers to submit")]
        public IList<BeerEntryViewModel> beers { get; set; }
    }
}