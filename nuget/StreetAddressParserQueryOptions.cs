using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.StreetAddressParser
{
    /// <summary>
    /// Query options for the Street Address Parser API
    /// </summary>
    public class StreetAddressParserQueryOptions
    {
        /// <summary>
        /// The street address to parse
        /// </summary>
        [JsonProperty("address")]
        public string Address { get; set; }
    }
}
