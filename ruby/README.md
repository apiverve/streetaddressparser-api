# Street Address Parser API - Ruby Gem

Street Address Parser is an address parsing API that breaks raw US street addresses into structured location components. Pass any single-line address string to extract the building number, directional, street name, street type, unit, city, state abbreviation, and postal code. Set standardize=true to get the address type (street, PO box or intersection) free, and on paid plans the mailing-format delivery line, last line and ZIP+4.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_streetaddressparser'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_streetaddressparser
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_streetaddressparser'

# Initialize the client
client = APIVerve::Streetaddressparser::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  address: "1600 Amphitheatre Parkway, Mountain View, CA 90210",
  standardize: true
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ address: "1600 Amphitheatre Parkway, Mountain View, CA 90210", standardize: true })
  puts response["data"]
rescue APIVerve::Streetaddressparser::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Streetaddressparser::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Streetaddressparser::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "address": "1600 Amphitheatre Parkway, Mountain View, CA 90210",
    "parsed": {
      "streetNumber": "1600",
      "streetType": "Pkwy",
      "streetAddress": "Amphitheatre",
      "cityName": "Mountain View",
      "stateName": "CA",
      "zipCode": "90210"
    },
    "standardized": {
      "addressType": "street",
      "deliveryLine1": "1600 Amphitheatre Pkwy",
      "lastLine": "Mountain View, CA 90210",
      "zipPlus4": null
    }
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/streetaddressparser?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/streetaddressparser?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/streetaddressparser?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
