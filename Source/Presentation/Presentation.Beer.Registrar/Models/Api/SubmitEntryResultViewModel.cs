﻿using System.Collections.Generic;

namespace Presentation.Beer.Registrar.Models.Api
{
    public class SubmitEntryResultViewModel
    {
        public bool Error { get; set; }
        public List<string> ErrorMessages { get; set; }
        public SubmitterViewModel Submitter { get; set; }
    }
}