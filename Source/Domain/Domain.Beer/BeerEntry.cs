namespace Domain.Beer
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    [Table("BeerEntry")]
    public class BeerEntry
    {
        [Key]
        public int BeerEntryId { get; set; }

        public string Name { get; set; }
        public string Type { get; set; }
        public string SpecialIngredients { get; set; }
        public string Comments { get; set; }
        public string Recipe { get; set; }

    }
}
