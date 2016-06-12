using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Presentation.Beer.Registrar.Models.Api
{
    public class SubmitterViewModel
    {
        public int SubmitterId { get; set; }
        public string SubmitterGuid { get; set; }
        public DateTime SubmittedDate { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        public string ClubName { get; set; }
        public string AhaNumber { get; set; }
        public string PhoneNumber { get; set; }

        [Required]
        public string Line1 { get; set; }
        public string Line2 { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public string ZipCode { get; set; }

        [Required(ErrorMessage = "Must have beers to submit")]
        public IList<BeerEntryViewModel> Beers { get; set; }
    }
}