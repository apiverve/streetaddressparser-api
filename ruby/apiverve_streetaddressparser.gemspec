# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "apiverve_streetaddressparser"
  spec.version       = "1.2.3"
  spec.authors       = ["APIVerve"]
  spec.email         = ["hello@apiverve.com"]

  spec.summary       = "Street Address Parser API - Ruby Client"
  spec.description   = "Street Address Parser is an address parsing API that breaks raw US street addresses into structured location components. Pass any single-line address string to extract the building number, street name, street type, city, state abbreviation, and postal code."
  spec.homepage      = "https://apiverve.com/marketplace/streetaddressparser?utm_source=ruby&utm_medium=referral&utm_content=homepage"
  spec.license       = "MIT"
  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/apiverve/streetaddressparser-API/tree/main/ruby"
  spec.metadata["changelog_uri"] = "https://apiverve.com/changelog"
  spec.metadata["documentation_uri"] = "https://docs.apiverve.com/ref/streetaddressparser"

  spec.files = Dir.glob("{lib}/**/*") + %w[README.md LICENSE]
  spec.require_paths = ["lib"]

  spec.add_dependency "faraday", ">= 1.0", "< 3.0"
  spec.add_dependency "faraday-multipart", "~> 1.0"
  spec.add_dependency "json", "~> 2.0"
end
