using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Beer;

namespace Provider.Beer
{
    public class SubmitterRepository
    {
        public Submitter GetById(int submitterId)
        {
            using (var db = new SubmitterContext())
            {
                return db.Submitters.FirstOrDefault(x => x.SubmitterId == submitterId);
            }
        }

        public Submitter GetByGuid(Guid submitterGuid)
        {
            using (var db = new SubmitterContext())
            {
                return db.Submitters.FirstOrDefault(x => x.SubmitterGuid == submitterGuid);
            }
        }

        public Submitter Save(Submitter toSave)
        {
            if (toSave.SubmittedDate == default(DateTime))
            {
                toSave.SubmittedDate = DateTime.Now;
            }
            if (toSave.SubmitterGuid == Guid.Empty)
            {
                toSave.SubmitterGuid = Guid.NewGuid();
            }

            using (var db = new SubmitterContext())
            {
                db.Submitters.AddOrUpdate(toSave);
                db.SaveChanges();
            }
            return toSave;
        }
    }
}
