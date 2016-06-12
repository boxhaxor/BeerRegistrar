using System.ComponentModel.DataAnnotations;

namespace Presentation.Beer.Registrar.Models.Api
{
    public class BeerEntryViewModel
    {
        public int BeerEntryId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Type { get; set; }
        public string SpecialIngredients { get; set; }
        public string Comments { get; set; }
        public string Recipe { get; set; }
    }
}