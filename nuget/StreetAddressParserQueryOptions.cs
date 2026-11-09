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

        /// <summary>
        /// Add a standardized block: the address type, plus on paid plans the delivery line, last line and ZIP+4
        /// </summary>
        [JsonProperty("standardize")]
        public bool? Standardize { get; set; }
    }
}
