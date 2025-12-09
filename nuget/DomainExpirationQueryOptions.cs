using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.DomainExpiration
{
    /// <summary>
    /// Query options for the Domain Expiration API
    /// </summary>
    public class DomainExpirationQueryOptions
    {
        /// <summary>
        /// The domain to check the expiration date of
        /// Example: myspace.com
        /// </summary>
        [JsonProperty("domain")]
        public string Domain { get; set; }
    }
}
