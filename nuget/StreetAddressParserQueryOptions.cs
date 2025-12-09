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
        /// Example: 1600 Amphitheatre Parkway, Mountain View, CA 90210
        /// </summary>
        [JsonProperty("address")]
        public string Address { get; set; }
    }
}
