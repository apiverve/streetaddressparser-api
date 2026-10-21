# Street Address Parser API - PHP Package

Street Address Parser is an address parsing API that breaks raw US street addresses into structured location components. Pass any single-line address string to extract the building number, street name, street type, city, state abbreviation, and postal code.

## Installation

Install via Composer:

```bash
composer require apiverve/streetaddressparser
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Streetaddressparser\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['address' => '1600 Amphitheatre Parkway, Mountain View, CA 90210']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Streetaddressparser\Client;
use APIVerve\Streetaddressparser\Exceptions\APIException;
use APIVerve\Streetaddressparser\Exceptions\ValidationException;

try {
    $response = $client->execute(['address' => '1600 Amphitheatre Parkway, Mountain View, CA 90210']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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
    }
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/streetaddressparser?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/streetaddressparser?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/streetaddressparser?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
