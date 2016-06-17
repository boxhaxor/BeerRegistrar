using System.ComponentModel.DataAnnotations;

namespace Presentation.Beer.Registrar.Models.Api
{
    public class BeerEntryViewModel
    {
        public int? id { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string style { get; set; }
        public string specialIngredients { get; set; }
        public string comments { get; set; }
        public string recipe { get; set; }
    }
}