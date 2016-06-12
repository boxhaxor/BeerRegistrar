

namespace Domain.Beer
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Submitter")]
    public class Submitter
    {
        [Key]
        public int SubmitterId { get; set; }
        public Guid SubmitterGuid { get; set; }

        public DateTime SubmittedDate { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string ClubName { get; set; }
        public string AhaNumber { get; set; }
        public string PhoneNumber { get; set; }

        public string Line1 { get; set; }
        public string Line2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }

        public virtual ICollection<BeerEntry> Beers { get; set; }
    }
}