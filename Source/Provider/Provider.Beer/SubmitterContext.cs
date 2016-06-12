

namespace Provider.Beer
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.ModelConfiguration.Conventions;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using Domain.Beer;

    public class SubmitterContext : DbContext
    {
        public SubmitterContext() : base("DefaultConnection")
        {
        }

        public DbSet<Submitter> Submitters { get; set; }
        public DbSet<BeerEntry> BeerEntries { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
        
    }
}
